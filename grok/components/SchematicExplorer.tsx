"use client";

import { startTransition, useMemo, useState, ViewTransition } from "react";
import Image, { type StaticImageData } from "next/image";
import type { DeviceKind, DeviceModel, Locale } from "@/lib/catalog";
import { formatRepairPrice } from "@/lib/money";
import { Schematic } from "./Schematic";

type Props = {
  model: DeviceModel;
  locale: Locale;
  pickPartLabel: string;
  durationLabel: string;
  onRequest: string;
  compact?: boolean;
  selectedId?: string;
  onSelect?: (id: string) => void;
  photoSrc?: string | StaticImageData;
  photoAlt?: string;
  onQuote?: () => void;
  quoteButtonLabel?: string;
};

const PHONE_HOTSPOTS: { id: string; className: string }[] = [
  { id: "display", className: "left-[28%] top-[12%] h-[44%] w-[44%]" },
  { id: "battery", className: "left-[39%] top-[64%] h-[13%] w-[22%]" },
  { id: "charging", className: "left-[43%] top-[85%] h-[8%] w-[14%]" },
  { id: "camera", className: "left-[29%] top-[14%] z-10 h-[7%] w-[10%]" },
  { id: "back-glass", className: "right-[3%] top-[36%] h-[14%] w-[16%]" },
];

const GENERIC_HOTSPOTS: { id: string; className: string }[] = [
  { id: "display", className: "left-[24%] top-[16%] h-[42%] w-[52%]" },
  { id: "battery", className: "left-[36%] top-[64%] h-[14%] w-[28%]" },
  { id: "charging", className: "left-[42%] top-[84%] h-[8%] w-[16%]" },
];

function spotsFor(kind: DeviceKind) {
  return kind === "phone" ? PHONE_HOTSPOTS : GENERIC_HOTSPOTS;
}

export function SchematicExplorer({
  model,
  locale,
  pickPartLabel,
  durationLabel,
  onRequest,
  compact = false,
  selectedId,
  onSelect,
  photoSrc,
  photoAlt = "",
  onQuote,
  quoteButtonLabel,
}: Props) {
  const spots = useMemo(
    () =>
      spotsFor(model.schematic).filter((spot) =>
        model.repairs.some((item) => item.id === spot.id),
      ),
    [model],
  );
  const initial = selectedId ?? spots[0]?.id ?? model.repairs[0]?.id ?? "";
  const [internalId, setInternalId] = useState(initial);
  const activeId = selectedId ?? internalId;

  function choose(id: string) {
    startTransition(() => {
      onSelect?.(id);
      if (selectedId === undefined) setInternalId(id);
    });
  }

  const selected =
    model.repairs.find((item) => item.id === activeId) ?? model.repairs[0];
  if (!selected) return null;

  const price = formatRepairPrice(selected, locale);
  const onRequestPrice = formatRepairPrice({}, locale);

  return (
    <div
      className={
        compact
          ? "grid"
          : "grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]"
      }
    >
      {photoSrc ? (
        compact ? (
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-graphite">
            <Image
              src={photoSrc}
              alt={photoAlt}
              fill
              sizes="(max-width: 768px) 90vw, 420px"
              className="object-cover"
              loading="eager"
              placeholder={typeof photoSrc === "string" ? "empty" : "blur"}
              quality={70}
            />
          </div>
        ) : (
        <ViewTransition
          name={`device-photo-${model.id}`}
          share="morph"
          default="none"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-line bg-paper p-3 shadow-xs">
            <div className="relative h-full w-full">
              <Image
                src={photoSrc}
                alt={photoAlt}
                fill
                sizes="(max-width: 768px) 90vw, 420px"
                className="object-contain"
                loading="eager"
                fetchPriority="high"
                placeholder={typeof photoSrc === "string" ? "empty" : "blur"}
                quality={75}
              />
            </div>
          </div>
        </ViewTransition>
        )
      ) : (
        <div className="relative mx-auto aspect-[9/16] w-full max-w-[220px] bg-paper sm:max-w-xs">
          <Schematic kind={model.schematic} />
          {spots.map((spot) => {
            const active = spot.id === selected.id;
            const label = model.repairs.find((item) => item.id === spot.id)
              ?.name[locale];
            return (
              <button
                key={spot.id}
                type="button"
                className={`absolute ${spot.className} border transition-all ${
                  active
                    ? "border-kapton bg-kapton/25 ring-2 ring-kapton/50"
                    : "border-transparent hover:border-steel hover:bg-steel/10 focus:border-steel"
                }`}
                aria-pressed={active}
                onClick={() => choose(spot.id)}
              >
                <span className="sr-only">{label}</span>
              </button>
            );
          })}
        </div>
      )}

      <div className={compact ? "p-4 sm:p-5" : ""}>
        <p className="font-mono text-xs uppercase tracking-widest text-steel">
          {pickPartLabel}
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {model.repairs.map((repair) => {
            const active = repair.id === selected.id;
            return (
              <li key={repair.id}>
                <button
                  type="button"
                  className={
                    active
                      ? "press min-h-11 border border-graphite bg-graphite px-3 text-sm text-paper font-medium shadow-xs rounded-sm"
                      : "press min-h-11 border border-line bg-paper px-3 text-sm hover:border-graphite rounded-sm"
                  }
                  aria-pressed={active}
                  onClick={() => choose(repair.id)}
                >
                  {repair.name[locale]}
                </button>
              </li>
            );
          })}
        </ul>

        <ViewTransition name="repair-price" share="text-morph" default="none">
        <div className={`${compact ? "mt-4" : "mt-8"} border border-line bg-paper p-5 sm:p-6 rounded-sm shadow-xs`}>
          <h2 className="font-display text-xl sm:text-2xl">
            {selected.name[locale]}
          </h2>
          <p className="price-num mt-3 font-mono text-xl whitespace-nowrap text-kapton font-bold">
            {price}
          </p>
          {selected.duration ? (
            <p className="mt-2 text-sm text-steel">
              {durationLabel}: {selected.duration}
            </p>
          ) : null}
          {price === onRequestPrice ? (
            <p className="mt-3 text-sm">{onRequest}</p>
          ) : null}
          {onQuote && quoteButtonLabel ? (
            <button
              type="button"
              onClick={onQuote}
              className="press mt-5 inline-flex min-h-11 w-full sm:w-auto items-center justify-center bg-enamel px-5 py-2 text-sm font-medium text-white rounded-sm shadow-xs"
            >
              {quoteButtonLabel} ↓
            </button>
          ) : null}
        </div>
        </ViewTransition>
      </div>
    </div>
  );
}
