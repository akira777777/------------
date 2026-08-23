import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";
import { brands, getBrand, getModel } from "./catalog.ts";

test("lists Apple first, then the other benches", () => {
  assert.deepEqual(
    brands.map((brand) => brand.id),
    ["apple", "samsung", "xiaomi", "google", "huawei"],
  );
});

test("every model has at least one named repair", () => {
  for (const brand of brands) {
    assert.ok(brand.models.length > 0, `${brand.id} has no models`);
    for (const model of brand.models) {
      assert.ok(
        model.repairs.length > 0,
        `${brand.id}/${model.id} has no repairs`,
      );
      for (const repair of model.repairs) {
        assert.ok(repair.category, `${repair.id} missing category`);
        assert.ok(repair.name.cs && repair.name.en && repair.name.ru);
      }
    }
  }
});

test("priced repairs never start from 1 Kč", () => {
  for (const brand of brands) {
    for (const model of brand.models) {
      for (const repair of model.repairs) {
        const amounts = [
          repair.exactPrice,
          repair.priceFrom,
          repair.priceTo,
        ].filter((n): n is number => typeof n === "number");
        for (const amount of amounts) {
          assert.ok(
            amount >= 490,
            `${model.id} ${repair.id} priced at ${amount}`,
          );
        }
      }
    }
  }
});

test("looks up a brand and a model by id", () => {
  const apple = getBrand("apple");
  assert.equal(apple?.name, "Apple");
  const iphone = getModel("apple", "iphone-15");
  assert.equal(iphone?.name, "iPhone 15");
  assert.equal(getBrand("nope"), undefined);
  assert.equal(getModel("apple", "nope"), undefined);
});

test("every model has a local product photo", () => {
  for (const brand of brands) {
    for (const model of brand.models) {
      assert.ok(
        existsSync(join(process.cwd(), "public", model.image)),
        `${brand.id}/${model.id} is missing ${model.image}`,
      );
    }
  }
});

test("Apple catalog covers phones, tablets, Macs, Watch, and AirPods", () => {
  const kinds = new Set(getBrand("apple")?.models.map((model) => model.kind));
  assert.deepEqual(
    [...kinds].sort(),
    ["audio", "laptop", "phone", "tablet", "watch"],
  );
});
