import { Github, Linkedin, Mail } from "lucide-react"
import { siteConfig } from "@/lib/config"

export function Footer() {
  return (
    <footer className="relative overflow-hidden py-10 px-6"
      style={{ background: "#060b18", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2"
        style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.5), rgba(6,182,212,0.5), transparent)" }} />

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 sm:flex-row sm:justify-between px-6 lg:px-16">
        <div className="text-center sm:text-left">
          <a href="#" className="font-mono text-lg font-black tracking-tight text-white">
            {"<"}
            <span style={{
              background: "linear-gradient(90deg, #a855f7, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Endris</span>
            {" />"}
          </a>
          <p className="mt-1 text-xs text-white/30">Built with Next.js & Tailwind CSS</p>
        </div>

        <div className="flex items-center gap-3">
          {[
            { href: siteConfig.social.github, icon: Github, label: "GitHub" },
            { href: siteConfig.social.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a key={label} href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-xl text-white/40 transition-all hover:text-purple-400 hover:scale-110"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)" }}>
              <Icon size={16} />
            </a>
          ))}
        </div>

        <p className="text-xs text-white/30">© 2026 Endris Zeynu. All rights reserved.</p>
      </div>
    </footer>
  )
}
