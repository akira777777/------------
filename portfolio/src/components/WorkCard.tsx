"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Share2 } from "lucide-react";
import clsx from "clsx";

export interface WorkCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  subtitle: string;
  image: string;
  link?: string;
  onSelect?: () => void;
}

export default function WorkCard({
  id,
  title,
  category,
  description,
  subtitle,
  image,
  link,
  onSelect,
}: WorkCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group relative w-full overflow-hidden rounded-2xl bg-[#0f0f11] border border-white/10 hover:border-white/20 transition-colors duration-500"
    >
      {/* Top Image area with hover zoom */}
      <div
        onClick={onSelect}
        className="relative aspect-[16/10] w-full overflow-hidden cursor-pointer"
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f11] via-[#0f0f11]/30 to-transparent" />

        {/* Floating Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/60 border border-white/15 backdrop-blur-md text-[10px] font-medium tracking-widest uppercase text-white/80">
            {category}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 md:p-7">
        <div className="flex items-baseline justify-between gap-4 mb-2">
          <h3
            onClick={onSelect}
            className="font-display text-xl md:text-2xl text-white font-medium hover:text-white/80 transition-colors cursor-pointer"
          >
            {title}
          </h3>
          <span className="text-xs text-white/40 font-mono shrink-0">{subtitle}</span>
        </div>

        <p className="text-xs md:text-sm text-white/50 leading-relaxed mb-6 line-clamp-2">
          {description}
        </p>

        {/* Card Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <button
            onClick={onSelect}
            className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-white/70 hover:text-white transition-colors group/btn"
          >
            <span>Подробнее</span>
            <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>

          {link && link !== "#" && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium tracking-wide text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              <span>Live</span>
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
