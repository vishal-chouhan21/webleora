import Link from 'next/link';
import { websitePortfolio, mobileAppPortfolio, graphicPortfolio } from '@/data/portfolioData';
import { Cta } from '@/components/ui';

export const metadata = {
  title: 'Portfolio | Website Design, Mobile Apps & Graphic Design | Webleora',
  description:
    'Explore Webleora’s engineering and design portfolio across custom website design, cross-platform mobile app development, and corporate graphic design.',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Portfolio | Website Design, Mobile Apps & Graphic Design | Webleora',
    description:
      'Explore Webleora’s engineering and design portfolio across custom website design, cross-platform mobile app development, and corporate graphic design.',
    url: './',
    type: 'website',
  },
};

export default function PortfolioHubPage() {
  return (
    <>
      {/* ================= HERO BANNER ================= */}
      <section className="wl-portfolio-header-banner">
        <div className="container">
          <span className="wl-portfolio-kicker">
            <i className="fa-solid fa-layer-group" />
            Engineering &amp; Design Portfolio
          </span>
          <h1>
            Selected Works across <span>Web, Mobile &amp; Brand</span>
          </h1>
          <p>
            Explore our cross-discipline portfolio showcasing production-grade websites, responsive mobile applications, and high-impact graphic design systems built for growing businesses.
          </p>

          <div className="wl-tech-badge-strip">
            <span className="wl-tech-pill"><i className="fa-brands fa-react" /> React &amp; Next.js</span>
            <span className="wl-tech-pill"><i className="fa-brands fa-node-js" /> Node.js</span>
            <span className="wl-tech-pill"><i className="fa-brands fa-android" /> Flutter &amp; Android</span>
            <span className="wl-tech-pill"><i className="fa-brands fa-apple" /> iOS Apps</span>
            <span className="wl-tech-pill"><i className="fa-brands fa-figma" /> Figma UI/UX</span>
            <span className="wl-tech-pill"><i className="fa-solid fa-database" /> PostgreSQL &amp; APIs</span>
          </div>
        </div>
      </section>


      {/* ================= 1. WEBSITE DESIGN SHOWCASE SECTION ================= */}
      <section className="page-section" style={{ background: '#ffffff', padding: '80px 0 60px' }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-end flex-wrap mb-4" style={{ gap: '16px' }}>
            <div>
              <span style={{ color: '#c58f3f', fontSize: '13px', fontWeight: '800', letterSpacing: '1.4px', textTransform: 'uppercase' }}>
                Web Engineering
              </span>
              <h2 style={{ fontSize: 'clamp(26px, 2.8vw, 36px)', fontWeight: '800', color: '#0b2239', margin: '4px 0 0' }}>
                Website Design &amp; Development Portfolio
              </h2>
            </div>
            <Link href="/portfolio/website-design" className="btn-default" style={{ padding: '12px 26px', fontSize: '14.5px' }}>
              View All 6 Web Projects
            </Link>
          </div>

          <div className="wl-web-portfolio-grid">
            {websitePortfolio.map((item) => (
              <div className="wl-web-portfolio-card" key={item.id}>
                <div className="wl-browser-bar">
                  <div className="wl-browser-dots">
                    <span /><span /><span />
                  </div>
                  <div className="wl-browser-address">https://{item.displayUrl || `${item.id}.com`}</div>
                </div>

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
                          <span className="wl-web-view-badge" style={{ fontSize: '11.5px', padding: '6px 14px' }}>
                            <i className="fa-solid fa-arrow-up-right-from-square" /> Live Project
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

                <div className="wl-web-card-content">
                  <div className="wl-web-card-meta">
                    <span className="wl-web-card-industry">{item.industry}</span>
                    <span style={{ fontSize: '12px', color: '#16a34a', fontWeight: '700' }}>● Production Verified</span>
                  </div>

                  <h3 className="wl-web-card-title">{item.title}</h3>
                  <p className="wl-web-card-desc">{item.desc}</p>

                  <div className="wl-web-tech-pills">
                    {item.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>

                  <ul className="wl-web-card-highlights">
                    {item.highlights.slice(0, 2).map((h) => (
                      <li key={h}>
                        <i className="fa-solid fa-check" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ marginTop: '18px', paddingTop: '14px', borderTop: '1px solid #f1ece1', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="wl-btn-live"
                        style={{ padding: '8px 14px', fontSize: '12px' }}
                      >
                        Visit Live <i className="fa-solid fa-arrow-up-right-from-square" />
                      </a>
                    )}
                    <Link
                      href="/contact"
                      className="wl-btn-quote"
                      style={{ padding: '8px 14px', fontSize: '12px' }}
                    >
                      Inquire <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 2. MOBILE APP DEVELOPMENT SHOWCASE SECTION ================= */}
      <section className="page-section" style={{ background: '#fbf9f4', padding: '80px 0 60px', borderTop: '1px solid #eae5d9', borderBottom: '1px solid #eae5d9' }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-end flex-wrap mb-4" style={{ gap: '16px' }}>
            <div>
              <span style={{ color: '#c58f3f', fontSize: '13px', fontWeight: '800', letterSpacing: '1.4px', textTransform: 'uppercase' }}>
                Mobile Engineering
              </span>
              <h2 style={{ fontSize: 'clamp(26px, 2.8vw, 36px)', fontWeight: '800', color: '#0b2239', margin: '4px 0 0' }}>
                Mobile App Development Portfolio
              </h2>
            </div>
            <Link href="/portfolio/mobile-app" className="btn-default" style={{ padding: '12px 26px', fontSize: '14.5px' }}>
              View All 5 Mobile Apps
            </Link>
          </div>

          <div className="row">
            {mobileAppPortfolio.slice(0, 2).map((app) => (
              <div className="col-lg-6 mb-4" key={app.id}>
                <div className="wl-mobile-app-card" style={{ height: '100%', margin: 0 }}>
                  <div className="row align-items-center">
                    <div className="col-sm-5 text-center mb-4 mb-sm-0">
                      <div className="wl-app-mockup-wrapper" style={{ minHeight: '360px' }}>
                        <div className="wl-app-bg-shape" style={{ background: app.bgShapeColor, width: '220px', height: '220px' }} />
                        <div className="wl-smartphone-frame" style={{ width: '190px', height: '380px' }}>
                          <div className="wl-smartphone-notch" style={{ width: '70px', height: '14px' }} />
                          <div className="wl-smartphone-screen">
                            <div className="wl-app-screen-header">
                              <span className="wl-app-screen-logo">{app.title}</span>
                              <i className="fa-solid fa-bell" style={{ fontSize: '11px', color: '#c58f3f' }} />
                            </div>
                            <div className="wl-app-screen-banner" style={{ background: `linear-gradient(135deg, ${app.badgeColor} 0%, #081423 100%)` }}>
                              <h6>Official Mobile App</h6>
                              <p>{app.category}</p>
                            </div>
                            <div className="wl-app-screen-grid">
                              <div className="wl-app-screen-item">
                                <div className="wl-app-screen-item-icon"><i className="fa-solid fa-bolt" /></div>
                                <span>Fast Sync</span>
                              </div>
                              <div className="wl-app-screen-item">
                                <div className="wl-app-screen-item-icon"><i className="fa-solid fa-shield-halved" /></div>
                                <span>Secure</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-7 wl-app-info-col">
                      <span className="wl-app-category-badge">{app.industry}</span>
                      <h3 className="wl-app-title" style={{ fontSize: '24px' }}>{app.title}</h3>
                      <div className="wl-app-platform-tag">
                        <i className="fa-brands fa-google-play" style={{ color: '#d8ac66' }} />
                        <span>{app.platform}</span>
                      </div>
                      <p className="wl-app-desc" style={{ fontSize: '14px' }}>{app.desc}</p>

                      <div className="wl-app-store-badges">
                        <div className="wl-badge-store">
                          <i className="fa-brands fa-google-play" />
                          <span><small>Get it on</small>Google Play</span>
                        </div>
                        <div className="wl-badge-store">
                          <i className="fa-brands fa-apple" />
                          <span><small>Download on</small>App Store</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. GRAPHIC DESIGN SHOWCASE SECTION ================= */}
      <section className="page-section" style={{ background: '#ffffff', padding: '80px 0 90px' }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-end flex-wrap mb-4" style={{ gap: '16px' }}>
            <div>
              <span style={{ color: '#c58f3f', fontSize: '13px', fontWeight: '800', letterSpacing: '1.4px', textTransform: 'uppercase' }}>
                Creative Direction
              </span>
              <h2 style={{ fontSize: 'clamp(26px, 2.8vw, 36px)', fontWeight: '800', color: '#0b2239', margin: '4px 0 0' }}>
                Graphic Design &amp; Brand Identity Portfolio
              </h2>
            </div>
            <Link href="/portfolio/graphic-design" className="btn-default" style={{ padding: '12px 26px', fontSize: '14.5px' }}>
              Explore Brand Systems
            </Link>
          </div>

          <div className="wl-graphic-portfolio-grid">
            {graphicPortfolio.map((item) => (
              <div className="wl-graphic-card" key={item.id}>
                <div className="wl-graphic-card-header">
                  <div className="wl-graphic-card-icon">
                    <i className="fa-solid fa-bezier-curve" />
                  </div>
                  <div>
                    <span className="wl-graphic-card-category">{item.category}</span>
                    <h3 className="wl-graphic-card-title">{item.title}</h3>
                  </div>
                </div>
                <p className="wl-graphic-card-desc">{item.desc}</p>
                <div className="wl-graphic-deliverables">
                  <h5>Core Deliverables</h5>
                  <ul>
                    {item.deliverables.slice(0, 3).map((d) => (
                      <li key={d}>
                        <i className="fa-solid fa-check" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <Cta
        title="Ready to Build Your Website, Mobile App or Brand?"
        text="Discuss your project requirements directly with our senior development and design team in Indore. We provide transparent milestone estimates and clean architectures."
        btn="Schedule Project Consultation"
      />
    </>
  );
}
