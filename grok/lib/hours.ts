import type { Locale } from "./catalog";

export type ShopStatus = {
  isOpen: boolean;
  text: string;
};

export function getShopStatus(date: Date = new Date(), locale: Locale = "cs"): ShopStatus {
  // Format current date in Europe/Prague timezone
  const pragueFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Prague",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  const parts = pragueFormatter.formatToParts(date);
  let dayOfWeek = "";
  let hour = 0;
  let minute = 0;

  for (const part of parts) {
    if (part.type === "weekday") dayOfWeek = part.value; // e.g. Mon, Tue... Sat, Sun
    if (part.type === "hour") hour = parseInt(part.value, 10);
    if (part.type === "minute") minute = parseInt(part.value, 10);
  }

  const isWeekend = dayOfWeek === "Sat" || dayOfWeek === "Sun";
  const isWeekday = !isWeekend;

  // Working hours: Mon-Fri 09:00 to 19:00
  const totalMinutes = hour * 60 + minute;
  const openMinutes = 9 * 60; // 09:00
  const closeMinutes = 19 * 60; // 19:00

  const isOpen = isWeekday && totalMinutes >= openMinutes && totalMinutes < closeMinutes;

  // After closing on Friday (Fri >= 19:00), next opening is Monday — not tomorrow.
  const isFridayAfterClose = dayOfWeek === "Fri" && totalMinutes >= closeMinutes;
  const nextOpenLabel = {
    cs: isFridayAfterClose || isWeekend ? "Otevíráme v pondělí v 09:00" : totalMinutes < openMinutes ? "Dnes otevíráme v 09:00" : "Otevíráme zítra v 09:00",
    en: isFridayAfterClose || isWeekend ? "Opens Monday at 09:00" : totalMinutes < openMinutes ? "Opens today at 09:00" : "Opens tomorrow at 09:00",
    ru: isFridayAfterClose || isWeekend ? "Откроемся в понедельник в 09:00" : totalMinutes < openMinutes ? "Сегодня откроемся в 09:00" : "Откроемся завтра в 09:00",
  };

  const labels = {
    cs: {
      open: "Právě máme otevřeno (do 19:00)",
      closed: `Zavřeno · ${nextOpenLabel.cs}`,
    },
    en: {
      open: "Open now (until 19:00)",
      closed: `Closed · ${nextOpenLabel.en}`,
    },
    ru: {
      open: "Сейчас открыто (до 19:00)",
      closed: `Закрыто · ${nextOpenLabel.ru}`,
    },
  };

  return {
    isOpen,
    text: isOpen ? labels[locale].open : labels[locale].closed,
  };
}
