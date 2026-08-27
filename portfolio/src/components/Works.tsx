"use client";

import { useState, useMemo } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/lib/portfolio";
import WorkCard from "./WorkCard";
import { Reveal } from "./Reveal";

const filterCategories = [
  { id: "all", label: "All Projects" },
  { id: "3d", label: "3D & Motion" },
  { id: "identity", label: "Identity & Exhibition" },
  { id: "editorial", label: "Editorial & Print" },
  { id: "product", label: "Product & UI" },
  { id: "illustration", label: "Illustration" },
];

export default function Works() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (selectedFilter === "all") return projects;
    if (selectedFilter === "3d") {
      return projects.filter((p) => p.category.toLowerCase().includes("3d") || p.tags.some((t) => t.toLowerCase().includes("3d")));
    }
    if (selectedFilter === "identity") {
      return projects.filter((p) => p.category.toLowerCase().includes("identity") || p.category.toLowerCase().includes("exhibition") || p.category.toLowerCase().includes("campaign"));
    }
    if (selectedFilter === "editorial") {
      return projects.filter((p) => p.category.toLowerCase().includes("editorial") || p.category.toLowerCase().includes("print"));
    }
    if (selectedFilter === "product") {
      return projects.filter((p) => p.category.toLowerCase().includes("product") || p.category.toLowerCase().includes("ux"));
    }
    if (selectedFilter === "illustration") {
      return projects.filter((p) => p.category.toLowerCase().includes("illustration"));
    }
    return projects;
  }, [selectedFilter]);

  return (
    <section id="work" className="relative bg-[var(--ink)] py-24 md:py-36">
      <div className="section-shell">
        <Reveal className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              <p className="mono text-[var(--accent)]">02 — Selected work</p>
            </div>
            <h2 className="display max-w-xl text-5xl leading-[.88] md:text-7xl">
              A few things
              <br />
              <em className="text-white/45 font-light">I made real.</em>
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-sm leading-relaxed text-white/50">
              Curated projects across 3D image-making, editorial systems, brand identities and digital interfaces.
            </p>
          </div>
        </Reveal>

        {/* Filter Pills */}
        <div className="mb-10 flex flex-wrap items-center gap-2 border-b border-white/10 pb-6">
          {filterCategories.map((cat) => {
            const isSelected = selectedFilter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedFilter(cat.id)}
                className={`mono relative rounded-full px-4 py-2 text-[.6rem] transition-all duration-300 ${
                  isSelected
                    ? "bg-[var(--paper)] text-[var(--ink)] shadow-md font-medium"
                    : "border border-white/15 bg-white/5 text-white/60 hover:border-white/30 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
          <span className="mono ml-auto hidden sm:inline-block text-[.58rem] text-white/35">
            Showing {filteredProjects.length} of {projects.length}
          </span>
        </div>

        {/* Grid of Projects */}
        <motion.div layout className="grid gap-6 md:grid-cols-2 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <WorkCard key={project.slug} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
          <div className="flex items-center gap-3 text-white/50 text-sm">
            <Sparkles size={16} className="text-[var(--accent)]" />
            <span>Looking for custom commissions or freelance collaborations?</span>
          </div>

          <Link
            href="/#contact"
            className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm text-white/80 transition-all hover:bg-white hover:text-[var(--ink)] hover:border-white"
          >
            <span>Start a conversation</span>
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

