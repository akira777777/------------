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
          <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M21.9 3.5c.3.1.5.4.4.7l-3.1 18.4c0 .2-.2.4-.4.5-.1 0-.2.1-.3.1-.1 0-.3 0-.4-.1l-5.6-4.1-3 3c-.1.1-.3.2-.5.2s-.4-.1-.5-.2c-.1-.1-.2-.3-.2-.5v-4.3L3 13.3c-.2-.1-.3-.4-.3-.7s.2-.5.4-.7l17.5-7.4z"/>
          </svg>
          <span>{t("telegram")}</span>
        </a>
        <a
          href={`tel:${site.phone.replace(/\s/g, "")}`}
          className="press flex flex-1 items-center justify-center gap-1.5 rounded-full border border-line bg-aluminum/50 py-2.5 text-xs font-medium text-graphite"
        >
          <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span>{site.phone}</span>
        </a>
      </div>
    </div>
  );
}
