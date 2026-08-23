import assert from "node:assert/strict";
import { test } from "node:test";
import { DICTS } from "./i18n.ts";

function keysOf(value: unknown, prefix = ""): string[] {
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => keysOf(item, `${prefix}[${index}]`));
  }
  if (value && typeof value === "object") {
    return Object.entries(value as Record<string, unknown>).flatMap(([key, child]) =>
      keysOf(child, prefix ? `${prefix}.${key}` : key),
    );
  }
  return [prefix];
}

test("EN and RU dictionaries cover the same keys as CS", () => {
  const cs = keysOf(DICTS.cs).sort();
  const en = keysOf(DICTS.en).sort();
  const ru = keysOf(DICTS.ru).sort();
  assert.deepEqual(en, cs);
  assert.deepEqual(ru, cs);
});
