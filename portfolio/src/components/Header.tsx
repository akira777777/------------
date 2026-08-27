"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/portfolio";

const links = [
  { href: "/#work", id: "work", label: "Work" },
  { href: "/#practice", id: "practice", label: "Practice" },
  { href: "/#about", id: "about", label: "About" },
  { href: "/#contact", id: "contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [time, setTime] = useState("");

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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["work", "practice", "about", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-8">
        <div className="site-shell glass-nav flex items-center justify-between rounded-full px-4 py-3 md:px-6">
          {/* Brand */}
          <Link
            href="/"
            className="mono flex items-center gap-2.5 text-[.62rem] tracking-[.18em] text-white/90 hover:text-white transition-opacity"
            onClick={() => setOpen(false)}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
            </span>
            <span>{siteConfig.name.toUpperCase()}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
            {links.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`mono relative transition-colors duration-300 ${
                    isActive ? "text-white font-medium" : "text-white/55 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activePill"
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[var(--accent)] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA & Time */}
          <div className="flex items-center gap-3">
            {time && (
              <span className="mono hidden lg:inline-block rounded-full border border-white/10 px-3 py-1.5 text-[.58rem] text-white/40">
                Prague • {time}
              </span>
            )}

            <Link
              href="/#contact"
              className="mono hidden rounded-full bg-[var(--paper)] px-4 py-2 text-[.6rem] text-black transition-all hover:bg-white hover:shadow-lg hover:shadow-white/10 md:block active:scale-95"
            >
              Start a project ↗
            </Link>

            <button
              type="button"
              className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {open && (
            <motion.nav
              id="mobile-nav"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="site-shell glass-nav mt-2 rounded-3xl p-6 md:hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col">
                {links.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`display flex items-center justify-between border-b border-white/10 py-4 text-3xl transition-colors ${
                        isActive ? "text-white font-normal" : "text-white/60 hover:text-white"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />}
                    </Link>
                  );
                })}
                <div className="pt-6">
                  <Link
                    href="/#contact"
                    onClick={() => setOpen(false)}
                    className="mono block w-full rounded-full bg-[var(--paper)] px-4 py-3 text-center text-[.65rem] text-[var(--ink)] hover:bg-white"
                  >
                    Start a project ↗
                  </Link>
                  {time && (
                    <p className="mono mt-4 text-center text-[.58rem] text-white/35">
                      Local time in Prague: {time}
                    </p>
                  )}
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
  );
}
