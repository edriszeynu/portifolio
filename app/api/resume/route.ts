import { NextResponse } from "next/server"
import { jsPDF } from "jspdf"

export async function GET() {
  try {
    const doc = new jsPDF({ unit: "mm", format: "a4" })
    const pageWidth = doc.internal.pageSize.getWidth()
    const margin = 20
    const contentWidth = pageWidth - margin * 2
    let y = 20

    const addNewPageIfNeeded = (neededSpace: number) => {
      if (y + neededSpace > 270) {
        doc.addPage()
        y = 20
      }
    }

    // ---- Header ----
    doc.setFillColor(26, 35, 50)
    doc.rect(0, 0, pageWidth, 45, "F")

    doc.setTextColor(255, 255, 255)
    doc.setFontSize(24)
    doc.setFont("helvetica", "bold")
    doc.text("Endris Zeynu Mohammed", margin, 18)

    doc.setFontSize(12)
    doc.setFont("helvetica", "normal")
    doc.setTextColor(100, 210, 185)
    doc.text("Full-Stack Web Developer", margin, 26)

    doc.setFontSize(9)
    doc.setTextColor(180, 195, 210)
    doc.text(
      "Ethiopia  |  endris@email.com  |  github.com/endris  |  linkedin.com/in/endris",
      margin,
      34
    )
    doc.text("Available for Remote Work", margin, 40)

    y = 55

    // ---- Professional Summary ----
    doc.setTextColor(100, 210, 185)
    doc.setFontSize(13)
    doc.setFont("helvetica", "bold")
    doc.text("PROFESSIONAL SUMMARY", margin, y)
    y += 2
    doc.setDrawColor(100, 210, 185)
    doc.setLineWidth(0.5)
    doc.line(margin, y, margin + contentWidth, y)
    y += 6

    doc.setTextColor(50, 50, 50)
    doc.setFontSize(9.5)
    doc.setFont("helvetica", "normal")
    const summary =
      "Full-stack web developer specializing in building modern, responsive, and high-performance web applications using the MERN stack (MongoDB, Express.js, React, Node.js). Experienced in designing clean user interfaces backed by scalable and secure backend systems. Passionate about writing maintainable code and delivering real value to users and businesses."
    const summaryLines = doc.splitTextToSize(summary, contentWidth)
    doc.text(summaryLines, margin, y)
    y += summaryLines.length * 4.5 + 6

    // ---- Skills ----
    addNewPageIfNeeded(40)
    doc.setTextColor(100, 210, 185)
    doc.setFontSize(13)
    doc.setFont("helvetica", "bold")
    doc.text("TECHNICAL SKILLS", margin, y)
    y += 2
    doc.line(margin, y, margin + contentWidth, y)
    y += 6

    const skills = [
      { category: "Frontend", items: "React, Next.js, HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), TypeScript" },
      { category: "Backend", items: "Node.js, Express.js, REST APIs, JWT Authentication" },
      { category: "Database", items: "MongoDB, Mongoose, MySQL" },
      { category: "Tools", items: "Git, GitHub, VS Code, Postman, Vercel, Render, Figma" },
    ]

    doc.setFontSize(9.5)
    skills.forEach((skill) => {
      addNewPageIfNeeded(10)
      doc.setTextColor(50, 50, 50)
      doc.setFont("helvetica", "bold")
      doc.text(`${skill.category}:`, margin, y)
      doc.setFont("helvetica", "normal")
      doc.text(skill.items, margin + 25, y)
      y += 5.5
    })
    y += 4

    // ---- Experience ----
    addNewPageIfNeeded(30)
    doc.setTextColor(100, 210, 185)
    doc.setFontSize(13)
    doc.setFont("helvetica", "bold")
    doc.text("WORK EXPERIENCE", margin, y)
    y += 2
    doc.line(margin, y, margin + contentWidth, y)
    y += 6

    const experiences = [
      {
        role: "Full-Stack Web Developer",
        company: "Freelance | Remote",
        period: "2023 - Present",
        points: [
          "Designed and developed 5+ production-ready web applications for clients",
          "Built secure REST APIs with JWT authentication and role-based access control",
          "Implemented e-commerce platforms, school management systems, and food delivery apps",
          "Optimized database queries reducing average page load time by 40%",
          "Deployed applications on Vercel and Render with CI/CD pipelines",
        ],
      },
      {
        role: "Frontend Developer",
        company: "University Projects | Ethiopia",
        period: "2022 - 2023",
        points: [
          "Led frontend development for university capstone projects using React and Tailwind CSS",
          "Collaborated with teams of 4-5 developers using Git version control",
          "Created responsive user interfaces integrated with backend REST APIs",
          "Presented final projects to faculty and industry evaluation panels",
        ],
      },
    ]

    experiences.forEach((exp) => {
      addNewPageIfNeeded(35)
      doc.setTextColor(50, 50, 50)
      doc.setFontSize(10.5)
      doc.setFont("helvetica", "bold")
      doc.text(exp.role, margin, y)

      doc.setFontSize(9)
      doc.setFont("helvetica", "normal")
      doc.setTextColor(120, 120, 120)
      doc.text(exp.period, pageWidth - margin, y, { align: "right" })
      y += 4.5

      doc.setTextColor(100, 210, 185)
      doc.setFontSize(9)
      doc.text(exp.company, margin, y)
      y += 5

      doc.setTextColor(70, 70, 70)
      doc.setFontSize(9)
      exp.points.forEach((point) => {
        addNewPageIfNeeded(8)
        const bulletLines = doc.splitTextToSize(point, contentWidth - 6)
        doc.text(`\u2022`, margin + 2, y)
        doc.text(bulletLines, margin + 6, y)
        y += bulletLines.length * 4 + 1.5
      })
      y += 4
    })

    // ---- Education ----
    addNewPageIfNeeded(30)
    doc.setTextColor(100, 210, 185)
    doc.setFontSize(13)
    doc.setFont("helvetica", "bold")
    doc.text("EDUCATION", margin, y)
    y += 2
    doc.line(margin, y, margin + contentWidth, y)
    y += 6

    doc.setTextColor(50, 50, 50)
    doc.setFontSize(10.5)
    doc.setFont("helvetica", "bold")
    doc.text("BSc in Computer Science", margin, y)
    doc.setFontSize(9)
    doc.setFont("helvetica", "normal")
    doc.setTextColor(120, 120, 120)
    doc.text("2020 - 2024", pageWidth - margin, y, { align: "right" })
    y += 4.5

    doc.setTextColor(100, 210, 185)
    doc.setFontSize(9)
    doc.text("Wollo University, Ethiopia", margin, y)
    y += 5

    doc.setTextColor(70, 70, 70)
    doc.setFontSize(9)
    const eduDesc =
      "Focused on software engineering, data structures, algorithms, and full-stack web development. Graduated with distinction."
    const eduLines = doc.splitTextToSize(eduDesc, contentWidth)
    doc.text(eduLines, margin, y)
    y += eduLines.length * 4 + 8

    // ---- Certifications ----
    addNewPageIfNeeded(30)
    doc.setTextColor(100, 210, 185)
    doc.setFontSize(13)
    doc.setFont("helvetica", "bold")
    doc.text("CERTIFICATIONS", margin, y)
    y += 2
    doc.line(margin, y, margin + contentWidth, y)
    y += 6

    const certs = [
      "Full-Stack Web Development - Udemy (2023)",
      "React - The Complete Guide - Udemy (2023)",
      "Node.js, Express & MongoDB Bootcamp - Udemy (2023)",
      "Responsive Web Design - freeCodeCamp (2022)",
    ]

    doc.setTextColor(70, 70, 70)
    doc.setFontSize(9)
    certs.forEach((cert) => {
      addNewPageIfNeeded(8)
      doc.text(`\u2022  ${cert}`, margin + 2, y)
      y += 5
    })
    y += 6

    // ---- Projects ----
    addNewPageIfNeeded(30)
    doc.setTextColor(100, 210, 185)
    doc.setFontSize(13)
    doc.setFont("helvetica", "bold")
    doc.text("KEY PROJECTS", margin, y)
    y += 2
    doc.line(margin, y, margin + contentWidth, y)
    y += 6

    const projects = [
      {
        name: "E-Commerce Platform",
        tech: "React, Node.js, MongoDB, Stripe",
        desc: "Full-featured online store with product management, cart, checkout, and payment processing.",
      },
      {
        name: "Food Delivery App",
        tech: "React, Express.js, MongoDB",
        desc: "Real-time food ordering system with restaurant listings, order tracking, and delivery management.",
      },
      {
        name: "School Management System",
        tech: "React, Node.js, MongoDB",
        desc: "Comprehensive platform for managing student records, attendance, grades, and class schedules.",
      },
      {
        name: "Online Bookstore",
        tech: "React, Express.js, MongoDB",
        desc: "Digital bookstore with search, filtering, user reviews, and secure checkout.",
      },
      {
        name: "Coffee Shop Website",
        tech: "React, Tailwind CSS, Node.js",
        desc: "Modern responsive website for a coffee shop with menu display and online ordering.",
      },
    ]

    doc.setFontSize(9)
    projects.forEach((proj) => {
      addNewPageIfNeeded(18)
      doc.setTextColor(50, 50, 50)
      doc.setFont("helvetica", "bold")
      doc.text(proj.name, margin, y)
      doc.setFont("helvetica", "normal")
      doc.setTextColor(100, 210, 185)
      doc.text(`  [${proj.tech}]`, margin + doc.getTextWidth(proj.name), y)
      y += 4
      doc.setTextColor(70, 70, 70)
      const projLines = doc.splitTextToSize(proj.desc, contentWidth)
      doc.text(projLines, margin, y)
      y += projLines.length * 4 + 4
    })

    // ---- Footer ----
    const pageCount = doc.getNumberOfPages()
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i)
      doc.setFontSize(8)
      doc.setTextColor(160, 160, 160)
      doc.text(
        `Endris Zeynu Mohammed - CV | Page ${i} of ${pageCount}`,
        pageWidth / 2,
        287,
        { align: "center" }
      )
    }

    const pdfBuffer = Buffer.from(doc.output("arraybuffer"))

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="Endris_Zeynu_Mohammed_CV.pdf"',
        "Cache-Control": "public, max-age=3600",
      },
    })
  } catch (error) {
    console.error("PDF generation error:", error)
    return NextResponse.json(
      { error: "Failed to generate CV" },
      { status: 500 }
    )
  }
}
