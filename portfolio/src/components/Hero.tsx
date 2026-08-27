"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      staggerChildren: 0.15,
    },
  },
};

const wordVariant = (delay: number) => ({
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay,
    },
  },
});

const floatingOrb = (delay: number, index: number) => ({
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1 + Math.sin(index * 0.5) * 0.1,
    opacity: 0.6 + Math.cos(index * 0.3) * 0.2,
    transition: {
      duration: 8 + index * 0.5,
      delay,
      repeat: Infinity,
    },
  },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 pt-32 pb-24"
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />

      {/* Ambient glow — плавающие атмосферные элементы */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          variants={floatingOrb(i * 0.3, i)}
          initial="hidden"
          animate="visible"
          className="absolute rounded-full blur-3xl pointer-events-none"
          style={{
            width: 400 + i * 120,
            height: 400 + i * 120,
            top: `${15 + i * 18}%`,
            left: `${10 + i * 16}%`,
            background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, ${0.03 + i * 0.01}) 0%, transparent 70%)`,
          }}
        />
      ))}

      {/* Subtle gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none" />

      {/* Hero content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="text-lg md:text-xl text-white/50 font-light tracking-wide mb-6"
        >
          графический дизайнер — визуальный рассказчик
        </motion.p>

        {/* Main heading */}
        <motion.h1
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="text-display text-hero text-white mb-8 leading-[0.9] text-balance"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/60">
            создаю
          </span>{" "}
          <motion.span variants={wordVariant(0.1)} className="font-display text-hero text-white">
            визуальные
          </motion.span>{" "}
          <motion.span variants={wordVariant(0.2)} className="font-display text-hero text-white">
            истории
          </motion.span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-body max-w-xl mx-auto mb-12 text-white/40"
        >
          Работаю с формой, светом, текстурой и композицией. Каждый проект — это продолжение предыдущего, шаг вперёд к более точному выражению идеи.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/#works"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium tracking-wide hover:bg-white/10 transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Смотреть работы
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full" />
          </Link>

          <a
            href="/#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-transparent border border-white/10 text-white/60 font-medium tracking-wide hover:text-white hover:border-white/30 transition-all duration-500"
          >
            Обсудить проект
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
        >
          <span className="text-xs tracking-[0.3em] uppercase">листайте</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </div>

      {/* Decorative corner accents */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ delay: 2.2, duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-0 left-0 w-32 h-32 border-l border-t border-white/5 rounded-tr-[100px]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ delay: 2.6, duration: 1.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-40 h-40 border-r border-b border-white/5 rounded-bl-[120px]"
      />
    </section>
  );
}
