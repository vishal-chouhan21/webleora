import Link from 'next/link';
import { PageHeader, Cta } from '@/components/ui';
import WebsiteInvestmentSection from '@/components/WebsiteInvestmentSection';

export const metadata = {
  title: { absolute: 'Why Your Website is Your Most Profitable Business Investment | Webleora' },
  description:
    'Discover how a high-performance website from Webleora acts as a 24/7 revenue engine, builds executive credibility, and delivers compounding business returns.',
};

const comparisonData = [
  {
    feature: 'First Impression & Trust',
    cheap: 'Generic template, slow load times, looks amateurish; 75% of prospects bounce immediately.',
    webleora: 'Custom branded design, sub-1.5s load speed, instant executive credibility and authority.',
  },
  {
    feature: 'Lead Generation',
    cheap: 'Passive brochure; static text with no conversion funnels or smart forms.',
    webleora: 'Active 24/7 lead engine with clear CTAs, automated qualification, and CRM integration.',
  },
  {
    feature: 'Search Engine Visibility',
    cheap: 'Poor SEO foundation, bloated code, ignored by Google algorithms.',
    webleora: 'Built-in semantic SEO structure, clean schema markup, optimized Core Web Vitals.',
  },
  {
    feature: 'Operational Efficiency',
    cheap: 'Requires constant manual emails, manual phone calls, and repetitive explanations.',
    webleora: 'Automated self-service, instant FAQs, online booking, cutting admin overhead by 40%.',
  },
  {
    feature: 'Asset Value Over Time',
    cheap: 'Depreciates instantly, breaks with updates, locked inside rigid proprietary platforms.',
    webleora: 'A scalable, compounding digital asset you 100% own and can continuously grow.',
  },
];

const roiMetrics = [
  {
    number: '3.2x',
    label: 'Higher Lead Velocity',
    desc: 'Businesses with modern, mobile-first design capture up to 3.2x more inbound project inquiries.',
  },
  {
    number: '40%',
    label: 'Less Admin Overhead',
    desc: 'Self-serve forms and clear service pages handle repetitive questions before they reach your inbox.',
  },
  {
    number: '24/7',
    label: 'Non-Stop Sales Machine',
    desc: 'Your digital storefront works for you across multiple time zones without taking a single day off.',
  },
  {
    number: '100%',
    label: 'Ownership & Control',
    desc: 'You own clean, portable source code that you can host, scale, and customize indefinitely.',
  },
];

export default function WhyWebsitePage() {
  return (
    <>
      <PageHeader
        title="Why Your Website is Your Most Profitable Investment"
        sub="Website ROI"
      />

      {/* Main 6 Cards Section */}
      <WebsiteInvestmentSection showCta={false} className="wl-invest-page-main" />

      {/* Financial Comparison Table */}
      <section className="wl-roi-comparison-section">
        <div className="container">
          <div className="section-title dark-section text-center mb-5">
            <span className="wl-kicker-gold">THE COST OF INACTION</span>
            <h2>
              Generic Template <span>vs. High-Performance Webleora Platform</span>
            </h2>
            <p className="wl-section-desc">
              Every month with an outdated or underperforming website costs your business lost contracts and missed market share.
            </p>
          </div>

          <div className="wl-comparison-table-wrap">
            <table className="wl-comparison-table">
              <thead>
                <tr>
                  <th style={{ width: '25%' }}>Business Factor</th>
                  <th style={{ width: '37.5%' }} className="wl-th-cheap">Generic / Outdated Website</th>
                  <th style={{ width: '37.5%' }} className="wl-th-webleora">Webleora Custom Platform</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr key={row.feature}>
                    <td className="wl-td-feature">{row.feature}</td>
                    <td className="wl-td-cheap">
                      <i className="fa-solid fa-xmark wl-bad-icon" aria-hidden="true" />
                      <span>{row.cheap}</span>
                    </td>
                    <td className="wl-td-webleora">
                      <i className="fa-solid fa-check wl-good-icon" aria-hidden="true" />
                      <span>{row.webleora}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key Numbers / Metric Cards */}
      <section className="wl-roi-numbers-section">
        <div className="container">
          <div className="wl-roi-numbers-grid">
            {roiMetrics.map((m) => (
              <div className="wl-roi-stat-card" key={m.label}>
                <div className="wl-roi-stat-number">{m.number}</div>
                <h4 className="wl-roi-stat-label">{m.label}</h4>
                <p className="wl-roi-stat-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <Cta text="Ready to turn your website into a revenue engine? Tell Webleora about your business and receive a clear strategic plan." />
    </>
  );
}

