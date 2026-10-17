import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const rawPath = url.pathname;
  let decodedPath = rawPath;

  try {
    decodedPath = decodeURIComponent(rawPath);
  } catch {
    // ignore
  }

  // Handle paths with literal space or %20: e.g. /your introduction -> /your-introduction
  if (decodedPath.includes("your introduction")) {
    url.pathname = decodedPath.replace(/your\s+introduction/gi, "your-introduction");
    return NextResponse.redirect(url, 308);
  }

  // Handle old /mofu paths -> /your-introduction
  if (decodedPath.endsWith("/mofu") || decodedPath === "/mofu") {
    url.pathname = decodedPath.replace(/\/mofu$/i, "/your-introduction");
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|xml|txt)$).*)",
  ],
};
