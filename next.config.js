/** @type {import('next').NextConfig} */
// Contact form posts to /php/contact.php. Next proxies that path to your PHP server
// (default: `npm run php` on port 8000). Change PHP_BACKEND_URL in .env.local if needed.
const backend = process.env.PHP_BACKEND_URL || "http://127.0.0.1:8000";

module.exports = {
  turbopack: { root: __dirname },
  experimental: {
    cpus: 1,
    workerThreads: false,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.webleora.com' }],
        destination: 'https://webleora.com/:path*',
        permanent: true,
      },
      {
        source: '/why-invest-in-a-website',
        destination: '/why-website',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [{ source: "/php/:path*", destination: `${backend}/:path*` }];
  },
};
