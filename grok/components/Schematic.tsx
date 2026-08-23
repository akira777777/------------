import type { DeviceKind } from "@/lib/catalog";

export function Schematic({ kind }: { kind: DeviceKind }) {
  if (kind === "tablet") {
    return (
      <svg viewBox="0 0 180 240" className="h-full w-full" aria-hidden>
        <rect className="schematic-stroke" x="28" y="12" width="124" height="216" rx="10" />
        <rect className="schematic-stroke" x="40" y="28" width="100" height="168" rx="2" />
        <circle className="schematic-stroke" cx="90" cy="214" r="5" />
      </svg>
    );
  }
  if (kind === "laptop") {
    return (
      <svg viewBox="0 0 240 180" className="h-full w-full" aria-hidden>
        <rect className="schematic-stroke" x="38" y="8" width="164" height="110" rx="4" />
        <rect className="schematic-stroke" x="50" y="18" width="140" height="90" />
        <path className="schematic-stroke" d="M12 122h216l-12 36H24z" />
      </svg>
    );
  }
  if (kind === "watch") {
    return (
      <svg viewBox="0 0 180 240" className="h-full w-full" aria-hidden>
        <rect className="schematic-stroke" x="70" y="8" width="40" height="36" />
        <rect className="schematic-stroke" x="48" y="44" width="84" height="100" rx="22" />
        <rect className="schematic-stroke" x="60" y="56" width="60" height="76" rx="12" />
        <rect className="schematic-stroke" x="70" y="144" width="40" height="36" />
      </svg>
    );
  }
  if (kind === "audio") {
    return (
      <svg viewBox="0 0 180 240" className="h-full w-full" aria-hidden>
        <rect className="schematic-stroke" x="50" y="70" width="80" height="110" rx="16" />
        <circle className="schematic-stroke" cx="70" cy="50" r="16" />
        <circle className="schematic-stroke" cx="110" cy="50" r="16" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 180 320" className="h-full w-full" aria-hidden>
      <rect className="schematic-stroke" x="40" y="8" width="100" height="304" rx="22" />
      <rect className="schematic-stroke" x="50" y="28" width="80" height="170" rx="4" />
      <circle className="schematic-stroke" cx="90" cy="22" r="3" />
      <rect className="schematic-stroke" x="72" y="214" width="36" height="44" rx="4" />
      <circle className="schematic-stroke" cx="90" cy="280" r="8" />
      <circle className="schematic-stroke" cx="62" cy="48" r="6" />
    </svg>
  );
}
