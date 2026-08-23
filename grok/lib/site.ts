function siteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "https://fixart.vercel.app";
}

export const site = {
  name: "FixArt",
  url: siteUrl(),
  founder: "Artem Mikhailov",
  city: "Praha",
  district: "Praha 3",
  country: "CZ",
  currency: "CZK",
  phone: "+420 737 500 587",
  email: "fear75412@gmail.com",
  telegram: "@liltrafficRUS",
  telegramUrl: "https://t.me/liltrafficRUS",
  whatsappUrl: "https://wa.me/420737500587",
  street: "Biskupcova 31",
  postalCode: "130 00",
  tramStop: "Biskupcova",
  trams: "9, 10, 11, 16, 19, 26",
  hours: {
    cs: "Po–Pá 09:00–19:00, jinak po dohodě",
    en: "Mon–Fri 09:00–19:00, or by appointment",
    ru: "Пн–Пт 09:00–19:00, иначе по договорённости",
  },
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Biskupcova+31+Praha",
  appleMapsUrl:
    "https://maps.apple.com/?address=Biskupcova%2031,%20Praha,%20Czechia",
} as const;
