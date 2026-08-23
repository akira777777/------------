import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FaqJsonLd } from "@/components/JsonLd";
import { PageTransition } from "@/components/PageTransition";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("faqTitle") };
}

const keys = [1, 2, 3, 4, 5, 6, 7] as const;

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("faq");
  const items = keys.map((key) => ({
    q: t(`q${key}`),
    a: t(`a${key}`),
  }));

  return (
    <PageTransition>
    <div className="mx-auto max-w-3xl px-5 py-16">
      <FaqJsonLd items={items} />
      <h1 className="font-display text-4xl">{t("title")}</h1>
      <span className="tape mt-4" />
      <dl className="mt-10 grid gap-8">
        {items.map((item) => (
          <div key={item.q} className="border-t border-line pt-4">
            <dt className="font-display text-xl">{item.q}</dt>
            <dd className="mt-2 text-graphite/80">{item.a}</dd>
          </div>
        ))}
      </dl>
    </div>
    </PageTransition>
  );
}
