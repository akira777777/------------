import { useEffect, useState } from "react";
import { getShopStatus, type ShopStatus } from "@/lib/hours";
import { DICTS, statusLabel, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function StatusBadge({ lang, className }: { lang: Lang; className?: string }) {
  const [status, setStatus] = useState<ShopStatus>(() => getShopStatus());

  useEffect(() => {
    const tick = () => setStatus(getShopStatus());
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  const t = DICTS[lang];
  return (
    <span
      className={cn(
        "inline-flex max-w-full items-center gap-2 rounded-full bg-surface px-3 py-1.5 text-left text-sm leading-snug text-muted shadow-[var(--shadow-border)]",
        className,
      )}
    >
      <span
        className={cn(
          "size-1.5 rounded-full",
          status.open ? "status-dot-open bg-ok" : "bg-accent",
        )}
        aria-hidden
      />
      {statusLabel(t, status)}
    </span>
  );
}
