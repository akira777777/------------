"use client";

import { motion } from "framer-motion";
import { Sparkles, PenLine, Palette, LayoutGrid, Minus } from "lucide-react";

const manifestoPoints = [
  {
    num: "01",
    icon: <LayoutGrid size={20} />,
    title: "Композиция — это ритм",
    text:
      "Каждый элемент на странице имеет своё место и свою функцию. Пустота не просто остаётся пустой — она работает. Пауза между заголовком и текстом важнее, чем кажется.",
  },
  {
    num: "02",
    icon: <Palette size={20} />,
    title: "Свет формирует форму",
    text:
      "Даже в цифровой среде свет — это не просто подсветка. Это инструмент выделения, разделения пространства, создания глубины. Тень всегда имеет свою сторону.",
  },
  {
    num: "03",
    icon: <PenLine size={20} />,
    title: "Текст как объект",
    text:
      "Шрифт — это не просто способ передать информацию. Это визуальный элемент с весом, текстурой, характером. Буква может быть формой. Заголовок — частью композиции.",
  },
  {
    num: "04",
    icon: <Sparkles size={20} />,
    title: "Меньше — не значит хуже",
    text:
      "Сложность не требует шума. Истинная сложность рождается из точного понимания каждой детали. Убрать лишнее — значит сделать больше.",
  },
];

export default function Vision() {
  return (
    <section id="vision" className="relative py-24 bg-[#0d0d0d] scroll-mt-12">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-64 w-96 h-96 bg-purple-900/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -left-48 w-[400px] h-[400px] bg-blue-900/5 rounded-full blur-[140px]" />
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
            подход
          </span>

          <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mt-6 mb-4">
            О том, как я вижу дизайн
          </h2>

          <p className="text-body max-w-md text-white/40 leading-relaxed text-sm md:text-base">
            Это не манифест в привычном смысле. Это набор принципов, которые я применяю на практике — иногда осознанно, иногда интуитивно.
          </p>
        </motion.div>

        {/* Manifesto cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {manifestoPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-2xl p-8 md:p-10 group glass-panel-hover flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Icon */}
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/70 group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
                    {point.icon}
                  </div>
                  {/* Number indicator */}
                  <span className="font-mono text-xs text-white/30 tracking-widest group-hover:text-white/60 transition-colors">
                    {point.num}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl md:text-2xl text-white mb-3 group-hover:text-white/95 transition-colors">
                  {point.title}
                </h3>
                <p className="text-body text-white/40 text-sm leading-relaxed group-hover:text-white/50 transition-colors">
                  {point.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-12 p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl"
        >
          <div className="flex items-start md:items-center gap-4 text-white/60">
            <Minus size={20} className="shrink-0 mt-0.5 md:mt-0 text-white/40" />
            <p className="text-sm md:text-base tracking-wide leading-relaxed font-light">
              Дизайн — это не про стиль. Это про точность. Про то, чтобы каждый элемент выполнял свою работу без лишнего визуального шума.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
