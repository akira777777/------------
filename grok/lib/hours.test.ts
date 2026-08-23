import assert from "node:assert/strict";
import test from "node:test";
import { getShopStatus } from "./hours.ts";

test("returns open during weekday working hours", () => {
  // Wednesday 14:30 UTC = 16:30 Prague summer time (CEST)
  const wednesdayAfternoon = new Date("2026-08-26T14:30:00Z");
  const status = getShopStatus(wednesdayAfternoon, "cs");
  assert.equal(status.isOpen, true);
  assert.match(status.text, /Právě máme otevřeno/);
});

test("returns closed on weekend", () => {
  // Sunday 12:00 UTC
  const sundayNoon = new Date("2026-08-23T12:00:00Z");
  const status = getShopStatus(sundayNoon, "cs");
  assert.equal(status.isOpen, false);
  assert.match(status.text, /Zavřeno/);
});

test("returns localized status in english", () => {
  const sundayNoon = new Date("2026-08-23T12:00:00Z");
  const status = getShopStatus(sundayNoon, "en");
  assert.equal(status.isOpen, false);
  assert.match(status.text, /Closed/);
});

test("after closing on Friday points to Monday", () => {
  // Friday 20:00 Prague summer time (CEST)
  const fridayEvening = new Date("2026-08-28T18:00:00Z");
  assert.match(getShopStatus(fridayEvening, "cs").text, /pondělí/);
  assert.match(getShopStatus(fridayEvening, "en").text, /Monday/);
  assert.match(getShopStatus(fridayEvening, "ru").text, /понедельник/);
});
