"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#0a0a0a]">
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

          <p className="text-body max-w-md text-white/40 leading-relaxed">
            Не биография. Только то, что важно для понимания подхода и контекста работ.
          </p>
        </motion.div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-panel p-8 md:p-12"
        >
          <div className="prose prose-invert max-w-none">
            <p className="text-white/80 leading-relaxed mb-6 font-light">
              Я графический дизайнер, работающий с визуальными системами. Моя специализация —{" "}
              <span className="text-white/50 not-italic font-normal ml-2">
                постерная графика, коллажность, работа со светом и текстурой, типографические эксперименты.
              </span>
            </p>

            <p className="text-white/60 leading-relaxed mb-8 font-light">
              Подхожу к каждому проекту как к исследовательскому вопросу: что можно выразить этой формой? Как свет ведёт взгляд? Где граница между декоративным и содержательным?
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {[
                { label: "Лет опыта", value: "5+" },
                { label: "Проектов", value: "30+" },
                { label: "Стилей", value: "∞" },
                { label: "Кофе", value: "много" },
              ].map((item, i) => (
                <div key={i} className="text-center p-4 rounded-xl bg-white/3 border border-white/5 hover:bg-white/6 hover:border-white/10 transition-all duration-500">
                  <div className="font-display text-3xl text-white mb-1">{item.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {[
                "графика",
                "коллаж",
                "постер",
                "типографика",
                "бренд",
                "фотография",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium tracking-wide text-white/60 hover:text-white hover:border-white/30 transition-all cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-between gap-4 text-white/50 text-sm"
        >
          <div className="flex items-center gap-6">
            <a href="mailto:hello@portfolio.com" className="flex items-center gap-2 hover:text-white transition-colors group">
              <Mail size={16} className="group-hover:scale-110 transition-transform" />
              hello@portfolio.com
            </a>
            <span className="text-white/20">•</span>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              Москва, РФ
            </div>
          </div>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all group"
          >
            Написать мне
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
