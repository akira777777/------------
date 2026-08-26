import { Star } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { DICTS } from "@/lib/i18n";
import { useLang } from "@/lib/store";
import { cn } from "@/lib/utils";

export function Reviews() {
  const lang = useLang((s) => s.lang);
  const t = DICTS[lang];

  return (
    <section id="recenze" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.22em] text-muted">{t.reviews.kicker}</p>
          <h2 className="mt-3 font-semibold tracking-tight text-section">{t.reviews.title}</h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.reviews.items.map((review, i) => (
            <Reveal key={i}>
              <article
                className={cn(
                  "lift flex h-full flex-col rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]",
                )}
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="size-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-fg">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <footer className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-sm font-medium text-fg">{review.name}</span>
                  <span className="text-xs text-subtle">{review.service}</span>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
