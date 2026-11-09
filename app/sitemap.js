import { services, projects } from '@/data/content';

const base = 'https://www.webleora.com';

export default function sitemap() {
  const paths = [
    '',
    '/about',
    '/services',
    ...services.map((s) => `/services/${s.slug}`),
    '/our-work',
    ...projects.map((p) => `/our-work/${p.slug}`),
    '/why-website',
    '/blog',
    '/contact',
    '/faqs',
  ];

  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
