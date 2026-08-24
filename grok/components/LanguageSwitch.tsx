"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { routing, type AppLocale } from "@/i18n/routing";
import { Link, usePathname } from "@/i18n/navigation";

const labels: Record<AppLocale, { short: string; name: string }> = {
  cs: { short: "CS", name: "Čeština" },
  en: { short: "EN", name: "English" },
  ru: { short: "RU", name: "Русский" },
};

function LanguageSwitchLinks({ label }: { label: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = Object.fromEntries(searchParams.entries());
  const href = Object.keys(query).length > 0 ? { pathname, query } : pathname;

  return (
    <div
      className="flex items-center gap-1 font-mono text-xs uppercase tracking-wider"
      role="navigation"
      aria-label={label}
    >
      {routing.locales.map((item) => {
        const active = item === locale;
        return (
          <Link
            key={item}
            href={href}
            locale={item}
            replace
            prefetch={false}
            transitionTypes={["nav-fade"]}
            hrefLang={item}
            lang={item}
            aria-label={labels[item].name}
            aria-current={active ? "page" : undefined}
            className={
              active
                ? "inline-flex min-h-11 min-w-11 items-center justify-center bg-graphite px-2 text-paper"
                : "press inline-flex min-h-11 min-w-11 items-center justify-center px-2 text-steel hover:text-graphite"
            }
          >
            {labels[item].short}
          </Link>
        );
      })}
    </div>
  );
}

export function LanguageSwitch({ label }: { label: string }) {
  return (
    <Suspense
      fallback={
        <div
          className="flex items-center gap-1 font-mono text-xs uppercase tracking-wider"
          aria-hidden
        >
          {routing.locales.map((item) => (
            <span key={item} className="inline-flex min-h-11 min-w-11" />
          ))}
        </div>
      }
    >
      <LanguageSwitchLinks label={label} />
    </Suspense>
  );
}
