import assert from "node:assert/strict";
import { test } from "node:test";
import { getShopStatus } from "./hours.ts";

test("Sunday night in Prague is closed until Monday 09:00", () => {
  const status = getShopStatus(new Date("2026-08-23T22:55:00+02:00"));
  assert.equal(status.open, false);
  if (!status.open) {
    assert.equal(status.weekday, 1);
    assert.equal(status.at, "09:00");
    assert.equal(status.dayOffset, 1);
  }
});

test("Monday morning before open is closed today at 09:00", () => {
  const status = getShopStatus(new Date("2026-08-24T08:00:00+02:00"));
  assert.equal(status.open, false);
  if (!status.open) {
    assert.equal(status.dayOffset, 0);
    assert.equal(status.at, "09:00");
  }
});

test("Monday midday is open until 19:00", () => {
  const status = getShopStatus(new Date("2026-08-24T12:30:00+02:00"));
  assert.equal(status.open, true);
  if (status.open) assert.equal(status.until, "19:00");
});

test("Friday at closing is closed until Monday", () => {
  const status = getShopStatus(new Date("2026-08-21T19:00:00+02:00"));
  assert.equal(status.open, false);
  if (!status.open) {
    assert.equal(status.weekday, 1);
    assert.equal(status.at, "09:00");
  }
});

test("Saturday is closed until Monday 09:00", () => {
  const status = getShopStatus(new Date("2026-08-22T11:00:00+02:00"));
  assert.equal(status.open, false);
  if (!status.open) {
    assert.equal(status.weekday, 1);
    assert.equal(status.at, "09:00");
  }
});
