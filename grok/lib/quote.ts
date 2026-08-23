import { z } from "zod";
import {
  formatTelegramMessage,
  telegramShareUrl,
  type Quote,
  type QuoteApiResponse,
} from "./quote-format.ts";

export {
  formatTelegramMessage,
  telegramShareUrl,
  type Quote,
  type QuoteApiResponse,
} from "./quote-format.ts";

export const quoteSchema = z.object({
  name: z.string().trim().min(2).max(80),
  contact: z.string().trim().min(3).max(80),
  device: z.string().trim().max(80).optional(),
  repair: z.string().trim().max(80).optional(),
  note: z.string().trim().max(500).optional(),
  locale: z.enum(["cs", "en", "ru"]).optional(),
});

export function payloadFromForm(
  entries: Iterable<[string, FormDataEntryValue]>,
): Record<string, string> {
  const payload: Record<string, string> = {};
  for (const [key, value] of entries) {
    if (typeof value === "string") payload[key] = value;
  }
  return payload;
}

export function parseQuote(
  input: unknown,
):
  | { ok: true; data: Quote }
  | { ok: false; error: "name" | "contact" | "invalid" } {
  const result = quoteSchema.safeParse(input);
  if (!result.success) {
    const path = result.error.issues[0]?.path[0];
    if (path === "name" || path === "contact") {
      return { ok: false, error: path };
    }
    return { ok: false, error: "invalid" };
  }
  return {
    ok: true,
    data: {
      ...result.data,
      device: result.data.device || "—",
      repair: result.data.repair || "—",
    },
  };
}

export async function sendTelegram(
  text: string,
): Promise<"sent" | "not_configured" | "failed"> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return "not_configured";

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
        signal: AbortSignal.timeout(8000),
      },
    );
    return response.ok ? "sent" : "failed";
  } catch {
    return "failed";
  }
}

function honeypotFilled(input: unknown): boolean {
  if (!input || typeof input !== "object") return false;
  const value = (input as { website?: unknown }).website;
  return typeof value === "string" && value.trim().length > 0;
}

export type QuoteResult =
  | {
      status: 200;
      body: Extract<QuoteApiResponse, { ok: true }>;
    }
  | {
      status: 400 | 429 | 502;
      body: Extract<QuoteApiResponse, { ok: false }>;
    };

export async function handleQuote(
  input: unknown,
  ip: string,
  deps: {
    send?: typeof sendTelegram;
    limit?: (key: string) => boolean;
    telegramUrl?: string;
  } = {},
): Promise<QuoteResult> {
  if (honeypotFilled(input)) {
    return { status: 200, body: { ok: true, via: "telegram" } };
  }

  const allow = (deps.limit ?? (() => true))(ip);
  if (!allow) {
    return { status: 429, body: { ok: false, error: "rate" } };
  }

  const parsed = parseQuote(input);
  if (!parsed.ok) {
    return { status: 400, body: { ok: false, error: parsed.error } };
  }

  const text = formatTelegramMessage(parsed.data);
  const delivery = await (deps.send ?? sendTelegram)(text);
  const telegram = deps.telegramUrl ?? "https://t.me/liltrafficRUS";

  if (delivery === "not_configured") {
    return {
      status: 200,
      body: {
        ok: true,
        via: "link",
        telegram: telegramShareUrl(telegram, text),
        text,
      },
    };
  }
  if (delivery === "failed") {
    return {
      status: 502,
      body: {
        ok: false,
        error: "failed",
        telegram: telegramShareUrl(telegram, text),
      },
    };
  }
  return { status: 200, body: { ok: true, via: "telegram" } };
}
