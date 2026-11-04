"use client"

import { motion } from "framer-motion"
import { Code2, Briefcase, Layers, Users, MapPin, Coffee, Zap, Heart, ArrowRight } from "lucide-react"

const stats = [
  { icon: Code2,    value: "15+", label: "Projects Completed", color: "#a855f7" },
  { icon: Briefcase,value: "10+", label: "Technologies",        color: "#06b6d4" },
  { icon: Layers,   value: "5+",  label: "Full-Stack Apps",     color: "#06b6d4" },
  { icon: Users,    value: "10+", label: "Happy Clients",       color: "#a855f7" },
]

const tags = ["React", "Node.js", "MongoDB", "TypeScript", "Next.js", "Express", "Figma", "Git"]

const facts = [
  { icon: MapPin, text: "Ethiopia" },
  { icon: Coffee, text: "Coffee-driven coder" },
  { icon: Zap,    text: "Always learning" },
  { icon: Heart,  text: "Open source fan" },
]

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28 px-6" style={{ background: "#060b18" }}>

      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/4 h-96 w-96 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.20) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)" }} />
        {/* Dot grid top-right */}
        <div className="absolute right-0 top-0 h-64 w-64 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(139,92,246,0.8) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }} />
        {/* Dot grid bottom-left */}
        <div className="absolute left-0 bottom-0 h-48 w-48 opacity-15"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.8) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-primary/60" />
            <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">02. About</span>
            <div className="h-px w-8 bg-primary/60" />
          </div>
          <h2 className="text-4xl font-black text-white sm:text-5xl">
            About <span style={{
              background: "linear-gradient(90deg, #a855f7, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Me</span>
          </h2>
        </motion.div>

        {/* Main grid */}
        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">

          {/* ── LEFT ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            {/* Text card 1 */}
            <div
              className="rounded-2xl border border-white/8 p-6"
              style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)" }}
            >
              <p className="text-lg leading-relaxed text-white/70">
                I am a full-stack web developer specializing in building modern,
                functional, and visually engaging web applications. I transform
                ideas into intuitive user interfaces backed by scalable and secure
                backend systems.
              </p>
            </div>

            {/* Text card 2 */}
            <div
              className="rounded-2xl border border-white/8 p-6"
              style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)" }}
            >
              <p className="text-lg leading-relaxed text-white/70">
                With a strong foundation in the MERN stack, I enjoy taking on
                complex challenges and turning them into simple, elegant
                solutions. I am constantly learning and adapting to new
                technologies to stay at the forefront of web development.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="rounded-full border border-white/12 bg-white/5 px-3.5 py-1.5 font-mono text-xs font-semibold text-white/70 transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Quick facts */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {facts.map(({ icon: Icon, text }) => (
                <span key={text} className="flex items-center gap-1.5 text-sm text-white/45">
                  <Icon size={13} className="text-primary shrink-0" />
                  {text}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div>
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)", boxShadow: "0 0 24px rgba(124,58,237,0.45)" }}
              >
                <span className="absolute inset-0 -translate-x-full skew-x-12 bg-white/10 transition-transform duration-500 group-hover:translate-x-full" />
                Contact Me
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* ── RIGHT ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {/* 2x2 stat grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/8 p-6 transition-all"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  {/* Bottom border glow on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }} />

                  {/* Icon */}
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}>
                    <item.icon size={20} style={{ color: item.color }} />
                  </div>

                  <p className="text-3xl font-black text-white">{item.value}</p>
                  <p className="mt-1 text-xs text-white/45">{item.label}</p>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
