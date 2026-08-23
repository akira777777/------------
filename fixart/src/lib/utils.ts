import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCzk(amount: number, locale: string) {
  const loc = locale === "cs" ? "cs-CZ" : locale === "ru" ? "ru-RU" : "en-GB";
  return `${new Intl.NumberFormat(loc).format(amount)} Kč`;
}
