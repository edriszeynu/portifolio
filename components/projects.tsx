"use client"

import Image from "next/image"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { siteConfig } from "@/lib/config"
import { motion } from "framer-motion"

const projects = [
  {
    title: "JobHub – Job Board Platform",
    description: "A full-stack job board platform with 10,000+ listings, category search, AI-powered job matching, company profiles, and role-based dashboards for job seekers and employers.",
    image: "/Celebrating Career Success Together (1).png",
    tech: ["React", "Node.js", "MongoDB", "Next.js"],
    github: "https://github.com/edriszeynu/job-app",
    live: "https://job-app-six-alpha.vercel.app/",
  },
  {
    title: "SchoolPro – School Management",
    description: "A comprehensive school management platform covering attendance, timetables, grades, fee management, parent portals, and role-based access for admins, teachers, and families.",
    image: "/images/project-school.jpg",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/edriszeynu/school_management_system",
    live: "https://edriszeynu-schoolmanagementsystem.vercel.app/",
  },
  {
    title: "BookStore – Online Book Shop",
    description: "An online bookstore with product browsing, filtering by genre, search functionality, shopping cart, and an admin dashboard for inventory and content management.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&auto=format&fit=crop",
    tech: ["React", "Express", "MongoDB", "Node.js"],
    github: siteConfig.projects.bookStore.github,
    live: "https://bookstore1-gvsv.vercel.app/",
  },
  {
    title: "Agent Chatbot – AI Assistant",
    description: "An intelligent AI-powered chatbot agent that handles real-time conversations, answers queries, and automates interactions using natural language processing.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop",
    tech: ["Python", "LangChain", "LLM", "FastAPI"],
    github: "https://github.com/edriszeynu/langchain-multi-agent",
    live: "https://agent-chatbot-qkzg.onrender.com",
  },
  {
    title: "GPT Clone – AI Chat App",
    description: "An advanced AI chat application built with LangChain, LangGraph, and RAG for context-aware, intelligent conversations with document understanding capabilities.",
    image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&auto=format&fit=crop",
    tech: ["LangChain", "LangGraph", "RAG", "Python"],
    github: "https://github.com/edriszeynu/gpt-clone",
    live: "https://gpt-clone-1-68ra.onrender.com/",
  },
  {
    title: "EventHub – Event Management",
    description: "A full-stack event management platform for discovering, registering, and managing events. Supports physical, virtual, and hybrid events with ticketing and organizer dashboards.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop",
    tech: ["React", "Node.js", "MongoDB", "Next.js"],
    github: "https://github.com/edriszeynu/event_management_system",
    live: "https://event-management-system-seven-gamma.vercel.app/",
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-28 px-6" style={{ background: "#060b18" }}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 70%)" }} />
        <div className="absolute left-0 bottom-1/4 h-80 w-80 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-purple-500/60" />
            <span className="font-mono text-xs tracking-[0.3em] text-purple-400 uppercase">04. Projects</span>
            <div className="h-px w-8 bg-purple-500/60" />
          </div>
          <h2 className="text-4xl font-black text-white sm:text-5xl">
            Featured{" "}
            <span style={{
              background: "linear-gradient(90deg, #a855f7, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Projects</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl transition-all"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Hover top glow */}
              <div className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "linear-gradient(90deg, transparent, #a855f7, #06b6d4, transparent)" }} />

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(6,11,24,0.85) 0%, transparent 50%)" }} />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(6,11,24,0.65)", backdropFilter: "blur(4px)" }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-all hover:border-purple-500 hover:text-purple-400"
                    aria-label="GitHub">
                    <Github size={18} />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-white transition-all hover:scale-110"
                    style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)" }}
                    aria-label="Live Demo">
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="text-base font-bold text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="flex-1 text-base leading-relaxed text-white/60">{project.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t}
                      className="rounded-full px-2.5 py-0.5 font-mono text-xs text-purple-400"
                      style={{ background: "rgba(168,85,247,0.12)", border: "1px solid rgba(168,85,247,0.25)" }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t pt-3"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-white/40 transition-colors hover:text-white">
                    <Github size={13} /> Source
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-white/40 transition-colors hover:text-white">
                    Live Demo <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
