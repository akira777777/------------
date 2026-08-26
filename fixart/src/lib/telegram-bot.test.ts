import assert from "node:assert/strict";
import { test } from "node:test";
import {
  parseTelegramOwnerCommand,
  telegramHelpMessage,
  telegramStartMessage,
  telegramStatusMessage,
} from "./telegram-bot.ts";

test("parses owner commands with optional bot mentions", () => {
  assert.equal(parseTelegramOwnerCommand("/start"), "start");
  assert.equal(parseTelegramOwnerCommand("/STATUS@fixarto_bot"), "status");
  assert.equal(parseTelegramOwnerCommand(" /help "), "help");
  assert.equal(parseTelegramOwnerCommand("hello"), null);
  assert.equal(parseTelegramOwnerCommand("/unknown"), null);
});

test("builds useful owner messages without customer details", () => {
  assert.match(telegramStartMessage(), /подключён/);
  assert.match(telegramHelpMessage(), /Neon/);
  const status = telegramStatusMessage({
    database: "neon",
    total: 3,
    lastCreatedAt: "2026-08-26T17:24:28.658Z",
    lastService: "battery",
    lastDeviceFamily: "iphone",
    lastDelivery: "telegram",
  });
  assert.match(status, /Neon PostgreSQL/);
  assert.match(status, /Всего заявок: 3/);
  assert.match(status, /iphone · battery/);
  assert.match(status, /Доставка: telegram/);
});
