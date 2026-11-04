"use client"

import { useState } from "react"
import { Github, Linkedin, Mail, MapPin, Send, Loader2, CheckCircle2, XCircle, ArrowRight } from "lucide-react"
import { siteConfig } from "@/lib/config"
import { motion } from "framer-motion"

type FormStatus = "idle" | "submitting" | "success" | "error"

const inputClass = "w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-1 transition-all"
const inputStyle = { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)" }
const inputFocusStyle = { borderColor: "rgba(168,85,247,0.6)", boxShadow: "0 0 0 1px rgba(168,85,247,0.3)" }

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")
    setErrorMessage("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Something went wrong")
      setStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setStatus("idle"), 5000)
    } catch (err) {
      setStatus("error")
      setErrorMessage(err instanceof Error ? err.message : "Failed to send message.")
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-28 px-6" style={{ background: "#060b18" }}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 h-96 w-96 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)" }} />
        <div className="absolute right-0 top-0 h-64 w-64 opacity-15"
          style={{ backgroundImage: "radial-gradient(circle, rgba(139,92,246,0.8) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-purple-500/60" />
            <span className="font-mono text-xs tracking-[0.3em] text-purple-400 uppercase">07. Contact</span>
            <div className="h-px w-8 bg-purple-500/60" />
          </div>
          <h2 className="text-4xl font-black text-white sm:text-5xl">
            Get in{" "}
            <span style={{
              background: "linear-gradient(90deg, #a855f7, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Touch</span>
          </h2>
          <p className="mt-4 max-w-md text-sm text-white/50">
            {"I'm open to collaboration, freelance projects, and full-time opportunities."}
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 lg:col-span-2"
          >
            {[
              { icon: Mail, title: "Email", value: siteConfig.email },
              { icon: MapPin, title: "Location", value: `${siteConfig.location} — Remote Ready` },
            ].map(({ icon: Icon, title, value }) => (
              <div key={title}
                className="flex items-start gap-4 rounded-2xl p-5 transition-all hover:border-purple-500/40"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.25)" }}>
                  <Icon size={18} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-0.5 text-sm text-white/50">{value}</p>
                </div>
              </div>
            ))}

            <div className="flex items-center gap-3 pt-2">
              {[
                { href: siteConfig.social.github, icon: Github, label: "GitHub" },
                { href: siteConfig.social.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a key={label} href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-white/50 transition-all hover:text-purple-400 hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)" }}>
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-2xl p-6 lg:col-span-3"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { id: "name", label: "Name", type: "text", placeholder: "Your name", key: "name" as const },
                { id: "email", label: "Email", type: "email", placeholder: "your@email.com", key: "email" as const },
              ].map(({ id, label, type, placeholder, key }) => (
                <div key={id}>
                  <label htmlFor={id} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/40">{label}</label>
                  <input id={id} type={type} required value={formData[key]}
                    onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                    className={inputClass} style={inputStyle} placeholder={placeholder} />
                </div>
              ))}
            </div>

            <div>
              <label htmlFor="subject" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/40">Subject</label>
              <input id="subject" type="text" required value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className={inputClass} style={inputStyle} placeholder="Project inquiry" />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/40">Message</label>
              <textarea id="message" required rows={5} value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`${inputClass} resize-none`} style={inputStyle}
                placeholder="Tell me about your project..." />
            </div>

            <div className="flex items-center gap-4">
              <button type="submit" disabled={status === "submitting"}
                className="group relative flex items-center gap-2.5 overflow-hidden rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all hover:scale-105 disabled:opacity-60 disabled:pointer-events-none"
                style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)", boxShadow: "0 0 24px rgba(124,58,237,0.40)" }}>
                <span className="absolute inset-0 -translate-x-full skew-x-12 bg-white/10 transition-transform duration-500 group-hover:translate-x-full" />
                {status === "submitting" ? <><Loader2 size={15} className="animate-spin" /> Sending...</> : <><Send size={15} /> Send Message</>}
              </button>

              {status === "success" && (
                <span className="flex items-center gap-2 text-sm text-emerald-400">
                  <CheckCircle2 size={15} /> Sent successfully!
                </span>
              )}
              {status === "error" && (
                <span className="flex items-center gap-2 text-sm text-red-400">
                  <XCircle size={15} /> {errorMessage}
                </span>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
