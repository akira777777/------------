"use client";

import { ArrowUpRight, CircleDot, Layers3, ScanLine, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const principles = [
  {
    num: "01",
    icon: Layers3,
    title: "Make the system visible",
    text: "A strong identity is more than a logo. I build the rules, typographic rhythms and modular structures that let an idea keep speaking across mediums.",
    highlight: "Modular identity & grids",
  },
  {
    num: "02",
    icon: ScanLine,
    title: "Give images room",
    text: "Composition starts with attention. Space, pacing and a precise crop can make a single image or sculpture feel like a complete atmospheric world.",
    highlight: "Editorial pacing & negative space",
  },
  {
    num: "03",
    icon: CircleDot,
    title: "Keep the hand in it",
    text: "Digital polish is deeper when it still carries a trace of material, tactile paper grains, pencil strokes or an imperfect human gesture.",
    highlight: "Analogue & synthetic synthesis",
  },
  {
    num: "04",
    icon: Sparkles,
    title: "Move with intention",
    text: "Motion should reveal a spatial relationship or a focal shift. Every micro-transition has a purpose, then gets out of the way.",
    highlight: "Subtle choreography & physics",
  },
];

const capabilities = [
  "Visual Identity & Brand Systems",
  "3D Sculpture & Image-Making",
  "Editorial & Book Design",
  "Exhibition & Spatial Graphics",
  "Digital Product & UX/UI Concept",
  "Posters & Campaign Direction",
  "Type Direction & Custom Lettering",
  "Packaging & Print Production",
];

export default function Vision() {
  return (
    <section id="practice" className="relative bg-[#111311] py-24 md:py-36 overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[var(--accent)]/5 rounded-full blur-[140px] pointer-events-none -translate-x-1/2" />

      <div className="section-shell relative z-10">
        <Reveal className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            <p className="mono text-[var(--accent)]">03 — Practice & Principles</p>
          </div>
          <h2 className="display max-w-2xl text-5xl leading-[.88] md:text-7xl">
            Design is a
            <br />
            <em className="text-white/45 font-light">way of looking.</em>
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/50">
            A methodology forged between digital precision and tactile intuition. Four foundations that guide every commission.
          </p>
        </Reveal>

        {/* Principles Grid */}
        <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 md:grid-cols-2">
          {principles.map(({ num, icon: Icon, title, text, highlight }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative bg-[#111311] p-8 md:p-12 transition-colors duration-500 hover:bg-[#151815]"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--accent)] transition-colors group-hover:border-[var(--accent)]/40 group-hover:bg-[var(--accent)]/10">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <span className="mono text-[.6rem] text-white/35">{num}</span>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
                />
              </div>

              <h3 className="display mt-10 text-3xl md:text-4xl text-white group-hover:text-[var(--paper)] transition-colors">
                {title}
              </h3>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50 group-hover:text-white/70 transition-colors">
                {text}
              </p>

              <div className="mt-8 pt-4 border-t border-white/10">
                <span className="mono text-[.55rem] text-[var(--accent)] tracking-widest uppercase">
                  {highlight}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Disciplines & Capabilities */}
        <Reveal delay={0.2} className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 md:p-12">
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
            <div>
              <p className="mono text-[.6rem] text-[var(--accent)] mb-2">Capabilities</p>
              <h4 className="display text-3xl md:text-4xl text-white">
                What I bring <br />
                <span className="text-white/45 font-light">to the table.</span>
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white/80 transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:text-white"
                >
                  <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0" />
                  <span className="text-xs tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

