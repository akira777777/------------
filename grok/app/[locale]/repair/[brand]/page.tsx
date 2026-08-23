import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { ViewTransition } from "react";
import { PageTransition } from "@/components/PageTransition";
import { SharedTitle } from "@/components/SharedTitle";
import { Link } from "@/i18n/navigation";
import { brands, getBrand, type DeviceKind } from "@/lib/catalog";

const KIND_LABEL: Record<DeviceKind, Record<string, string>> = {
  phone: { cs: "Telefon", en: "Phone", ru: "Телефон" },
  tablet: { cs: "Tablet", en: "Tablet", ru: "Планшет" },
  laptop: { cs: "Notebook", en: "Laptop", ru: "Ноутбук" },
  watch: { cs: "Hodinky", en: "Watch", ru: "Часы" },
  audio: { cs: "Audio", en: "Audio", ru: "Аудио" },
};

export function generateStaticParams() {
  return brands.map((brand) => ({ brand: brand.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; brand: string }>;
}): Promise<Metadata> {
  const { locale, brand: brandId } = await params;
  const brand = getBrand(brandId);
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: brand
      ? t("repairBrandTitle", { brand: brand.name })
      : t("repairTitle"),
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ locale: string; brand: string }>;
}) {
  const { locale, brand: brandId } = await params;
  setRequestLocale(locale);
  const brand = getBrand(brandId);
  if (!brand) notFound();
  const t = await getTranslations("repair");

  return (
    <PageTransition>
    <div className="mx-auto max-w-6xl px-5 py-16">
      <Link
        href="/repair"
        prefetch
        transitionTypes={["nav-back"]}
        className="press font-mono text-xs uppercase text-steel hover:text-graphite"
      >
        ← {t("back")}
      </Link>
      <SharedTitle name={`brand-${brand.id}`}>
        <h1 className="mt-4 font-display text-4xl">{brand.name}</h1>
      </SharedTitle>
      <span className="tape mt-4" />
      <p className="mt-4 text-graphite/75">{t("models")}</p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {brand.models.map((model, index) => (
          <li key={model.id}>
            <Link
              href={`/repair/${brand.id}/${model.id}`}
              prefetch={false}
              transitionTypes={["nav-forward"]}
              className="press block overflow-hidden border border-line bg-paper hover:border-graphite shadow-xs transition-shadow hover:shadow-md"
            >
              <ViewTransition
                name={`device-photo-${model.id}`}
                share="morph"
                default="none"
              >
                <div className="relative aspect-[4/5] bg-paper p-3">
                  <div className="relative h-full w-full">
                    <Image
                      src={model.image}
                      alt={model.name}
                      fill
                      sizes="(max-width: 640px) 50vw, 280px"
                      className="object-contain"
                      fetchPriority={index === 0 ? "high" : "auto"}
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                  </div>
                </div>
              </ViewTransition>
              <div className="p-5">
                <SharedTitle name={`device-${model.id}`}>
                  <h2 className="font-display text-xl">{model.name}</h2>
                </SharedTitle>
                <p className="mt-2 font-mono text-xs uppercase text-steel">
                  {KIND_LABEL[model.kind][locale] ?? model.kind}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </PageTransition>
  );
}
