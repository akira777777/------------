"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["-2px", "0px"]);

  return (
    <Link
      href={href}
      className="relative font-display text-lg tracking-wide text-gray-400 hover:text-white transition-colors duration-300"
      style={{ transform: `translateY(${y})` }}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="block font-display text-lg tracking-wide text-gray-400 hover:text-white transition-colors duration-300 py-2 border-b border-white/5"
    >
      {children}
    </Link>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuAnimating, setIsMenuAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuAnimating) return;
    setIsMenuAnimating(true);
    const timer = setTimeout(() => setIsMenuAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [isMobileMenuOpen, isScrolled]);

  const navLinks = [
    { href: "/#works", label: "Работы" },
    { href: "/#vision", label: "Подход" },
    { href: "/#about", label: "Обо мне" },
    { href: "/#contact", label: "Контакты" },
  ];

  return (
    <>
      {/* Desktop header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled || isMobileMenuOpen
            ? "glass-nav"
            : "bg-transparent backdrop-blur-sm border-b border-white/5 py-6"
        }`}
      >
        <div className="flex items-center justify-between max-w-[1200px] mx-auto">
          {/* Logo */}
          <Link href="/" className="font-display text-xl tracking-wide text-white hover:opacity-80 transition-opacity">
            ИМЯ ФАМИЛИЯ
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
            className="hidden md:inline-flex px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium tracking-wide text-white hover:bg-white/10 transition-all duration-300"
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
      </header>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        style={{
          height: isMobileMenuOpen ? "auto" : 0,
          overflow: "hidden",
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav className="glass-nav md:hidden">
          <div className="flex flex-col gap-1 py-4 px-4">
            {navLinks.map((link) => (
              <MobileNavLink key={link.href} href={link.href}>
                {link.label}
              </MobileNavLink>
            ))}
          </div>
        </nav>
      </motion.div>
    </>
  );
}
