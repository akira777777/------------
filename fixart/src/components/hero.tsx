import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { StatusBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { DICTS } from "@/lib/i18n";
import { HERO_REPAIRS, type RepairId } from "@/lib/shop";
import { useBooking, useLang } from "@/lib/store";
import { cn, formatCzk } from "@/lib/utils";

const ALTS = {
  battery: "altBattery",
  display: "altDisplay",
  glass: "altGlass",
} as const;

export function Hero() {
  const lang = useLang((s) => s.lang);
  const t = DICTS[lang];
  const openBooking = useBooking((s) => s.openWith);
  const [active, setActive] = useState<RepairId>("display");
  const current = HERO_REPAIRS.find((item) => item.id === active) ?? HERO_REPAIRS[1];

  useEffect(() => {
    const run = () => {
      for (const item of HERO_REPAIRS) {
        const img = new Image();
        img.src = item.image;
      }
    };
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(run);
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(run, 400);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pt-14 pb-28 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div className="max-w-xl stagger-in">
          <p className="text-xs font-medium tracking-[0.22em] text-muted">{t.hero.kicker}</p>
          <h1 className="mt-5 font-semibold tracking-tight text-hero leading-none">
            <span className="block text-fg">{t.hero.line1}</span>
            <span className="mt-2 block text-accent">{t.hero.line2}</span>
          </h1>
          <div className="mt-6">
            <StatusBadge lang={lang} />
          </div>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">{t.hero.lead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="group" onClick={() => openBooking(active)}>
              {t.hero.cta}
              <ArrowRight className="transition-transform duration-150 ease-out group-hover:translate-x-0.5" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#cenik">{t.hero.prices}</a>
            </Button>
          </div>
        </div>

        <div className="relative stagger-in">
          <div className="hero-glow pointer-events-none absolute -inset-8" aria-hidden />
          <div className="relative rounded-2xl bg-surface p-2 shadow-[var(--shadow-border)]">
            <div className="relative overflow-hidden rounded-xl bg-bg">
              <div className="float-photo">
                {HERO_REPAIRS.map((item) => {
                  const selected = item.id === active;
                  return (
                    <img
                      key={item.id}
                      src={item.image}
                      alt={selected ? t.hero[ALTS[item.id]] : ""}
                      width={1100}
                      height={1467}
                      sizes="(min-width: 1024px) 32rem, 100vw"
                      fetchPriority={item.id === "display" ? "high" : "low"}
                      decoding="async"
                      className={cn(
                        "media hero-crossfade h-80 w-full object-cover sm:h-96 lg:h-auto lg:aspect-photo",
                        selected
                          ? "relative scale-100 opacity-100 blur-0"
                          : "pointer-events-none absolute inset-0 scale-[1.04] opacity-0 blur-[6px]",
                      )}
                    />
                  );
                })}
              </div>
              <p
                key={active}
                className="hero-chip absolute right-3 bottom-3 rounded-md bg-bg/80 px-3 py-1.5 text-sm text-fg shadow-[var(--shadow-border)]"
              >
                {t.hero.from} {formatCzk(current.fromPrice, lang)} · {current.minutes} {t.hero.minutes}
              </p>
            </div>
          </div>
          <div
            className="mt-4 flex flex-wrap gap-2"
            aria-label={t.hero.repairsLabel}
          >
            {HERO_REPAIRS.map((item) => {
              const selected = item.id === active;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActive(item.id)}
                  className={cn(
                    "h-11 rounded-md px-3.5 text-sm font-medium transition-[background-color,color,box-shadow] duration-150",
                    selected
                      ? "bg-surface-2 text-fg shadow-[var(--shadow-border)]"
                      : "bg-transparent text-muted shadow-[var(--shadow-border)] hover:text-fg",
                  )}
                >
                  {t.repairs[item.id]}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <ul className="relative mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 pb-20 sm:px-6 lg:grid-cols-4 lg:pb-16">
        {(Object.keys(t.trust) as Array<keyof typeof t.trust>).map((key) => (
          <li
            key={key}
            className="rounded-xl bg-surface px-4 py-3.5 text-sm text-fg shadow-[var(--shadow-border)]"
          >
            {t.trust[key]}
          </li>
        ))}
      </ul>
    </section>
  );
}
