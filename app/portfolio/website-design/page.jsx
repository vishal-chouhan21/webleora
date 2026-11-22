import Link from 'next/link';
import { websitePortfolio } from '@/data/portfolioData';
import { Cta } from '@/components/ui';

export const metadata = {
  title: 'Website Design Portfolio | Custom Web Development | Webleora',
  description:
    'Explore Webleora’s website design and development portfolio featuring high-speed corporate B2B websites, manufacturing portals, luxury hospitality platforms, and digital storefronts.',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Website Design Portfolio | Custom Web Development | Webleora',
    description:
      'Explore Webleora’s website design and development portfolio featuring high-speed corporate B2B websites, manufacturing portals, luxury hospitality platforms, and digital storefronts.',
    url: './',
    type: 'website',
  },
};

export default function WebsiteDesignPortfolioPage() {
  return (
    <>
      {/* ================= HERO BANNER ================= */}
      <section className="wl-portfolio-header-banner">
        <div className="container">
          <span className="wl-portfolio-kicker">
            <i className="fa-solid fa-code" />
            Website Design &amp; Development
          </span>
          <h1>
            Website Design <span>Portfolio</span>
          </h1>
          <p>
            At Webleora, we take pride in engineering custom, high-converting business websites. Each project is tailored around specific commercial objectives, responsive multi-device accessibility, clean semantic code, and sub-1.5s Core Web Vitals speed.
          </p>

          <div className="wl-tech-badge-strip">
            <span className="wl-tech-pill"><i className="fa-brands fa-html5" /> HTML5</span>
            <span className="wl-tech-pill"><i className="fa-brands fa-css3-alt" /> CSS3 &amp; Tailwind</span>
            <span className="wl-tech-pill"><i className="fa-brands fa-bootstrap" /> Bootstrap 5</span>
            <span className="wl-tech-pill"><i className="fa-brands fa-react" /> React</span>
            <span className="wl-tech-pill"><i className="fa-solid fa-bolt" /> Next.js</span>
            <span className="wl-tech-pill"><i className="fa-brands fa-php" /> PHP &amp; Node.js</span>
            <span className="wl-tech-pill"><i className="fa-brands fa-wordpress" /> WordPress / CMS</span>
            <span className="wl-tech-pill"><i className="fa-brands fa-figma" /> Figma UI/UX</span>
          </div>
        </div>
      </section>


      {/* ================= WEBSITES GRID ================= */}
      <section className="page-section" style={{ background: '#fbf9f4' }}>
        <div className="container">
          <div className="section-title text-center">
            <span style={{ color: '#c58f3f', fontSize: '13px', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              Selected Client Websites
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', fontWeight: '800', color: '#0b2239', marginTop: '6px' }}>
              Websites Engineered for <span>Trust &amp; Inquiries</span>
            </h2>
            <p style={{ maxWidth: '680px', margin: '12px auto 0', color: '#5c6773', fontSize: '15.5px' }}>
              Explore our featured web design projects showing how Webleora builds high-impact corporate websites, industrial portals, and digital customer experiences.
            </p>
          </div>

          <div className="wl-web-portfolio-grid">
            {websitePortfolio.map((item) => (
              <div className="wl-web-portfolio-card" key={item.id}>
                {/* Browser top chrome */}
                <div className="wl-browser-bar">
                  <div className="wl-browser-dots">
                    <span /><span /><span />
                  </div>
                  <div className="wl-browser-address">https://{item.displayUrl || `${item.id}.com`}</div>
                </div>

                {/* Real Website Screenshot Mockup Preview */}
                <div className="wl-web-card-preview">
                  {item.image ? (
                    <div className="wl-web-card-img-wrap">
                      <img
                        src={item.image}
                        alt={`${item.title} live website design`}
                        className="wl-web-card-img"
                        loading="lazy"
                      />
                      {item.liveUrl && (
                        <div className="wl-web-card-img-overlay">
                          <span className="wl-web-view-badge">
                            <i className="fa-solid fa-arrow-up-right-from-square" /> Live Website
                          </span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="wl-web-card-preview-inner">
                      <h4>{item.title}</h4>
                      <span>{item.subtitle}</span>
                    </div>
                  )}
                </div>

                {/* Card Content & Specifications */}
                <div className="wl-web-card-content">
                  <div className="wl-web-card-meta">
                    <span className="wl-web-card-industry">{item.industry}</span>
                    <span style={{ fontSize: '12px', color: '#16a34a', fontWeight: '700' }}>● Production Verified</span>
                  </div>

                  <h3 className="wl-web-card-title">{item.title}</h3>
                  <p className="wl-web-card-subtitle">{item.subtitle}</p>
                  <p className="wl-web-card-desc">{item.desc}</p>

                  <div className="wl-web-tech-pills">
                    {item.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>

                  <ul className="wl-web-card-highlights">
                    {item.highlights.map((h) => (
                      <li key={h}>
                        <i className="fa-solid fa-check" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ marginTop: '22px', paddingTop: '18px', borderTop: '1px solid #f1ece1', display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="wl-btn-live"
                      >
                        Visit Live Website <i className="fa-solid fa-arrow-up-right-from-square" />
                      </a>
                    )}
                    <Link
                      href="/contact"
                      className="wl-btn-quote"
                    >
                      Request Similar Project <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <Cta
        title="Need a High-Converting Business Website?"
        text="Discuss your goals directly with our development team in Indore. We will analyze your requirements, recommend the best tech stack, and deliver a clear milestone-based quote."
        btn="Get Your Website Quote"
      />
    </>
  );
}
