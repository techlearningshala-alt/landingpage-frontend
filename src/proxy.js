// proxy.js
import { NextResponse } from 'next/server';

// map domains to their landing pages
const domainMap = {
  'studybettertoday.com': '/landing-studybettertoday',
  'edusprinthub.com': '/landing-edusprinthub', // example for future
};

export function proxy(request) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host')?.toLowerCase() || '';

  for (const domain in domainMap) {
    // direct domain or local testing support
    if (
      host === domain || 
      host.startsWith(`${domain}:`) || 
      host.includes(`${domain}.localhost`) ||
      host.includes(`${domain}.13.203.144.7`) ||
      host.includes(`${domain}.13.203.144.7:1337`)
    ) {
      url.pathname = domainMap[domain];
      return NextResponse.rewrite(url);
    }
  }

  // Default → homepage
  return NextResponse.next();
}

// Run only on homepage requests
export const config = {
  matcher: ['/'],
};
