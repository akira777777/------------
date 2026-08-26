#!/usr/bin/env node
import assert from "node:assert/strict";
import { chromium } from "playwright";

const url = process.argv[2] ?? "http://127.0.0.1:8080/";
const screenshot =
  process.argv[3] ?? new URL("../screenshots/fixart-booking-flow.png", import.meta.url).pathname;
const expectedDelivery = process.argv[4] ?? "handoff";
assert.match(expectedDelivery, /^(handoff|telegram)$/);

const browser = await chromium.launch({ headless: true });
const pageErrors = [];
const consoleErrors = [];

try {
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  page.on("pageerror", (error) => pageErrors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });

  await page.goto(url, { waitUntil: "networkidle" });
  await page.locator("#contact-name").scrollIntoViewIfNeeded();
  await page.locator("#contact-name").fill("Test FixArt");
  await page.locator("#contact-phone").fill("737 500 587");
  await page.locator("#contact-device").selectOption("iPhone 16");
  await page.locator("#contact-service").selectOption("battery");
  await page.locator("#contact-message").fill("Automated booking flow check");

  let openedPopup = null;
  page.on("popup", (popup) => {
    openedPopup = popup;
  });
  await page.locator("form:has(#contact-name) button[type='submit']").click();
  await page.locator("[data-sonner-toast]").waitFor({ state: "visible" });
  await page.waitForTimeout(500);
  await page.screenshot({ path: screenshot, fullPage: true });

  const toast = await page.locator("[data-sonner-toast]").innerText();
  if (expectedDelivery === "telegram") {
    assert.equal(openedPopup, null, "automatic Telegram delivery must not open a customer popup");
    assert.match(toast, /Booking sent/);
  } else {
    assert.ok(openedPopup, "handoff mode must open Telegram");
    await openedPopup.waitForLoadState("domcontentloaded").catch(() => undefined);
    assert.match(openedPopup.url(), /^https:\/\/t\.me\/liltrafficRUS\?text=/);
  }
  assert.equal(pageErrors.length, 0, `page errors: ${pageErrors.join(" | ")}`);
  assert.equal(consoleErrors.length, 0, `console errors: ${consoleErrors.join(" | ")}`);

  console.log(
    JSON.stringify(
      {
        ok: true,
        delivery: expectedDelivery,
        popup: openedPopup?.url().replace(/\?.*$/, "?text=<redacted>") ?? null,
        toast,
        screenshot,
        consoleErrors,
        pageErrors,
      },
      null,
      2,
    ),
  );
  await context.close();
} finally {
  await browser.close();
}
