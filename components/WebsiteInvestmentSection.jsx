import Link from 'next/link';

export const investmentPoints = [
  {
    id: 'authority',
    title: 'Build Instant Authority & Global Trust',
    stat: '75% of users judge a company’s credibility based on website design alone. (Source: Stanford Web Credibility Research)',
    desc: 'A bespoke, polished Webleora platform validates your expertise from the first second, establishing immediate confidence with high-value clients and enterprise buyers.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 'automation',
    title: 'Deploy a 24/7 Automated Sales & Support System',
    stat: 'Businesses with automated inquiry capture see up to 30% higher conversion rates. (Source: HubSpot Sales Benchmarks)',
    desc: 'Your website acts as an active sales engine around the clock—capturing qualified inquiries, answering questions, and scheduling calls even while your team is offline.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
        <path d="M16 21h5v-5" />
        <text x="12" y="15" textAnchor="middle" fontSize="6.5" fontWeight="800" fill="currentColor" stroke="none" fontFamily="sans-serif">24/7</text>
      </svg>
    ),
  },
  {
    id: 'seo',
    title: 'Increase Search Visibility with an SEO-Ready Platform',
    stat: '68% of all online experiences begin with a search engine. (Source: BrightEdge SEO Intelligence)',
    desc: 'Engineered with clean semantic markup, fast Core Web Vitals, and keyword-focused structures to rank higher on Google and bring in qualified, inbound traffic consistently.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="2" y1="7" x2="22" y2="7" />
        <circle cx="16" cy="15" r="4" />
        <line x1="19" y1="18" x2="22" y2="21" />
        <line x1="6" y1="11" x2="10" y2="11" />
        <line x1="6" y1="14" x2="8" y2="14" />
      </svg>
    ),
  },
  {
    id: 'overhead',
    title: 'Reduce Operational Overheads Efficiently',
    stat: 'Digital workflows and self-serve portals reduce administrative overhead by up to 40%. (Source: McKinsey Operations Study)',
    desc: 'Streamline repetitive customer interactions, quote requests, and documentation handling so your core team can focus on client delivery and high-margin growth.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        <circle cx="12" cy="12" r="5" />
        <polyline points="12 9 12 12 14 14" />
      </svg>
    ),
  },
  {
    id: 'accessibility',
    title: '24/7 International Market Accessibility',
    stat: 'Over 5.4 billion active internet users research solutions online before buying. (Source: DataReportal Global Overview)',
    desc: 'Break geographic limitations. Serve local clients in Indore and international partners globally with multi-device responsiveness, fast cloud hosting, and frictionless UX.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="14" height="11" rx="2" />
        <rect x="15" y="8" width="7" height="12" rx="1.5" />
        <path d="M2 19h14" />
        <circle cx="18.5" cy="17.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'competitive-edge',
    title: 'Competitive Edge in the Digital Age',
    stat: '81% of B2B and retail shoppers research online before choosing a partner. (Source: Forrester Research)',
    desc: 'A modern website is not an expense—it is a compounding business asset that elevates your brand valuation, builds buyer trust, and wins contracts over slower competitors.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        <path d="m9 8 2-2 2 2" />
        <path d="M11 6v5" />
      </svg>
    ),
  },
];

export default function WebsiteInvestmentSection({ showCta = true, className = '' }) {
  return (
    <section className={`wl-invest-section ${className}`}>
      <div className="container">
        {/* Section Header */}
        <div className="wl-invest-header text-center">
          <span className="wl-invest-kicker">MAXIMIZE YOUR BUSINESS ROI</span>
          <h2 className="wl-invest-title">
            Why Your Website is Your Most Profitable Business Investment
          </h2>
          <p className="wl-invest-subtitle">
            Have a Website that Multiplies Your Revenue and Pays You Back
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="wl-invest-grid">
          {investmentPoints.map((item) => (
            <div className="wl-invest-card" key={item.id}>
              <div className="wl-invest-icon-box">
                {item.icon}
              </div>
              <h3 className="wl-invest-card-title">{item.title}</h3>
              <p className="wl-invest-card-stat">{item.stat}</p>
              <p className="wl-invest-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Optional Action Bar */}
        {showCta && (
          <div className="wl-invest-footer-cta text-center">
            <Link href="/contact" className="wl-btn-gold">
              Build Your High-ROI Website
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
            <Link href="/why-website" className="wl-invest-secondary-link">
              Explore Full Investment Breakdown <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

