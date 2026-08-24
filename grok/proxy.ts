import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    const destination = request.nextUrl.clone();
    destination.pathname = `/${routing.defaultLocale}`;
    const headers = new Headers(request.headers);
    headers.set("x-fixart-default-locale", routing.defaultLocale);
    return NextResponse.rewrite(destination, { request: { headers } });
  }

  if (request.headers.get("x-fixart-default-locale")) {
    return NextResponse.next();
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
