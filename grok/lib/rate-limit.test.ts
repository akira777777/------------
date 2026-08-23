import assert from "node:assert/strict";
import { test } from "node:test";
import { rateLimit, resetRateLimit } from "./rate-limit.ts";

test("allows five hits and blocks the sixth in the same window", () => {
  const origEnv = process.env.NODE_ENV;
  process.env.NODE_ENV = "production";
  try {
    resetRateLimit();
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

test("expired hits are discarded after the window", () => {
  const origEnv = process.env.NODE_ENV;
  process.env.NODE_ENV = "production";
  try {
    resetRateLimit();
    const t0 = 2_000_000;
    for (let i = 0; i < 5; i += 1) rateLimit("expired", t0 + i);
    assert.equal(rateLimit("expired", t0 + 10 * 60 * 1000 + 1), true);
  } finally {
    resetRateLimit();
    process.env.NODE_ENV = origEnv;
  }
});
