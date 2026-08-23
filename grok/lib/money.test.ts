import assert from "node:assert/strict";
import { test } from "node:test";
import { formatCzk, formatRepairPrice } from "./money.ts";

test("formats a CZK range with a thin space thousands separator", () => {
  assert.equal(
    formatRepairPrice({ priceFrom: 2490, priceTo: 3490 }, "cs"),
    "2 490–3 490 Kč",
  );
});

test("formats a from-price in Czech, English, and Russian", () => {
  const repair = { priceFrom: 1490 };
  assert.equal(formatRepairPrice(repair, "cs"), "od 1 490 Kč");
  assert.equal(formatRepairPrice(repair, "en"), "from 1 490 Kč");
  assert.equal(formatRepairPrice(repair, "ru"), "от 1 490 Kč");
});

test("formats an exact price", () => {
  assert.equal(formatRepairPrice({ exactPrice: 2490 }, "cs"), "2 490 Kč");
});

test("says price on request when nothing is priced", () => {
  assert.equal(formatRepairPrice({}, "cs"), "cena na dotaz");
  assert.equal(formatRepairPrice({}, "en"), "price on request");
  assert.equal(formatRepairPrice({}, "ru"), "цена по запросу");
});

test("prefers exact price over a range", () => {
  assert.equal(
    formatRepairPrice(
      { exactPrice: 1990, priceFrom: 1490, priceTo: 2490 },
      "cs",
    ),
    "1 990 Kč",
  );
});

test("handles non-finite or invalid numbers safely", () => {
  assert.equal(formatCzk(NaN), "0 Kč");
  assert.equal(formatCzk(-500), "0 Kč");
  assert.equal(formatRepairPrice({ priceFrom: NaN }, "cs"), "cena na dotaz");
});
