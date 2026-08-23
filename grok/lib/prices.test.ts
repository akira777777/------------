import assert from "node:assert/strict";
import test from "node:test";
import { parsePriceFilters } from "./prices.ts";

const allowed = {
  brands: new Set(["apple", "samsung"]),
  repairs: new Set(["battery", "display"]),
};

test("empty query keeps all brands and repairs", () => {
  assert.deepEqual(parsePriceFilters({}, allowed), {
    brandId: "all",
    category: "all",
    query: "",
    page: 1,
  });
});

test("known brand and repair pass through", () => {
  assert.deepEqual(
    parsePriceFilters({ brand: "apple", repair: "battery" }, allowed),
    { brandId: "apple", category: "battery", query: "", page: 1 },
  );
});

test("unknown values fall back to all", () => {
  assert.deepEqual(
    parsePriceFilters({ brand: "nokia", repair: "laser" }, allowed),
    { brandId: "all", category: "all", query: "", page: 1 },
  );
});

test("array query params use the first value", () => {
  assert.deepEqual(
    parsePriceFilters(
      { brand: ["samsung", "apple"], repair: ["display"], q: ["iPhone 15", "Pro"] },
      allowed,
    ),
    { brandId: "samsung", category: "display", query: "iPhone 15", page: 1 },
  );
});

test("parses search query q", () => {
  assert.deepEqual(
    parsePriceFilters({ q: "   Pixel 8  " }, allowed),
    { brandId: "all", category: "all", query: "Pixel 8", page: 1 },
  );
});

test("normalizes pagination to a positive integer", () => {
  assert.equal(parsePriceFilters({ page: "3" }, allowed).page, 3);
  assert.equal(parsePriceFilters({ page: "0" }, allowed).page, 1);
  assert.equal(parsePriceFilters({ page: "-2" }, allowed).page, 1);
  assert.equal(parsePriceFilters({ page: "nope" }, allowed).page, 1);
});
