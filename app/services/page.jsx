import Link from 'next/link';
import { PageHeader, Title, Cta } from '@/components/ui';
import Accordion from '@/components/Accordion';
import { services, faqs, steps, why } from '@/data/content';
import { serviceDetails } from '@/data/serviceDetails';

export const metadata = {
  title: {
    absolute: 'Our Services | Web Development, Apps & Custom Software | Webleora',
  },
  description:
    'Explore Webleora’s dedicated digital services: bespoke web design & development, mobile applications, cloud software, CRM/ERP platforms, e-commerce, and maintenance.',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Our Services | Web Development, Apps & Custom Software | Webleora',
    description:
      'Explore Webleora’s dedicated digital services: bespoke web design & development, mobile applications, cloud software, CRM/ERP platforms, e-commerce, and maintenance.',
    url: './',
    type: 'website',
  },
};

const serviceIcons = {
  'website-design-development': 'fa-solid fa-laptop-code',
  'web-applications': 'fa-solid fa-network-wired',
  'custom-software-development': 'fa-solid fa-code',
  'crm-erp-admin-panels': 'fa-solid fa-table-columns',
  'e-commerce-solutions': 'fa-solid fa-cart-shopping',
  'mobile-app-development': 'fa-solid fa-mobile-screen-button',
  'digital-marketing-seo': 'fa-solid fa-chart-line',
  'it-consulting-cloud': 'fa-solid fa-cloud',
  'website-maintenance-improvements': 'fa-solid fa-screwdriver-wrench',
};

export default function Services() {
  return (
    <>
      <PageHeader title="Our Services" />

      {/* ================= 9 CORE SERVICES GRID ================= */}
      <section className="page-section" style={{ background: '#fdfbf7' }}>
        <div className="container">
          <div className="row section-row text-center">
            <div className="col-lg-12">
              <Title sub="specialized capabilities">Digital Services for Every Stage of Your Business</Title>
              <p className="wl-svc-section-lead" style={{ maxWidth: 840, margin: '10px auto 0' }}>
                From high-speed corporate websites and SaaS applications to custom ERP platforms, mobile apps, and continuous cloud maintenance, our engineering team builds tailored software designed around your specific commercial goals.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {services.map((s) => {
              const details = serviceDetails[s.slug] || {};
              const iconClass = serviceIcons[s.slug] || 'fa-solid fa-layer-group';
              const badgeLabel = details.badge || s.title;
              const displayDesc = details.heroDesc || s.need;
              const tags = details.techStack ? details.techStack.slice(0, 4) : [];

              return (
                <div className="col-lg-4 col-md-6" key={s.slug}>
                  <div className="wl-hub-card">
                    <div className="wl-hub-card-header">
                      <div className="wl-hub-card-icon">
                        <i className={iconClass} aria-hidden="true" />
                      </div>
                      <span className="wl-hub-card-badge">{badgeLabel}</span>
                    </div>

                    <h3 className="wl-hub-card-title">
                      <Link href={`/services/${s.slug}`}>{s.title}</Link>
                    </h3>

                    <p className="wl-hub-card-desc">{displayDesc}</p>

                    {tags.length > 0 && (
                      <div className="wl-hub-card-tags">
                        {tags.map((t) => (
                          <span className="wl-hub-tag" key={t}>
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="wl-hub-card-footer">
                      <Link href={`/services/${s.slug}`} className="wl-hub-link">
                        <span>Explore {s.title}</span>
                        <div className="wl-hub-arrow">
                          <i className="fa-solid fa-arrow-right" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= WHY PARTNER WITH WEBLEORA ================= */}
      <section className="wl-svc-outcomes-section" style={{ background: '#081423' }}>
        <div className="container">
          <div className="row section-row text-center">
            <div className="col-lg-12">
              <Title sub="the webleora standard" dark>
                Why Partner with Webleora?
              </Title>
              <p className="wl-svc-section-lead" style={{ color: '#94a3b8', maxWidth: 780, margin: '10px auto 0' }}>
                Engineering rigor, direct technical accountability, and 100% intellectual property ownership with zero vendor lock-in.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {why.map(([title, desc], i) => (
              <div className="col-lg-4 col-md-6" key={title}>
                <div className="wl-svc-metric-card" style={{ height: '100%' }}>
                  <div className="wl-svc-metric-icon">
                    <i
                      className={
                        i === 0
                          ? 'fa-solid fa-cubes'
                          : i === 1
                          ? 'fa-solid fa-file-invoice-dollar'
                          : i === 2
                          ? 'fa-solid fa-user-astronaut'
                          : i === 3
                          ? 'fa-solid fa-key'
                          : 'fa-solid fa-location-dot'
                      }
                    />
                  </div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 5-STAGE DELIVERY PROCESS ================= */}
      <section className="wl-svc-process-section" style={{ background: '#fbf9f4' }}>
        <div className="container">
          <div className="row section-row text-center">
            <div className="col-lg-12">
              <Title sub="delivery roadmap">Our 5-Stage Delivery Process</Title>
              <p className="wl-svc-section-lead" style={{ maxWidth: 760, margin: '10px auto 0' }}>
                Every engagement follows a structured milestone roadmap with written sprint deliverables and weekly staging demonstrations.
              </p>
            </div>
          </div>

          <div className="wl-steps">
            {steps.map(([t, d]) => {
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

      {/* ================= NEED SOMETHING SPECIFIC CTA ================= */}
      <Cta
        title="Need Something Specific?"
        text="Not sure which service fits your requirements, or have a unique technical challenge? Schedule a free consultation with our senior engineers and we’ll outline the right roadmap."
        btn="Discuss Your Project"
      />

      {/* ================= FAQS ACCORDION ================= */}
      <div className="our-faqs" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="row section-row text-center">
            <div className="col-lg-12">
              <Title sub="faq">Frequently Asked Questions</Title>
              <p className="wl-svc-section-lead" style={{ maxWidth: 700, margin: '10px auto 0' }}>
                Transparent answers about our engineering methodology, pricing models, and development timelines.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <Accordion items={faqs} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
