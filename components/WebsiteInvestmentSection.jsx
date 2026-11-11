import Link from 'next/link';

export const investmentPoints = [
  {
    id: 'authority',
    title: 'Build Authority and Professional Trust',
    desc: 'A clear, well-structured website validates your business credibility from the first interaction, establishing confidence with prospective clients and partners.',
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
    title: 'Capture Enquiries Around the Clock',
    desc: 'Your website acts as an active point of contact 24/7—capturing customer enquiries, answering common questions, and routing leads directly to your team.',
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
    title: 'Be Easier to Find on Google',
    desc: 'Engineered with clean semantic markup, fast load performance, and proper metadata so search engines can easily discover and index your services.',
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
    title: 'Streamline Customer Communication',
    desc: 'Direct clients to clear service information, project portfolios, and FAQs, saving your team time on repetitive inquiries.',
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
    title: 'Reach Clients Beyond Your Local Area',
    desc: 'A responsive, accessible website allows potential clients in Indore, across India, and internationally to explore your work at any time.',
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
    title: 'Present a Polished Alternative to Competitors',
    desc: 'When prospects compare providers, a fast, modern digital presence makes your business stand out and simplifies their buying decision.',
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
          <span className="wl-invest-kicker">PRACTICAL BUSINESS IMPACT</span>
          <h2 className="wl-invest-title">
            How a Modern Website Supports Your Business Growth
          </h2>
          <p className="wl-invest-subtitle">
            A website that works as your best salesperson and helps your business be easier to find on Google
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
              <p className="wl-invest-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Optional Action Bar */}
        {showCta && (
          <div className="wl-invest-footer-cta text-center">
            <Link href="/contact" className="wl-btn-gold">
              Start Your Project Discussion
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
            <Link href="/why-website" className="wl-invest-secondary-link">
              Explore Why You Need a Website <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

