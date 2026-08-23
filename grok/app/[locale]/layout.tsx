import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Source_Sans_3, Unbounded } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { MobileQuickContact } from "@/components/MobileQuickContact";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { routing } from "@/i18n/routing";
import { site } from "@/lib/site";
import "../globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "700"],
  preload: false,
  display: "swap",
  adjustFontFallback: true,
});

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin", "cyrillic"],
  preload: false,
  display: "swap",
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  themeColor: "#e8eaed",
  colorScheme: "light",
  viewportFit: "cover",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    metadataBase: new URL(site.url),
    title: {
      default: t("title"),
      template: "%s · FixArt",
    },
    description: t("description"),
    alternates: {
      canonical: locale === "cs" ? "/" : `/${locale}`,
      languages: {
        cs: "/",
        en: "/en",
        ru: "/ru",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();
  const clientMessages = {
    nav: messages.nav,
    form: messages.form,
    prices: messages.prices,
    error: messages.error,
  };

  return (
    <html
      lang={locale}
      className={`${unbounded.variable} ${sourceSans.variable} h-full antialiased`}
      style={{ colorScheme: "light" }}
    >
      <body className="flex min-h-full flex-col font-sans text-graphite pb-16 sm:pb-0">
        <NextIntlClientProvider locale={locale} messages={clientMessages}>
          <SiteHeader />
          <main id="main" className="flex-1 scroll-mt-24">
            {children}
          </main>
          <SiteFooter />
          <MobileQuickContact />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
