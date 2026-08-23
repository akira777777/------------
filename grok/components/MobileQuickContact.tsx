"use client";

import { site } from "@/lib/site";
import { useTranslations } from "next-intl";

export function MobileQuickContact() {
  const t = useTranslations("nav");

  return (
    <div className="fixed bottom-4 left-4 right-4 z-30 sm:hidden">
      <div className="flex items-center gap-2 rounded-full border border-line/80 bg-paper/95 p-1.5 shadow-lg backdrop-blur-md">
        <a
          href={site.telegramUrl}
          target="_blank"
          rel="noreferrer"
          className="press flex flex-1 items-center justify-center gap-1.5 rounded-full bg-enamel py-2.5 text-xs font-medium text-paper"
        >
          <span>💬</span>
          <span>{t("telegram")}</span>
        </a>
        <a
          href={`tel:${site.phone.replace(/\s/g, "")}`}
          className="press flex flex-1 items-center justify-center gap-1.5 rounded-full border border-line bg-aluminum/50 py-2.5 text-xs font-medium text-graphite"
        >
          <span>📞</span>
          <span>{site.phone}</span>
        </a>
      </div>
    </div>
  );
}
