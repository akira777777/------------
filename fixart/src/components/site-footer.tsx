import { Phone, Send } from "lucide-react";
import { DICTS } from "@/lib/i18n";
import { NAV, SHOP } from "@/lib/shop";
import { useLang } from "@/lib/store";

export function SiteFooter() {
  const lang = useLang((s) => s.lang);
  const t = DICTS[lang];

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-3 sm:px-6">
        <div>
          <div className="inline-flex items-center gap-2.5">
            <img
              src="/images/mark.webp"
              alt=""
              width={32}
              height={32}
              className="size-8 rounded-sm object-cover shadow-[var(--shadow-border)]"
            />
            <span className="flex flex-col gap-1">
              <span className="text-lg font-semibold tracking-tight">FixArt</span>
              <span className="h-px w-full bg-accent" />
            </span>
          </div>
          <p className="mt-3 text-sm text-subtle">{t.footer.tag}</p>
          <p className="mt-1 text-sm text-subtle">{t.footer.copy}</p>
        </div>
        <div className="text-sm leading-relaxed text-muted">
          <p>{SHOP.address.street}</p>
          <p>
            {SHOP.address.zip} {SHOP.address.city}
          </p>
          <a href={SHOP.phoneHref} className="mt-3 inline-flex items-center gap-2 hover:text-fg">
            <Phone className="size-4" />
            {SHOP.phone}
          </a>
          <p className="mt-2 text-subtle">{t.contact.hoursNote}</p>
        </div>
        <div className="flex flex-col items-start gap-1">
          <nav className="flex flex-wrap gap-x-5 gap-y-1" aria-label="Footer">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="flex h-11 items-center text-sm text-muted hover:text-fg"
              >
                {t.nav[item.id]}
              </a>
            ))}
          </nav>
          <a
            href={SHOP.telegram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-2 text-sm text-muted hover:text-fg"
          >
            <Send className="size-4" />
            {SHOP.telegramHandle}
          </a>
        </div>
      </div>
    </footer>
  );
}

export function MobileDock() {
  const lang = useLang((s) => s.lang);
  const t = DICTS[lang];
  return (
    <div className="dock-pad fixed inset-x-0 bottom-0 z-30 border-t border-border bg-bg/95 px-4 py-3 xl:hidden">
      <div className="mx-auto flex max-w-6xl gap-2">
        <a
          href={SHOP.phoneHref}
          className="inline-flex size-12 shrink-0 items-center justify-center rounded-md bg-surface text-fg shadow-[var(--shadow-border)]"
          aria-label={t.contact.call}
        >
          <Phone className="size-4" />
        </a>
        <a
          href={SHOP.telegram}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-md bg-telegram text-sm font-medium text-telegram-fg"
        >
          <Send className="size-4" />
          {t.telegram}
        </a>
        <a
          href="#kontakt"
          className="inline-flex h-12 flex-1 items-center justify-center rounded-md bg-accent text-sm font-medium text-accent-fg"
        >
          {t.book}
        </a>
      </div>
    </div>
  );
}
