import Link from 'next/link';
import { PageHeader, Cta } from '@/components/ui';

export const metadata = {
  title: {
    absolute: 'Blog & Resources | Website Development & Software Insights | Webleora',
  },
  description:
    'Expert insights, cost breakdowns, and practical guides on website development, custom software engineering, and digital growth from the Webleora engineering team in Indore.',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Blog & Resources | Webleora',
    description:
      'Guides and pricing breakdowns on website development, web apps, and enterprise software engineering.',
    url: './',
    type: 'website',
  },
};

export const articles = [
  {
    slug: 'website-development-cost-in-india-2026-guide',
    title: 'Website Development Cost in India: 2026 Pricing & Scope Guide',
    date: 'March 2026',
    readTime: '6 min read',
    cat: 'Pricing & Strategy',
    summary:
      'A transparent breakdown of website development costs in India. Compare pricing for simple business websites (₹25k–₹45k), custom web applications (₹65k–₹1.8L), and enterprise platforms, plus the hidden costs to avoid.',
    points: [
      'Cost range by website type: Business website, E-commerce, Custom SaaS',
      'Key cost factors: Custom UI/UX vs templates, CMS integration, third-party APIs',
      'What every professional estimate must include: Hosting, SSL, SEO, and source code ownership',
      'Why paying too little often costs double in rewrites and security bugs',
    ],
  },
  {
    slug: 'custom-crm-erp-vs-saas-for-growing-businesses',
    title: 'Custom CRM & ERP vs Off-the-Shelf SaaS: Which Saves More Money?',
    date: 'February 2026',
    readTime: '7 min read',
    cat: 'Enterprise Software',
    summary:
      'Monthly SaaS subscriptions seem cheap initially, but balloon rapidly as your team grows. Learn when to stick with off-the-shelf tools and when building a custom internal portal delivers a 3x higher ROI.',
    points: [
      'The true cost of per-user licensing over 3 years for 15+ employees',
      'Data sovereignty and owning your operational pipeline',
      'Integrating WhatsApp Business and localized Indian payment gateways',
      'Step-by-step framework to determine if you are ready for custom software',
    ],
  },
  {
    slug: 'why-nextjs-outperforms-wordpress-for-business-websites',
    title: 'Why Next.js & Headless Tech Outperforms WordPress in 2026',
    date: 'January 2026',
    readTime: '5 min read',
    cat: 'Web Architecture',
    summary:
      'Traditional CMS platforms suffer from bloated plugins, slow load times, and frequent security vulnerabilities. Discover why fast-growing companies are switching to Next.js for sub-second page loads and higher Google rankings.',
    points: [
      'How Core Web Vitals directly impact Google ranking and conversion rates',
      'Security comparison: Zero database exploits on static-edge deployments',
      'Lower cloud hosting bills with serverless architectures',
      'How headless CMS gives marketing teams full editing power without breaking code',
    ],
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHeader title="Blog &amp; Engineering Resources" crumbs={[['resources', '/blog']]} />

      <section className="page-section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto 48px', textAlign: 'center' }}>
            <span className="wl-badge">Knowledge Hub</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 38px)', fontWeight: '800', color: '#0b2239', marginTop: '12px' }}>
              Actionable Tech &amp; Business Insights
            </h2>
            <p style={{ color: '#5c6773', fontSize: '16px', lineHeight: '1.6' }}>
              Straightforward guides written by our engineers and architects in Indore to help business owners make informed decisions about websites, software, and digital growth.
            </p>
          </div>

          <div className="row">
            {articles.map((art) => (
              <div className="col-lg-4 col-md-6 mb-4" key={art.slug}>
                <div
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '16px',
                    padding: '30px 24px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 16px rgba(11, 34, 57, 0.04)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#c58f3f', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {art.cat}
                    </span>
                    <span style={{ fontSize: '12px', color: '#94a3b8' }}>
                      {art.readTime}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0b2239', lineHeight: '1.4', marginBottom: '12px' }}>
                    {art.title}
                  </h3>

                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6', flexGrow: 1, marginBottom: '20px' }}>
                    {art.summary}
                  </p>

                  <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                    <strong style={{ fontSize: '13px', color: '#0b2239', display: 'block', marginBottom: '8px' }}>
                      Key Takeaways:
                    </strong>
                    <ul style={{ paddingLeft: '18px', margin: '0 0 16px', fontSize: '12.5px', color: '#64748b', lineHeight: '1.5' }}>
                      {art.points.map((pt) => (
                        <li key={pt} style={{ marginBottom: '4px' }}>{pt}</li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="btn-default"
                      style={{ display: 'inline-block', width: '100%', textAlign: 'center', padding: '10px 16px', fontSize: '13.5px' }}
                    >
                      Discuss With An Engineer
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta
        title="Planning a Website or Software Project?"
        text="Speak directly with our engineering team in Indore. Get a realistic scope, tech recommendations, and transparent pricing."
        btn="Schedule Free Discovery Call"
      />
    </>
  );
}
