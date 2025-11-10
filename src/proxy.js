// proxy.js
import { NextResponse } from 'next/server';

// map domains to their landing pages
const domainMap = {
  'edusprinthub.com': '/landing-manipal',
  'onlineignou.com': '/landing-ignou', // example for future
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
      host.includes(`${domain}.52.66.139.69`)
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
