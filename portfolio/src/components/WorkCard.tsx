"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/portfolio";

export default function WorkCard({ project, index }: { project: Project; index: number }) {
  return <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: .7, delay: index * .06, ease: [0.16,1,.3,1] }} className="project-card group overflow-hidden rounded-[1.5rem]"><Link href={`/work/${project.slug}`} className="block"><div className="relative aspect-[1.2] overflow-hidden bg-[#20221f]"><Image src={project.cover.src} alt={project.cover.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#111311] via-transparent to-transparent opacity-75" /><span className="mono absolute left-5 top-5 rounded-full border border-white/20 bg-black/20 px-3 py-2 text-white/70 backdrop-blur-md">{project.category}</span><span className="card-arrow absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white/75"><ArrowUpRight size={18} /></span></div><div className="p-5 md:p-7"><div className="mb-6 flex items-center justify-between gap-4"><h3 className="display text-3xl md:text-4xl">{project.title}</h3><span className="mono shrink-0 text-white/40">{project.year}</span></div><p className="max-w-lg text-sm leading-relaxed text-white/55">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="mono rounded-full border border-white/15 px-2.5 py-1 text-white/45">{tag}</span>)}</div></div></Link></motion.article>;
}
