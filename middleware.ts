import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  const hostname = url.hostname;
  const originalPathname = url.pathname;

  // 1) Skippa Next interna grejer och viktiga filer
  if (
    originalPathname.startsWith("/_next") ||
    originalPathname.startsWith("/api") ||
    originalPathname.startsWith("/favicon") ||
    originalPathname === "/robots.txt" ||
    originalPathname === "/sitemap.xml"
  ) {
    return NextResponse.next();
  }

  let shouldRedirect = false;

  // 2) Force bort "www." i host om någon ändå når det
  let newHostname = hostname;
  if (hostname.startsWith("www.")) {
    newHostname = hostname.replace(/^www\./, "");
    shouldRedirect = true;
  }

  // 3) Tvinga lowercase på path
  let newPathname = originalPathname;
  const lowerPath = originalPathname.toLowerCase();
  if (originalPathname !== lowerPath) {
    newPathname = lowerPath;
    shouldRedirect = true;
  }

  // 4) Ta bort trailing slash (för konsekventa URL:er), men behåll "/" på startsidan
  if (newPathname.endsWith("/") && newPathname !== "/") {
    newPathname = newPathname.slice(0, -1);
    shouldRedirect = true;
  }

  if (shouldRedirect) {
    url.hostname = newHostname;
    url.pathname = newPathname;
    // 308 = permanent redirect, behåller metod och body (bra för SEO)
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
