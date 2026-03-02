"use client"

import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "John Smith",
    role: "CEO, Tech Solutions Inc",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    content:
      "Endris delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager, StartupHub",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content:
      "Working with Endris was a pleasure. He transformed our ideas into a beautiful, functional web application. His communication and problem-solving skills are outstanding.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, FoodieApp",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    content:
      "Endris built our food delivery platform from scratch. The result was a fast, responsive, and user-friendly application. Highly recommend his services!",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "Director, EduTech Solutions",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    content:
      "The school management system Endris developed has streamlined our operations significantly. His full-stack expertise and dedication to quality are impressive.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-24 bg-secondary/30">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="mb-2 font-mono text-sm text-primary">
            05. Testimonials
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            What Clients Say
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
          <p className="mt-4 max-w-md text-muted-foreground">
            Feedback from clients I've had the pleasure to work with
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Quote size={20} />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                  >
                    <Star
                      size={16}
                      className="fill-primary text-primary"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Content */}
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-border pt-4">
                <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-primary/20">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
