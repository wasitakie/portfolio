"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with Next.js, Stripe integration, and a Sanity CMS backend.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Sanity"],
    github: "https://github.com/wasitakie/next-store",
    live: "https://next-store-green-psi.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Task Management SaaS",
    description:
      "A collaborative task management tool featuring real-time updates, drag-and-drop boards, and team roles.",
    tech: ["Next.js", "Supabase", "Tailwind CSS"],
    github: "#",
    live: "#",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "AI Image Generator",
    description:
      "Web application integrating OpenAI's DALL-E API for generating images from text descriptions with a gallery feature.",
    tech: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL"],
    github: "#",
    live: "#",
    image:
      "https://images.unsplash.com/photo-1678280387569-450f3408f623?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-purple-500 rounded"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-purple-500/50 transition-colors group"
            >
              {/* Project Image Placeholder */}
              <div
                className="h-48 w-full bg-zinc-800 relative overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-zinc-800 text-purple-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.live}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
