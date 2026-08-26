import { buildTelegramMessage } from "./booking.ts";
import type { BookingInput } from "./booking.ts";

type TelegramBooking = Pick<BookingInput, "name" | "device" | "service" | "message" | "lang"> & {
  phone: string;
};

const TELEGRAM_TIMEOUT_MS = 6_000;

export async function sendTelegramMessage(chatId: string, text: string): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  if (!token || !chatId.trim()) return false;

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
      signal: AbortSignal.timeout(TELEGRAM_TIMEOUT_MS),
    });
    if (!response.ok) return false;
    const result = (await response.json()) as { ok?: boolean };
    return result.ok === true;
  } catch {
    return false;
  }
}

/**
 * Sends a lead directly to the workshop's private Telegram chat.
 * Credentials are server-only deployment secrets and are never returned to the browser.
 */
export async function sendTelegramBooking(input: TelegramBooking): Promise<boolean> {
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();
  if (!chatId) return false;
  return sendTelegramMessage(chatId, buildTelegramMessage(input));
}
