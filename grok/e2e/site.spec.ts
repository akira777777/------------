import { expect, test } from "@playwright/test";

test("home shows the Czech thesis and FixArt wordmark", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: /FixArt/ }).first()).toBeVisible();
  await expect(page.getByRole("heading", { name: /Opravíme zařízení/ })).toBeVisible();
  await expect(page.getByText(/Biskupcova 31/).first()).toBeVisible();
});

test("contact page lists the Prague 3 studio contacts", async ({ page }) => {
  await page.goto("/contact");
  const main = page.locator("#main");
  await expect(
    main.getByRole("link", { name: "@liltrafficRUS", exact: true }),
  ).toBeVisible();
  await expect(main.getByRole("link", { name: "+420 737 500 587" })).toBeVisible();
  await expect(main.getByRole("link", { name: "fear75412@gmail.com" })).toBeVisible();
  await expect(main.getByText(/Biskupcova 31/).first()).toBeVisible();
});

test("device page schematic reveals a CZK price", async ({ page }) => {
  await page.goto("/repair/apple/iphone-15");
  await expect(page.getByRole("heading", { name: /iPhone 15/ })).toBeVisible();
  await expect(page.getByRole("img", { name: "iPhone 15" })).toBeVisible();
  await page.getByRole("button", { name: "Výměna baterie" }).last().click();
  await expect(page.getByText(/Kč/).first()).toBeVisible();
});

test("brand list shows a photo for each model", async ({ page }) => {
  await page.goto("/repair/apple");
  await expect(page.getByRole("img", { name: "iPhone 16 Pro" })).toBeVisible();
  await expect(page.getByRole("img", { name: "MacBook Air" })).toBeVisible();
});

test("language switch shows English", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "English" }).click();
  await expect(page.getByRole("heading", { name: /We fix the device/ })).toBeVisible();
});

test("price filters write to the URL", async ({ page }) => {
  await page.goto("/prices");
  await expect(page.getByRole("columnheader", { name: "Značka" })).toBeVisible();
  await page.getByLabel("Všechny značky").selectOption("apple");
  await expect(page).toHaveURL(/brand=apple/);
});

test("contact form blocks a short name", async ({ page }) => {
  await page.goto("/contact");
  await page.locator('input[name="name"]').fill("J");
  await page.locator('input[name="contact"]').fill("+420777123456");
  await page.getByRole("button", { name: /Odeslat poptávku/ }).click();
  await expect(page.getByText(/Jméno je krátké/)).toBeVisible();
});

test("quote API rejects an empty payload", async ({ request }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop");
  const response = await request.post("/api/quote", { data: {} });
  expect(response.status()).toBe(400);
});

test("quote API accepts a valid payload without Telegram credentials", async ({
  request,
}, testInfo) => {
  test.skip(testInfo.project.name !== "desktop");
  const response = await request.post("/api/quote", {
    data: {
      name: "Jana Novakova",
      contact: "+420777123456",
      device: "iPhone 15",
      repair: "battery",
    },
  });
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.ok).toBe(true);
  expect(body.via).toBe("link");
  expect(body.telegram).toMatch(/t\.me/);
});

test("quote API accepts a browser form post", async ({ request }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop");
  const response = await request.post("/api/quote", {
    form: {
      name: "Jana Novakova",
      contact: "+420777123456",
      device: "iPhone 15",
    },
  });
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.ok).toBe(true);
});

test("contact form offers Telegram when the bench inbox is not wired", async ({
  page,
}) => {
  await page.goto("/contact");
  await page.locator('input[name="name"]').fill("Jana Novakova");
  await page.locator('input[name="contact"]').fill("+420777123456");
  await page.getByRole("button", { name: /Odeslat poptávku/ }).click();
  await expect(page.getByText(/Telegram ještě není napojený/)).toBeVisible();
});
