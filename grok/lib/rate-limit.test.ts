import assert from "node:assert/strict";
import { test } from "node:test";
import { rateLimit } from "./rate-limit.ts";

test("allows five hits and blocks the sixth in the same window", () => {
  const origEnv = process.env.NODE_ENV;
  process.env.NODE_ENV = "production";
  try {
    const key = `test-${Date.now()}`;
    const t0 = 1_000_000;
    for (let i = 0; i < 5; i += 1) {
      assert.equal(rateLimit(key, t0 + i), true);
    }
    assert.equal(rateLimit(key, t0 + 5), false);
  } finally {
    process.env.NODE_ENV = origEnv;
  }
});
