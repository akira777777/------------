export type Quote = {
  name: string;
  contact: string;
  device: string;
  repair: string;
  note?: string;
  locale?: "cs" | "en" | "ru";
};

export type QuoteError =
  | "name"
  | "contact"
  | "invalid"
  | "origin"
  | "rate"
  | "failed"
  | "payload_too_large"
  | "method";

export type QuoteApiResponse =
  | { ok: true; via: "telegram" }
  | {
      ok: true;
      via: "link";
      telegram: string;
      text: string;
    }
  | { ok: false; error: QuoteError; telegram?: string };

export function formatTelegramMessage(quote: Quote): string {
  const locale = quote.locale ?? "cs";

  const labels = {
    cs: {
      header: "FixArt — nová poptávka",
      name: "Jméno",
      contact: "Kontakt",
      device: "Zařízení",
      repair: "Oprava",
      note: "Poznámka",
      lang: "Jazyk",
    },
    en: {
      header: "FixArt — new inquiry",
      name: "Name",
      contact: "Contact",
      device: "Device",
      repair: "Repair",
      note: "Note",
      lang: "Language",
    },
    ru: {
      header: "FixArt — новая заявка",
      name: "Имя",
      contact: "Контакт",
      device: "Устройство",
      repair: "Ремонт",
      note: "Примечание",
      lang: "Язык",
    },
  } as const;

  const l = labels[locale];

  const lines = [
    l.header,
    `${l.name}: ${quote.name}`,
    `${l.contact}: ${quote.contact}`,
    `${l.device}: ${quote.device}`,
    `${l.repair}: ${quote.repair}`,
  ];
  if (quote.note) lines.push(`${l.note}: ${quote.note}`);
  if (quote.locale) lines.push(`${l.lang}: ${quote.locale}`);
  return lines.join("\n");
}

export function telegramShareUrl(base: string, text: string): string {
  const trimmed = base.replace(/\/$/, "");
  return `${trimmed}?text=${encodeURIComponent(text)}`;
}
