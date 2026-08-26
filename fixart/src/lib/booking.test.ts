import assert from "node:assert/strict";
import { test } from "node:test";
import { buildTelegramUrl, deviceFamily, normalizePhone, parseBooking } from "./booking.ts";

test("normalizes Czech phone numbers", () => {
  assert.equal(normalizePhone("737 500 587"), "+420737500587");
  assert.equal(normalizePhone("+420 737 500 587"), "+420737500587");
  assert.equal(normalizePhone("00420737500587"), "+420737500587");
  assert.equal(normalizePhone("0737500587"), "+420737500587");
  assert.equal(normalizePhone("+49 170 1234567"), "+491701234567");
  assert.equal(normalizePhone("+380 50 123 4567"), "+380501234567");
  assert.equal(normalizePhone("+1 415 555 2671"), "+14155552671");
  assert.equal(normalizePhone("123"), null);
  assert.equal(normalizePhone("abc"), null);
});

test("maps devices to families", () => {
  assert.equal(deviceFamily("iPhone 16"), "iphone");
  assert.equal(deviceFamily("Samsung Galaxy"), "samsung");
  assert.equal(deviceFamily("MacBook"), "macbook");
  assert.equal(deviceFamily("Jiné"), "other");
});

test("rejects short names and bad phones", () => {
  const bad = parseBooking({
    name: "A",
    phone: "123",
    device: "iPhone 16",
    service: "display",
    message: "",
    lang: "cs",
    company: "",
  });
  assert.equal(bad.ok, false);
});

test("accepts a valid booking and builds a Telegram link", () => {
  const parsed = parseBooking({
    name: "Jan Novak",
    phone: "737 500 587",
    device: "iPhone 16",
    service: "battery",
    message: "Po 10:00",
    lang: "cs",
    company: "",
  });
  assert.equal(parsed.ok, true);
  if (!parsed.ok) return;
  const url = buildTelegramUrl({
    name: parsed.data.name,
    phone: parsed.phone,
    device: parsed.data.device,
    service: parsed.data.service,
    message: parsed.data.message,
    lang: parsed.data.lang,
  });
  assert.match(url, /^https:\/\/t\.me\/liltrafficRUS\?text=/);
  assert.match(url, /Jan/);
});
