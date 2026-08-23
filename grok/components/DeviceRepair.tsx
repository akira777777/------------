"use client";

import { startTransition, useRef, useState } from "react";
import type { DeviceModel, Locale } from "@/lib/catalog";
import { formatRepairPrice } from "@/lib/money";
import { QuoteForm } from "./QuoteForm";
import { SchematicExplorer } from "./SchematicExplorer";

type Props = {
  model: DeviceModel;
  locale: Locale;
  pickPartLabel: string;
  durationLabel: string;
  onRequest: string;
  quoteTitle: string;
  quoteThisRepairLabel?: string;
};

export function DeviceRepair({
  model,
  locale,
  pickPartLabel,
  durationLabel,
  onRequest,
  quoteTitle,
  quoteThisRepairLabel = "Poptat tuto opravu",
}: Props) {
  const [repairId, setRepairId] = useState(model.repairs[0]?.id ?? "");
  const quoteSectionRef = useRef<HTMLElement>(null);
  const selected =
    model.repairs.find((item) => item.id === repairId) ?? model.repairs[0];

  function scrollToQuote() {
    quoteSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    const nameInput = quoteSectionRef.current?.querySelector('input[name="name"]') as HTMLInputElement | null;
    if (nameInput) {
      setTimeout(() => nameInput.focus(), 300);
    }
  }

  return (
    <>
      <SchematicExplorer
        model={model}
        locale={locale}
        pickPartLabel={pickPartLabel}
        durationLabel={durationLabel}
        onRequest={onRequest}
        selectedId={repairId}
        onSelect={setRepairId}
        photoSrc={model.image}
        photoAlt={model.name}
        onQuote={scrollToQuote}
        quoteButtonLabel={quoteThisRepairLabel}
      />

      <ul className="mt-12 divide-y divide-line border-y border-line">
        {model.repairs.map((repair) => {
          const active = repair.id === repairId;
          return (
            <li key={repair.id}>
              <button
                type="button"
                className={`press flex min-h-11 w-full flex-wrap items-baseline justify-between gap-3 py-4 text-left ${
                  active ? "text-graphite font-semibold" : "text-graphite/80 hover:text-graphite"
                }`}
                onClick={() => startTransition(() => setRepairId(repair.id))}
              >
                <span>{repair.name[locale]}</span>
                <span className="price-num font-mono text-kapton">
                  {formatRepairPrice(repair, locale)}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <section ref={quoteSectionRef} className="mt-16 max-w-lg scroll-mt-24">
        <h2 className="font-display text-2xl">{quoteTitle}</h2>
        <div className="mt-6">
          <QuoteForm
            device={model.name}
            repair={selected?.name[locale] ?? ""}
            locale={locale}
          />
        </div>
      </section>
    </>
  );
}
