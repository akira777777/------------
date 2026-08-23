import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { PageTransition } from "@/components/PageTransition";
import { SchematicExplorer } from "@/components/SchematicExplorer";
import { SharedTitle } from "@/components/SharedTitle";
import { Link } from "@/i18n/navigation";
import { brands, getModel, type Locale } from "@/lib/catalog";
import { site } from "@/lib/site";
import deviceHeroImage from "@/public/device-hero.jpg";
import heroImage from "@/public/hero.jpg";
import screenRepairImage from "@/public/screen-repair.jpg";
import solderingImage from "@/public/soldering.jpg";
import workshopImage from "@/public/workshop.jpg";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const [t, home, repair, meta] = await Promise.all([
    getTranslations("hero"),
    getTranslations("home"),
    getTranslations("repair"),
    getTranslations("meta"),
  ]);
  const lang = locale as Locale;
  const iphone = getModel("apple", "iphone-15");

  const steps = [1, 2, 3, 4, 5] as const;

  return (
    <PageTransition>
      <LocalBusinessJsonLd description={meta("description")} />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={home("heroAlt")}
            fill
            loading="eager"
            fetchPriority="high"
            placeholder="blur"
            quality={70}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-r from-graphite/90 via-graphite/70 to-graphite/35" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="hero-enter">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper/70">
              {t("eyebrow")}
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] text-paper sm:text-6xl">
              {t("title")}
              <span className="mt-2 block text-kapton">{t("highlight")}</span>
            </h1>
            <span className="tape mt-5" />
            <p className="mt-6 max-w-xl text-lg text-paper/85">{t("subtitle")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/repair"
                prefetch
                transitionTypes={["nav-forward"]}
                className="press inline-flex min-h-11 items-center bg-enamel px-4 text-paper font-medium rounded-sm shadow-xs"
              >
                {t("start")}
              </Link>
              <a
                href={site.telegramUrl}
                className="press inline-flex min-h-11 items-center border border-paper/80 px-4 text-paper font-medium rounded-sm shadow-xs"
                rel="noreferrer"
                target="_blank"
              >
                {t("telegram")}
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider text-paper/70">
              <li>{home("warranty")}</li>
              <li>{home("city")}</li>
              <li>{home("diag")}</li>
            </ul>
          </div>
          <div className="hero-enter overflow-hidden border border-paper/20 bg-paper/95 shadow-[0_20px_60px_rgb(0_0_0_/_0.35)] rounded-md">
            {iphone ? (
              <SchematicExplorer
                model={iphone}
                locale={lang}
                pickPartLabel={repair("pickPart")}
                durationLabel={repair("duration")}
                onRequest={repair("onRequest")}
                compact
                photoSrc={deviceHeroImage}
                photoAlt={home("deviceAlt")}
              />
            ) : null}
          </div>
        </div>
      </section>

      {/* Brand Selector Section */}
      <section className="border-y border-line bg-paper/40">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <h2 className="font-display text-2xl">{home("brandsTitle")}</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {brands.map((brand) => (
              <Link
                key={brand.id}
                href={`/repair/${brand.id}`}
                prefetch={false}
                transitionTypes={["nav-forward"]}
                className="press border border-line bg-paper px-4 py-2.5 text-sm hover:border-graphite rounded-sm shadow-xs font-medium"
              >
                <SharedTitle name={`brand-${brand.id}`}>
                  <span>{brand.name}</span>
                </SharedTitle>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-2xl">{home("processTitle")}</h2>
        <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <li key={step} className="border-t border-kapton pt-4">
              <p className="font-mono text-xs text-kapton font-bold">
                {String(step).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-medium text-lg">{home(`process${step}`)}</h3>
              <p className="mt-2 text-sm text-graphite/70">
                {home(`process${step}Body`)}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Workshop Showcase Gallery Section */}
      <section className="border-t border-line bg-paper/60 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl">{home("workshopTitle")}</h2>
            <p className="mt-3 text-graphite/75 text-base sm:text-lg">
              {home("workshopSubtitle")}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Workshop Bench Main Card */}
            <div className="md:col-span-2 group overflow-hidden border border-line bg-paper rounded-md shadow-xs transition-shadow hover:shadow-md">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-graphite">
                <Image
                  src={workshopImage}
                  alt={home("photoBenchAlt")}
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  placeholder="blur"
                />
              </div>
              <div className="p-5">
                <p className="font-mono text-xs uppercase tracking-widest text-steel">
                  Praha 3 · Žižkov
                </p>
                <h3 className="mt-1 font-display text-lg sm:text-xl">
                  {home("photoBenchAlt")}
                </h3>
              </div>
            </div>

            {/* Micro-soldering & Screen Repair Cards */}
            <div className="grid gap-6">
              <div className="group overflow-hidden border border-line bg-paper rounded-md shadow-xs transition-shadow hover:shadow-md">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-graphite">
                  <Image
                    src={screenRepairImage}
                    alt={home("photoScreenAlt")}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    placeholder="blur"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-sm font-medium">
                    {home("photoScreenAlt")}
                  </h3>
                </div>
              </div>

              <div className="group overflow-hidden border border-line bg-paper rounded-md shadow-xs transition-shadow hover:shadow-md">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-graphite">
                  <Image
                    src={solderingImage}
                    alt={home("photoSolderingAlt")}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    placeholder="blur"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-sm font-medium">
                    {home("photoSolderingAlt")}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
