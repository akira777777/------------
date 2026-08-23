import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { DeviceRepair } from "@/components/DeviceRepair";
import { DeviceServiceJsonLd } from "@/components/JsonLd";
import { PageTransition } from "@/components/PageTransition";
import { SharedTitle } from "@/components/SharedTitle";
import { Link } from "@/i18n/navigation";
import { brands, getBrand, getModel, type Locale } from "@/lib/catalog";

export function generateStaticParams() {
  return brands.flatMap((brand) =>
    brand.models.map((model) => ({ brand: brand.id, device: model.id })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; brand: string; device: string }>;
}): Promise<Metadata> {
  const { locale, brand: brandId, device } = await params;
  const model = getModel(brandId, device);
  const brand = getBrand(brandId);
  const t = await getTranslations({ locale, namespace: "meta" });
  if (!model || !brand) return { title: t("repairTitle") };
  return {
    title: t("repairDeviceTitle", { brand: brand.name, device: model.name }),
    description: t("repairDeviceDescription", { device: model.name }),
  };
}

export default async function DevicePage({
  params,
}: {
  params: Promise<{ locale: string; brand: string; device: string }>;
}) {
  const { locale, brand: brandId, device } = await params;
  setRequestLocale(locale);
  const brand = getBrand(brandId);
  const model = getModel(brandId, device);
  if (!brand || !model) notFound();
  const t = await getTranslations("repair");
  const lang = locale as Locale;

  return (
    <PageTransition>
      <DeviceServiceJsonLd brandName={brand.name} model={model} locale={lang} />
      <div className="mx-auto max-w-6xl px-5 py-12">
        {/* Breadcrumb navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 font-mono text-xs text-steel">
          <Link href="/" prefetch className="hover:text-graphite transition-colors">
            {t("breadcrumbsHome")}
          </Link>
          <span>/</span>
          <Link href="/repair" prefetch className="hover:text-graphite transition-colors">
            {t("breadcrumbsRepair")}
          </Link>
          <span>/</span>
          <Link href={`/repair/${brand.id}`} prefetch className="hover:text-graphite transition-colors">
            {brand.name}
          </Link>
          <span>/</span>
          <span className="text-graphite font-medium" aria-current="page">
            {model.name}
          </span>
        </nav>

        <h1 className="mt-2 font-display text-3xl sm:text-4xl">
          {brand.name}{" "}
          <SharedTitle name={`device-${model.id}`}>
            <span>{model.name}</span>
          </SharedTitle>
        </h1>
        <span className="tape mt-4" />
        <p className="mt-4 max-w-xl text-sm text-graphite/70">{t("partsNote")}</p>

        <div className="mt-10">
          <DeviceRepair
            model={model}
            locale={lang}
            pickPartLabel={t("pickPart")}
            durationLabel={t("duration")}
            onRequest={t("onRequest")}
            quoteTitle={t("quote")}
            quoteThisRepairLabel={t("quoteThisRepair")}
          />
        </div>
      </div>
    </PageTransition>
  );
}
