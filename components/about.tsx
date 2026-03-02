import { Briefcase, Code, Layers, Users } from "lucide-react"

const stats = [
  { icon: Code, label: "Projects Completed", value: "15+" },
  { icon: Briefcase, label: "Technologies", value: "10+" },
  { icon: Layers, label: "Full-Stack Apps", value: "5+" },
  { icon: Users, label: "Happy Clients", value: "10+" },
]

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="mb-2 font-mono text-sm text-primary">02. About</span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            About Me
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left - Text */}
          <div className="flex flex-col gap-6">
            <p className="text-base leading-relaxed text-muted-foreground">
              I am a full-stack web developer specializing in building modern,
              functional, and visually engaging web applications. I transform
              ideas into intuitive user interfaces backed by scalable and secure
              backend systems.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              My work focuses on balancing design, usability, performance, and
              clean architecture. I write maintainable code and build solutions
              that deliver real value to users and businesses.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              With a strong foundation in the MERN stack, I enjoy taking on
              complex challenges and turning them into simple, elegant
              solutions. I am constantly learning and adapting to new
              technologies to stay at the forefront of web development.
            </p>

            <a
              href="#contact"
              className="mt-2 w-fit rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <stat.icon size={24} />
                </div>
                <span className="text-2xl font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
