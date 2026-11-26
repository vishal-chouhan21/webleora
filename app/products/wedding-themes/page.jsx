import Link from 'next/link';
import { Title } from '@/components/ui';
import Accordion from '@/components/Accordion';
import WeddingThemePreview from '@/components/WeddingThemePreview';
import {
  weddingThemes,
  occasionTemplates,
  weddingBenefits,
  weddingLaunchSteps,
  weddingPackages,
  weddingFaqs,
} from '@/data/productsData';
import site from '@/config/site';

export const metadata = {
  title: {
    absolute: 'Wedding, Birthday, Anniversary & Event Invitation Templates | Webleora Products',
  },
  description:
    'We create custom interactive invitation websites for Weddings, Birthday Parties, Anniversaries, Housewarmings, and all special celebrations featuring 3D reveals, live countdowns, music, and Google Maps venue directions.',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Interactive Wedding, Birthday, Anniversary & Event Website Templates | Webleora',
    description:
      'Replace static invitation PDFs with royal mobile-first websites for Weddings, Birthdays, Anniversaries & Parties. View live demos and launch in 48 hours.',
    url: './',
    type: 'website',
    images: ['/images/page-header-bg.jpg'],
  },
};

export default function WeddingThemesProductPage() {
  const whatsappPhone = site.phone ? site.phone.replace(/\D/g, '') : '919589136915';
  const buildThemeWhatsapp = (themeTitle) =>
    `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
      themeTitle
        ? `Hello Webleora, I want to book and customize the "${themeTitle}" wedding invitation website.`
        : 'Hello Webleora, I want to customize a digital wedding invitation website for an upcoming wedding.'
    )}`;

  return (
    <>
      {/* ================= HERO BANNER ================= */}
      <section className="wl-svc-hero">
        <div className="container">
          <div className="wl-svc-hero-content">
            <nav className="wl-svc-breadcrumbs" aria-label="Breadcrumbs">
              <Link href="/">Home</Link>
              <span className="wl-sep">/</span>
              <Link href="/products">Our Products</Link>
              <span className="wl-sep">/</span>
              <span className="wl-current">Wedding, Birthday &amp; Event Themes</span>
            </nav>

            <div className="wl-svc-hero-badge">
              <i className="fa-solid fa-crown" aria-hidden="true" />
              <span>All Special Occasions · Custom-Built in 48 Hours</span>
            </div>

            <h1 className="wl-svc-hero-title">
              Luxury Interactive Websites for Weddings, Birthdays, Anniversaries &amp; Parties
            </h1>

            <p className="wl-svc-hero-desc">
              Turn every celebration into an unforgettable digital invitation. We create this exact royal interactive website style for Weddings, Engagements, Birthday Parties, Anniversaries, Housewarmings, and Private Parties—complete with 3D book or wax-seal reveals, bilingual Hindi &amp; English typography, live countdowns, music, schedules, and Google Maps directions.
            </p>

            <div className="wl-svc-tech-strip">
              <span className="wl-svc-tech-label">Custom Templates For:</span>
              <div className="wl-svc-tech-tags">
                <span className="wl-svc-tech-tag">Weddings &amp; Engagements</span>
                <span className="wl-svc-tech-tag">Birthday Parties</span>
                <span className="wl-svc-tech-tag">25th / 50th Anniversaries</span>
                <span className="wl-svc-tech-tag">Cocktail &amp; VIP Parties</span>
                <span className="wl-svc-tech-tag">Baby Showers &amp; Griha Pravesh</span>
                <span className="wl-svc-tech-tag">3D Book, Gate &amp; Wax-Seal Reveals</span>
              </div>
            </div>

            <div className="wl-svc-hero-actions">
              <a
                href="#themes-showcase"
                className="wl-btn-quote"
                style={{ padding: '11px 24px', fontSize: '14.5px' }}
              >
                <i className="fa-solid fa-eye" aria-hidden="true" /> Browse 3 Live Demos
              </a>
              <a
                href="#all-occasions"
                className="wl-btn-live"
                style={{ padding: '11px 22px', fontSize: '14.5px' }}
              >
                <i className="fa-solid fa-wand-magic-sparkles" aria-hidden="true" /> All Occasions We Build
              </a>
              <a
                href={buildThemeWhatsapp()}
                target="_blank"
                rel="noopener noreferrer"
                className="wl-btn-live"
                style={{ padding: '11px 22px', fontSize: '14.5px', background: 'transparent' }}
              >
                <i className="fa-brands fa-whatsapp" aria-hidden="true" /> Book Custom Template
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3 LIVE INTERACTIVE WEDDING THEMES ================= */}
      <section id="themes-showcase" className="page-section" style={{ background: '#fbf9f4' }}>
        <div className="container">
          <div className="row section-row text-center">
            <div className="col-lg-12">
              <Title sub="live theme collection">
                Preview Our Live Interactive Theme Editions
              </Title>
              <p className="wl-svc-section-lead" style={{ maxWidth: 800, margin: '10px auto 0' }}>
                Test all three live deployments on mobile or desktop right now. Love the style? We create this exact template design for your Wedding, Birthday Party, Anniversary, Engagement, or Custom Event—personalized in 48 hours.
              </p>
            </div>
          </div>

          <div className="wl-themes-grid">
            {weddingThemes.map((theme) => (
              <article
                id={theme.id}
                key={theme.id}
                className="wl-web-portfolio-card wl-theme-product-card"
              >
                {/* Browser Frame Header */}
                <div className="wl-browser-bar">
                  <div className="wl-browser-dots">
                    <span /><span /><span />
                  </div>
                  <div className="wl-browser-address">{theme.liveUrl}</div>
                </div>

                {/* Crafted Dual-Aesthetic Preview Stage */}
                <div className="wl-web-card-preview wl-theme-preview-box">
                  <WeddingThemePreview theme={theme} />
                </div>

                {/* Theme Marketing Details */}
                <div className="wl-web-card-content">
                  <div className="wl-web-card-meta">
                    <span className="wl-web-card-industry">{theme.edition}</span>
                    <span className="wl-theme-style-pill">{theme.styleTag}</span>
                  </div>

                  <h3 className="wl-web-card-title">{theme.title}</h3>
                  <p className="wl-web-card-subtitle">{theme.subtitle}</p>
                  <p className="wl-web-card-desc">{theme.desc}</p>

                  {/* Authentic Palette Swatches */}
                  <div className="wl-theme-swatch-row">
                    <span className="wl-theme-swatch-label">Theme Palette:</span>
                    <div className="wl-theme-swatches">
                      {theme.palette.map((c) => (
                        <span key={c.hex} className="wl-theme-swatch-chip" title={`${c.name} (${c.hex})`}>
                          <i style={{ background: c.hex }} />
                          <span>{c.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Feature Badges */}
                  <div className="wl-web-tech-pills">
                    {theme.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>

                  {/* Detailed Feature Highlights */}
                  <ul className="wl-web-card-highlights">
                    {theme.features.map((feat) => (
                      <li key={feat}>
                        <i className="fa-solid fa-check" aria-hidden="true" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Card Actions */}
                  <div className="wl-theme-card-actions">
                    <a
                      href={theme.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="wl-btn-live"
                      style={{ flex: 1, justifyContent: 'center' }}
                    >
                      Live Demo <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                    </a>
                    <a
                      href={buildThemeWhatsapp(theme.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="wl-btn-quote"
                      style={{ flex: 1, justifyContent: 'center' }}
                    >
                      Book This Theme <i className="fa-brands fa-whatsapp" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WE CREATE THIS STYLE FOR EVERY OCCASION ================= */}
      <section id="all-occasions" className="page-section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="row section-row text-center">
            <div className="col-lg-12">
              <Title sub="custom-built for any occasion">
                We Create This Style for Weddings, Birthdays, Anniversaries &amp; All Parties
              </Title>
              <p className="wl-svc-section-lead" style={{ maxWidth: 800, margin: '10px auto 0' }}>
                Loved our 3D reveal gates, countdowns, and luxury layouts? Tell us your occasion—we build this exact interactive template style for weddings, birthdays, anniversaries, baby showers, housewarmings, and private galas.
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
                  <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid #f1ece1' }}>
                    <a
                      href={buildThemeWhatsapp(occ.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="wl-svc-related-link"
                      style={{ marginTop: 0 }}
                    >
                      Request {occ.tag} Template <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY DIGITAL WEDDING WEBSITES CONVERT GUESTS ================= */}
      <section className="wl-svc-capabilities-section" style={{ background: '#fbf9f4' }}>
        <div className="container">
          <div className="row section-row text-center">
            <div className="col-lg-12">
              <Title sub="why digital invitations">
                Why Families &amp; Planners Love Interactive Celebration Websites
              </Title>
              <p className="wl-svc-section-lead">
                Crafted for warm hospitality and effortless sharing—delivering clear event details, directions, music, and memorable storytelling in one tap.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {weddingBenefits.map((item, i) => (
              <div className="col-lg-4 col-md-6" key={item.title}>
                <div className="wl-svc-cap-card">
                  <div className="wl-svc-cap-icon-wrap">
                    <span className="wl-svc-cap-icon">
                      <i className={item.icon} aria-hidden="true" />
                    </span>
                    <span className="wl-svc-cap-index">0{i + 1}</span>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4-STEP FAST LAUNCH WORKFLOW ================= */}
      <section className="wl-svc-outcomes-section">
        <div className="container">
          <div className="row section-row text-center">
            <div className="col-lg-12">
              <Title sub="how it works" dark>
                From Booking to Live Invitation Link in 4 Simple Steps
              </Title>
              <p className="wl-svc-section-lead" style={{ color: '#94a3b8' }}>
                Zero technical work required from the family—simply share your photos and wedding itinerary, and our team handles design, speed, and hosting.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {weddingLaunchSteps.map((st) => (
              <div className="col-lg-3 col-md-6" key={st.step}>
                <div className="wl-svc-metric-card">
                  <div className="wl-svc-metric-icon" style={{ fontWeight: 800, fontSize: 18 }}>
                    {st.step}
                  </div>
                  <h4>{st.title}</h4>
                  <p>{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CUSTOMIZATION EDITIONS & PACKAGES ================= */}
      <section className="page-section" style={{ background: '#fbf9f4' }}>
        <div className="container">
          <div className="row section-row text-center">
            <div className="col-lg-12">
              <Title sub="flexible editions">Choose How You Want to Launch</Title>
              <p className="wl-svc-section-lead" style={{ maxWidth: 740, margin: '10px auto 0' }}>
                Whether you need quick 48-hour customization of an existing theme or a bespoke multi-event portal with RSVP collection, we configure the exact edition you need.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {weddingPackages.map((pkg, idx) => (
              <div className="col-lg-4 col-md-6" key={pkg.name}>
                <div className={`wl-package-card${idx === 1 ? ' is-featured' : ''}`}>
                  <div className="wl-package-top">
                    <span className="wl-package-tag">{pkg.tag}</span>
                    <span className="wl-package-eta">{pkg.turnaround}</span>
                  </div>
                  <h3 className="wl-package-title">{pkg.name}</h3>
                  <p className="wl-package-desc">{pkg.idealFor}</p>
                  <ul className="wl-package-list">
                    {pkg.deliverables.map((d) => (
                      <li key={d}>
                        <i className="fa-solid fa-circle-check" aria-hidden="true" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="wl-package-footer">
                    <a
                      href={buildThemeWhatsapp(pkg.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="wl-btn-quote"
                      style={{ width: '100%', justifyContent: 'center', padding: '12px 20px' }}
                    >
                      Inquire About {pkg.name} <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WEDDING THEME FAQS ================= */}
      <section className="our-faqs" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="row section-row text-center">
            <div className="col-lg-12">
              <Title sub="common questions">Frequently Asked Questions</Title>
              <p className="wl-svc-section-lead">
                Everything families and wedding planners ask before ordering a custom digital wedding website.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <Accordion items={weddingFaqs} />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CONVERSION CTA ================= */}
      <section className="wl-svc-cta-section">
        <div className="container">
          <div className="wl-svc-cta-card">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <span className="wl-svc-cta-tag">Celebrate Every Milestone in Style</span>
                <h2>Ready to Build Your Wedding, Birthday, Anniversary or Party Website?</h2>
                <p>
                  Message us with your occasion and favorite reveal style (Book Reveal, Royal Gate, or Wax-Seal Envelope) along with your dates—we’ll share pricing options and deliver your personalized preview within 48 hours.
                </p>
              </div>
              <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'stretch' }}>
                  <a
                    href={buildThemeWhatsapp()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wl-btn-quote"
                    style={{ justifyContent: 'center', padding: '14px 28px' }}
                  >
                    <i className="fa-brands fa-whatsapp" aria-hidden="true" /> Book on WhatsApp
                  </a>
                  <Link
                    href="/contact"
                    className="wl-btn-live"
                    style={{ justifyContent: 'center', padding: '14px 28px' }}
                  >
                    Send Project Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
