import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { DICTS } from "@/lib/i18n";
import { useLang } from "@/lib/store";

export function Faq() {
  const lang = useLang((s) => s.lang);
  const t = DICTS[lang];

  return (
    <section id="otazky" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.22em] text-muted">{t.faq.kicker}</p>
          <h2 className="mt-3 font-semibold tracking-tight text-section">{t.faq.title}</h2>
        </Reveal>
        <Reveal className="mt-10 divide-y divide-border">
          {t.faq.items.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base font-medium text-fg transition-colors duration-150 hover:text-accent [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown className="size-4 shrink-0 text-subtle transition-transform duration-200 ease-out group-open:rotate-180" />
              </summary>
              <div className="faq-body">
                <p className="pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
              </div>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
