// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { LANGUAGE_COOKIE_NAME } from "@/lib/i18n/language-preference";
import { isLocale, locales } from "@/lib/i18n/config";

const publicFileRegex = /\.[^/]+$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    publicFileRegex.test(pathname)
  ) {
    return NextResponse.next();
  }

  const firstSegment = pathname.split("/")[1];

  // Keep locale routes working as-is: /it, /en, /fr, /ar
  if (isLocale(firstSegment)) {
    return NextResponse.next();
  }

  // First visit to homepage: redirect to saved preference if not Italian
  if (pathname === "/") {
    const preferred = request.cookies.get(LANGUAGE_COOKIE_NAME)?.value;

    if (preferred && locales.includes(preferred as any) && preferred !== "it") {
      const url = request.nextUrl.clone();
      url.pathname = `/${preferred}`;
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  }

  // For other clean URLs, keep them untouched unless you later decide to localize them too.
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|api).*)"],
};