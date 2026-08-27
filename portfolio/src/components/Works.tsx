"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/portfolio";
import WorkCard from "./WorkCard";
import { Reveal } from "./Reveal";

export default function Works() {
  return <section id="work" className="bg-[var(--ink)] py-24 md:py-36"><div className="section-shell"><Reveal className="mb-14 flex items-end justify-between gap-8"<><div><p className="mono mb-5 text-[var(--accent)]">02 — Selected work</p><h2 className="display max-w-xl text-5xl leading-[.9] md:text-7xl">A few things<br /><em className="text-white/45">I made real.</em></h2></div><p className="hidden max-w-xs text-sm leading-relaxed text-white/45 md:block">Seven projects across image-making, editorial systems, identity and interface design.</p></Reveal><div className="grid gap-5 md:grid-cols-2 md:gap-7">{projects.map((project, index) => <WorkCard key={project.slug} project={project} index={index} />)}</div><Link href="/#contact" className="group mt-12 inline-flex items-center gap-3 border-b border-white/25 pb-2 text-sm text-white/65 transition-colors hover:border-white hover:text-white">Have a project in mind? <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link></div></section>;
}
