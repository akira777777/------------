"use client";

import { useState } from "react";
import WorkCard, { WorkCardProps } from "./WorkCard";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, X, ExternalLink, Sparkles } from "lucide-react";

const works: WorkCardProps[] = [
  {
    id: "1",
    title: "Ночь в лаборатории",
    subtitle: "Постер / цифровая коллажность",
    description:
      "Исследование тёмной материи через свет и тень. Работа создана с использованием нейросетевых инструментов и ручной доводки в Photoshop. Формат: 70x100 см, печать на глянцевой бумаге с UV-ламинированием.",
    image: "https://images.unsplash.com/photo-1550684638-9c3a806e1e89?w=1200&q=85",
    category: "постер",
    link: "#",
  },
  {
    id: "2",
    title: "Кристаллы",
    subtitle: "Фотография / манипуляция",
    description:
      "Макро-фотография минералов с многоуровневой обработкой. Эксперимент с прозрачностью, преломлением и внутренним свечением. Изображение построено как объект самостоятельного исследования.",
    image: "https://images.unsplash.com/photo-1618514753924-1577bd29f2a2?w=1200&q=85",
    category: "фотография",
    link: "#",
  },
  {
    id: "3",
    title: "Тень города",
    subtitle: "Бренд / айдентика",
    description:
      "Система визуального языка для архитектурного бюро. Логотип, гайдлайн, применение в интерьерах и на носителях. Работа о форме и тени как о взаимозависимых началах.",
    image: "https://images.unsplash.com/photo-1600607686527-6fb866b9b92d?w=1200&q=85",
    category: "бренд",
    link: "#",
  },
  {
    id: "4",
    title: "Бумажный лес",
    subtitle: "Коллаж / текстура",
    description:
      "Трёхслойная композиция из бумаги, акрила и цифровой обработки. Каждая бумага — это отдельный материал с собственной историей. Работа о памяти, сохранении и разрушении.",
    image: "https://images.unsplash.com/photo-1541963463532-d6829dfc1d0b?w=1200&q=85",
    category: "коллаж",
    link: "#",
  },
  {
    id: "5",
    title: "Неон",
    subtitle: "Типографика / свет",
    description:
      "Эксперимент с неоновыми вывесками и их цифровым двойником. Сетка, ритм, свет — три кита композиции. Работа в формате 24x36 см, выполнена на светодиодах.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c7f48a?w=1200&q=85",
    category: "типографика",
    link: "#",
  },
  {
    id: "6",
    title: "Структура",
    subtitle: "Геометрия / паттерн",
    description:
      "Генеративный паттерн, построенный на основе математических последовательностей. Каждое повторение — это вариация предыдущего. Работа о порядке и случайности.",
    image: "https://images.unsplash.com/photo-1507208773363-4b945e5c0bdd?w=1200&q=85",
    category: "графика",
    link: "#",
  },
];

const categories = ["все", "постер", "фотография", "бренд", "коллаж", "типографика", "графика"];

export default function Works() {
  const [selectedCategory, setSelectedCategory] = useState("все");
  const [activeModalWork, setActiveModalWork] = useState<WorkCardProps | null>(null);

  const filteredWorks =
    selectedCategory === "все"
      ? works
      : works.filter((w) => w.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="works" className="relative section-padding scroll-mt-12">
      {/* Section header */}
      <div className="container-narrow mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-5"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium tracking-widest uppercase text-white/60">
            портфолио
          </span>

          <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              Выбранные работы
            </span>
          </h2>

          <p className="text-body max-w-md text-white/40 leading-relaxed text-sm md:text-base">
            Кураторская подборка проектов: от постерной графики до сложных айдентик и световых инсталляций.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-4">
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                    isSelected
                      ? "bg-white text-black shadow-md shadow-white/10"
                      : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Grid */}
      <motion.div layout className="container-wide grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredWorks.map((work) => (
            <motion.div
              layout
              key={work.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <WorkCard {...work} onSelect={() => setActiveModalWork(work)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* View all CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="container-narrow mt-16 text-center"
      >
        <Link
          href="/#contact"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium tracking-wide hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
        >
          Обсудить проект
          <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </motion.div>

      {/* Project Detail Modal / Lightbox */}
      <AnimatePresence>
        {activeModalWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalWork(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-[#111114] border border-white/15 shadow-2xl max-h-[90vh] flex flex-col"
            >
              {/* Close button */}
              <button
                onClick={() => setActiveModalWork(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 border border-white/20 text-white/80 hover:text-white hover:bg-black/90 transition-all"
                aria-label="Закрыть"
              >
                <X size={18} />
              </button>

              {/* Large Image Preview */}
              <div className="relative aspect-[16/10] w-full bg-black overflow-hidden shrink-0">
                <img
                  src={activeModalWork.image}
                  alt={activeModalWork.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details Content */}
              <div className="p-6 md:p-8 overflow-y-auto">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] font-medium tracking-widest uppercase text-white/90">
                    {activeModalWork.category}
                  </span>
                  <span className="text-xs text-white/40 font-mono">
                    {activeModalWork.subtitle}
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl text-white font-medium mb-4">
                  {activeModalWork.title}
                </h3>

                <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6">
                  {activeModalWork.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-white/40">
                    <Sparkles size={14} className="text-white/60" />
                    <span>Кураторский проект</span>
                  </div>

                  <Link
                    href="/#contact"
                    onClick={() => setActiveModalWork(null)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-medium tracking-wide hover:bg-white/90 transition-all"
                  >
                    <span>Заказать похожий</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
