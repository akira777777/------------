import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Suspense } from "react";
import { PageTransition } from "@/components/PageTransition";
import { PriceExplorer } from "@/components/PriceExplorer";
import type { Locale } from "@/lib/money";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("pricesTitle") };
}

export default async function PricesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("prices");

  return (
    <PageTransition>
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="font-display text-4xl">{t("title")}</h1>
      <span className="tape mt-4" />
      <p className="mt-4 max-w-xl text-graphite/75">{t("subtitle")}</p>
      <div className="mt-10">
        <Suspense fallback={null}>
          <PriceExplorer locale={locale as Locale} />
        </Suspense>
      </div>
    </div>
    </PageTransition>
  );
}
