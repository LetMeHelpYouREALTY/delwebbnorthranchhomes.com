import { NextRequest, NextResponse } from "next/server";
import { SITE_ORIGIN } from "@/lib/site";

export function proxy(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const protocol = request.headers.get("x-forwarded-proto") || 
                   (request.nextUrl.protocol === "https:" ? "https" : "http");
  const pathname = request.nextUrl.pathname;
  const search = request.nextUrl.search;

  // Skip proxy for static files, API routes, and Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|gif|webp|avif|css|js|woff|woff2|ttf|eot)$/)
  ) {
    return NextResponse.next();
  }

  // Canonical host (GSC "Page with redirect": http/non-www URLs 301 here)
  const targetHost = new URL(SITE_ORIGIN).host;
  const targetUrl =
    pathname === "/" ? `${SITE_ORIGIN}/${search}` : `${SITE_ORIGIN}${pathname}${search}`;

  // Normalize hostname (remove port if present)
  const normalizedHost = hostname.split(":")[0];

  // Check if redirect is needed
  const needsRedirect = 
    normalizedHost !== targetHost || // Non-www or different host
    protocol !== "https"; // HTTP instead of HTTPS

  if (
    needsRedirect &&
    !hostname.includes("localhost") &&
    !normalizedHost.endsWith(".vercel.app")
  ) {
    return NextResponse.redirect(targetUrl, 308);
  }

  // ?card= homepage URLs: send X-Robots-Tag so GSC sees noindex in headers (canonical + noindex already in HTML)
  const response = NextResponse.next();
  if (pathname === "/" && request.nextUrl.searchParams.has("card")) {
    response.headers.set("X-Robots-Tag", "noindex, follow");
  }
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - files with extensions (images, etc.)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
