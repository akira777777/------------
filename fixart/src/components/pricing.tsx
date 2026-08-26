import { useState, type KeyboardEvent } from "react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { getTranslation } from "@/lib/i18n";
import { EXTRA_SERVICES, PRICE_GROUPS, type PriceGroupId } from "@/lib/shop";
import { useBooking, useLang } from "@/lib/store";
import { cn, formatCzk } from "@/lib/utils";

export function Pricing() {
  const lang = useLang((s) => s.lang);
  const t = getTranslation(lang, "pricing");
  const openBooking = useBooking((s) => s.openWith);
  const openBooking = useBooking((s) => s.openWith);
  const [groupId, setGroupId] = useState<PriceGroupId>("iphone");
  const group = PRICE_GROUPS.find((item) => item.id === groupId) ?? PRICE_GROUPS[0];

  function onTabKey(event: KeyboardEvent<HTMLDivElement>) {
    const index = PRICE_GROUPS.findIndex((item) => item.id === groupId);
    let nextIndex = -1;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      nextIndex = (index + 1) % PRICE_GROUPS.length;
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      nextIndex = (index - 1 + PRICE_GROUPS.length) % PRICE_GROUPS.length;
    }
    if (nextIndex !== -1) {
      const nextId = PRICE_GROUPS[nextIndex].id;
      setGroupId(nextId);
      const target =
        event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]')[nextIndex];
      target?.focus();
    }
  }

  return (
    <section id="cenik" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.22em] text-muted">{t.pricing.kicker}</p>
          <h2 className="mt-3 font-semibold tracking-tight text-section">{t.pricing.title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{t.pricing.lead}</p>
        </Reveal>

        <div
          className="mt-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label={t.pricing.kicker}
          onKeyDown={onTabKey}
        >
          {PRICE_GROUPS.map((item) => {
            const selected = item.id === groupId;
            return (
              <button
                key={item.id}
                id={`pricing-tab-${item.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="pricing-tabpanel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setGroupId(item.id)}
                className={cn(
                  "h-11 rounded-md px-4 text-sm font-medium transition-[background-color,color,box-shadow] duration-150",
                  selected
                    ? "bg-surface-2 text-fg shadow-[var(--shadow-border)]"
                    : "bg-transparent text-muted shadow-[var(--shadow-border)] hover:text-fg",
                )}
              >
                {t.pricing.groups[item.id]}
              </button>
            );
          })}
        </div>

        <div className="relative mt-8 overflow-hidden rounded-xl bg-surface p-2 shadow-[var(--shadow-border)]">
          {PRICE_GROUPS.map((item) => {
            const selected = item.id === groupId;
            return (
              <img
                key={item.id}
                src={item.image}
                alt={selected ? t.pricing.alts[item.id] : ""}
                width={1400}
                height={788}
                sizes="(min-width: 1024px) 72rem, 100vw"
                loading="lazy"
                decoding="async"
                className={cn(
                  "media hero-crossfade aspect-video w-full rounded-lg object-cover",
                  selected
                    ? "relative opacity-100"
                    : "pointer-events-none absolute inset-2 opacity-0",
                )}
              />
            );
          })}
        </div>

        <div
          id="pricing-tabpanel"
          role="tabpanel"
          aria-labelledby={`pricing-tab-${groupId}`}
          className="mt-6 overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]"
        >
          <p className="px-5 pt-3 text-xs text-subtle md:hidden">{t.pricing.swipe}</p>
          <div className="overflow-x-auto">
            <table className="price-table w-full text-left text-sm">
              <thead className="text-subtle">
                <tr>
                  <th className="px-5 py-3 font-medium">{t.pricing.colModel}</th>
                  <th className="px-5 py-3 font-medium">{t.pricing.colBattery}</th>
                  <th className="px-5 py-3 font-medium">{t.pricing.colDisplay}</th>
                  <th className="px-5 py-3 font-medium">{t.pricing.colGlass}</th>
                  <th className="px-5 py-3 font-medium">{t.pricing.colPort}</th>
                  <th className="px-5 py-3 font-medium">{t.pricing.colTime}</th>
                </tr>
              </thead>
              <tbody>
                {group.rows.map((row) => (
                  <tr key={row.model} className="border-t border-border">
                    <td className="px-5 py-3.5 font-medium text-fg">{row.model}</td>
                    <td className="px-5 py-3.5 tabular-nums text-muted">
                      {formatCzk(row.battery, lang)}
                    </td>
                    <td className="px-5 py-3.5 tabular-nums text-muted">
                      {formatCzk(row.display, lang)}
                    </td>
                    <td className="px-5 py-3.5 tabular-nums text-muted">
                      {row.glass ? formatCzk(row.glass, lang) : t.pricing.na}
                    </td>
                    <td className="px-5 py-3.5 tabular-nums text-muted">
                      {row.port ? formatCzk(row.port, lang) : t.pricing.na}
                    </td>
                    <td className="px-5 py-3.5 tabular-nums text-subtle">
                      ~{row.minutes} {t.hero.minutes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-3 text-sm text-subtle">{t.pricing.included}</p>
        <p className="mt-1 text-sm text-subtle">{t.pricing.note}</p>

        <h3 className="mt-14 text-lg font-medium tracking-tight">{t.pricing.extrasTitle}</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{t.pricing.extrasLead}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {EXTRA_SERVICES.map((item) => {
            const copy = t.pricing.extras[item.id];
            return (
              <article
                key={item.id}
                className="lift flex h-full flex-col overflow-hidden rounded-xl bg-surface p-2 shadow-[var(--shadow-border)]"
              >
                <img
                  src={item.image}
                  alt={copy.title}
                  width={1100}
                  height={825}
                  loading="lazy"
                  decoding="async"
                  className="media media-zoom aspect-card w-full rounded-lg object-cover"
                />
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="font-medium text-fg">{copy.title}</h4>
                    <span className="shrink-0 text-sm tabular-nums text-muted">
                      {t.hero.from} {formatCzk(item.price, lang)}
                    </span>
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{copy.detail}</p>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="text-xs text-subtle">
                      {item.minutes > 0 ? `~${item.minutes} ${t.hero.minutes}` : t.pricing.na}
                    </span>
                    <Button size="sm" variant="outline" onClick={() => openBooking("other")}>
                      {t.book}
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
