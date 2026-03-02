"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
import { siteConfig } from "@/lib/config"
import { motion } from "framer-motion"

const roles = [
  "Full-Stack Developer",
  "React Developer",
  "Node.js Developer",
  "MERN Stack Developer",
]

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const speed = isDeleting ? 30 : 60

    if (!isDeleting && displayed === role) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && displayed === "") {
      setIsDeleting(false)
      setCurrentRole((prev) => (prev + 1) % roles.length)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayed(
        isDeleting ? role.slice(0, displayed.length - 1) : role.slice(0, displayed.length + 1)
      )
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, currentRole])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 w-fit"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-xs font-medium text-muted-foreground">
              Available for Remote Work
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p className="text-lg text-muted-foreground">{"Hi, I'm"}</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Endris Zeynu{" "}
              <span className="text-gradient">Mohammed</span>
            </h1>
            <div className="mt-4 flex items-center gap-2">
              <span className="font-mono text-lg text-primary sm:text-xl">
                {displayed}
              </span>
              <span className="inline-block h-6 w-0.5 animate-pulse bg-primary" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="max-w-lg text-base leading-relaxed text-muted-foreground"
          >
            I build modern, responsive, and high-performance web applications
            using React, Node.js, and MongoDB. I combine clean design with
            strong backend logic to create scalable digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
            >
              <Mail size={16} />
              Get in Touch
            </a>
            <a
              href="#resume"
              className="flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-2 flex items-center gap-4"
          >
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-primary/10 blur-2xl" />
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative h-72 w-72 overflow-hidden rounded-full border-2 border-primary/30 sm:h-80 sm:w-80 lg:h-96 lg:w-96"
            >
              <Image
                src="/images/hero-profile.jpg"
                alt="Endris Zeynu Mohammed - Full-Stack Developer"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={24} className="animate-bounce" />
      </a>
    </section>
  )
}
