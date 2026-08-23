import { NextResponse } from "next/server";
import { handleQuote, payloadFromForm } from "@/lib/quote";
import { rateLimit } from "@/lib/rate-limit";
import { site } from "@/lib/site";

const MAX_BODY_BYTES = 16 * 1024;
const RETRY_AFTER_SECONDS = 10 * 60;

class PayloadTooLargeError extends Error {}

function allowedOrigin(request: Request): boolean {
  if (request.headers.get("sec-fetch-site") === "cross-site") return false;
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    const requestUrl = new URL(request.url);
    const host =
      request.headers.get("x-forwarded-host")?.split(",")[0]?.trim() ||
      request.headers.get("host") ||
      requestUrl.host;
    const protocol =
      request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim() ||
      requestUrl.protocol.replace(/:$/, "");
    const originUrl = new URL(origin);
    return originUrl.host === host && originUrl.protocol === `${protocol}:`;
  } catch {
    return false;
  }
}

async function readPayload(request: Request): Promise<unknown> {
  const type = request.headers.get("content-type") ?? "";
  const declaredSize = Number.parseInt(
    request.headers.get("content-length") ?? "0",
    10,
  );
  if (Number.isFinite(declaredSize) && declaredSize > MAX_BODY_BYTES) {
    throw new PayloadTooLargeError();
  }

  const bytes = await request.arrayBuffer();
  if (bytes.byteLength > MAX_BODY_BYTES) throw new PayloadTooLargeError();

  if (type.includes("application/json")) {
    return JSON.parse(new TextDecoder().decode(bytes));
  }
  if (type.includes("application/x-www-form-urlencoded")) {
    return payloadFromForm(
      new URLSearchParams(new TextDecoder().decode(bytes)).entries(),
    );
  }
  if (type.includes("multipart/form-data")) {
    const copy = new Request(request.url, {
      method: "POST",
      headers: { "Content-Type": type },
      body: bytes,
    });
    return payloadFromForm(await copy.formData());
  }
  throw new Error("invalid");
}

function isBrowserForm(request: Request): boolean {
  const type = request.headers.get("content-type") ?? "";
  const accept = request.headers.get("accept") ?? "";
  return type.includes("form") && accept.includes("text/html");
}

function contactPath(locale: unknown): string {
  return locale === "en" || locale === "ru" ? `/${locale}/contact` : "/contact";
}

export async function POST(request: Request) {
  if (!allowedOrigin(request)) {
    return NextResponse.json(
      { ok: false, error: "origin" },
      { status: 403, headers: { "Cache-Control": "no-store" } },
    );
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";

  let payload: unknown;
  try {
    payload = await readPayload(request);
  } catch (error) {
    const tooLarge = error instanceof PayloadTooLargeError;
    return NextResponse.json(
      {
        ok: false,
        error: tooLarge ? "payload_too_large" : "invalid",
      },
      {
        status: tooLarge ? 413 : 400,
        headers: { "Cache-Control": "no-store" },
      },
    );
  }

  const result = await handleQuote(payload, ip, {
    telegramUrl: site.telegramUrl,
    limit: rateLimit,
  });

  if (isBrowserForm(request)) {
    const locale =
      payload && typeof payload === "object"
        ? (payload as { locale?: unknown }).locale
        : undefined;
    const origin = new URL(request.url).origin;
    if (result.status === 200 && result.body.ok && result.body.via === "link") {
      return NextResponse.redirect(result.body.telegram ?? site.telegramUrl, 303);
    }
    const query = result.body.ok ? "sent=1" : `error=${result.body.error}`;
    return NextResponse.redirect(`${origin}${contactPath(locale)}?${query}`, 303);
  }

  return NextResponse.json(result.body, {
    status: result.status,
    headers: {
      "Cache-Control": "no-store",
      ...(result.status === 429
        ? { "Retry-After": String(RETRY_AFTER_SECONDS) }
        : {}),
    },
  });
}

export function GET() {
  return NextResponse.json(
    { ok: false, error: "method" },
    {
      status: 405,
      headers: { Allow: "POST", "Cache-Control": "no-store" },
    },
  );
}
