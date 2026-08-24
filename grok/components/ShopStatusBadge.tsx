"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { getShopStatus } from "@/lib/hours";
import type { Locale } from "@/lib/catalog";

export function ShopStatusBadge() {
  const locale = useLocale() as Locale;
  const [status, setStatus] = useState(() => getShopStatus(new Date(), locale));

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getShopStatus(new Date(), locale));
    }, 60000);
    return () => clearInterval(timer);
  }, [locale]);

  return (
    <div
      className="inline-flex items-center gap-2 rounded-full border border-line bg-paper/80 px-2.5 py-1 text-xs font-mono"
      title={status.text}
    >
      <span
        className={`h-2 w-2 rounded-full ${
          status.isOpen
            ? "animate-pulse bg-emerald-500 motion-reduce:animate-none"
            : "bg-amber-500"
        }`}
        aria-hidden
      />
      <span className="truncate max-w-[200px] text-graphite/80 sm:max-w-none">
        {status.text}
      </span>
    </div>
  );
}
