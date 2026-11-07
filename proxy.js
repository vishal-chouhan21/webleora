import { NextResponse } from 'next/server';

export default function proxy(request) {
  const host = request.headers.get('host') || '';

  // 301 Redirect www to non-www
  if (host.startsWith('www.')) {
    const nonWwwHost = host.replace(/^www\./i, '');
    const url = request.nextUrl.clone();
    url.host = nonWwwHost;
    url.protocol = 'https:';
    url.port = '';
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - images, css, fonts, favicon.ico
     */
    '/((?!_next/static|_next/image|images|css|fonts|favicon.ico).*)',
  ],
};
