import { services, projects } from '@/data/content';

const base = 'https://www.webleora.com';

export default function sitemap() {
  const paths = [
    '',
    '/about',
    '/services',
    ...services.map((s) => `/services/${s.slug}`),
    '/products',
    '/products/wedding-themes',
    '/our-work',
    ...projects.map((p) => `/our-work/${p.slug}`),
    '/portfolio',
    '/portfolio/website-design',
    '/portfolio/mobile-app',
    '/portfolio/graphic-design',
    '/why-website',
    '/blog',
    '/contact',
    '/faqs',
  ];

  return paths.map((path) => ({
    url: `${base}${path}`,
  }));
}
