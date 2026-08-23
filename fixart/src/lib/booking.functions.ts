import { createServerFn } from "@tanstack/react-start";
import { getRequestIP } from "@tanstack/react-start/server";
import { getSql } from "@/lib/db";
import { SHOP } from "./shop";
import {
  bookingInputSchema,
  buildTelegramUrl,
  deviceFamily,
  parseBooking,
  type BookingResult,
} from "./booking";

const hits = new Map<string, number[]>();

function isLimited(key: string) {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000;
  const recent = (hits.get(key) ?? []).filter((at) => now - at < windowMs);
  if (recent.length >= 8) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  return false;
}

export const submitBooking = createServerFn({ method: "POST" })
  .validator(bookingInputSchema)
  .handler(async ({ data }): Promise<BookingResult> => {
    if (data.company.trim()) {
      return { ok: true, telegramUrl: SHOP.telegram };
    }
    const parsed = parseBooking(data);
    if (!parsed.ok) return parsed;
    const ip = getRequestIP({ xForwardedFor: true }) ?? "anon";
    if (isLimited(ip)) return { ok: false, error: "rate" };

    try {
      const sql = await getSql();
      await sql`
        insert into booking_events (service, device_family, lang)
        values (${parsed.data.service}, ${deviceFamily(parsed.data.device)}, ${parsed.data.lang})
      `;
    } catch {
      // Event log is best-effort; the customer still gets a Telegram handoff.
    }

    return {
      ok: true,
      telegramUrl: buildTelegramUrl({
        name: parsed.data.name,
        phone: parsed.phone,
        device: parsed.data.device,
        service: parsed.data.service,
        message: parsed.data.message,
        lang: parsed.data.lang,
      }),
    };
  });
