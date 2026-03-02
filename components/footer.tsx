import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <a href="#" className="text-lg font-bold text-foreground">
            {"<"}
            <span className="text-primary">Endris</span>
            {" />"}
          </a>
          <p className="mt-1 text-xs text-muted-foreground">
            {"Built with Next.js & Tailwind CSS"}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:endris@email.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          {"\u00A9 2026 Endris Zeynu. All rights reserved."}
        </p>
      </div>
    </footer>
  )
}
