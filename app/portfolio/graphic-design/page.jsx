import Link from 'next/link';
import { graphicPortfolio } from '@/data/portfolioData';
import { Cta } from '@/components/ui';

export const metadata = {
  title: 'Graphic Design & Branding Portfolio | UI/UX & Identity | Webleora',
  description:
    'Explore Webleora’s graphic design and branding portfolio featuring corporate brand identities, Figma UI/UX design systems, marketing collaterals, and digital ad creative suites.',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Graphic Design & Branding Portfolio | UI/UX & Identity | Webleora',
    description:
      'Explore Webleora’s graphic design and branding portfolio featuring corporate brand identities, Figma UI/UX design systems, marketing collaterals, and digital ad creative suites.',
    url: './',
    type: 'website',
  },
};

export default function GraphicDesignPortfolioPage() {
  return (
    <>
      {/* ================= HERO BANNER ================= */}
      <section className="wl-portfolio-header-banner">
        <div className="container">
          <span className="wl-portfolio-kicker">
            <i className="fa-solid fa-pen-nib" />
            Visual Identity &amp; Product Design
          </span>
          <h1>
            Graphic Design &amp; <span>Branding Portfolio</span>
          </h1>
          <p>
            Explore our visual brand identity systems, Figma UI/UX design prototypes, marketing collaterals, and high-performance digital ad creatives built to help brands establish unmistakable authority.
          </p>

          <div className="wl-tech-badge-strip">
            <span className="wl-tech-pill"><i className="fa-brands fa-figma" /> Figma</span>
            <span className="wl-tech-pill"><i className="fa-solid fa-bezier-curve" /> Adobe Illustrator</span>
            <span className="wl-tech-pill"><i className="fa-solid fa-image" /> Adobe Photoshop</span>
            <span className="wl-tech-pill"><i className="fa-solid fa-book-open" /> Adobe InDesign</span>
            <span className="wl-tech-pill"><i className="fa-solid fa-vector-square" /> Vector Systems</span>
            <span className="wl-tech-pill"><i className="fa-solid fa-font" /> Typography Systems</span>
            <span className="wl-tech-pill"><i className="fa-solid fa-palette" /> Design Tokens</span>
            <span className="wl-tech-pill"><i className="fa-solid fa-film" /> Motion Graphics</span>
          </div>
        </div>
      </section>


      {/* ================= GRAPHIC DESIGN DISCIPLINES GRID ================= */}
      <section className="page-section" style={{ background: '#fbf9f4', padding: '80px 0 100px' }}>
        <div className="container">
          <div className="section-title text-center mb-5">
            <span style={{ color: '#c58f3f', fontSize: '13px', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              Creative Capabilities &amp; Design Systems
            </span>
            <h2 style={{ color: '#0b2239', fontSize: '36px', fontWeight: '800', marginTop: '10px' }}>
              Design Systems Engineered for Commercial Impact
            </h2>
            <p style={{ maxWidth: '680px', margin: '14px auto 0', color: '#556987', fontSize: '16px' }}>
              From initial wireframes to production-ready design tokens and corporate print assets, every creative asset is crafted with pixel precision and strategic brand positioning.
            </p>
          </div>

          <div className="row g-4">
            {graphicPortfolio.map((item, index) => {
              const icons = [
                'fa-compass-drafting',
                'fa-layer-group',
                'fa-file-invoice',
                'fa-bullhorn',
              ];
              const iconClass = icons[index % icons.length];

              return (
                <div className="col-lg-6 col-md-6" key={item.id}>
                  <div className="wl-graphic-card">
                    <div className="wl-graphic-card-header">
                      <div className="wl-graphic-icon-wrap">
                        <i className={`fa-solid ${iconClass}`} />
                      </div>
                      <span className="wl-graphic-category">{item.category}</span>
                    </div>

                    <h3 className="wl-graphic-title">{item.title}</h3>
                    <p className="wl-graphic-desc">{item.desc}</p>

                    <div className="wl-graphic-deliverables">
                      <h4 className="wl-deliverables-heading">Core Deliverables &amp; Formats</h4>
                      <ul className="wl-deliverables-list">
                        {item.deliverables.map((deliv, dIdx) => (
                          <li key={dIdx}>
                            <i className="fa-solid fa-circle-check" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="wl-graphic-card-footer">
                      <Link href="/contact" className="wl-graphic-inquire-link">
                        Inquire About This Service <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ================= DESIGN PROCESS SUMMARY ================= */}
          <div
            style={{
              marginTop: '60px',
              padding: '40px',
              background: '#0b2239',
              borderRadius: '20px',
              color: '#ffffff',
              boxShadow: '0 20px 45px rgba(11, 34, 57, 0.15)',
            }}
          >
            <div className="row align-items-center">
              <div className="col-lg-8">
                <span style={{ color: '#d8ac66', fontSize: '13px', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                  Complete Asset Ownership
                </span>
                <h3 style={{ color: '#ffffff', fontSize: '28px', fontWeight: '800', marginTop: '10px' }}>
                  100% Vector Source Files &amp; Full Commercial Copyright
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '15px', lineHeight: '1.7', marginTop: '12px', marginBottom: 0 }}>
                  Every branding and UI project delivered by Webleora includes full, unrestricted commercial rights and all vector source files (.FIG, .AI, .SVG, .PDF, .PNG). No licensing lock-ins, ever.
                </p>
              </div>
              <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                <Link
                  href="/contact"
                  className="btn-default"
                  style={{
                    background: 'linear-gradient(135deg, #d8ac66 0%, #c58f3f 100%)',
                    color: '#081423',
                    fontWeight: '700',
                    padding: '16px 32px',
                    borderRadius: '100px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    textDecoration: 'none',
                    boxShadow: '0 8px 24px rgba(197, 143, 63, 0.4)',
                  }}
                >
                  Request Brand Proposal <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
