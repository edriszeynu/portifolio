"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume",   href: "#resume" },
  { label: "Contact",  href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = navLinks.map((l) => l.href.replace("#", ""))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={scrolled ? {
        background: "rgba(6,11,24,0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      } : { background: "transparent" }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-16">
        {/* Logo */}
        <a href="#" className="font-mono text-xl font-black tracking-tight text-white">
          {"<"}
          <span style={{
            background: "linear-gradient(90deg, #a855f7, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>Endris</span>
          {" />"}
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "")
            return (
              <li key={link.href}>
                <a href={link.href}
                  className="relative text-base font-semibold tracking-wide transition-all duration-200"
                  style={{ color: isActive ? "#a855f7" : "rgba(255,255,255,0.65)" }}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                      style={{ background: "linear-gradient(90deg, #a855f7, #06b6d4)" }} />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Hire Me */}
        <div className="hidden md:block">
          <a href="#contact"
            className="rounded-full px-6 py-2.5 text-base font-bold text-white transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)", boxShadow: "0 0 20px rgba(124,58,237,0.40)" }}>
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="text-white/70 md:hidden" aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden" style={{ background: "rgba(6,11,24,0.97)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <ul className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-white/60 transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}
                className="inline-block rounded-full px-5 py-2 text-sm font-bold text-white"
                style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)" }}>
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
