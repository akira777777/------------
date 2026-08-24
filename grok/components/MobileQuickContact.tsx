"use client";

import { site } from "@/lib/site";
import { useLocale, useTranslations } from "next-intl";
import { InterfaceIcon } from "./InterfaceIcon";

export function MobileQuickContact() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const homePath = locale === "cs" ? "/" : `/${locale}`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-[#131317]/96 px-3 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2 shadow-[0_-14px_40px_rgb(0_0_0_/_0.34)] backdrop-blur-xl sm:hidden">
      <nav className="mx-auto grid max-w-md grid-cols-[0.8fr_1fr_1.35fr] gap-2" aria-label={t("quickActions")}>
        <a
          href={`tel:${site.phone.replace(/\s/g, "")}`}
          className="press flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-xl border border-line bg-paper text-[0.68rem] font-semibold text-graphite"
        >
          <InterfaceIcon name="call" className="h-4 w-4 text-kapton" />
          <span>{t("call")}</span>
        </a>
        <a
          href={site.telegramUrl}
          target="_blank"
          rel="noreferrer"
          className="press flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-xl border border-line bg-paper text-[0.68rem] font-semibold text-graphite"
        >
          <InterfaceIcon name="telegram" className="h-4 w-4 text-kapton" />
          <span>{t("telegram")}</span>
        </a>
        <a
          href={`${homePath}#booking`}
          className="press flex min-h-12 items-center justify-center gap-1.5 rounded-xl bg-enamel px-3 text-xs font-semibold text-white shadow-[0_8px_28px_rgb(255_93_31_/_0.2)]"
        >
          <InterfaceIcon name="calendar" className="h-4 w-4" />
          <span>{t("booking")}</span>
        </a>
      </nav>
    </div>
  );
}
