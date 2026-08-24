"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import type { Locale } from "@/lib/catalog";
import { site } from "@/lib/site";
import { InterfaceIcon } from "./InterfaceIcon";
import { LanguageSwitch } from "./LanguageSwitch";
import { Logo } from "./Logo";
import { ShopStatusBadge } from "./ShopStatusBadge";

type Item = {
  hash: string;
  label: string;
};

type Props = {
  links: Item[];
  skipLabel: string;
  telegramLabel: string;
  menuLabel: string;
  closeLabel: string;
  languageLabel: string;
  bookingLabel: string;
};

export function HeaderNavigation({
  links,
  skipLabel,
  telegramLabel,
  menuLabel,
  closeLabel,
  languageLabel,
  bookingLabel,
}: Props) {
  const locale = useLocale() as Locale;
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const homePath = locale === "cs" ? "/" : `/${locale}`;

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
    const desktop = window.matchMedia("(min-width: 1024px)");
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

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 sm:py-3">
        <Logo />

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-x-5 text-sm" aria-label="Main">
          {links.map((link) => (
            <a
              key={link.hash}
              href={`${homePath}#${link.hash}`}
              className="press inline-flex min-h-11 items-center whitespace-nowrap text-steel transition-colors hover:text-graphite"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitch label={languageLabel} />

          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="press hidden min-h-11 items-center gap-2 whitespace-nowrap text-sm font-semibold text-graphite xl:inline-flex"
          >
            <InterfaceIcon name="call" className="h-4 w-4 text-kapton" />
            {site.phone}
          </a>

          <a
            href={site.telegramUrl}
            className="press hidden min-h-11 items-center gap-2 whitespace-nowrap px-2 text-sm font-medium text-graphite hover:text-kapton md:inline-flex"
            rel="noreferrer"
            target="_blank"
          >
            <InterfaceIcon name="telegram" className="h-4 w-4" />
            {telegramLabel}
          </a>

          <a
            href={`${homePath}#booking`}
            className="press hidden min-h-11 items-center whitespace-nowrap rounded-full bg-enamel px-4 text-sm font-semibold text-white shadow-[0_8px_28px_rgb(255_93_31_/_0.24)] md:inline-flex"
          >
            {bookingLabel}
          </a>

          {/* Compact navigation button */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsOpen(true)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={menuLabel}
            className="press lg:hidden inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-line bg-paper text-graphite p-2"
          >
            <InterfaceIcon name="menu" className="h-6 w-6" />
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
        className="m-0 h-dvh max-h-none w-full max-w-none border-0 bg-aluminum/98 p-0 text-graphite backdrop:bg-black/70 lg:hidden"
      >
        {isOpen ? (
          <div className="flex h-full flex-col backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-line px-5 py-4 bg-paper/50">
            <Logo onClick={() => setIsOpen(false)} />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label={closeLabel}
              className="press inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-line bg-paper text-graphite"
            >
              <InterfaceIcon name="close" className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
            <div className="mb-4">
              <ShopStatusBadge />
            </div>

            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.hash}
                  href={`${homePath}#${link.hash}`}
                  onClick={() => setIsOpen(false)}
                  className="flex min-h-12 items-center justify-between border-b border-line px-2 text-lg font-medium text-graphite"
                >
                  <span>{link.label}</span>
                  <InterfaceIcon name="chevron" className="h-4 w-4 text-kapton" />
                </a>
              ))}
            </nav>

            <div className="pt-6 border-t border-line space-y-4">
              <a
                href={`${homePath}#booking`}
                onClick={() => setIsOpen(false)}
                className="press flex min-h-12 w-full items-center justify-center rounded-full bg-enamel text-white font-semibold shadow-xs text-center"
              >
                {bookingLabel}
              </a>

              <a
                href={site.telegramUrl}
                className="press flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-line bg-paper text-graphite font-medium text-center"
                rel="noreferrer"
                target="_blank"
              >
                <InterfaceIcon name="telegram" className="h-5 w-5 text-kapton" />
                {telegramLabel}
              </a>

              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="press flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-line bg-paper text-graphite font-medium text-center"
              >
                <InterfaceIcon name="call" className="h-5 w-5 text-kapton" />
                {site.phone}
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
