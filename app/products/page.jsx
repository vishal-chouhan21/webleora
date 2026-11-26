import Link from 'next/link';
import { PageHeader, Title, Cta } from '@/components/ui';
import { productsCatalog, weddingThemes } from '@/data/productsData';
import WeddingThemePreview from '@/components/WeddingThemePreview';
import site from '@/config/site';

export const metadata = {
  title: {
    absolute: 'Our Products | Wedding Invitation Themes & Digital Solutions | Webleora',
  },
  description:
    'Explore ready-to-launch digital products by Webleora, including royal interactive wedding invitation websites with 3D reveals, live countdowns, music, and bilingual support.',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Our Products | Ready-to-Launch Digital Products | Webleora',
    description:
      'Discover ready-to-customize interactive digital wedding invitation websites and commercial software products built by Webleora.',
    url: './',
    type: 'website',
    images: ['/images/page-header-bg.jpg'],
  },
};

export default function ProductsHubPage() {
  const whatsappPhone = site.phone ? site.phone.replace(/\D/g, '') : '919589136915';
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    'Hello Webleora, I would like to inquire about your Digital Wedding Invitation Themes under Our Products.'
  )}`;

  return (
    <>
      <PageHeader title="Our Products" />

      {/* ================= READY-TO-LAUNCH PRODUCTS OVERVIEW ================= */}
      <section className="page-section" style={{ background: '#fdfbf7' }}>
        <div className="container">
          <div className="row section-row text-center">
            <div className="col-lg-12">
              <Title sub="ready-to-launch digital products">
                Engineered Digital Products You Can Launch Fast
              </Title>
              <p className="wl-svc-section-lead" style={{ maxWidth: 820, margin: '10px auto 0' }}>
                Alongside custom enterprise development, Webleora builds signature digital products engineered for quick personalization and effortless guest sharing—starting with our flagship collection of interactive wedding invitation websites.
              </p>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {productsCatalog.map((product) => (
              <div className="col-lg-10" key={product.slug}>
                <div className="wl-product-spotlight-card">
                  <div className="row align-items-center g-4">
                    <div className="col-lg-7">
                      <div className="wl-svc-hero-badge" style={{ marginBottom: '12px' }}>
                        <i className="fa-solid fa-crown" aria-hidden="true" />
                        <span>{product.badge} · {product.delivery}</span>
                      </div>
                      <h2 className="wl-product-spotlight-title">{product.title}</h2>
                      <p className="wl-product-spotlight-desc">{product.shortDesc}</p>

                      <div className="wl-svc-check-grid" style={{ marginTop: '18px' }}>
                        {product.highlights.map((h) => (
                          <div className="wl-svc-check-item" key={h}>
                            <i className="fa-solid fa-circle-check" aria-hidden="true" />
                            <span style={{ color: '#e2e8f0' }}>{h}</span>
                          </div>
                        ))}
                      </div>

                      <div className="wl-product-spotlight-actions">
                        <Link href={`/products/${product.slug}`} className="btn-default btn-highlighted">
                          Explore All 3 Wedding Themes
                        </Link>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="wl-btn-live"
                          style={{ padding: '12px 22px', fontSize: '14px' }}
                        >
                          <i className="fa-brands fa-whatsapp" aria-hidden="true" /> Book on WhatsApp
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-5">
                      <div className="wl-product-spotlight-stats">
                        <div className="wl-product-mini-stat">
                          <strong>3 Live Demos</strong>
                          <span>Interactive 3D Book, Royal Gate &amp; Wax-Seal Editions</span>
                        </div>
                        <div className="wl-product-mini-stat">
                          <strong>48 Hours</strong>
                          <span>Fast personalization with your names, schedule &amp; photos</span>
                        </div>
                        <div className="wl-product-mini-stat">
                          <strong>Bilingual Ready</strong>
                          <span>Supports crisp English, Hindi &amp; regional traditions</span>
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

      {/* ================= FEATURED LIVE WEDDING THEMES PREVIEW ================= */}
      <section className="page-section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="row section-row text-center">
            <div className="col-lg-12">
              <Title sub="featured collection">Live Wedding Theme Editions</Title>
              <p className="wl-svc-section-lead" style={{ maxWidth: 740, margin: '10px auto 0' }}>
                Click any theme to test its live Vercel deployment, or open the full Wedding Themes showcase for packages and customization details.
              </p>
            </div>
          </div>

          <div className="wl-themes-grid">
            {weddingThemes.map((theme) => (
              <div className="wl-web-portfolio-card" key={theme.id}>
                <div className="wl-browser-bar">
                  <div className="wl-browser-dots">
                    <span /><span /><span />
                  </div>
                  <div className="wl-browser-address">{theme.displayUrl}</div>
                </div>

                <div className="wl-web-card-preview wl-theme-preview-box">
                  <WeddingThemePreview theme={theme} />
                </div>

                <div className="wl-web-card-content">
                  <div className="wl-web-card-meta">
                    <span className="wl-web-card-industry">{theme.edition}</span>
                    <span style={{ fontSize: '11.5px', color: '#16a34a', fontWeight: '700' }}>● Live Demo</span>
                  </div>

                  <h3 className="wl-web-card-title">{theme.title}</h3>
                  <p className="wl-web-card-subtitle">{theme.subtitle}</p>

                  <div className="wl-theme-card-actions">
                    <a
                      href={theme.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="wl-btn-live"
                      style={{ flex: 1, justifyContent: 'center' }}
                    >
                      View Live Demo <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                    </a>
                    <Link
                      href={`/products/wedding-themes#${theme.id}`}
                      className="wl-btn-quote"
                      style={{ flex: 1, justifyContent: 'center' }}
                    >
                      Full Details <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link href="/products/wedding-themes" className="btn-default">
              View Complete Wedding Themes Marketing &amp; Packages
            </Link>
          </div>
        </div>
      </section>

      <Cta
        title="Want a Custom Digital Product or Wedding Edition?"
        text="Speak directly with our team in Indore to personalize a wedding invitation website within 48 hours or launch a bespoke digital product for your brand."
        btn="Get in Touch"
      />
    </>
  );
}
