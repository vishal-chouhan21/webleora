/** @type {import('next').NextConfig} */
// Contact form posts to /php/contact.php. Next proxies that path to your PHP server
// (default: `npm run php` on port 8000). Change PHP_BACKEND_URL in .env.local if needed.
const backend = process.env.PHP_BACKEND_URL || 'http://localhost:8000';
module.exports = {
  async rewrites() { return [{ source: '/php/:path*', destination: `${backend}/:path*` }]; },
};
