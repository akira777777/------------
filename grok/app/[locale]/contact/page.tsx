import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageTransition } from "@/components/PageTransition";
import { QuoteForm } from "@/components/QuoteForm";
import { ShopStatusBadge } from "@/components/ShopStatusBadge";
import { site } from "@/lib/site";
import type { Locale } from "@/lib/money";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("contactTitle") };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const lang = locale as Locale;

  return (
    <PageTransition>
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-2">
        <div>
          <div className="mb-4">
            <ShopStatusBadge />
          </div>
          <h1 className="font-display text-4xl">{t("title")}</h1>
          <span className="tape mt-4" />
          <p className="mt-4 text-graphite/75">{t("subtitle")}</p>
          <dl className="mt-10 grid gap-6 text-sm">
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-steel">
                Telegram
              </dt>
              <dd className="mt-1">
                <a
                  href={site.telegramUrl}
                  className="hover:text-kapton font-medium"
                  rel="noreferrer"
                  target="_blank"
                >
                  {site.telegram}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-steel">
                {t("phone")}
              </dt>
              <dd className="mt-1">
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="hover:text-kapton font-medium"
                >
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-steel">
                E-mail
              </dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`} className="hover:text-kapton font-medium">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-steel">
                {t("hours")}
              </dt>
              <dd className="mt-1">{site.hours[lang]}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-steel">
                {t("address")}
              </dt>
              <dd className="mt-1">
                {site.street}
                <br />
                {site.postalCode} {site.district}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-steel">
                {t("tram")}
              </dt>
              <dd className="mt-1">
                {t("tramStop")} {site.tramStop} · {site.trams}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-steel">
                {t("master")}
              </dt>
              <dd className="mt-1">{site.founder}</dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <a
              href={site.mapUrl}
              className="inline-flex items-center gap-1 text-steel underline hover:text-graphite font-mono text-xs"
              rel="noreferrer"
              target="_blank"
            >
              📍 {t("map")} ↗
            </a>
            <a
              href={site.whatsappUrl}
              className="inline-flex items-center gap-1 text-steel underline hover:text-graphite font-mono text-xs"
              rel="noreferrer"
              target="_blank"
            >
              💬 WhatsApp ↗
            </a>
          </div>
        </div>
        <div>
          <h2 className="font-display text-2xl">{t("formTitle")}</h2>
          <div className="mt-6">
            <QuoteForm locale={locale} />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
