"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, MapPin, ArrowUpRight, Check, Copy } from "lucide-react";

const tools = [
  "Photoshop",
  "Illustrator",
  "Figma",
  "Midjourney",
  "Blender",
  "Cinema 4D",
  "After Effects",
  "InDesign",
];

export default function About() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@portfolio.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="relative py-24 bg-[#0a0a0a] scroll-mt-12">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-white/2 via-white/5 to-transparent rounded-full blur-[180px] opacity-20" />
      </div>

      <div className="container-narrow relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium tracking-widest uppercase text-white/60">
            обо мне
          </span>

          <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mt-6 mb-4">
            Кто стоит за работами
          </h2>

          <p className="text-body max-w-md text-white/40 leading-relaxed text-sm md:text-base">
            Не сухая биография, а ключевые аспекты подхода, опыта и используемых инструментов.
          </p>
        </motion.div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="glass-panel rounded-2xl p-8 md:p-12"
        >
          <div>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6 font-light">
              Я графический дизайнер и визуальный исследователь. Моя специализация —{" "}
              <span className="text-white/60">
                постерная графика, коллажность, световые эксперименты, типографика и цифровой брендинг.
              </span>
            </p>

            <p className="text-sm md:text-base text-white/50 leading-relaxed mb-8 font-light">
              Подхожу к каждому проекту как к исследовательской задаче: что можно выразить этой формой? Как свет ведёт взгляд зрителя? Где проходит граница между декоративным приёмом и смысловым акцентом?
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { label: "Лет в дизайне", value: "5+" },
                { label: "Завершённых проектов", value: "40+" },
                { label: "Награды & выставки", value: "12" },
                { label: "Внимание к деталям", value: "100%" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300"
                >
                  <div className="font-display text-2xl md:text-3xl text-white mb-1 font-medium">
                    {item.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Tools Stack */}
            <div>
              <div className="text-xs uppercase tracking-widest text-white/40 mb-3 font-mono">
                Инструменты & Стек:
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-wide text-white/70 hover:text-white hover:border-white/30 transition-all cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact info bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-between gap-4 text-white/50 text-sm"
        >
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group cursor-pointer"
              title="Нажмите чтобы скопировать"
            >
              <Mail size={16} className="group-hover:scale-110 transition-transform" />
              <span>hello@portfolio.com</span>
              {copied ? (
                <Check size={14} className="text-emerald-400" />
              ) : (
                <Copy size={13} className="text-white/30 group-hover:text-white/70" />
              )}
            </button>
            <span className="text-white/20 hidden sm:inline">•</span>
            <div className="flex items-center gap-2 text-white/50">
              <MapPin size={16} />
              <span>Москва, РФ</span>
            </div>
          </div>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-wide uppercase text-white hover:bg-white/10 hover:border-white/20 transition-all group"
          >
            <span>Связаться со мной</span>
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
