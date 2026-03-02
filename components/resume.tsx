"use client"

import { useState } from "react"
import {
  Download,
  GraduationCap,
  Briefcase,
  Award,
  Calendar,
  MapPin,
  Loader2,
  ExternalLink,
} from "lucide-react"

const education = [
  {
    degree: "BSc in Computer Science",
    institution: "Wollo University",
    location: "Ethiopia",
    period: "2020 - 2024",
    description:
      "Focused on software engineering, data structures, algorithms, and full-stack web development. Graduated with distinction.",
  },
  {
    degree: "Self-Taught Full-Stack Development",
    institution: "Online Platforms",
    location: "Remote",
    period: "2022 - Present",
    description:
      "Completed advanced courses in React, Node.js, MongoDB, and modern web technologies through Udemy, freeCodeCamp, and YouTube tutorials.",
  },
]

const experience = [
  {
    role: "Full-Stack Web Developer",
    company: "Freelance",
    location: "Remote",
    period: "2023 - Present",
    description:
      "Designed and developed full-stack web applications for clients including e-commerce platforms, school management systems, and food delivery apps using React, Node.js, Express, and MongoDB.",
    highlights: [
      "Built 5+ production-ready web applications",
      "Implemented secure REST APIs with JWT authentication",
      "Optimized database queries reducing load time by 40%",
      "Deployed applications on Vercel and Render",
    ],
  },
  {
    role: "Frontend Developer",
    company: "University Projects",
    location: "Ethiopia",
    period: "2022 - 2023",
    description:
      "Led frontend development for university capstone projects, creating responsive user interfaces and integrating with backend services.",
    highlights: [
      "Developed responsive UIs using React and Tailwind CSS",
      "Collaborated with teams of 4-5 developers using Git",
      "Presented projects to faculty and industry panels",
    ],
  },
]

const certifications = [
  {
    name: "Full-Stack Web Development",
    issuer: "Udemy",
    year: "2023",
  },
  {
    name: "React - The Complete Guide",
    issuer: "Udemy",
    year: "2023",
  },
  {
    name: "Node.js, Express & MongoDB Bootcamp",
    issuer: "Udemy",
    year: "2023",
  },
  {
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2022",
  },
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
    { key: "experience", label: "Experience", icon: Briefcase },
    { key: "education", label: "Education", icon: GraduationCap },
    { key: "certifications", label: "Certifications", icon: Award },
  ]

  return (
    <section id="resume" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="mb-2 font-mono text-sm text-primary">
            06. Resume
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            My Resume
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            A summary of my education, professional experience, and
            certifications.
          </p>
        </div>

        {/* Download Button */}
        <div className="mb-12 flex justify-center">
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 disabled:pointer-events-none disabled:opacity-60"
          >
            {downloading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Generating PDF...
              </>
            ) : (
              <>
                <Download size={16} />
                Download CV
              </>
            )}
          </button>
        </div>

        {/* Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all ${
                activeTab === tab.key
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mx-auto max-w-3xl">
          {/* Experience Tab */}
          {activeTab === "experience" && (
            <div className="flex flex-col gap-8">
              {experience.map((item, index) => (
                <div key={index} className="relative flex gap-6">
                  {/* Timeline line */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Briefcase size={18} />
                    </div>
                    {index < experience.length - 1 && (
                      <div className="mt-2 w-px flex-1 bg-border" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {item.role}
                        </h3>
                        <p className="text-sm font-medium text-primary">
                          {item.company}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {item.location}
                        </span>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    {item.highlights && (
                      <ul className="mt-3 flex flex-col gap-1.5">
                        {item.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Education Tab */}
          {activeTab === "education" && (
            <div className="flex flex-col gap-8">
              {education.map((item, index) => (
                <div key={index} className="relative flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <GraduationCap size={18} />
                    </div>
                    {index < education.length - 1 && (
                      <div className="mt-2 w-px flex-1 bg-border" />
                    )}
                  </div>
                  <div className="flex-1 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {item.degree}
                        </h3>
                        <p className="text-sm font-medium text-primary">
                          {item.institution}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {item.location}
                        </span>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certifications Tab */}
          {activeTab === "certifications" && (
            <div className="grid gap-4 sm:grid-cols-2">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Award size={18} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-foreground">
                      {cert.name}
                    </h3>
                    <p className="mt-1 text-xs text-primary">{cert.issuer}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {cert.year}
                    </p>
                  </div>
                  <ExternalLink
                    size={14}
                    className="mt-1 shrink-0 text-muted-foreground"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
