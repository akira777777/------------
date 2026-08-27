"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

function NavLink({ href, label, isActive }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`relative font-display text-sm tracking-wider uppercase transition-colors duration-300 ${
        isActive ? "text-white font-medium" : "text-white/60 hover:text-white"
      }`}
    >
      {label}
      {isActive && (
        <motion.span
          layoutId="activeNav"
          className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-white rounded-full"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
}

function MobileNavLink({ href, label, isActive, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center justify-between font-display text-lg tracking-wide py-3.5 border-b border-white/5 transition-colors duration-300 ${
        isActive ? "text-white font-medium" : "text-white/60 hover:text-white"
      }`}
    >
      <span>{label}</span>
      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
    </Link>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["works", "vision", "about", "contact"];
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

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#works", id: "works", label: "Работы" },
    { href: "/#vision", id: "vision", label: "Подход" },
    { href: "/#about", id: "about", label: "Обо мне" },
    { href: "/#contact", id: "contact", label: "Контакты" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? "glass-nav py-4 px-6 md:px-12 shadow-lg shadow-black/30"
          : "bg-transparent backdrop-blur-sm border-b border-white/5 py-6 px-6 md:px-12"
      }`}
    >
      <div className="flex items-center justify-between max-w-[1200px] mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="group font-display text-lg font-medium tracking-widest text-white flex items-center gap-2 transition-opacity"
        >
          <span className="w-2 h-2 rounded-full bg-white group-hover:scale-125 transition-transform" />
          <span>PORTFOLIO</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              isActive={activeSection === link.id}
            />
          ))}
        </nav>

        {/* CTA button */}
        <Link
          href="/#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-wider uppercase text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
        >
          <span>Написать</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </Link>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden md:hidden"
          >
            <nav className="pt-4 pb-4 max-w-[1200px] mx-auto flex flex-col">
              {navLinks.map((link) => (
                <MobileNavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  isActive={activeSection === link.id}
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              ))}
              <div className="pt-5">
                <Link
                  href="/#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-all"
                >
                  <span>Написать мне</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
