"use client"

import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { siteConfig } from "@/lib/config"
import { motion } from "framer-motion"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack online shopping platform with authentication, product management, and secure checkout functionality.",
    image: "/images/project-ecommerce.jpg",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: siteConfig.projects.ecommerce.github,
    live: siteConfig.projects.ecommerce.live,
  },
  {
    title: "Food Delivery App",
    description:
      "A responsive web application that allows users to browse restaurants, place orders, and manage deliveries in real-time.",
    image: "/images/project-food.jpg",
    tech: ["React", "Node.js", "MongoDB"],
    github: siteConfig.projects.foodDelivery.github,
    live: siteConfig.projects.foodDelivery.live,
  },
  {
    title: "Coffee Shop Website",
    description:
      "A modern and responsive business website designed to showcase products and enhance customer engagement.",
    image: "/images/project-coffee.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    github: siteConfig.projects.coffeeShop.github,
    live: siteConfig.projects.coffeeShop.live,
  },
  {
    title: "School Management System",
    description:
      "A system for managing students, teachers, and academic records with role-based authentication and dashboards.",
    image: "/images/project-school.jpg",
    tech: ["React", "Express", "MongoDB", "Node.js"],
    github: siteConfig.projects.schoolManagement.github,
    live: siteConfig.projects.schoolManagement.live,
  },
  {
    title: "Book Store Application",
    description:
      "An online bookstore with product filtering, search functionality, and an admin dashboard for content management.",
    image: "/images/project-bookstore.jpg",
    tech: ["React", "Express", "MongoDB"],
    github: siteConfig.projects.bookStore.github,
    live: siteConfig.projects.bookStore.live,
  },
]

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="mb-2 font-mono text-sm text-primary">
            04. Projects
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Featured Projects
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/20 transition-opacity group-hover:opacity-0" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col gap-4 p-5">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 border-t border-border pt-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink size={16} />
                    Live Demo
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
