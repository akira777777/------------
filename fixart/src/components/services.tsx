import { Laptop, Search, Usb } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { DICTS } from "@/lib/i18n";
import { FEATURED_SERVICES, MORE_SERVICES } from "@/lib/shop";
import { useBooking, useLang } from "@/lib/store";
import { formatCzk } from "@/lib/utils";

const MORE_ICONS = {
  port: Usb,
  macbook: Laptop,
  diagnostics: Search,
} as const;

const MORE_LEAD = {
  port: "portLead",
  macbook: "macbookLead",
  diagnostics: "diagnosticsLead",
} as const;

const FEATURE_LEAD = {
  battery: "batteryLead",
  display: "displayLead",
  glass: "glassLead",
} as const;

export function Services() {
  const lang = useLang((s) => s.lang);
  const t = DICTS[lang];
  const openBooking = useBooking((s) => s.openWith);

  return (
    <section id="opravy" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.22em] text-muted">{t.services.kicker}</p>
          <h2 className="mt-3 max-w-lg font-semibold tracking-tight text-section">{t.services.title}</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">{t.services.lead}</p>
        </Reveal>

        <Reveal className="reveal-stagger mt-10 grid gap-4 md:grid-cols-3">
          {FEATURED_SERVICES.map((item) => (
            <article
              key={item.id}
              className="lift flex flex-col overflow-hidden rounded-xl bg-surface p-2 shadow-[var(--shadow-border)]"
            >
              <img
                src={item.image}
                alt=""
                width={1100}
                height={825}
                loading="lazy"
                decoding="async"
                className="media media-zoom aspect-card w-full rounded-lg object-cover"
              />
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-lg font-medium">{t.repairs[item.id]}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {t.services[FEATURE_LEAD[item.id]]}
                </p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <span className="text-sm text-subtle">
                    {t.hero.from} {formatCzk(item.fromPrice, lang)}
                  </span>
                  <Button size="sm" variant="outline" onClick={() => openBooking(item.id)}>
                    {t.book}
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </Reveal>

        <Reveal className="reveal-stagger mt-4 grid gap-4 md:grid-cols-3">
          {MORE_SERVICES.map((item) => {
            const Icon = MORE_ICONS[item.id];
            return (
              <article
                key={item.id}
                className="lift flex flex-col overflow-hidden rounded-xl bg-surface p-2 shadow-[var(--shadow-border)]"
              >
                <img
                  src={item.image}
                  alt=""
                  width={1100}
                  height={825}
                  loading="lazy"
                  decoding="async"
                  className="media media-zoom aspect-card w-full rounded-lg object-cover"
                />
                <div className="flex flex-1 flex-col p-4">
                  <Icon className="size-5 text-accent" />
                  <h3 className="mt-4 text-lg font-medium">{t.services[item.id]}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {t.services[MORE_LEAD[item.id]]}
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="mt-5 self-start"
                    onClick={() => openBooking(item.id)}
                  >
                    {t.book}
                  </Button>
                </div>
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

export function Steps() {
  const lang = useLang((s) => s.lang);
  const t = DICTS[lang];
  const items = [
    { n: "01", title: t.steps.s1t, body: t.steps.s1d },
    { n: "02", title: t.steps.s2t, body: t.steps.s2d },
    { n: "03", title: t.steps.s3t, body: t.steps.s3d },
  ];

  return (
    <section className="border-y border-border py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.22em] text-muted">{t.steps.kicker}</p>
          <h2 className="mt-3 font-semibold tracking-tight text-section">{t.steps.title}</h2>
        </Reveal>
        <Reveal>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {items.map((item) => (
              <li key={item.n}>
                <span className="text-sm font-medium tracking-widest text-accent">{item.n}</span>
                <h3 className="mt-3 text-lg font-medium">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
