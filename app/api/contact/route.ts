import { NextResponse } from "next/server"
import { getDatabase } from "@/lib/mongodb"
import { z } from "zod"
import { Resend } from "resend"

// Validation schema using Zod (already in dependencies)
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be under 100 characters")
    .trim(),
  email: z
    .string()
    .email("Invalid email address")
    .max(255, "Email must be under 255 characters")
    .trim()
    .toLowerCase(),
  subject: z
    .string()
    .min(2, "Subject must be at least 2 characters")
    .max(200, "Subject must be under 200 characters")
    .trim(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be under 5000 characters")
    .trim(),
})

// Rate limiting: simple in-memory store (resets on cold start, good enough for portfolio)
const rateLimit = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX = 5 // 5 requests per minute

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimit.get(ip)

  if (!entry || now > entry.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return false
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true
  }

  entry.count++
  return false
}

export async function POST(request: Request) {
  try {
    // Rate limiting
    const forwarded = request.headers.get("x-forwarded-for")
    const ip = forwarded?.split(",")[0]?.trim() ?? "unknown"

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      )
    }

    // Parse and validate body
    const body = await request.json()
    const result = contactSchema.safeParse(body)

    if (!result.success) {
      const errors = result.error.flatten().fieldErrors
      return NextResponse.json(
        { error: "Validation failed", details: errors },
        { status: 400 }
      )
    }

    const { name, email, subject, message } = result.data

    // Insert into MongoDB
    const db = await getDatabase()
    const collection = db.collection("contacts")

    await collection.insertOne({
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
      read: false,
    })

    // Send email notification using Resend
    try {
      const resend = new Resend(process.env.RESEND_API_KEY)
      
      const { data, error } = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "endriszeynu173@gmail.com",
        subject: `Portfolio Contact: ${subject}`,
        replyTo: email,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      })
      
      if (error) {
        console.error("Resend error:", error)
      } else {
        console.log("Email sent successfully via Resend:", data)
      }
    } catch (emailError) {
      console.error("Email sending failed:", emailError)
      // Still return success since message is saved in DB
    }

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 201 }
    )
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    )
  }
}

// Optional: GET endpoint to check API health
export async function GET() {
  return NextResponse.json({ status: "Contact API is running" })
}
