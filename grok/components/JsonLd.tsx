import { site } from "@/lib/site";
import type { DeviceModel, Locale } from "@/lib/catalog";
import { formatRepairPrice } from "@/lib/money";

export function LocalBusinessJsonLd({ description }: { description: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    priceRange: "Kč",
    description,
    telephone: site.phone,
    email: site.email,
    url: site.url,
    sameAs: [site.telegramUrl, site.whatsappUrl],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      addressLocality: "Praha 3",
      postalCode: site.postalCode,
      addressCountry: site.country,
    },
    areaServed: "Prague",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqJsonLd({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function DeviceServiceJsonLd({
  brandName,
  model,
  locale,
}: {
  brandName: string;
  model: DeviceModel;
  locale: Locale;
}) {
  const offers = model.repairs.map((repair) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: `${repair.name[locale]} — ${brandName} ${model.name}`,
    },
    priceCurrency: "CZK",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "CZK",
      description: formatRepairPrice(repair, locale),
    },
  }));

  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Electronics Repair",
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.street,
        addressLocality: "Praha 3",
        postalCode: site.postalCode,
        addressCountry: site.country,
      },
    },
    areaServed: "Prague",
    name: `Oprava ${brandName} ${model.name} Praha`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Repair services for ${brandName} ${model.name}`,
      itemListElement: offers,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
