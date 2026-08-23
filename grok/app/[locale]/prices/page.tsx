import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Suspense } from "react";
import { PageTransition } from "@/components/PageTransition";
import { PriceExplorer } from "@/components/PriceExplorer";
import { brands, REPAIR_NAMES, type RepairCategory } from "@/lib/catalog";
import { formatRepairPrice, type Locale } from "@/lib/money";
import type { PriceRow } from "@/lib/prices";

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
  const lang = locale as Locale;
  const rows: PriceRow[] = brands.flatMap((brand) =>
    brand.models.flatMap((model) =>
      model.repairs.map((repair) => ({
        id: `${brand.id}-${model.id}-${repair.id}`,
        brandId: brand.id,
        brandName: brand.name,
        modelName: model.name,
        repairId: repair.id,
        repairName: repair.name[lang],
        price: formatRepairPrice(repair, lang),
        href: `/repair/${brand.id}/${model.id}`,
      })),
    ),
  );
  const brandOptions = brands.map(({ id, name }) => ({ id, name }));
  const repairOptions = (Object.keys(REPAIR_NAMES) as RepairCategory[]).map(
    (id) => ({ id, name: REPAIR_NAMES[id][lang] }),
  );

  return (
    <PageTransition>
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="font-display text-4xl">{t("title")}</h1>
      <span className="tape mt-4" />
      <p className="mt-4 max-w-xl text-graphite/75">{t("subtitle")}</p>
      <div className="mt-10">
        <Suspense fallback={null}>
          <PriceExplorer
            rows={rows}
            brandOptions={brandOptions}
            repairOptions={repairOptions}
          />
        </Suspense>
      </div>
    </div>
    </PageTransition>
  );
}
