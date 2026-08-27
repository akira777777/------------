"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink, Share2 } from "lucide-react";

interface WorkCardProps {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  category: string;
  link?: string;
}

export default function WorkCard({ id, title, subtitle, description, image, category, link }: WorkCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const xSpring = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const ySpring = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(ySpring, [0, 1], ["-2deg", "2deg"]);
  const rotateY = useTransform(xSpring, [0, 1], ["2deg", "-2deg"]);
  const scale = useTransform(mouseX, [-200, 200], [0.98, 1.02]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={(e) => {
        const rect = (e.target as HTMLElement).getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      className="group relative w-full aspect-[3/4] md:aspect-[4/5] cursor-pointer"
    >
      <Link href={link || "#"}>
        <motion.div
          style={{ rotateX, rotateY, scale }}
          className="relative w-full h-full rounded-2xl overflow-hidden bg-neutral-900/30 border border-white/5 group-hover:border-white/15 transition-colors duration-500"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            loading="lazy"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />

          {/* Content overlay — appears on hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            className="absolute inset-0 p-6 flex flex-col justify-end pointer-events-none"
          >
            {/* Category tag */}
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium tracking-widest uppercase text-white/60 mb-4 backdrop-blur-md">
              {category}
            </span>

            {/* Title */}
            <h3 className="font-display text-2xl md:text-3xl text-white leading-none mb-2 group-hover:text-white/90 transition-colors">
              {title}
            </h3>

            {/* Subtitle */}
            {subtitle && (
              <p className="text-sm text-white/50 tracking-wide mb-4 line-clamp-1">
                {subtitle}
              </p>
            )}

            {/* Description — более подробное описание */}
            <p className="text-xs text-white/30 leading-relaxed line-clamp-2 mb-6">
              {description}
            </p>

            {/* Action buttons */}
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 text-xs font-medium text-white/70 group-hover:text-white transition-colors">
                Открыть проект
                <ArrowUpRight size={14} />
              </span>

              {/* Share button — условно */}
              <button
                type="button"
                className="p-2 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-[var(--glass-highlight)]"
                aria-label={`Поделиться проектом: ${title}`}
              >
                <Share2 size={14} />
              </button>
            </div>

            {/* External link indicator */}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all opacity-0 group-hover:opacity-100 focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-[var(--glass-highlight)]"
                aria-label={`Открыть ${title} во внешнем источнике`}
              >
                <ExternalLink size={14} />
              </a>
            )}
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
