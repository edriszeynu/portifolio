"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Download, Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import { siteConfig } from "@/lib/config"
import { motion } from "framer-motion"

const roles = ["Full-Stack Developer", "React Developer", "Node.js Developer", "MERN Stack Developer"]

const techStack = [
  { name: "React",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
]

const stats = [
  { icon: "💼", value: "2+",  label: "Years Experience" },
  { icon: "📁", value: "15+", label: "Projects Done" },
  { icon: "😊", value: "10+", label: "Happy Clients" },
]

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const speed = isDeleting ? 28 : 55
    if (!isDeleting && displayed === role) {
      const t = setTimeout(() => setIsDeleting(true), 2200)
      return () => clearTimeout(t)
    }
    if (isDeleting && displayed === "") {
      setIsDeleting(false)
      setCurrentRole((p) => (p + 1) % roles.length)
      return
    }
    const t = setTimeout(() => {
      setDisplayed(isDeleting ? role.slice(0, displayed.length - 1) : role.slice(0, displayed.length + 1))
    }, speed)
    return () => clearTimeout(t)
  }, [displayed, isDeleting, currentRole])

  return (
    <section className="relative min-h-screen overflow-hidden" style={{ background: "#060b18" }}>

      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow right side — matches reference */}
        <div className="absolute right-0 top-0 h-full w-2/3"
          style={{ background: "radial-gradient(ellipse 80% 100% at 85% 40%, rgba(37,99,235,0.18) 0%, rgba(99,102,241,0.10) 40%, transparent 70%)" }} />
        {/* Purple accent left */}
        <div className="absolute -left-20 top-1/3 h-96 w-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 70%)" }} />
        {/* Dot pattern right */}
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.5) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }} />
      </div>

      {/* Grid */}
      <div className="relative z-10 mx-auto min-h-screen max-w-7xl px-6 lg:px-16">

        {/* ─── LEFT CONTENT ─── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center gap-6 py-28 lg:py-0 min-h-screen lg:max-w-[52%]"
        >
          {/* Hello pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex w-fit items-center gap-2.5 rounded-full border border-white/15 bg-white/8 px-4 py-2"
          >
            <span className="text-base font-semibold text-white/80">Hello, I&apos;m</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-[clamp(2.8rem,7vw,5.5rem)] font-black leading-none tracking-tight text-white"
          >
            Endris{" "}
            <span style={{
              background: "linear-gradient(90deg, #a855f7, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Zeynu
            </span>
          </motion.h1>

          {/* Role with left border */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45 }}
            className="flex items-center gap-3"
          >
            <div className="h-7 w-1 rounded-full bg-primary" />
            <div className="flex items-center gap-2 text-2xl font-bold text-white/90 sm:text-3xl">
              <span>{displayed}</span>
              <span className="inline-block h-7 w-[2px] animate-pulse rounded-full bg-primary" />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="max-w-md text-xl leading-8 text-white/55"
          >
            I craft high-performance web applications with clean architecture and modern tech.
            From pixel-perfect UIs to robust backend systems.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group relative flex items-center gap-2.5 overflow-hidden rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)", boxShadow: "0 0 28px rgba(124,58,237,0.50)" }}
            >
              <span className="absolute inset-0 -translate-x-full skew-x-12 bg-white/10 transition-transform duration-500 group-hover:translate-x-full" />
              🚀 View My Projects
              <ArrowRight size={15} />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2.5 rounded-full border border-white/20 bg-transparent px-7 py-3.5 text-sm font-semibold text-white/80 transition-all hover:border-white/40 hover:text-white hover:scale-105"
            >
              <Mail size={15} />
              Contact Me
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="flex items-center gap-3 pt-1"
          >
            {[
              { href: siteConfig.social.github, icon: Github, label: "GitHub" },
              { href: siteConfig.social.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white/40 transition-all hover:border-primary/60 hover:text-primary hover:scale-110"
              >
                <Icon size={17} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* ─── RIGHT — Photo full height ─── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
          className="absolute right-0 top-0 hidden h-full lg:block"
          style={{ width: "48%" }}
        >
          {/* Strong blue bg behind photo to match reference */}
          <div className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 90% 80% at 70% 50%, rgba(29,78,216,0.45) 0%, rgba(37,99,235,0.25) 40%, transparent 75%)" }} />

          {/* Blue glow at bottom */}
          <div className="absolute bottom-0 left-1/4 right-0 h-64 blur-3xl"
            style={{ background: "radial-gradient(ellipse, rgba(59,130,246,0.35) 0%, transparent 70%)" }} />

          {/* Photo fills entire right column, top-aligned */}
          <div className="relative h-full w-full">
            <Image
              src="/photo_2026-11-03_14-36-27.jpg"
              alt="Endris Zeynu Mohammed"
              fill
              className="object-cover object-top"
              priority
              style={{
                maskImage: "linear-gradient(to bottom, black 70%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%)",
                maskComposite: "intersect",
                WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%)",
                WebkitMaskComposite: "source-in",
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* ─── Stats bar ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/6 bg-white/3 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl items-center divide-x divide-white/8 px-6 lg:px-16">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-1 items-center gap-4 px-6 py-5">
              <div>
                <p className="text-2xl font-black text-white leading-none">{value}</p>
                <p className="text-xs text-white/40 mt-0.5">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
