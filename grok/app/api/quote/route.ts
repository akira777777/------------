import { NextResponse } from "next/server";
import { handleQuote, payloadFromForm } from "@/lib/quote";
import { rateLimit } from "@/lib/rate-limit";
import { site } from "@/lib/site";

function allowedOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    const host = new URL(origin).host;
    return (
      host === "localhost:3000" ||
      host === "127.0.0.1:3000" ||
      host === "fixart.vercel.app" ||
      (host.endsWith(".vercel.app") && host.includes("fixart"))
    );
  } catch {
    return false;
  }
}

async function readPayload(request: Request): Promise<unknown> {
  const type = request.headers.get("content-type") ?? "";
  if (type.includes("application/json")) {
    return request.json();
  }
  if (type.includes("form")) {
    return payloadFromForm(await request.formData());
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
    return NextResponse.json({ ok: false, error: "origin" }, { status: 403 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";

  let payload: unknown;
  try {
    payload = await readPayload(request);
  } catch {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
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

  return NextResponse.json(result.body, { status: result.status });
}

export function GET() {
  return NextResponse.json({ ok: false, error: "method" }, { status: 405 });
}
