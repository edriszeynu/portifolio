"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    name: "John Smith",
    role: "CEO",
    company: "Tech Solutions Inc",
    platform: "Upwork",
    period: "Jan 2023 - Dec 2023",
    project: "E-Commerce Platform",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "Endris delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient. Highly professional and result-oriented developer.",
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "StartupHub",
    platform: "LinkedIn",
    period: "Mar 2023 - Aug 2023",
    project: "Web App Development",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "Working with Endris was a pleasure. He transformed our ideas into a beautiful, functional web application. His communication and problem-solving skills are outstanding. Would highly recommend to anyone.",
  },
  {
    name: "Michael Chen",
    role: "Founder",
    company: "FoodieApp",
    platform: "Upwork",
    period: "Jun 2023 - Oct 2023",
    project: "Food Delivery Platform",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    content: "Endris built our food delivery platform from scratch. The result was a fast, responsive, and user-friendly application. He consistently delivered on time and exceeded expectations at every milestone.",
  },
  {
    name: "Emily Davis",
    role: "Director",
    company: "EduTech Solutions",
    platform: "Direct",
    period: "Sep 2022 - Feb 2023",
    project: "School Management System",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    content: "The school management system Endris developed has streamlined our operations significantly. His full-stack expertise and dedication to quality are impressive. A truly reliable and skilled developer.",
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const prev = () => { setDirection(-1); setIndex((i) => (i - 1 + testimonials.length) % testimonials.length) }
  const next = () => { setDirection(1);  setIndex((i) => (i + 1) % testimonials.length) }

  const t = testimonials[index]

  return (
    <section id="testimonials" className="relative overflow-hidden py-28 px-6" style={{ background: "#060b18" }}>

      {/* Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 70%)" }} />
        <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col items-center text-center gap-3"
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-purple-500/60" />
            <span className="font-mono text-xs tracking-[0.3em] text-purple-400 uppercase">05. Testimonials</span>
            <div className="h-px w-8 bg-purple-500/60" />
          </div>
          <h2 className="text-5xl font-black text-white sm:text-6xl">
            Recom<span style={{
              background: "linear-gradient(90deg, #a855f7, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>mendations</span>
          </h2>
        </motion.div>

        {/* Outer wrapper */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="grid overflow-hidden rounded-2xl lg:grid-cols-[340px_1fr]"
            style={{ border: "1px solid rgba(255,255,255,0.07)", gap: 0 }}
          >

            {/* ── LEFT CARD ── */}
            <div className="flex flex-col gap-5 p-7" style={{ background: "#161c2d" }}>
              {/* Photo — rounded rect, not full bleed */}
              <div className="overflow-hidden rounded-xl" style={{ aspectRatio: "4/3" }}>
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Pink label */}
              <p className="text-[10px] font-black tracking-[0.22em] uppercase" style={{ color: "#ec4899" }}>
                {t.company} · {t.platform}
              </p>

              {/* Name + role */}
              <div>
                <h3 className="text-2xl font-black text-white">{t.name}</h3>
                <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.40)" }}>{t.role}</p>
              </div>
            </div>

            {/* ── RIGHT PANEL ── */}
            <div className="relative flex flex-col" style={{ background: "#111520", borderLeft: "1px solid rgba(255,255,255,0.07)" }}>

              {/* Top zone: huge outlined quote marks + arrow buttons */}
              <div className="relative flex items-start justify-between px-8 pt-6 pb-4">
                {/* Two large outlined closing quotation marks — matching reference exactly */}
                <div className="flex items-center gap-3 select-none" aria-hidden="true">
                  <span style={{
                    fontSize: "88px",
                    lineHeight: 1,
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontWeight: 900,
                    WebkitTextStroke: "2.5px rgba(255,255,255,0.20)",
                    color: "transparent",
                    display: "block",
                  }}>&ldquo;</span>
                  <span style={{
                    fontSize: "88px",
                    lineHeight: 1,
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontWeight: 900,
                    WebkitTextStroke: "2.5px rgba(255,255,255,0.20)",
                    color: "transparent",
                    display: "block",
                  }}>&rdquo;</span>
                </div>

                {/* Arrow buttons — square dark tiles, no gap between, like reference */}
                <div className="flex items-center shrink-0">
                  <button onClick={prev} aria-label="Previous"
                    className="flex h-12 w-12 items-center justify-center transition-all hover:bg-white/10 active:scale-95"
                    style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.60)" }}>
                    <ArrowLeft size={16} strokeWidth={1.5} />
                  </button>
                  <button onClick={next} aria-label="Next"
                    className="flex h-12 w-12 items-center justify-center transition-all hover:bg-white/10 active:scale-95"
                    style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.60)", borderLeft: "1px solid rgba(255,255,255,0.08)" }}>
                    <ArrowRight size={16} strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              {/* Content card below — inset with margin to show gap like reference */}
              <div className="mx-4 mb-4 flex flex-col gap-4 rounded-xl p-6"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                {/* Title + stars */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-2xl font-black text-white leading-snug">{t.project}</h3>
                  <div className="flex items-center gap-0.5 shrink-0 mt-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.06 }}
                        style={{ color: "#f59e0b", fontSize: "17px" }}
                      >★</motion.span>
                    ))}
                  </div>
                </div>

                {/* via Platform - period */}
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.38)" }}>
                  via {t.platform} · {t.period}
                </p>

                {/* Divider */}
                <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.08)" }} />

                {/* Text */}
                <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {t.content}
                </p>

                {/* Dot indicators */}
                <div className="flex items-center gap-2 mt-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i) }}
                      aria-label={`Go to testimonial ${i + 1}`}
                      className="rounded-full transition-all duration-300"
                      style={{
                        width: i === index ? "28px" : "8px",
                        height: "8px",
                        background: i === index
                          ? "linear-gradient(90deg, #a855f7, #06b6d4)"
                          : "rgba(255,255,255,0.15)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
