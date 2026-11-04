"use client"

import { useState } from "react"
import { Download, GraduationCap, Briefcase, Award, Calendar, MapPin, Loader2, ExternalLink, CheckCircle2, Building2, Code2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const experience = [
  {
    role: "Full-Stack Web Developer",
    company: "Freelance",
    location: "Remote",
    period: "2023 – Present",
    description: "Designed and developed full-stack web applications for clients including e-commerce platforms, school management systems, and food delivery apps using React, Node.js, Express, and MongoDB.",
    highlights: ["Built 5+ production-ready apps", "Implemented REST APIs", "Optimized performance"],
    icon: Building2,
  },
  {
    role: "Frontend Developer",
    company: "University Projects",
    location: "Ethiopia",
    period: "2022 – 2023",
    description: "Led frontend development for university capstone projects, creating responsive user interfaces and integrating with backend services.",
    highlights: ["Developed responsive UIs", "Collaborated with Git", "Presented to faculty"],
    icon: Code2,
  },
]

const education = [
  {
    degree: "BSc in Computer Science",
    institution: "Wollo University",
    location: "Ethiopia",
    period: "2020 – 2024",
    description: "Focused on software engineering, data structures, algorithms, and full-stack web development. Graduated with distinction.",
    highlights: ["Software Engineering", "Data Structures", "Graduated with distinction"],
    icon: GraduationCap,
  },
  {
    degree: "Self-Taught Full-Stack Development",
    institution: "Online Platforms",
    location: "Remote",
    period: "2022 – Present",
    description: "Completed advanced courses in React, Node.js, MongoDB, and modern web technologies through Udemy, freeCodeCamp, and YouTube.",
    highlights: ["React & Node.js", "MongoDB & Express", "Modern web tech"],
    icon: Code2,
  },
]

const certifications = [
  { name: "Full-Stack Web Development",         issuer: "Udemy",        year: "2023" },
  { name: "React - The Complete Guide",          issuer: "Udemy",        year: "2023" },
  { name: "Node.js, Express & MongoDB Bootcamp", issuer: "Udemy",        year: "2023" },
  { name: "Responsive Web Design",               issuer: "freeCodeCamp", year: "2022" },
]

type ActiveTab = "experience" | "education" | "certifications"

export function Resume() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("experience")
  const [downloading, setDownloading] = useState(false)

  const handleDownload = async () => {
    setDownloading(true)
    try {
      const res = await fetch("/api/resume")
      if (!res.ok) throw new Error("Download failed")
      const blob = await res.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = "Endris_Zeynu_Mohammed_CV.pdf"
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
    } catch {
      alert("Failed to download CV. Please try again.")
    } finally {
      setDownloading(false)
    }
  }

  const tabs: { key: ActiveTab; label: string; icon: typeof Briefcase }[] = [
    { key: "experience",     label: "Experience",     icon: Briefcase },
    { key: "education",      label: "Education",      icon: GraduationCap },
    { key: "certifications", label: "Certifications", icon: Award },
  ]

  const items = activeTab === "experience" ? experience : activeTab === "education" ? education : []

  return (
    <section id="resume" className="relative overflow-hidden py-28 px-6" style={{ background: "#060b18" }}>

      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-1/4 h-96 w-96 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)" }} />
        <div className="absolute -right-20 bottom-1/4 h-96 w-96 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)" }} />
        <div className="absolute right-0 top-0 h-64 w-64 opacity-15"
          style={{ backgroundImage: "radial-gradient(circle, rgba(139,92,246,0.8) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
        <div className="absolute left-0 bottom-0 h-48 w-48 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, rgba(6,182,212,0.8) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-center text-center gap-4"
        >
          {/* "Professional Journey" pill */}
          <div className="flex items-center gap-2 rounded-full px-4 py-2"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}>
            <Briefcase size={13} className="text-purple-400" />
            <span className="text-xs font-semibold text-white/60 tracking-wide">Professional Journey</span>
          </div>

          <h2 className="text-5xl font-black text-white sm:text-6xl leading-tight">
            My{" "}
            <span style={{
              background: "linear-gradient(90deg, #a855f7, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Resume</span>
          </h2>

          <p className="max-w-lg text-lg text-white/55">
            A summary of my education, professional experience, and certifications.
          </p>

          {/* Download button */}
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="group relative mt-2 flex items-center gap-2.5 overflow-hidden rounded-full px-8 py-3.5 text-sm font-bold text-white transition-all hover:scale-105 disabled:opacity-60 disabled:pointer-events-none"
            style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)", boxShadow: "0 0 30px rgba(124,58,237,0.45)" }}
          >
            <span className="absolute inset-0 -translate-x-full skew-x-12 bg-white/10 transition-transform duration-500 group-hover:translate-x-full" />
            {downloading
              ? <><Loader2 size={15} className="animate-spin" /> Generating...</>
              : <><Download size={15} /> Download CV</>
            }
          </button>
        </motion.div>

        {/* Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => {
            const active = activeTab === tab.key
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all hover:scale-105"
                style={active ? {
                  background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                  color: "#fff",
                  boxShadow: "0 0 20px rgba(124,58,237,0.40)",
                } : {
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.50)",
                }}
              >
                <tab.icon size={15} />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Timeline items */}
        <AnimatePresence mode="wait">
          {activeTab !== "certifications" ? (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-0"
            >
              {items.map((item, i) => (
                <div key={i} className="relative flex gap-6">

                  {/* Timeline spine */}
                  <div className="flex flex-col items-center" style={{ width: "44px", flexShrink: 0 }}>
                    {/* Circle */}
                    <div className="relative flex h-11 w-11 items-center justify-center rounded-full z-10"
                      style={{
                        background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                        boxShadow: "0 0 20px rgba(124,58,237,0.5)",
                      }}>
                      <item.icon size={18} className="text-white" />
                    </div>
                    {/* Line */}
                    {i < items.length - 1 && (
                      <div className="w-px flex-1 mt-1"
                        style={{ background: "linear-gradient(to bottom, rgba(124,58,237,0.6), rgba(37,99,235,0.2))", minHeight: "32px" }} />
                    )}
                  </div>

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group flex-1 mb-6 rounded-2xl p-6 transition-all hover:-translate-y-1"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {/* Hover top line */}
                    <div className="absolute inset-x-6 top-0 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: "linear-gradient(90deg, transparent, #a855f7, #06b6d4, transparent)" }} />

                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-black text-white">
                          {"role" in item ? item.role : item.degree}
                        </h3>
                        <div className="mt-1 flex flex-wrap items-center gap-3 text-xs">
                          <span className="flex items-center gap-1 text-purple-400 font-semibold">
                            <Building2 size={11} />
                            {"company" in item ? item.company : item.institution}
                          </span>
                          <span className="flex items-center gap-1 text-white/40">
                            <MapPin size={11} />
                            {item.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs text-white/60"
                        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}>
                        <Calendar size={11} />
                        {item.period}
                      </div>
                    </div>

                    <p className="mt-3 text-base leading-relaxed text-white/60">{item.description}</p>

                    {/* Inline highlight chips */}
                    <div className="mt-4 flex flex-wrap gap-3">
                      {item.highlights.map((h, j) => (
                        <span key={j} className="flex items-center gap-1.5 text-xs text-white/60">
                          <CheckCircle2 size={13} className="text-purple-400 shrink-0" />
                          {h}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="certifications"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08 }}
                  className="group flex items-start gap-4 rounded-2xl p-5 transition-all hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(37,99,235,0.3))", border: "1px solid rgba(168,85,247,0.35)" }}>
                    <Award size={18} className="text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-white">{cert.name}</h3>
                    <p className="mt-1 text-xs font-semibold text-purple-400">{cert.issuer}</p>
                    <p className="mt-0.5 text-xs text-white/35">{cert.year}</p>
                  </div>
                  <ExternalLink size={13} className="mt-1 shrink-0 text-white/20 group-hover:text-white/50 transition-colors" />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
