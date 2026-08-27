"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Share2 } from "lucide-react";
import clsx from "clsx";

export type WorkCardProps = {
  id: string;
  title: string;
  category: string;
  description: string;
  subtitle: string;
  image: string;
  link: string;
};

export default function WorkCard({
  id,
  title,
  category,
  description,
  subtitle,
  image,
  link,
}: WorkCardProps) {
  return (
    <motion.div
      layoutId={`work-${id}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative w-full overflow-hidden rounded-2xl bg-[#0f0f11] border border-white/10 cursor-pointer focus-within:ring-2 focus-within:ring-white/30 focus-within:outline-none"
    >
      {/* Background gradient that shifts on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Image with lazy loading */}
      <div className="relative aspect-[3/2] w-full overflow-hidden">
        <motion.img
          key={id}
          src={image}
          alt={title}
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          style={{ zIndex: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f11] via-[#0f0f11]/20 to-transparent" />
      </div>

      {/* Content card */}
      <div className="relative px-6 py-5 -mt-8">
        <div className="glass-panel rounded-xl p-4 transition-all duration-500 group-hover:border-white/20 group-hover:shadow-lg group-hover:shadow-black/30">
          {/* Category badge */}
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium tracking-wider uppercase text-white/60 mb-3">
            {category}
            <Share2 size={12} className="opacity-40" />
          </span>

          {/* Title */}
          <h3 className="font-display text-xl text-white leading-tight mb-2 group-hover:text-white/90 transition-colors">
            {title}
          </h3>

          {/* Subtitle (year) */}
          <div className="flex items-center gap-3 text-[11px] text-white/40 uppercase tracking-wider mb-3">
            <span>{subtitle}</span>
          </div>

          {/* Description */}
          <p className="text-[11px] text-white/50 leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>

          {/* Links */}
          <div className="flex items-center gap-2">
            <Link
              href={link || "#"}
              target={link && link !== "#" ? "_blank" : undefined}
              rel={link && link !== "#" ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all group/link"
            >
              <ExternalLink size={14} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              Live
            </Link>

            <Link
              href={link || "#"}
              target={link && link !== "#" ? "_blank" : undefined}
              rel={link && link !== "#" ? "noopener noreferrer" : undefined}
              className={clsx(
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[11px] font-medium tracking-wide transition-all",
                link
                  ? "bg-white/5 border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/30"
                  : "bg-white text-black hover:bg-white/90"
              )}
            >
              Смотреть проект
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
