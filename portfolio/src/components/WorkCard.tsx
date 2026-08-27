"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/portfolio";

export default function WorkCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="project-card group relative overflow-hidden rounded-[1.75rem] transition-all duration-500"
      style={{
        boxShadow: "0 10px 40px -15px rgba(0,0,0,0.5)",
      }}
    >
      <Link href={`/work/${project.slug}`} className="block focus:outline-none">
        {/* Media Container with custom accent glow */}
        <div className="relative aspect-[1.22] overflow-hidden bg-[#181917]">
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />

          {/* Vignette & Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111311] via-[#111311]/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />

          {/* Accent hover backlight */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none mix-blend-screen"
            style={{ backgroundColor: project.accent }}
          />

          {/* Category Chip */}
          <div className="absolute left-5 top-5 z-10">
            <span className="mono rounded-full border border-white/20 bg-black/40 px-3.5 py-1.5 text-[.6rem] text-white/80 backdrop-blur-md transition-colors group-hover:border-white/40 group-hover:text-white">
              {project.category}
            </span>
          </div>

          {/* Arrow Button */}
          <span
            className="card-arrow absolute bottom-5 right-5 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white/80 backdrop-blur-md transition-all duration-300 group-hover:scale-105"
            style={{
              borderColor: "rgba(255,255,255,0.3)",
            }}
          >
            <ArrowUpRight size={20} />
          </span>
        </div>

        {/* Content Details */}
        <div className="p-6 md:p-8">
          <div className="mb-4 flex items-baseline justify-between gap-4">
            <div>
              <p className="mono text-[.58rem] text-white/40 mb-1">{project.kicker}</p>
              <h3 className="display text-3xl md:text-4xl text-white group-hover:text-[var(--paper)] transition-colors">
                {project.title}
              </h3>
            </div>
            <span className="mono shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-[.6rem] text-white/45">
              {project.year}
            </span>
          </div>

          <p className="max-w-lg text-sm leading-relaxed text-white/55 group-hover:text-white/70 transition-colors">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="mono rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[.58rem] text-white/40 transition-colors group-hover:border-white/20 group-hover:text-white/60"
              >
                {tag}
              </span>
            ))}
            <span className="mono ml-auto text-[.58rem] text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity">
              View case study →
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

