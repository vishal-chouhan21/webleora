import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Title } from '@/components/ui';
import Accordion from '@/components/Accordion';
import { services, faqs, steps } from '@/data/content';
import { serviceDetails } from '@/data/serviceDetails';
import site from '@/config/site';

export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));

export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return { title: 'Service Not Found | Webleora' };
  const d = serviceDetails[slug] || {};
  return {
    title: `${s.title} Services | Webleora Indore`,
    description:
      d.heroDesc ||
      `Professional ${s.title} solutions for your business. ${s.need}. Engineered for speed, scalability, and high ROI.`,
    alternates: {
      canonical: './',
    },
    openGraph: {
      title: `${s.title} Services | Webleora`,
      description: d.heroDesc || `Professional ${s.title} solutions for your business. ${s.need}.`,
      url: './',
      type: 'article',
      images: ['/images/page-header-bg.jpg'],
    },
  };
};

export default async function Service({ params }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();

  const details = serviceDetails[slug] || {
    badge: s.title,
    categoryName: 'Digital Solutions & Engineering',
    leadTitle: `${s.title} for Your Business`,
    heroDesc: s.need,
    portfolioLink: '/portfolio',
    portfolioLabel: 'View Portfolio Projects',
    techStack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Cloud APIs'],
    outcomes: [
      { title: 'Tailored to Your Workflow', desc: 'Engineered from scratch to solve your specific operational challenges.' },
      { title: 'High-Performance Architecture', desc: 'Built for fast load speeds, secure transactions, and zero latency.' },
      { title: '100% Code & IP Ownership', desc: 'Full source code and intellectual property ownership delivered upon completion.' },
    ],
    whoCards: [
      { title: 'Growing B2B Enterprises', desc: 'Companies looking to scale operations, digitize workflows, and automate manual processes.' },
      { title: 'Product & Startup Teams', desc: 'Founders who need fast, reliable engineering to build and deploy robust products.' },
    ],
  };

  const whatsappPhone = site.phone ? site.phone.replace(/\D/g, '') : '919589136915';
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    `Hello Webleora, I would like to inquire about your ${s.title} services.`
  )}`;

  // Related services to explore at the bottom (excluding current)
  const relatedServices = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      {/* ================= HERO BANNER ================= */}
      <section className="wl-svc-hero">
        <div className="container">
          <div className="wl-svc-hero-content">
            <nav className="wl-svc-breadcrumbs" aria-label="Breadcrumbs">
              <Link href="/">Home</Link>
              <span className="wl-sep">/</span>
              <Link href="/services">Services</Link>
              <span className="wl-sep">/</span>
              <span className="wl-current">{s.title}</span>
            </nav>

            <div className="wl-svc-hero-badge">
              <i className="fa-solid fa-code" aria-hidden="true" />
              <span>{details.badge || s.title}</span>
            </div>

            <h1 className="wl-svc-hero-title">{details.leadTitle || s.title}</h1>

            <p className="wl-svc-hero-desc">{details.heroDesc || s.need}</p>

            {/* Tech Stack Pills */}
            {details.techStack && (
              <div className="wl-svc-tech-strip">
                <span className="wl-svc-tech-label">Core Technologies &amp; Standards:</span>
                <div className="wl-svc-tech-tags">
                  {details.techStack.map((tech) => (
                    <span key={tech} className="wl-svc-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="wl-svc-hero-actions">
              <Link href="/contact" className="wl-btn-quote" style={{ padding: '14px 28px', fontSize: '15px' }}>
                <i className="fa-solid fa-paper-plane" /> Request Free Technical Proposal
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="wl-btn-live"
                style={{ padding: '14px 26px', fontSize: '15px' }}
              >
                <i className="fa-brands fa-whatsapp" /> Chat on WhatsApp
              </a>
              {details.portfolioLink && (
                <Link
                  href={details.portfolioLink}
                  className="wl-btn-live"
                  style={{ padding: '14px 24px', fontSize: '15px', background: 'transparent' }}
                >
                  <i className="fa-solid fa-arrow-up-right-from-square" /> {details.portfolioLabel || 'View Live Projects'}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXECUTIVE OVERVIEW & WHO IT HELPS ================= */}
      <section className="wl-svc-overview-section">
        <div className="container">
          <div className="row g-4">
            {/* Left Narrative Card */}
            <div className="col-lg-6">
              <div className="wl-svc-overview-card">
                <span className="wl-svc-card-tag">Business Advantage</span>
                <h3>Engineered for High Performance &amp; Measurable ROI</h3>
                <p>
                  Need {s.need.toLowerCase()}? At Webleora, we don’t build generic one-size-fits-all templates. We plan,
                  design, and engineer {s.title.toLowerCase()} shaped around your exact operational workflows, real user
                  journeys, and high-conversion goals.
                </p>
                <p>
                  Every solution is engineered in-house with modern semantic code, rigorous multi-device testing, sub-1.5s
                  speed optimizations, and strict data security protocols.
                </p>

                <div className="wl-svc-check-grid">
                  <div className="wl-svc-check-item">
                    <i className="fa-solid fa-circle-check" />
                    <span>Fixed milestone pricing with zero hidden scope costs</span>
                  </div>
                  <div className="wl-svc-check-item">
                    <i className="fa-solid fa-circle-check" />
                    <span>100% full source code and GitHub repository ownership</span>
                  </div>
                  <div className="wl-svc-check-item">
                    <i className="fa-solid fa-circle-check" />
                    <span>Direct collaboration with senior engineers who write the code</span>
                  </div>
                  <div className="wl-svc-check-item">
                    <i className="fa-solid fa-circle-check" />
                    <span>30-day post-launch technical warranty &amp; handover support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Who It Helps */}
            <div className="col-lg-6">
              <div className="wl-svc-who-card">
                <span className="wl-svc-card-tag">Ideal Use Cases</span>
                <h3>Who Benefits Most from Our {s.title}</h3>
                <p style={{ color: '#64748b', fontSize: '15px', marginBottom: '20px' }}>{s.who}</p>

                <div className="wl-svc-who-list">
                  {details.whoCards.map((who, i) => (
                    <div className="wl-svc-who-item" key={who.title}>
                      <div className="wl-svc-who-number">0{i + 1}</div>
                      <div className="wl-svc-who-info">
                        <h4>{who.title}</h4>
                        <p>{who.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE CAPABILITIES GRID ("WHAT WE BUILD") ================= */}
      <section className="wl-svc-capabilities-section">
        <div className="container">
          <div className="row section-row text-center">
            <div className="col-lg-12">
              <Title sub="core capabilities">What We Can Build for You</Title>
              <p className="wl-svc-section-lead">
                Explore the modular services, custom workflows, and specialized deliverables we engineer under {s.title}.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {s.items.map(([name, desc], i) => (
              <div className="col-lg-4 col-md-6" key={name}>
                <div className="wl-svc-cap-card">
                  <div className="wl-svc-cap-icon-wrap">
                    <span className="wl-svc-cap-icon">
                      <i className="fa-solid fa-layer-group" />
                    </span>
                    <span className="wl-svc-cap-index">0{i + 1}</span>
                  </div>
                  <h4>{name}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4 BUSINESS OUTCOMES / METRICS ================= */}
      <section className="wl-svc-outcomes-section">
        <div className="container">
          <div className="row section-row text-center">
            <div className="col-lg-12">
              <Title sub="tangible value" dark>
                Key Business Outcomes &amp; Standards
              </Title>
              <p className="wl-svc-section-lead" style={{ color: '#94a3b8' }}>
                How our engineering directly translates into competitive commercial advantages for your company.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {details.outcomes.map((item, i) => (
              <div className="col-lg-3 col-md-6" key={item.title}>
                <div className="wl-svc-metric-card">
                  <div className="wl-svc-metric-icon">
                    <i
                      className={
                        i === 0
                          ? 'fa-solid fa-gauge-high'
                          : i === 1
                          ? 'fa-solid fa-mobile-screen-button'
                          : i === 2
                          ? 'fa-solid fa-chart-line'
                          : 'fa-solid fa-shield-halved'
                      }
                    />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 5-STAGE DELIVERY METHODOLOGY ================= */}
      <section className="wl-svc-process-section">
        <div className="container">
          <div className="row section-row text-center">
            <div className="col-lg-12">
              <Title sub="delivery roadmap">Our 5-Stage Delivery Process</Title>
              <p className="wl-svc-section-lead">
                Every project is structured into transparent milestone sprints with clear scope agreements and weekly staging previews.
              </p>
            </div>
          </div>

          <div className="wl-steps">
            {steps.map(([t, d], i) => {
              const [n, name] = t.split(' — ');
              return (
                <div className="wl-step" key={t}>
                  <div className="wl-step-badge">{n}</div>
                  <h3>{name}</h3>
                  <p>{d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= TRANSPARENT FACTORS AFFECTING SCOPE & COST ================= */}
      <section className="wl-svc-factors-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="wl-svc-factors-copy">
                <span className="wl-svc-card-tag">Transparent Scoping</span>
                <h3>What Affects Project Cost &amp; Delivery Timelines</h3>
                <p>
                  We believe in 100% pricing clarity. Before any contract is signed, you receive a detailed breakdown of
                  milestones, architecture choices, and scope requirements.
                </p>
                <div style={{ marginTop: '24px' }}>
                  <Link href="/contact" className="wl-btn-quote">
                    Request an Itemized Quote
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="wl-svc-factors-grid">
                {s.affects.map((factor, i) => (
                  <div className="wl-svc-factor-card" key={factor}>
                    <div className="wl-svc-factor-number">0{i + 1}</div>
                    <div className="wl-svc-factor-text">
                      <p>{factor}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQS ACCORDION ================= */}
      <section className="our-faqs" style={{ background: '#fdfbf7', padding: '90px 0 80px' }}>
        <div className="container">
          <div className="row section-row text-center">
            <div className="col-lg-12">
              <Title sub="service faq">Frequently Asked Questions</Title>
              <p className="wl-svc-section-lead">
                Common questions about our {s.title} capabilities, deliverables, and development timelines.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <Accordion items={s.faqs || faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* ================= READY TO START CTA BANNER ================= */}
      <section className="wl-svc-cta-section">
        <div className="container">
          <div className="wl-svc-cta-card">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <span className="wl-svc-cta-tag">Start Your Project Today</span>
                <h2>Ready to Build Your {s.title}?</h2>
                <p>
                  Schedule a free, no-obligation technical consultation with our engineering team in Indore. We’ll review
                  your requirements, discuss the right architecture, and provide a milestone-based proposal.
                </p>
              </div>
              <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'stretch' }}>
                  <Link href="/contact" className="wl-btn-quote" style={{ justifyContent: 'center', padding: '14px 28px' }}>
                    Schedule Free Consultation
                  </Link>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wl-btn-live"
                    style={{ justifyContent: 'center', padding: '14px 28px' }}
                  >
                    <i className="fa-brands fa-whatsapp" /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPLORE RELATED SERVICES ================= */}
      <section className="wl-svc-related-section">
        <div className="container">
          <div className="row section-row text-center">
            <div className="col-lg-12">
              <Title sub="explore more">Related Digital Services</Title>
              <p className="wl-svc-section-lead">
                Discover complementary engineering capabilities to accelerate your business growth.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {relatedServices.map((rel) => (
              <div className="col-lg-4 col-md-6" key={rel.slug}>
                <div className="wl-svc-related-card">
                  <span className="wl-svc-related-tag">Webleora Service</span>
                  <h4>{rel.title}</h4>
                  <p>{rel.need}</p>
                  <Link href={`/services/${rel.slug}`} className="wl-svc-related-link">
                    Explore {rel.title} <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
