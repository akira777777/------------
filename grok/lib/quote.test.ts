import assert from "node:assert/strict";
import { test } from "node:test";
import {
  formatTelegramMessage,
  handleQuote,
  parseQuote,
  payloadFromForm,
  telegramShareUrl,
} from "./quote.ts";

const valid = {
  name: "Jana Nováková",
  contact: "+420 777 123 456",
  device: "iPhone 15",
  repair: "battery",
  note: "Nesvítí True Tone.",
  locale: "cs",
};

test("builds a quote payload from form fields", () => {
  const payload = payloadFromForm([
    ["name", "Jana Nováková"],
    ["contact", "+420 777 123 456"],
    ["device", "iPhone 15"],
    ["website", ""],
  ]);
  assert.deepEqual(payload, {
    name: "Jana Nováková",
    contact: "+420 777 123 456",
    device: "iPhone 15",
    website: "",
  });
});

test("rejects a name that is too short", () => {
  const result = parseQuote({ ...valid, name: "J" });
  assert.equal(result.ok, false);
});

test("rejects empty contact", () => {
  const result = parseQuote({ ...valid, contact: "  " });
  assert.equal(result.ok, false);
});

test("accepts a valid quote", () => {
  const result = parseQuote(valid);
  assert.equal(result.ok, true);
  if (result.ok) {
    assert.equal(result.data.name, "Jana Nováková");
    assert.equal(result.data.device, "iPhone 15");
  }
});

test("formats a Telegram message a bench can read", () => {
  const parsed = parseQuote(valid);
  assert.equal(parsed.ok, true);
  if (!parsed.ok) return;
  const text = formatTelegramMessage(parsed.data);
  assert.match(text, /Jana Nováková/);
  assert.match(text, /iPhone 15/);
  assert.match(text, /battery/);
  assert.match(text, /\+420 777 123 456/);
  assert.match(text, /True Tone/);
});

test("formats a Telegram message with English labels when locale is en", () => {
  const text = formatTelegramMessage({
    name: "John Smith",
    contact: "+420 777 123 456",
    device: "iPhone 15",
    repair: "battery",
    locale: "en",
  });
  assert.match(text, /new inquiry/i);
  assert.match(text, /Name:/);
  assert.match(text, /Contact:/);
  assert.match(text, /Device:/);
  assert.match(text, /Repair:/);
});

test("formats a Telegram message with Russian labels when locale is ru", () => {
  const text = formatTelegramMessage({
    name: "Иван Иванов",
    contact: "+420 777 123 456",
    device: "iPhone 15",
    repair: "battery",
    locale: "ru",
  });
  assert.match(text, /новая заявка/);
  assert.match(text, /Имя:/);
  assert.match(text, /Устройство:/);
});

test("fills in a missing device or repair instead of rejecting the quote", () => {
  const result = parseQuote({
    name: "Jana Nováková",
    contact: "+420777123456",
  });
  assert.equal(result.ok, true);
  if (result.ok) {
    assert.equal(result.data.device, "—");
    assert.equal(result.data.repair, "—");
  }
});

test("returns a field code, not a Zod sentence", () => {
  const result = parseQuote({ ...valid, name: "J" });
  assert.equal(result.ok, false);
  if (!result.ok) assert.equal(result.error, "name");
});

test("when Telegram is not configured, still accepts the quote and returns a share link", async () => {
  const result = await handleQuote(valid, "1.1.1.1", {
    send: async () => "not_configured",
    telegramUrl: "https://t.me/fixart_praha",
  });
  assert.equal(result.status, 200);
  assert.equal(result.body.ok, true);
  if (result.body.ok) {
    assert.equal(result.body.via, "link");
    assert.match(result.body.telegram ?? "", /t\.me/);
  }
});

test("honeypot quotes look successful and never send", async () => {
  let sent = false;
  const result = await handleQuote(
    { ...valid, website: "http://spam.test" },
    "2.2.2.2",
    {
      send: async () => {
        sent = true;
        return "sent";
      },
    },
  );
  assert.equal(result.status, 200);
  assert.equal(sent, false);
});

test("builds a Telegram share URL with the quote text", () => {
  const url = telegramShareUrl(
    "https://t.me/fixart_praha",
    "FixArt — nová poptávka",
  );
  assert.match(url, /^https:\/\/t\.me\/fixart_praha\?text=/);
  assert.match(url, /popt%C3%A1vka|popt%c3%a1vka/i);
});
