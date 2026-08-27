"use client";

import WorkCard from "./WorkCard";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const works = [
  {
    id: "1",
    title: "Ночь в лаборатории",
    subtitle: "Постер / цифровая коллажность",
    description:
      "Исследование тёмной материи через свет и тень. Работа создана с использованием нейросетевых инструментов и ручной доводки в Photoshop. Формат: 70x100 см, печать на глянцевой бумаге с UV-ламинированием.",
    image: "https://images.unsplash.com/photo-1550684638-9c3a806e1e89?w=800&q=80",
    category: "постер",
    link: "#",
  },
  {
    id: "2",
    title: "Кристаллы",
    subtitle: "Фотография / манипуляция",
    description:
      "Макро-фотография минералов с многоуровневой обработкой. Эксперимент с прозрачностью, преломлением и внутренним свечением. Изображение построено как объект самостоятельного исследования.",
    image: "https://images.unsplash.com/photo-1618514753924-1577bd29f2a2?w=800&q=80",
    category: "фотография",
    link: "#",
  },
  {
    id: "3",
    title: "Тень города",
    subtitle: "Бренд / айдентика",
    description:
      "Система визуального языка для архитектурного бюро. Логотип, гайдлайн, применение в интерьерах и на носителях. Работа о форме и тени как о взаимозависимых началах.",
    image: "https://images.unsplash.com/photo-1600607686527-6fb866b9b92d?w=800&q=80",
    category: "бренд",
    link: "#",
  },
  {
    id: "4",
    title: "Бумажный лес",
    subtitle: "Коллаж / текстура",
    description:
      "Трёхслойная композиция из бумаги, акрила и цифровой обработки. Каждая бумага — это отдельный материал с собственной историей. Работа о памяти, сохранении и разрушении.",
    image: "https://images.unsplash.com/photo-1541963463532-d6829dfc1d0b?w=800&q=80",
    category: "коллаж",
    link: "#",
  },
  {
    id: "5",
    title: "Неон",
    subtitle: "Типографика / свет",
    description:
      "Эксперимент с неоновыми вывесками и их цифровым двойником. Сетка, ритм, свет — три кита композиции. Работа в формате 24x36 см, выполнена на светодиодах.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c7f48a?w=800&q=80",
    category: "типографика",
    link: "#",
  },
  {
    id: "6",
    title: "Структура",
    subtitle: "Геометрия / паттерн",
    description:
      "Генеративный паттерн, построенный на основе математических последовательностей. Каждое повторение — это вариация предыдущего. Работа о порядке и случайности.",
    image: "https://images.unsplash.com/photo-1507208773363-4b945e5c0bdd?w=800&q=80",
    category: "графика",
    link: "#",
  },
];

const staggerDelay = (index: number) => Math.max(0, index * 0.1);

export default function Works() {
  return (
    <section id="works" className="relative section-padding">
      {/* Section header */}
      <div className="container-narrow mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-6"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium tracking-widest uppercase text-white/60">
            портфолио
          </span>

          <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              Выбранные работы
            </span>
          </h2>

          <p className="text-body max-w-md text-white/40 leading-relaxed">
            Не полный список — это кураторская подборка проектов, которые мне близки по духу.
            Каждая работа — отдельный исследовательский путь.
          </p>
        </motion.div>
      </div>

      {/* Grid */}
      <div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {works.map((work, index) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.8,
              delay: staggerDelay(index),
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <WorkCard {...work} />
          </motion.div>
        ))}
      </div>

      {/* View all CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="container-narrow mt-16 text-center"
      >
        <Link
          href="/#contact"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium tracking-wide hover:bg-white/10 hover:border-white/20 transition-all duration-500 group"
        >
          Смотреть все работы
          <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </motion.div>
    </section>
  );
}
