"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/portfolio";

export default function Hero() {
  const reduced = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 90, damping: 20 });
  const y = useSpring(pointerY, { stiffness: 90, damping: 20 });
  const imageX = useTransform(x, [-0.5, 0.5], ["-2%", "2%"]);
  const imageY = useTransform(y, [-0.5, 0.5], ["-2%", "2%"]);
  const ref = useRef<HTMLElement>(null);

  const handleMove = (event: React.PointerEvent<HTMLElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      ref={ref}
      id="hero"
      onPointerMove={handleMove}
      onPointerLeave={reset}
      className="relative min-h-screen overflow-hidden px-4 pb-16 pt-32 md:px-8 md:pt-40"
    >
      <div className="grain" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_34%,rgba(168,183,154,.13),transparent_27%),linear-gradient(180deg,#080908,#111311_72%,#080908)]" />

      <div className="site-shell relative flex min-h-[calc(100vh-10rem)] flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="mono text-white/45">Selected work / 2022—24</span>
          <span className="mono text-white/45">01 — 05</span>
        </div>

        <div className="grid items-center gap-10 py-16 md:grid-cols-[1.15fr_.85fr] md:gap-16">
          <div>
            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mono mb-6 text-[var(--accent)]"
            >
              {siteConfig.role}
            </motion.p>

            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.12 }}
              className="display max-w-4xl text-[clamp(4rem,10vw,9.5rem)] leading-[.82]"
            >
              Images
              <br />
              <em className="text-white/55">with a pulse.</em>
            </motion.h1>

            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 max-w-md text-base leading-relaxed text-white/55"
            >
              I build visual identities, editorial worlds and image-led experiences for ideas with
              something to say.
            </motion.p>

            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link
                href="/#work"
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--paper)] px-5 py-3 text-sm text-[var(--ink)] transition-transform hover:-translate-y-1"
              >
                View selected work{" "}
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-sm text-white/70 transition-colors hover:border-white/50 hover:text-white"
              >
                Start a conversation
              </Link>
            </motion.div>
          </div>

          <motion.div
            style={reduced ? undefined : { x: imageX, y: imageY }}
            initial={false}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto aspect-[.82] w-[min(78vw,430px)]"
          >
            <div className="hero-lens absolute inset-0 rounded-[48%_52%_45%_55%/44%_42%_58%_56%] p-3">
              <div className="relative h-full w-full overflow-hidden rounded-[inherit] bg-[#38333e]">
                <Image
                  src="/work/chrome/head.webp"
                  alt="Sculpted head wearing a chrome mask"
                  fill
                  priority
                  sizes="(max-width: 768px) 78vw, 430px"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <span className="mono absolute -bottom-6 -left-4 text-white/40">Chrome Forms / 03</span>
            <span className="absolute -right-8 top-10 h-16 w-16 rounded-full border border-white/20" />
          </motion.div>
        </div>

        <div className="flex items-end justify-between border-t border-white/15 pt-4">
          <span className="mono max-w-[220px] text-white/35">
            A practice between the tactile and the synthetic.
          </span>
          <Link
            href="/#work"
            className="group flex items-center gap-2 text-sm text-white/50 hover:text-white"
          >
            Scroll to explore{" "}
            <ArrowDownRight
              size={16}
              className="transition-transform group-hover:translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
