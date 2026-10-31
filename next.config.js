/** @type {import('next').NextConfig} */
// Contact form posts to /php/contact.php. Next proxies that path to your PHP server
// (default: `npm run php` on port 8000). Change PHP_BACKEND_URL in .env.local if needed.
const backend = process.env.PHP_BACKEND_URL || "http://127.0.0.1:8000";

module.exports = {
  turbopack: { root: __dirname }, // optional: keep if you saw a "multiple lockfiles" / wrong root warning
  async rewrites() {
    return [{ source: "/php/:path*", destination: `${backend}/:path*` }];
  },
};
