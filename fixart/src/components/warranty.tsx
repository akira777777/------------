import { BadgeCheck, Check, FileText, RefreshCw, Shield, X } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { DICTS } from "@/lib/i18n";
import { useLang } from "@/lib/store";

const CARD_ICONS = [Shield, RefreshCw, FileText, BadgeCheck] as const;

export function Warranty() {
  const lang = useLang((s) => s.lang);
  const t = DICTS[lang];

  return (
    <section id="garance" className="scroll-mt-24 border-y border-border py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.22em] text-muted">{t.warranty.kicker}</p>
          <h2 className="mt-3 max-w-xl font-semibold tracking-tight text-section">{t.warranty.title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{t.warranty.lead}</p>
        </Reveal>

        <Reveal className="mt-8 overflow-hidden rounded-xl bg-surface p-2 shadow-[var(--shadow-border)]">
          <img
            src="/images/warranty.webp"
            alt={t.warranty.alt}
            width={1400}
            height={788}
            loading="lazy"
            decoding="async"
            className="media media-zoom aspect-video w-full rounded-lg object-cover"
          />
        </Reveal>

        <Reveal className="reveal-stagger mt-10 grid gap-4 sm:grid-cols-2">
          {t.warranty.cards.map((card, index) => {
            const Icon = CARD_ICONS[index] ?? Shield;
            return (
              <article
                key={card.t}
                className="lift rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]"
              >
                <Icon className="size-5 text-accent" />
                <h3 className="mt-4 text-lg font-medium">{card.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{card.d}</p>
              </article>
            );
          })}
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <div className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
            <h3 className="text-sm font-medium tracking-wide text-fg">{t.warranty.coveredTitle}</h3>
            <ul className="mt-4 space-y-3">
              {t.warranty.covered.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-fg">
                  <Check className="mt-0.5 size-4 shrink-0 text-ok" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
            <h3 className="text-sm font-medium tracking-wide text-fg">{t.warranty.excludedTitle}</h3>
            <ul className="mt-4 space-y-3">
              {t.warranty.excluded.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <X className="mt-0.5 size-4 shrink-0 text-subtle" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-surface-2 p-6 shadow-[var(--shadow-border)]">
          <h3 className="text-sm font-medium tracking-wide text-fg">{t.warranty.claimTitle}</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">{t.warranty.claim}</p>
        </div>
      </div>
    </section>
  );
}
