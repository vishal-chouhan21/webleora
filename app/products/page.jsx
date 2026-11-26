import Link from 'next/link';
import { PageHeader, Title, Cta } from '@/components/ui';
import { productsCatalog, weddingThemes, occasionTemplates } from '@/data/productsData';
import WeddingThemePreview from '@/components/WeddingThemePreview';
import site from '@/config/site';

export const metadata = {
  title: {
    absolute: 'Our Products | Wedding, Birthday, Anniversary & Event Themes | Webleora',
  },
  description:
    'Explore ready-to-launch digital invitation templates by Webleora for Weddings, Birthdays, Anniversaries, Parties, and all special celebrations.',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Our Products | Custom Invitation & Event Templates | Webleora',
    description:
      'Discover interactive invitation website templates built by Webleora for Weddings, Birthdays, Anniversaries, Housewarmings, and Parties.',
    url: './',
    type: 'website',
    images: ['/images/page-header-bg.jpg'],
  },
};

export default function ProductsHubPage() {
  const whatsappPhone = site.phone ? site.phone.replace(/\D/g, '') : '919589136915';
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    'Hello Webleora, I would like to book a custom interactive invitation template (Wedding / Birthday / Anniversary / Party).'
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
                Interactive Templates for Weddings, Birthdays, Anniversaries &amp; All Events
              </Title>
              <p className="wl-svc-section-lead" style={{ maxWidth: 840, margin: '10px auto 0' }}>
                Alongside custom software engineering, Webleora builds signature digital invitation templates engineered for quick personalization—for Weddings, Birthday Parties, Anniversaries, Engagements, Baby Showers, Housewarmings, and every celebration worth sharing.
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
                          Explore All Themes &amp; Occasions
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
                          <strong>All Occasions Supported</strong>
                          <span>Custom-crafted for Weddings, Birthdays, Anniversaries, Parties &amp; More</span>
                        </div>
                        <div className="wl-product-mini-stat">
                          <strong>48 Hours Launch</strong>
                          <span>Fast personalization with your names, schedule, music &amp; photos</span>
                        </div>
                        <div className="wl-product-mini-stat">
                          <strong>Bilingual &amp; Interactive</strong>
                          <span>3D Book, Royal Gate &amp; Wax-Seal reveals in English, Hindi &amp; regional scripts</span>
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

      {/* ================= OCCASIONS WE CREATE TEMPLATES FOR ================= */}
      <section className="page-section" style={{ background: '#ffffff', paddingBottom: '20px' }}>
        <div className="container">
          <div className="row section-row text-center">
            <div className="col-lg-12">
              <Title sub="all occasions">We Create This Template Style for Every Celebration</Title>
              <p className="wl-svc-section-lead" style={{ maxWidth: 780, margin: '10px auto 0' }}>
                Like the luxury reveal experience? Tell us your occasion and our team adapts this exact interactive digital invitation style for your event.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {occasionTemplates.map((occ) => (
              <div className="col-lg-4 col-md-6" key={occ.title}>
                <div className="wl-occasion-card">
                  <div className="wl-occasion-header">
                    <span className="wl-occasion-icon">
                      <i className={`fa-solid ${occ.icon}`} aria-hidden="true" />
                    </span>
                    <span className="wl-occasion-tag">{occ.tag}</span>
                  </div>
                  <h3>{occ.title}</h3>
                  <p>{occ.desc}</p>
                  <ul className="wl-occasion-points">
                    {occ.includes.map((pt) => (
                      <li key={pt}>
                        <i className="fa-solid fa-check" aria-hidden="true" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED LIVE WEDDING THEMES PREVIEW ================= */}
      <section className="page-section" style={{ background: '#fbf9f4' }}>
        <div className="container">
          <div className="row section-row text-center">
            <div className="col-lg-12">
              <Title sub="featured live demos">Live Interactive Theme Showcase</Title>
              <p className="wl-svc-section-lead" style={{ maxWidth: 760, margin: '10px auto 0' }}>
                Click any theme below to test its live deployment. Any of these styles can be personalized for a Wedding, Birthday Party, Anniversary, or Custom Event.
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
              Explore Full Templates Showcase &amp; Packages
            </Link>
          </div>
        </div>
      </section>

      <Cta
        title="Planning a Wedding, Birthday, Anniversary or Party?"
        text="Speak directly with our team in Indore to personalize a digital invitation website within 48 hours—tailored for any occasion or theme."
        btn="Get in Touch"
      />
    </>
  );
}
