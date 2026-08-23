"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import type { Locale } from "@/lib/catalog";
import { site } from "@/lib/site";
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
  languageLabel: string;
};

export function HeaderNavigation({
  links,
  skipLabel,
  telegramLabel,
  menuLabel,
  closeLabel,
  languageLabel,
}: Props) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close mobile drawer on route change
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) {
      dialog.showModal();
      closeButtonRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else if (!isOpen && dialog.open) {
      dialog.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    function closeOnDesktop(event: MediaQueryListEvent) {
      if (event.matches) setIsOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

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
                prefetch={false}
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
          <LanguageSwitch label={languageLabel} />

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
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsOpen(true)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={menuLabel}
            className="press md:hidden inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-line bg-paper text-graphite p-2"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        aria-label={menuLabel}
        onCancel={() => setIsOpen(false)}
        onClose={() => {
          setIsOpen(false);
          menuButtonRef.current?.focus();
        }}
        className="m-0 h-dvh max-h-none w-full max-w-none border-0 bg-aluminum/98 p-0 text-graphite backdrop:bg-graphite/40 md:hidden"
      >
        {isOpen ? (
          <div className="flex h-full flex-col backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-line px-5 py-4 bg-paper/50">
            <Logo />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label={closeLabel}
              className="press inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-line bg-paper text-graphite"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
            <div className="mb-4">
              <ShopStatusBadge />
            </div>

            <nav className="flex flex-col gap-2">
              {links.map((link) => {
                const active =
                  pathname === link.href || pathname.startsWith(`${link.href}/`);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={false}
                    onClick={() => setIsOpen(false)}
                    className={
                      active
                        ? "flex items-center justify-between border-l-4 border-kapton bg-paper px-4 py-3 text-lg font-medium text-graphite"
                        : "flex items-center justify-between border-l-4 border-transparent px-4 py-3 text-lg text-graphite/80 hover:bg-paper/50"
                    }
                    aria-current={active ? "page" : undefined}
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-xs text-steel">→</span>
                  </Link>
                );
              })}
            </nav>

            <div className="pt-6 border-t border-line space-y-4">
              <a
                href={site.telegramUrl}
                className="press flex min-h-12 w-full items-center justify-center bg-enamel text-paper font-medium rounded-md shadow-xs text-center"
                rel="noreferrer"
                target="_blank"
              >
                💬 {telegramLabel}
              </a>

              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="press flex min-h-12 w-full items-center justify-center border border-line bg-paper text-graphite font-medium rounded-md text-center"
              >
                📞 {site.phone}
              </a>
            </div>

            <div className="pt-4 text-xs font-mono text-steel">
              <p>{site.street}, {site.district}</p>
              <p>{site.hours[locale]}</p>
            </div>
          </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
