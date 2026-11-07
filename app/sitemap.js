import { services, projects } from '@/data/content';

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://webleora.com';
  const lastModified = new Date();

  // Core static routes
  const staticRoutes = [
    { url: `${baseUrl}`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/why-website`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/our-work`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/faqs`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms-and-conditions`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/cookie-policy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];

  // Dynamic Service pages
  const serviceRoutes = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Dynamic Project pages
  const projectRoutes = projects.map((p) => ({
    url: `${baseUrl}/our-work/${p.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
