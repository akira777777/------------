"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/portfolio";

const links = [{ href: "/#work", label: "Work" }, { href: "/#practice", label: "Practice" }, { href: "/#about", label: "About" }];

export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  useEffect(() => { const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false); window.addEventListener("keydown", close); return () => window.removeEventListener("keydown", close); }, []);
  return <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-8"><div className="site-shell glass-nav flex items-center justify-between rounded-full px-4 py-3 md:px-6"><Link href="/" className="mono flex items-center gap-2 text-[.62rem] tracking-[.18em]" onClick={() => setOpen(false)}><span className="h-2 w-2 rounded-full bg-[var(--accent)]" />{siteConfig.name}</Link><nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">{links.map((link) => <Link key={link.href} href={link.href} className="mono text-white/60 transition-colors hover:text-white">{link.label}</Link>)}</nav><div className="flex items-center gap-3"><Link href="/#contact" className="mono hidden rounded-full bg-[var(--paper)] px-4 py-2 text-[.6rem] text-[var(--ink)] transition-transform hover:-translate-y-0.5 md:block">Start a project ↗</Link><button type="button" className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white md:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>{open ? <X size={18} /> : <Menu size={18} />}</button></div></div><AnimatePresence>{open && <motion.nav id="mobile-nav" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: .25 }} className="site-shell glass-nav mt-2 rounded-3xl p-5 md:hidden" aria-label="Mobile navigation">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="display block border-b border-white/10 py-4 text-3xl last:border-0">{link.label}</Link>)}<Link href="/#contact" onClick={() => setOpen(false)} className="mono mt-3 block rounded-full bg-[var(--paper)] px-4 py-3 text-center text-[.6rem] text-[var(--ink)]">Start a project ↗</Link></motion.nav>}</AnimatePresence></header>;
}
