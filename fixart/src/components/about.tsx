import { Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { DICTS } from "@/lib/i18n";
import { useLang } from "@/lib/store";

export function About() {
  const lang = useLang((s) => s.lang);
  const t = DICTS[lang];

  return (
    <section id="o-nas" className="scroll-mt-24 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal className="space-y-3">
          <div className="lift overflow-hidden rounded-xl bg-surface p-2 shadow-[var(--shadow-border)]">
            <img
              src="/images/workshop.webp"
              alt={t.about.altWorkshop}
              width={1400}
              height={788}
              loading="lazy"
              decoding="async"
              className="media media-zoom aspect-video w-full rounded-lg object-cover"
            />
          </div>
          <div className="lift overflow-hidden rounded-xl bg-surface p-2 shadow-[var(--shadow-border)]">
            <img
              src="/images/hands.webp"
              alt={t.about.altHands}
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="media media-zoom aspect-card w-full rounded-lg object-cover"
            />
          </div>
        </Reveal>
        <Reveal>
          <p className="text-xs font-medium tracking-[0.22em] text-muted">{t.about.kicker}</p>
          <h2 className="mt-3 font-semibold tracking-tight text-section">{t.about.title}</h2>
          <p className="mt-5 text-base leading-relaxed text-muted">{t.about.p1}</p>
          <p className="mt-4 text-base leading-relaxed text-muted">{t.about.p2}</p>
          <ul className="mt-8 space-y-3">
            {t.about.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-fg">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-medium tracking-[0.22em] text-muted">{t.about.afterKicker}</p>
        <h3 className="mt-3 font-medium tracking-tight text-lg">{t.about.afterTitle}</h3>
        <div className="lift mt-6 overflow-hidden rounded-xl bg-surface p-2 shadow-[var(--shadow-border)]">
          <img
            src="/images/before-after.webp"
            alt={t.about.altAfter}
            width={1600}
            height={900}
            loading="lazy"
            decoding="async"
            className="media media-zoom aspect-video w-full rounded-lg object-cover"
          />
        </div>
      </Reveal>
    </section>
  );
}
