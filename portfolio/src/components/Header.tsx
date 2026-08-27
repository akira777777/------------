"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="relative font-display text-base tracking-wide text-white/70 hover:text-white transition-colors duration-300"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block font-display text-lg tracking-wide text-white/70 hover:text-white transition-colors duration-300 py-3 border-b border-white/5"
    >
      {children}
    </Link>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#works", label: "Работы" },
    { href: "/#vision", label: "Подход" },
    { href: "/#about", label: "Обо мне" },
    { href: "/#contact", label: "Контакты" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? "glass-nav py-4 px-6 md:px-12 shadow-lg shadow-black/20"
          : "bg-transparent backdrop-blur-sm border-b border-white/5 py-6 px-6 md:px-12"
      }`}
    >
      <div className="flex items-center justify-between max-w-[1200px] mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl font-medium tracking-wider text-white hover:opacity-80 transition-opacity"
        >
          PORTFOLIO
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA button */}
        <Link
          href="/#contact"
          className="hidden md:inline-flex px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium tracking-wide text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
        >
          Написать мне
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
            <nav className="pt-4 pb-2 max-w-[1200px] mx-auto flex flex-col">
              {navLinks.map((link) => (
                <MobileNavLink
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </MobileNavLink>
              ))}
              <div className="pt-4">
                <Link
                  href="/#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-all"
                >
                  Написать мне
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
