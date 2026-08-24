import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { InterfaceIcon, type IconName } from "@/components/InterfaceIcon";
import { FaqJsonLd, LocalBusinessJsonLd, ServiceCatalogJsonLd } from "@/components/JsonLd";
import { PageTransition } from "@/components/PageTransition";
import { QuoteForm } from "@/components/QuoteForm";
import { ShopStatusBadge } from "@/components/ShopStatusBadge";
import { Link } from "@/i18n/navigation";
import { getModel, type Locale, type Repair } from "@/lib/catalog";
import { site } from "@/lib/site";
import deviceHeroImage from "@/public/device-hero.jpg";
import screenRepairImage from "@/public/screen-repair.jpg";
import solderingImage from "@/public/soldering.jpg";
import workshopImage from "@/public/workshop.jpg";

const serviceKeys: ReadonlyArray<{ key: string; icon: IconName; price?: number }> = [
  { key: "battery", icon: "battery", price: 1290 },
  { key: "display", icon: "display", price: 2790 },
  { key: "glass", icon: "glass", price: 1890 },
  { key: "port", icon: "port", price: 1290 },
  { key: "macbook", icon: "laptop", price: 3490 },
  { key: "diagnostics", icon: "diagnostics" },
];

const trustKeys = [
  { key: "diagnostics", icon: "diagnostics" },
  { key: "warranty", icon: "shield" },
  { key: "data", icon: "data" },
  { key: "sameDay", icon: "clock" },
  { key: "parts", icon: "tools" },
  { key: "price", icon: "check" },
] as const satisfies ReadonlyArray<{ key: string; icon: IconName }>;

const priceGroups = [
  { key: "iphone", brand: "apple", model: "iphone-13" },
  { key: "samsung", brand: "samsung", model: "galaxy-a55" },
  { key: "macbook", brand: "apple", model: "macbook-air" },
] as const;

const faqKeys = [2, 3, 5, 4, 1, 6] as const;

function money(value: number, locale: Locale) {
  return new Intl.NumberFormat(locale === "cs" ? "cs-CZ" : locale === "ru" ? "ru-RU" : "en-GB", {
    maximumFractionDigits: 0,
  }).format(value);
}

function repairPrice(repair: Repair, locale: Locale, fromLabel: string) {
  const value = repair.exactPrice ?? repair.priceFrom;
  return value ? `${fromLabel} ${money(value, locale)} Kč` : "—";
}

function repairDuration(duration: string, locale: Locale) {
  if (locale === "ru") {
    return duration
      .replace(/\bmin\b/g, "мин")
      .replace(/\bdny\b/g, "дн.")
      .replace(/\bh\b/g, "ч");
  }
  if (locale === "en") return duration.replace(/\bdny\b/g, "days");
  return duration;
}

function SectionHeading({ eyebrow, title, body, align = "left" }: {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="section-kicker">{eyebrow}</p>
      <h2 className="section-title mt-3">{title}</h2>
      {body ? <p className="mt-4 text-base leading-7 text-steel sm:text-lg">{body}</p> : null}
    </div>
  );
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const [hero, home, repair, faq, contact, meta] = await Promise.all([
    getTranslations("hero"), getTranslations("home"), getTranslations("repair"),
    getTranslations("faq"), getTranslations("contact"), getTranslations("meta"),
  ]);
  const lang = locale as Locale;
  const faqs = faqKeys.map((key) => ({ q: faq(`q${key}`), a: faq(`a${key}`) }));
  const services = serviceKeys.map((service) => ({
    ...service,
    title: home(`service${service.key}Title`),
    body: home(`service${service.key}Body`),
    time: home(`service${service.key}Time`),
  }));

  return (
    <PageTransition>
      <LocalBusinessJsonLd description={meta("description")} />
      <FaqJsonLd items={faqs} />
      <ServiceCatalogJsonLd services={services.map((service) => ({ name: service.title, description: service.body, price: service.price }))} />

      <section className="relative isolate overflow-hidden border-b border-line">
        <div className="surface-grid absolute inset-0 -z-20" />
        <div className="orange-glow absolute -right-32 top-0 -z-10 h-[36rem] w-[36rem]" />
        <div className="mx-auto grid min-h-[calc(100svh-72px)] max-w-7xl items-center gap-12 px-5 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="hero-enter max-w-3xl">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <ShopStatusBadge />
              <span className="rounded-full border border-line bg-paper/70 px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-steel">{hero("eyebrow")}</span>
            </div>
            <h1 className="font-display text-[clamp(2.65rem,7.2vw,5.9rem)] leading-[0.98] tracking-[-0.055em] text-white">
              {hero("title")}<span className="mt-2 block text-kapton">{hero("highlight")}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-steel sm:text-xl">{hero("subtitle")}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#booking" className="press inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-enamel px-6 font-semibold text-white shadow-[0_12px_34px_rgb(255_93_31_/_0.28)]">
                {hero("book")}<InterfaceIcon name="arrow" className="h-5 w-5" />
              </a>
              <a href="#pricing" className="press inline-flex min-h-13 items-center justify-center rounded-full border border-line bg-paper/60 px-6 font-semibold text-graphite backdrop-blur hover:border-kapton/60">{hero("prices")}</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-graphite">
              {[home("diag"), home("warranty"), home("noFees")].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-kapton/15 text-kapton"><InterfaceIcon name="check" className="h-3.5 w-3.5" /></span>{item}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-enter relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/12 bg-paper shadow-[0_36px_90px_rgb(0_0_0_/_0.48)] sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image src={deviceHeroImage} alt={home("deviceAlt")} fill priority fetchPriority="high" placeholder="blur" quality={75} sizes="(max-width: 1024px) 90vw, 45vw" className="object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/12 bg-black/60 p-4 backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-5">
                <p className="section-kicker">{home("heroProofKicker")}</p>
                <p className="mt-2 font-display text-lg leading-snug text-white sm:text-xl">{home("heroProofTitle")}</p>
                <p className="mt-2 text-sm leading-6 text-white/65">{home("heroProofBody")}</p>
              </div>
            </div>
            <div className="absolute -left-3 top-8 rounded-xl border border-line bg-[#151519]/95 px-4 py-3 shadow-2xl backdrop-blur sm:-left-8 sm:top-12">
              <p className="font-mono text-[0.64rem] uppercase tracking-widest text-steel">{home("sameDayLabel")}</p>
              <p className="mt-1 font-semibold text-white">{home("sameDayValue")}</p>
            </div>
          </div>
        </div>
      </section>

      <section aria-label={home("trustTitle")} className="border-b border-line bg-[#151519]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:px-6 md:grid-cols-3 xl:grid-cols-6">
          {trustKeys.map(({ key, icon }, index) => (
            <div key={key} className={`flex min-h-28 items-start gap-3 py-6 ${index % 2 === 0 ? "pr-3" : "border-l border-line pl-3"} md:border-l md:px-5 md:first:border-l-0 xl:min-h-32 xl:items-center`}>
              <InterfaceIcon name={icon} className="mt-0.5 h-5 w-5 shrink-0 text-kapton" />
              <div><p className="text-sm font-semibold text-graphite">{home(`trust${key}Title`)}</p><p className="mt-1 text-xs leading-5 text-steel">{home(`trust${key}Body`)}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="scroll-mt-24 px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow={home("servicesEyebrow")} title={home("servicesTitle")} body={home("servicesSubtitle")} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.key} className="card-lift flex min-h-64 flex-col rounded-2xl border border-line bg-paper p-6 sm:p-7">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-kapton/12 text-kapton"><InterfaceIcon name={service.icon} className="h-6 w-6" /></div>
                <h3 className="mt-6 font-display text-xl">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-steel">{service.body}</p>
                <div className="mt-6 flex items-end justify-between gap-4 border-t border-line pt-4">
                  <p className="font-mono text-sm font-bold text-kapton">{service.price ? `${home("from")} ${money(service.price, lang)} Kč` : home("free")}</p>
                  <p className="inline-flex items-center gap-1.5 text-xs text-steel"><InterfaceIcon name="clock" className="h-4 w-4" />{service.time}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/repair" prefetch={false} className="press inline-flex min-h-12 items-center gap-2 rounded-full border border-line bg-paper px-5 font-semibold hover:border-kapton/60">{home("allServices")}<InterfaceIcon name="arrow" className="h-4 w-4 text-kapton" /></Link>
            <p className="text-sm text-steel">{repair("partsNote")}</p>
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-24 border-y border-line bg-paper/45 px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow={home("processEyebrow")} title={home("processTitle")} body={home("processSubtitle")} align="center" />
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {[1, 2, 3].map((step) => (
              <li key={step} className="rounded-2xl border border-line bg-aluminum p-6 sm:p-8">
                <div className="flex items-center justify-between"><span className="font-mono text-xs font-bold tracking-widest text-kapton">0{step}</span><span className="font-mono text-[0.65rem] uppercase tracking-widest text-steel">{home(`process${step}Tag`)}</span></div>
                <h3 className="mt-8 font-display text-xl">{home(`process${step}`)}</h3>
                <p className="mt-3 text-sm leading-6 text-steel">{home(`process${step}Body`)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-24 px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow={home("pricingEyebrow")} title={home("pricingTitle")} body={home("pricingSubtitle")} />
            <Link href="/prices" prefetch={false} className="press inline-flex min-h-12 w-fit items-center gap-2 rounded-full border border-line bg-paper px-5 font-semibold hover:border-kapton/60">{home("fullPriceList")}<InterfaceIcon name="arrow" className="h-4 w-4 text-kapton" /></Link>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {priceGroups.map((group) => {
              const model = getModel(group.brand, group.model);
              if (!model) return null;
              return (
                <article key={group.key} className="overflow-hidden rounded-2xl border border-line bg-paper">
                  <div className="border-b border-line p-6"><p className="section-kicker">{home(`price${group.key}Kicker`)}</p><h3 className="mt-2 font-display text-2xl">{model.name}</h3><p className="mt-2 text-sm text-steel">{home(`price${group.key}Body`)}</p></div>
                  <div role="table" aria-label={`${model.name} ${home("pricingTitle")}`} className="divide-y divide-line">
                    {model.repairs.slice(0, group.key === "macbook" ? 3 : 4).map((item) => (
                      <div key={item.id} role="row" className="grid grid-cols-[1fr_auto] gap-4 px-6 py-4">
                        <div role="cell"><p className="text-sm font-semibold">{item.name[lang]}</p><p className="mt-1 inline-flex items-center gap-1 text-xs text-steel"><InterfaceIcon name="clock" className="h-3.5 w-3.5" />{repairDuration(item.duration ?? "—", lang)}</p></div>
                        <p role="cell" className="price-num self-center whitespace-nowrap font-mono text-sm font-bold text-kapton">{repairPrice(item, lang, home("from"))}</p>
                      </div>
                    ))}
                  </div>
                  <Link href={`/repair/${group.brand}/${group.model}`} prefetch={false} className="press flex min-h-12 items-center justify-between border-t border-line px-6 text-sm font-semibold hover:bg-white/3">{home("modelDetail")}<InterfaceIcon name="arrow" className="h-4 w-4 text-kapton" /></Link>
                </article>
              );
            })}
          </div>
          <p className="mt-6 text-sm leading-6 text-steel">{home("pricingNote")}</p>
        </div>
      </section>

      <section id="workshop" className="scroll-mt-24 border-y border-line bg-[#151519] px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading eyebrow={home("workshopEyebrow")} title={home("workshopTitle")} body={home("workshopSubtitle")} />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {["esd", "parts", "protocol", "privacy"].map((key) => (
                <li key={key} className="flex gap-3 rounded-xl border border-line bg-aluminum/60 p-4"><InterfaceIcon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-kapton" /><div><p className="text-sm font-semibold">{home(`workshop${key}Title`)}</p><p className="mt-1 text-xs leading-5 text-steel">{home(`workshop${key}Body`)}</p></div></li>
              ))}
            </ul>
            <p className="mt-7 border-l-2 border-kapton pl-4 text-sm leading-6 text-steel">{home("workshopProof")}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl border border-line"><Image src={workshopImage} alt={home("photoBenchAlt")} fill placeholder="blur" sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" /></div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line"><Image src={screenRepairImage} alt={home("photoScreenAlt")} fill placeholder="blur" sizes="(max-width: 640px) 48vw, 28vw" className="object-cover" /></div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line"><Image src={solderingImage} alt={home("photoSolderingAlt")} fill placeholder="blur" sizes="(max-width: 640px) 48vw, 28vw" className="object-cover" /></div>
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div><SectionHeading eyebrow={home("faqEyebrow")} title={faq("title")} body={home("faqSubtitle")} /><Link href="/faq" prefetch={false} className="press mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-kapton">{home("allFaq")}<InterfaceIcon name="arrow" className="h-4 w-4" /></Link></div>
          <div className="divide-y divide-line border-y border-line">
            {faqs.map((item, index) => (
              <details key={item.q} className="group py-1" open={index === 0}><summary className="flex min-h-16 list-none cursor-pointer items-center justify-between gap-6 py-4 font-semibold marker:hidden"><span>{item.q}</span><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-kapton transition-transform group-open:rotate-45" aria-hidden>+</span></summary><p className="max-w-2xl pb-5 pr-12 text-sm leading-7 text-steel">{item.a}</p></details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 border-t border-line bg-paper/45 px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow={home("contactEyebrow")} title={contact("title")} body={contact("subtitle")} />
          <div className="mt-10 grid gap-5 lg:grid-cols-[0.86fr_1.14fr]">
            <div className="self-start overflow-hidden rounded-2xl border border-line bg-aluminum">
              <iframe src="https://www.google.com/maps?q=Biskupcova+31+Praha&output=embed" title={contact("mapTitle")} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-72 w-full border-0 grayscale-[0.85] contrast-[1.12] sm:h-80" />
              <div className="grid gap-5 p-6 sm:grid-cols-2">
                <div><p className="section-kicker">{contact("address")}</p><p className="mt-2 font-semibold">{site.street}<br />{site.postalCode} {site.district}</p><p className="mt-2 text-sm text-steel">{contact("tramStop")} {site.tramStop} · {site.trams}</p></div>
                <div><p className="section-kicker">{contact("hours")}</p><p className="mt-2 font-semibold">{site.hours[lang]}</p><a href={site.mapUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-kapton"><InterfaceIcon name="location" className="h-4 w-4" />{contact("map")}</a></div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <a href={site.telegramUrl} target="_blank" rel="noreferrer" className="card-lift rounded-2xl border border-line bg-aluminum p-6"><InterfaceIcon name="telegram" className="h-6 w-6 text-kapton" /><p className="mt-5 section-kicker">Telegram</p><p className="mt-2 font-display text-xl">{site.telegram}</p><p className="mt-2 text-sm text-steel">{contact("telegramFast")}</p></a>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="card-lift rounded-2xl border border-line bg-aluminum p-6"><InterfaceIcon name="call" className="h-6 w-6 text-kapton" /><p className="mt-5 section-kicker">{contact("phone")}</p><p className="mt-2 font-display text-xl">{site.phone}</p><p className="mt-2 text-sm text-steel">{contact("phoneBody")}</p></a>
              <div id="booking" className="scroll-mt-28 rounded-2xl border border-kapton/35 bg-aluminum p-6 sm:col-span-2 sm:p-8">
                <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><p className="section-kicker">{home("bookingEyebrow")}</p><h2 className="mt-2 font-display text-2xl sm:text-3xl">{home("bookingTitle")}</h2></div><p className="max-w-xs text-sm leading-6 text-steel">{home("bookingBody")}</p></div>
                <QuoteForm locale={locale} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
