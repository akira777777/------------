import { z } from "zod";
import { BOOKING_SERVICES, DEVICES, SHOP } from "./shop.ts";
import type { Lang } from "./i18n.ts";

const CZECH_PHONE_RE = /^[1-9]\d{8}$/;
const INTL_PHONE_RE = /^[1-9]\d{7,14}$/;

export function normalizePhone(raw: string): string | null {
  const trimmed = raw.trim();
  const isExplicitIntl = trimmed.startsWith("+") || trimmed.startsWith("00");
  let digits = trimmed.replace(/[^\d+]/g, "");

  if (digits.startsWith("00")) {
    digits = `+${digits.slice(2)}`;
  }

  if (isExplicitIntl && digits.startsWith("+")) {
    const withoutPlus = digits.slice(1);
    if (withoutPlus.startsWith("420")) {
      const czDigits = withoutPlus.slice(3).replace(/^0+/, "");
      if (CZECH_PHONE_RE.test(czDigits)) {
        return `+420${czDigits}`;
      }
    }
    if (INTL_PHONE_RE.test(withoutPlus)) {
      return `+${withoutPlus}`;
    }
    return null;
  }

  let czDigits = digits.replace(/[^\d]/g, "");
  if (czDigits.startsWith("420") && czDigits.length === 12) {
    czDigits = czDigits.slice(3);
  }
  if (czDigits.startsWith("0")) {
    czDigits = czDigits.slice(1);
  }
  if (!CZECH_PHONE_RE.test(czDigits)) {
    return null;
  }
  return `+420${czDigits}`;
}

export function deviceFamily(device: string): "iphone" | "samsung" | "macbook" | "other" {
  const value = device.toLowerCase();
  if (value.includes("iphone")) return "iphone";
  if (value.includes("samsung") || value.includes("galaxy")) return "samsung";
  if (value.includes("macbook")) return "macbook";
  return "other";
}

export const bookingInputSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(6).max(24),
  device: z.string().min(1).max(80),
  service: z.enum(BOOKING_SERVICES),
  message: z.string().trim().max(500).optional().default(""),
  lang: z.enum(["cs", "en", "ru"]),
  company: z.string().max(120).optional().default(""),
});

export type BookingInput = z.infer<typeof bookingInputSchema>;

export type BookingResult =
  | { ok: true; telegramUrl: string }
  | { ok: false; error: "phone" | "rate" | "server" };

export function parseBooking(raw: unknown): { ok: true; data: BookingInput; phone: string } | { ok: false; error: "phone" } {
  const parsed = bookingInputSchema.safeParse(raw);
  if (!parsed.success) return { ok: false, error: "phone" };
  const phone = normalizePhone(parsed.data.phone);
  if (!phone) return { ok: false, error: "phone" };
  const device = DEVICES.includes(parsed.data.device as (typeof DEVICES)[number])
    ? parsed.data.device
    : "Jiné";
  return { ok: true, data: { ...parsed.data, device }, phone };
}

export function buildTelegramUrl(input: {
  name: string;
  phone: string;
  device: string;
  service: string;
  message: string;
  lang: Lang;
}) {
  const text = [
    "FixArt — rezervace",
    `${input.name} · ${input.phone}`,
    `${input.device} · ${input.service}`,
    input.message ? input.message : "",
    input.lang !== "cs" ? `lang: ${input.lang}` : "",
  ]
    .filter(Boolean)
    .join("\n");
  return `${SHOP.telegram}?text=${encodeURIComponent(text)}`;
}
