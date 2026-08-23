import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { PageTransition } from "@/components/PageTransition";
import { site } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("aboutTitle") };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const [t, home] = await Promise.all([
    getTranslations("about"),
    getTranslations("home"),
  ]);

  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl px-5 py-16">
        <h1 className="font-display text-4xl">{t("title")}</h1>
        <span className="tape mt-4" />
        <p className="mt-6 text-lg text-graphite/90">{t("lead")}</p>
        <p className="mt-4 text-graphite/80 leading-relaxed">{t("body")}</p>

        {/* Workshop Imagery */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="overflow-hidden border border-line bg-paper rounded-md shadow-xs">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-graphite">
              <Image
                src="/workshop.jpg"
                alt={home("photoBenchAlt")}
                fill
                sizes="(max-width: 640px) 100vw, 450px"
                className="object-cover"
                priority
              />
            </div>
            <p className="p-3 text-xs font-mono text-steel">
              {site.street}, {site.district} · {t("bench")}
            </p>
          </div>

          <div className="overflow-hidden border border-line bg-paper rounded-md shadow-xs">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-graphite">
              <Image
                src="/soldering.jpg"
                alt={home("photoSolderingAlt")}
                fill
                sizes="(max-width: 640px) 100vw, 450px"
                className="object-cover"
              />
            </div>
            <p className="p-3 text-xs font-mono text-steel">
              {home("photoSolderingAlt")}
            </p>
          </div>
        </div>

        <h2 className="mt-12 font-display text-2xl">{t("bench")}</h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {(["item1", "item2", "item3", "item4"] as const).map((key) => (
            <li key={key} className="border-l-4 border-kapton bg-paper/60 p-4 border border-line border-l-kapton rounded-r-md">
              <span className="font-medium text-graphite">{t(key)}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-md border border-line bg-paper p-6 shadow-xs">
          <p className="text-sm text-graphite/80 font-mono">
            {t("studio")} {site.street}, {site.district} · {site.founder} ·{" "}
            <a
              href={site.telegramUrl}
              className="text-steel underline hover:text-graphite font-medium"
              rel="noreferrer"
              target="_blank"
            >
              {site.telegram}
            </a>
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
