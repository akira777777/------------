"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { site } from "@/lib/site";
import type { Locale } from "@/lib/catalog";
import { LanguageSwitch } from "./LanguageSwitch";
import { Logo } from "./Logo";
import { ShopStatusBadge } from "./ShopStatusBadge";

type Item = {
  href: "/repair" | "/prices" | "/about" | "/faq" | "/contact";
  label: string;
};

type Props = {
  links: Item[];
  skipLabel: string;
  telegramLabel: string;
  menuLabel: string;
  closeLabel: string;
};

export function HeaderNavigation({
  links,
  skipLabel,
  telegramLabel,
  menuLabel,
  closeLabel,
}: Props) {
  const pathname = usePathname();
  const locale = useLocale() as Locale;
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const closeTimer = useRef<number | null>(null);

  // Ensure portal target is available (client-only)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Close mobile drawer on route change
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    closeDrawer();
  }

  function openDrawer() {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setIsOpen(true);
    // Double rAF lets the browser mount the drawer before applying the visible
    // state, ensuring the enter transition runs.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsVisible(true));
    });
  }

  function closeDrawer() {
    setIsVisible(false);
    closeTimer.current = window.setTimeout(() => {
      setIsOpen(false);
    }, 320);
  }

  function toggleDrawer() {
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  }

  // Clear unmount timer if the component unmounts while animating out.
  useEffect(() => {
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  // Handle ESC key dismiss for accessibility
  useEffect(() => {
    if (!isOpen) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeDrawer();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-30 focus:bg-paper focus:px-3 focus:py-2"
      >
        {skipLabel}
      </a>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:py-4">
        <div className="flex items-center gap-4">
          <Logo />
          <div className="hidden lg:block">
            <ShopStatusBadge />
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-x-5 text-sm">
          {links.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                prefetch
                transitionTypes={["nav-fade"]}
                className={
                  active
                    ? "inline-flex min-h-11 items-center border-b-2 border-kapton text-graphite font-medium"
                    : "press inline-flex min-h-11 items-center text-graphite/80 hover:text-graphite"
                }
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitch />

          <a
            href={site.telegramUrl}
            className="press hidden sm:inline-flex items-center min-h-11 bg-enamel px-3.5 py-1.5 text-sm font-medium text-paper rounded-sm shadow-xs"
            rel="noreferrer"
            target="_blank"
          >
            {telegramLabel}
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleDrawer}
            aria-expanded={isOpen}
            aria-label={isOpen ? closeLabel : menuLabel}
            className="press md:hidden inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-line bg-paper text-graphite p-2"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer — rendered into document.body via portal so it sits
          above the sticky header's backdrop-filter stacking context */}
      {isOpen && isMounted && createPortal(
        <div
          className="fixed inset-0 z-50 md:hidden"
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label={closeLabel}
            onClick={closeDrawer}
            className={`absolute inset-0 bg-graphite/30 backdrop-blur-sm transition-opacity duration-300 ease-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Panel */}
          <div
            className={`absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-paper shadow-2xl transition-transform duration-300 ease-out ${
              isVisible ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ paddingTop: "env(safe-area-inset-top)" }}
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <span className="text-sm font-medium uppercase tracking-wider text-steel">
                {menuLabel}
              </span>
              <button
                type="button"
                onClick={closeDrawer}
                aria-label={closeLabel}
                className="press inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-line bg-aluminum text-graphite"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
              <div
                className={`transition-all duration-300 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: "60ms" }}
              >
                <ShopStatusBadge />
              </div>

              <nav className="flex flex-col gap-1">
                {links.map((link, index) => {
                  const active =
                    pathname === link.href || pathname.startsWith(`${link.href}/`);
                  const delay = `${index * 40 + 100}ms`;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      prefetch
                      onClick={closeDrawer}
                      className={`group flex items-center justify-between rounded-lg px-4 py-3.5 text-lg transition-all duration-300 ease-out ${
                        active
                          ? "bg-aluminum text-graphite font-medium"
                          : "text-graphite/80 hover:bg-paper hover:text-graphite"
                      } ${
                        isVisible
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-4"
                      }`}
                      style={{ transitionDelay: delay }}
                      aria-current={active ? "page" : undefined}
                    >
                      <span>{link.label}</span>
                      <span
                        className={`font-mono text-sm transition-transform duration-200 ${
                          active ? "text-kapton" : "text-steel group-hover:translate-x-0.5"
                        }`}
                      >
                        →
                      </span>
                    </Link>
                  );
                })}
              </nav>

              <div
                className={`space-y-3 border-t border-line pt-6 transition-all duration-300 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
                style={{ transitionDelay: "280ms" }}
              >
                <a
                  href={site.telegramUrl}
                  className="press flex min-h-12 w-full items-center justify-center gap-2 bg-enamel text-paper font-medium rounded-md shadow-xs text-center"
                  rel="noreferrer"
                  target="_blank"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M21.9 3.5c.3.1.5.4.4.7l-3.1 18.4c0 .2-.2.4-.4.5-.1 0-.2.1-.3.1-.1 0-.3 0-.4-.1l-5.6-4.1-3 3c-.1.1-.3.2-.5.2s-.4-.1-.5-.2c-.1-.1-.2-.3-.2-.5v-4.3L3 13.3c-.2-.1-.3-.4-.3-.7s.2-.5.4-.7l17.5-7.4z"/>
                  </svg>
                  {telegramLabel}
                </a>

                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="press flex min-h-12 w-full items-center justify-center gap-2 border border-line bg-aluminum text-graphite font-medium rounded-md text-center"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  {site.phone}
                </a>
              </div>

              <div
                className={`text-xs font-mono text-steel transition-all duration-300 ease-out ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: "360ms" }}
              >
                <p>{site.street}, {site.district}</p>
                <p>{site.hours[locale]}</p>
              </div>
            </div>
          </div>
        </div>
      , document.body)}
    </>
  );
}
