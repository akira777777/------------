import { useEffect, useState } from "react";
import { Menu, Phone, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DICTS, LANGS } from "@/lib/i18n";
import { NAV, SHOP } from "@/lib/shop";
import { useBooking, useLang } from "@/lib/store";
import { cn } from "@/lib/utils";

function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-2.5">
      <img
        src="/images/mark.webp"
        alt=""
        width={32}
        height={32}
        className="size-8 rounded-sm object-cover shadow-[var(--shadow-border)]"
      />
      <span className="flex flex-col gap-1">
        <span className="text-lg font-semibold tracking-tight text-fg">FixArt</span>
        <span className="h-px w-full bg-accent transition-opacity duration-150 group-hover:opacity-80" />
      </span>
    </a>
  );
}

function LangSwitch({ compact = false }: { compact?: boolean }) {
  const lang = useLang((s) => s.lang);
  const setLang = useLang((s) => s.setLang);
  return (
    <div
      className={cn("flex items-center", compact ? "gap-1" : "gap-0.5")}
      role="group"
      aria-label="Language"
    >
      {LANGS.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => setLang(item.id)}
          className={cn(
            "relative flex h-11 min-w-11 items-center justify-center rounded-sm px-2 text-xs font-medium tracking-wide transition-colors duration-150",
            lang === item.id
              ? "text-fg after:absolute after:bottom-2 after:left-2 after:right-2 after:h-px after:bg-accent"
              : "text-subtle hover:text-fg",
          )}
          aria-pressed={lang === item.id}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export function SiteHeader() {
  const lang = useLang((s) => s.lang);
  const t = DICTS[lang];
  const openBooking = useBooking((s) => s.openWith);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = NAV.map((item) => document.querySelector(item.href)).filter(
      (node): node is Element => node instanceof Element,
    );
    if (nodes.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0.12, 0.35, 0.6] },
    );
    for (const node of nodes) io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-border bg-bg/90 transition-[background-color,box-shadow,backdrop-filter] duration-200 ease-out",
        scrolled && "bg-bg/75 backdrop-blur-md",
      )}
    >
      <a
        href="#obsah"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2 focus:text-sm focus:text-fg"
      >
        {t.skip}
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center xl:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                "flex h-11 items-center px-2.5 text-sm transition-colors duration-150",
                activeId === item.href.slice(1)
                  ? "text-fg"
                  : "text-muted hover:text-fg",
              )}
            >
              {t.nav[item.id]}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <div className="hidden md:block">
            <LangSwitch />
          </div>
          <Button variant="ghost" size="icon" asChild>
            <a href={SHOP.phoneHref} aria-label={t.contact.call}>
              <Phone />
            </a>
          </Button>
          <Button variant="telegram" size="sm" asChild className="hidden sm:inline-flex">
            <a href={SHOP.telegram} target="_blank" rel="noreferrer">
              <Send />
              {t.telegram}
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden"
            aria-label={t.menu}
            onClick={() => setMenuOpen(true)}
          >
            <Menu />
          </Button>
        </div>
      </div>

      {menuOpen ? (
        <div className="menu-in fixed inset-0 z-50 bg-bg xl:hidden">
          <div className="flex h-16 items-center justify-between px-4">
            <Logo />
            <Button
              variant="ghost"
              size="icon"
              aria-label={t.close}
              onClick={() => setMenuOpen(false)}
            >
              <X />
            </Button>
          </div>
          <nav className="flex flex-col gap-1 px-4 pt-4" aria-label="Mobile">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-12 items-center text-lg text-fg"
              >
                {t.nav[item.id]}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3 px-4">
            <LangSwitch compact />
            <Button variant="telegram" asChild>
              <a href={SHOP.telegram} target="_blank" rel="noreferrer">
                <Send />
                {t.telegram}
              </a>
            </Button>
            <Button
              onClick={() => {
                setMenuOpen(false);
                openBooking();
              }}
            >
              {t.book}
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
