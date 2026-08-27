"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowUpRight, Check, Copy, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/portfolio";
import { Reveal } from "./Reveal";

const socials = [
  { name: "Behance", url: "https://behance.net" },
  { name: "Instagram", url: "https://instagram.com" },
  { name: "Telegram", url: "https://t.me" },
  { name: "Are.na", url: "https://are.na" },
  { name: "LinkedIn", url: "https://linkedin.com" },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");

  const subject = encodeURIComponent("Project enquiry — Visual identity / 3D");
  const body = encodeURIComponent(
    `Hi Elizaveta,\n\nI would love to discuss a project with you.\n\nProject details:\n- Timeline:\n- Scope / Deliverables:\n\nLooking forward to hearing from you!`
  );
  const href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Europe/Prague",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative bg-[var(--ink)] py-24 md:py-36 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[var(--accent)]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="section-shell relative z-10">
        <Reveal>
          <div className="flex items-center gap-2 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            <p className="mono text-[var(--accent)]">05 — Get in touch</p>
          </div>

          <div className="grid gap-12 md:grid-cols-[1.2fr_.8fr] md:items-end justify-between">
            <div>
              <h2 className="display max-w-3xl text-6xl leading-[.85] md:text-8xl lg:text-9xl text-white">
                Have an idea
                <br />
                <em className="text-white/40 font-light">worth making?</em>
              </h2>
            </div>

            <div className="max-w-md">
              <p className="text-base leading-relaxed text-white/60">
                Tell me what you are building, changing, or trying to make people feel. Let’s create something enduring together.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={href}
                  className="group inline-flex items-center gap-3 rounded-full bg-[var(--paper)] px-6 py-3.5 text-sm font-medium text-[var(--ink)] transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-lg shadow-white/5"
                >
                  <Mail size={16} />
                  <span>Send Email</span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3.5 text-sm text-white/80 transition-all hover:border-white/40 hover:bg-white/10 active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check size={16} className="text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied to clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={15} />
                      <span>{siteConfig.email}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Status info */}
              <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-white/45">
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  <span>Prague, Czech Republic</span>
                </div>
                {time && (
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Prague Time: {time}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="mono text-[.6rem] text-white/35 mr-2">Channels:</span>
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[.6rem] text-white/60 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  {s.name} ↗
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="mono inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[.6rem] text-white/60 transition-all hover:border-white hover:text-white active:scale-95"
            >
              <span>Back to top</span>
              <ArrowUp size={14} />
            </button>
          </div>

          {/* Subfooter */}
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[.6rem] text-white/30 border-t border-white/5 pt-6">
            <span className="mono">
              © {new Date().getFullYear()} {siteConfig.name}. All visual works copyright protected.
            </span>
            <span className="mono">
              Crafted with Next.js & Framer Motion / Central Europe
            </span>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}

