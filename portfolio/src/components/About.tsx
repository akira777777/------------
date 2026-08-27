import Link from "next/link";
import { ArrowUpRight, Award, Compass } from "lucide-react";
import { Reveal } from "./Reveal";
import { siteConfig } from "@/lib/portfolio";

const tools = [
  "Blender & 3D",
  "Cinema 4D",
  "Figma",
  "After Effects",
  "Adobe InDesign",
  "Adobe Illustrator",
  "Glyphs Type",
  "Print & Risograph",
];

const highlights = [
  { label: "Location", value: "Europe / Remote" },
  { label: "Experience", value: "5+ Years Practice" },
  { label: "Focus", value: "3D, Editorial & Identity" },
  { label: "Status", value: "Open for new commissions" },
];

export default function About() {
  return (
    <section id="about" className="relative bg-[var(--paper)] py-24 text-[var(--ink)] md:py-36 overflow-hidden">
      <div className="section-shell">
        <Reveal>
          <div className="flex items-center gap-2 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--ink)]/40" />
            <p className="mono text-black/50">04 — About the Practice</p>
          </div>

          <div className="grid gap-12 md:grid-cols-[1.1fr_.9fr] md:items-start">
            <div>
              <h2 className="display max-w-2xl text-5xl leading-[.88] md:text-7xl lg:text-8xl text-[var(--ink)]">
                I care about the
                <br />
                <em className="text-black/40 font-light">afterimage.</em>
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-black/80 font-normal">
                {siteConfig.name} is an independent {siteConfig.role.toLowerCase()} based in Central Europe, working with cultural institutions, visionary founders, and forward-thinking studios worldwide.
              </p>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-black/60">
                The work balances sensory image-making with meticulous editorial systems. Whether sculpting reflective chrome materials in 3D or crafting a comprehensive museum identity, every visual decision serves to articulate a distinct voice.
              </p>

              {/* Highlights List */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 border-y border-black/15 py-6">
                {highlights.map((item) => (
                  <div key={item.label}>
                    <span className="mono text-[.55rem] text-black/40 block mb-1">{item.label}</span>
                    <span className="text-xs font-medium text-black/85">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-6 py-3 text-sm text-[var(--paper)] transition-all hover:bg-black hover:scale-105 active:scale-95"
                >
                  <span>Let’s work together</span>
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>

                <a
                  href={`mailto:${siteConfig.email}?subject=Portfolio%20Inquiry`}
                  className="inline-flex items-center gap-2 rounded-full border border-black/20 px-6 py-3 text-sm text-black/70 transition-colors hover:border-black hover:text-black"
                >
                  <span>Email directly</span>
                </a>
              </div>
            </div>

            {/* Right Column: Tools & Process */}
            <div className="rounded-3xl border border-black/10 bg-black/[0.03] p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Compass size={20} className="text-black/60" />
                <h3 className="mono text-xs tracking-widest text-black/80">Toolkit & Media</h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="mono rounded-full border border-black/15 bg-white/60 px-3.5 py-1.5 text-[.6rem] text-black/75 shadow-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-black/10">
                <div className="flex items-center gap-3 mb-3">
                  <Award size={18} className="text-black/60" />
                  <h4 className="mono text-[.65rem] tracking-wider text-black/80">Approach</h4>
                </div>
                <p className="text-sm leading-relaxed text-black/65">
                  Available for full-scale visual identities, 3D concept development, art direction, and collaborative design projects across timezone boundaries.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
