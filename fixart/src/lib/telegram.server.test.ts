import assert from "node:assert/strict";
import { afterEach, test } from "node:test";
import { sendTelegramBooking, sendTelegramMessage } from "./telegram.server.ts";

const originalFetch = globalThis.fetch;
const originalToken = process.env.TELEGRAM_BOT_TOKEN;
const originalChatId = process.env.TELEGRAM_CHAT_ID;

const booking = {
  name: "Jan Novak",
  phone: "+420737500587",
  device: "iPhone 16",
  service: "battery" as const,
  message: "Po 10:00",
  lang: "cs" as const,
};

afterEach(() => {
  globalThis.fetch = originalFetch;
  if (originalToken === undefined) delete process.env.TELEGRAM_BOT_TOKEN;
  else process.env.TELEGRAM_BOT_TOKEN = originalToken;
  if (originalChatId === undefined) delete process.env.TELEGRAM_CHAT_ID;
  else process.env.TELEGRAM_CHAT_ID = originalChatId;
});

test("does not call Telegram without server credentials", async () => {
  delete process.env.TELEGRAM_BOT_TOKEN;
  delete process.env.TELEGRAM_CHAT_ID;
  globalThis.fetch = async () => {
    throw new Error("fetch must not run");
  };
  assert.equal(await sendTelegramBooking(booking), false);
});

test("sends the complete booking to the configured private chat", async () => {
  process.env.TELEGRAM_BOT_TOKEN = "test-token";
  process.env.TELEGRAM_CHAT_ID = "123456";
  globalThis.fetch = async (input, init) => {
    assert.equal(String(input), "https://api.telegram.org/bottest-token/sendMessage");
    assert.equal(init?.method, "POST");
    const body = JSON.parse(String(init?.body)) as { chat_id: string; text: string };
    assert.equal(body.chat_id, "123456");
    assert.match(body.text, /Jan Novak/);
    assert.match(body.text, /\+420737500587/);
    assert.match(body.text, /Po 10:00/);
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  };

  assert.equal(await sendTelegramBooking(booking), true);
});

test("sends an owner command reply to an explicit chat", async () => {
  process.env.TELEGRAM_BOT_TOKEN = "test-token";
  globalThis.fetch = async (_input, init) => {
    const body = JSON.parse(String(init?.body)) as { chat_id: string; text: string };
    assert.equal(body.chat_id, "654321");
    assert.equal(body.text, "FixArt works");
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  };

  assert.equal(await sendTelegramMessage("654321", "FixArt works"), true);
});
