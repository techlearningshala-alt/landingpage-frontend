// middleware.js
import { NextResponse } from 'next/server';

// map domains to their landing pages
const domainMap = {
  'onlinemanipal': '/landing-manipal',
  'onlineignou': '/landing-ignou',
};

export function middleware(request) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host') || '';

  for (const key in domainMap) {
    // Match both .localhost and .com (and any port)
    if (host.includes(`${key}.52.66.139.69`) || host.includes(`${key}.com`)) {
      url.pathname = domainMap[key];
      return NextResponse.rewrite(url);
    }
  }

  // Default fallback (no match → homepage)
  return NextResponse.next();
}

// Run only on homepage requests
export const config = { matcher: ['/'] };
