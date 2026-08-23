export type Locale = "cs" | "en" | "ru";

export type RepairPrice = {
  priceFrom?: number;
  priceTo?: number;
  exactPrice?: number;
};

const onRequest: Record<Locale, string> = {
  cs: "cena na dotaz",
  en: "price on request",
  ru: "цена по запросу",
};

const fromPrefix: Record<Locale, string> = {
  cs: "od ",
  en: "from ",
  ru: "от ",
};

export function formatCzk(amount: number): string {
  if (!Number.isFinite(amount) || amount < 0) return "0 Kč";
  const rounded = Math.round(amount);
  const grouped = rounded
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `${grouped} Kč`;
}

export function formatRepairPrice(
  repair: RepairPrice = {},
  locale: Locale = "cs",
): string {
  if (repair.exactPrice !== undefined && Number.isFinite(repair.exactPrice) && repair.exactPrice > 0) {
    return formatCzk(repair.exactPrice);
  }

  const from = repair.priceFrom;
  const to = repair.priceTo;

  if (from && to && Number.isFinite(from) && Number.isFinite(to) && from > 0 && to > 0) {
    const fromPart = formatCzk(from).replace(" Kč", "");
    return `${fromPart}–${formatCzk(to)}`;
  }

  if (from && Number.isFinite(from) && from > 0) {
    return `${fromPrefix[locale]}${formatCzk(from)}`;
  }

  return onRequest[locale];
}
