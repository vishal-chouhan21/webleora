import Link from 'next/link';
import { mobileAppPortfolio } from '@/data/portfolioData';
import { Cta } from '@/components/ui';

export const metadata = {
  title: 'Mobile App Development Portfolio | iOS & Android Apps | Webleora',
  description:
    'Explore Webleora’s mobile app development portfolio featuring custom iOS and Android applications built with Flutter and React Native for e-commerce, dairy subscriptions, agri-tech, and health.',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Mobile App Development Portfolio | iOS & Android Apps | Webleora',
    description:
      'Explore Webleora’s mobile app development portfolio featuring custom iOS and Android applications built with Flutter and React Native for e-commerce, dairy subscriptions, agri-tech, and health.',
    url: './',
    type: 'website',
  },
};

export default function MobileAppPortfolioPage() {
  return (
    <>
      {/* ================= HERO BANNER ================= */}
      <section className="wl-portfolio-header-banner">
        <div className="container">
          <span className="wl-portfolio-kicker">
            <i className="fa-solid fa-mobile-screen" />
            Cross-Platform App Engineering
          </span>
          <h1>
            Mobile App Development <span>Portfolio</span>
          </h1>
          <p>
            Explore our iOS and Android mobile applications engineered with Flutter and React Native. Built for smooth 60fps responsiveness, offline resilience, real-time push notifications, and frictionless in-app purchasing.
          </p>

          <div className="wl-tech-badge-strip">
            <span className="wl-tech-pill"><i className="fa-brands fa-apple" /> iOS</span>
            <span className="wl-tech-pill"><i className="fa-brands fa-android" /> Android</span>
            <span className="wl-tech-pill"><i className="fa-brands fa-react" /> React Native</span>
            <span className="wl-tech-pill"><i className="fa-solid fa-feather" /> Flutter &amp; Dart</span>
            <span className="wl-tech-pill"><i className="fa-solid fa-bolt" /> GetX &amp; Redux</span>
            <span className="wl-tech-pill"><i className="fa-solid fa-fire" /> Firebase &amp; Push</span>
            <span className="wl-tech-pill"><i className="fa-solid fa-credit-card" /> Razorpay &amp; Stripe</span>
            <span className="wl-tech-pill"><i className="fa-solid fa-route" /> Geolocation &amp; Maps</span>
          </div>
        </div>
      </section>


      {/* ================= MOBILE APPS LIST ================= */}
      <section className="page-section" style={{ background: '#fbf9f4', padding: '80px 0 100px' }}>
        <div className="container">
          <div className="section-title text-center mb-5">
            <span style={{ color: '#c58f3f', fontSize: '13px', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              Custom Mobile Applications
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', fontWeight: '800', color: '#0b2239', marginTop: '6px' }}>
              Apps Designed for <span>Daily Engagement &amp; Retention</span>
            </h2>
            <p style={{ maxWidth: '680px', margin: '12px auto 0', color: '#5c6773', fontSize: '15.5px' }}>
              Each application is developed with a native feel, clean modular codebase, and scalable backend integrations for businesses scaling across India and global markets.
            </p>
          </div>

          <div className="wl-mobile-app-list">
            {mobileAppPortfolio.map((app, index) => {
              const isEven = index % 2 === 1;
              return (
                <div className="wl-mobile-app-card" key={app.id}>
                  <div className={`row align-items-center ${isEven ? 'flex-row-reverse' : ''}`}>
                    {/* Device Mockup Column */}
                    <div className="col-lg-5 col-md-6 text-center mb-4 mb-md-0">
                      <div className="wl-app-mockup-wrapper">
                        <div
                          className="wl-app-bg-shape"
                          style={{
                            background: app.bgShapeColor,
                          }}
                        />

                        {/* Smartphone Device Frame */}
                        <div className="wl-smartphone-frame">
                          <div className="wl-smartphone-notch" />
                          <div className="wl-smartphone-screen">
                            {/* App Header */}
                            <div className="wl-app-screen-header">
                              <span className="wl-app-screen-logo">{app.title}</span>
                              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                                <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '10px', color: '#64748b' }} />
                                <i className="fa-solid fa-bell" style={{ fontSize: '10px', color: '#c58f3f' }} />
                              </div>
                            </div>

                            {/* App Banner */}
                            <div
                              className="wl-app-screen-banner"
                              style={{
                                background: `linear-gradient(135deg, ${app.badgeColor} 0%, #081423 100%)`,
                              }}
                            >
                              <h6>{app.title} Mobile</h6>
                              <p>{app.category}</p>
                            </div>

                            {/* App Interface Grid Items */}
                            <div className="wl-app-screen-grid">
                              <div className="wl-app-screen-item">
                                <div className="wl-app-screen-item-icon">
                                  <i className="fa-solid fa-bag-shopping" />
                                </div>
                                <span>Browse Catalog</span>
                              </div>
                              <div className="wl-app-screen-item">
                                <div className="wl-app-screen-item-icon">
                                  <i className="fa-solid fa-bolt" />
                                </div>
                                <span>Instant Pay</span>
                              </div>
                              <div className="wl-app-screen-item">
                                <div className="wl-app-screen-item-icon">
                                  <i className="fa-solid fa-truck-fast" />
                                </div>
                                <span>Live Track</span>
                              </div>
                              <div className="wl-app-screen-item">
                                <div className="wl-app-screen-item-icon">
                                  <i className="fa-solid fa-headset" />
                                </div>
                                <span>24/7 Support</span>
                              </div>
                            </div>

                            {/* Mini Promo Card */}
                            <div
                              style={{
                                marginTop: 'auto',
                                background: '#ffffff',
                                border: '1px solid #e5e0d4',
                                borderRadius: '8px',
                                padding: '8px 10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                              }}
                            >
                              <span style={{ fontSize: '9px', fontWeight: '700', color: '#0b2239' }}>Member Exclusive</span>
                              <span style={{ fontSize: '9px', fontWeight: '800', color: '#c58f3f' }}>Active</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* App Description & Details Column */}
                    <div className="col-lg-7 col-md-6 wl-app-info-col">
                      <span className="wl-app-category-badge">{app.industry}</span>
                      <h3 className="wl-app-title">{app.title}</h3>

                      <div className="wl-app-platform-tag">
                        <i className="fa-brands fa-google-play" style={{ color: '#d8ac66' }} />
                        <span>{app.platform}</span>
                      </div>

                      <p className="wl-app-desc">{app.desc}</p>

                      <h5 style={{ fontSize: '14.5px', fontWeight: '700', color: '#0b2239', marginBottom: '10px' }}>
                        Core Engineering Highlights
                      </h5>
                      <ul className="wl-app-feature-list">
                        {app.features.map((feat) => (
                          <li key={feat}>
                            <i className="fa-solid fa-circle-check" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="wl-app-store-badges">
                        <div className="wl-badge-store">
                          <i className="fa-brands fa-google-play" />
                          <span>
                            <small>Get it on</small>
                            Google Play
                          </span>
                        </div>
                        <div className="wl-badge-store">
                          <i className="fa-brands fa-apple" />
                          <span>
                            <small>Download on</small>
                            App Store
                          </span>
                        </div>
                        <Link
                          href="/contact"
                          className="btn-default"
                          style={{
                            padding: '10px 22px',
                            fontSize: '13.5px',
                            marginLeft: 'auto',
                          }}
                        >
                          Build an App Like This
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <Cta
        title="Planning a Mobile Application for iOS & Android?"
        text="Discuss your app idea with our mobile engineering team in Indore. We will help you select the ideal tech stack (Flutter vs React Native) and provide a structured sprint-based roadmap."
        btn="Schedule App Consultation"
      />
    </>
  );
}
