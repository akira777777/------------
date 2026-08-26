import { createFileRoute } from "@tanstack/react-router";
import { dbSource, getSql } from "@/lib/db";
import {
  parseTelegramOwnerCommand,
  telegramHelpMessage,
  telegramStartMessage,
  telegramStatusMessage,
} from "@/lib/telegram-bot";
import { sendTelegramMessage } from "@/lib/telegram.server";

type TelegramUpdate = {
  message?: {
    chat?: { id?: number | string };
    text?: string;
  };
};

type BookingStatusRow = {
  total: number;
  last_created_at: string | Date | null;
  service: string | null;
  device_family: string | null;
  delivery: string | null;
};

function secretsMatch(expected: string, actual: string): boolean {
  const length = Math.max(expected.length, actual.length);
  let mismatch = expected.length ^ actual.length;
  for (let index = 0; index < length; index += 1) {
    mismatch |= (expected.charCodeAt(index) || 0) ^ (actual.charCodeAt(index) || 0);
  }
  return mismatch === 0;
}

async function getBookingStatus(): Promise<BookingStatusRow> {
  const sql = await getSql();
  const rows = await sql.query<BookingStatusRow>(`
    select
      (select count(*)::int from booking_events) as total,
      latest.created_at as last_created_at,
      latest.service,
      latest.device_family,
      latest.delivery
    from (values (1)) as singleton(value)
    left join lateral (
      select created_at, service, device_family, delivery
      from booking_events
      order by created_at desc
      limit 1
    ) as latest on true
  `);
  return (
    rows[0] ?? {
      total: 0,
      last_created_at: null,
      service: null,
      device_family: null,
      delivery: null,
    }
  );
}

export const Route = createFileRoute("/api/telegram/webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const expectedSecret = process.env.TELEGRAM_WEBHOOK_SECRET?.trim();
        const suppliedSecret = request.headers.get("x-telegram-bot-api-secret-token")?.trim();
        if (!expectedSecret || !suppliedSecret || !secretsMatch(expectedSecret, suppliedSecret)) {
          return Response.json({ ok: false }, { status: 401 });
        }

        const contentLength = Number(request.headers.get("content-length") ?? 0);
        if (contentLength > 64_000) return Response.json({ ok: false }, { status: 413 });

        const update = (await request.json().catch(() => null)) as TelegramUpdate | null;
        const ownerChatId = process.env.TELEGRAM_CHAT_ID?.trim();
        const message = update?.message;
        if (!ownerChatId || String(message?.chat?.id ?? "") !== ownerChatId) {
          return Response.json({ ok: true });
        }

        const command = parseTelegramOwnerCommand(message?.text ?? "");
        if (!command) return Response.json({ ok: true });

        let reply = command === "start" ? telegramStartMessage() : telegramHelpMessage();
        if (command === "status") {
          try {
            const status = await getBookingStatus();
            reply = telegramStatusMessage({
              database: dbSource,
              total: status.total,
              lastCreatedAt: status.last_created_at,
              lastService: status.service,
              lastDeviceFamily: status.device_family,
              lastDelivery: status.delivery,
            });
          } catch {
            reply =
              "Бот работает, но Neon временно не ответил. Новые заявки всё равно будут приходить в этот чат.";
          }
        }

        const sent = await sendTelegramMessage(ownerChatId, reply);
        return Response.json({ ok: sent }, { status: sent ? 200 : 502 });
      },
    },
  },
});
