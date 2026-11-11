import Link from "next/link";
import site from "@/config/site";
import { services, projects, faqs, steps, why } from "@/data/content";
import { Title, Cta } from "@/components/ui";
import { ServiceCards, ProjectList } from "@/components/HoverCards";
import Accordion from "@/components/Accordion";
import WebsiteInvestmentSection from "@/components/WebsiteInvestmentSection";

export const metadata = {
  title: {
    absolute: "Webleora | Custom Websites, Web Apps & Business Software in Indore",
  },
  description:
    "Webleora is a web development and custom software engineering firm based in Indore, India. We build high-speed websites, web apps, and enterprise software for businesses worldwide.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Webleora | Custom Websites, Web Apps & Business Software",
    description:
      "Webleora designs and develops high-performance websites, web applications, and custom business software tailored to your goals.",
    url: "./",
    type: "website",
  },
};

const trustPoints = [
  "Indore, MP Office · Global Delivery",
  "Milestone-Based Fixed Pricing",
  "100% Full Source Code Ownership",
  "Optimized for Sub-1.5s Core Web Vitals",
];

const quickServices = [
  [
    "fa-code",
    "Web Development",
    "Custom, high-speed, SEO-ready business websites.",
    "/services/website-design-development",
  ],
  [
    "fa-laptop-code",
    "Web Applications",
    "Scalable SaaS, portals and customer dashboards.",
    "/services/web-applications",
  ],
  [
    "fa-gear",
    "Custom Software",
    "Tailored systems to automate business workflows.",
    "/services/custom-software-development",
  ],
  [
    "fa-mobile-screen",
    "Mobile Apps",
    "High-performance iOS & Android apps (Flutter/React Native).",
    "/services/mobile-app-development",
  ],
  [
    "fa-chart-line",
    "SEO & Marketing",
    "Local Indore SEO and organic Google ranking campaigns.",
    "/services/digital-marketing-seo",
  ],
  [
    "fa-cloud",
    "IT Consulting",
    "Cloud infrastructure, AWS/Vercel architecture & technical advisory.",
    "/services/it-consulting-cloud",
  ],
];

const aboutPoints = [
  ["fa-code-branch", "Modern Full-Stack", "Built with Next.js, React, Node.js, Python, and PostgreSQL."],
  ["fa-handshake", "Milestone Pricing", "Clear milestone scope and delivery timelines with zero surprises."],
  ["fa-user-check", "Direct Senior Access", "Communicate directly with senior engineers and architects."],
  ["fa-shield-halved", "100% IP Ownership", "Complete source code, design files, and repository ownership."],
];

export default function Home() {
  const cards = services.map((s) => ({
    ...s,
    text: s.need,
  }));

  const homeFaqs = faqs.slice(0, 4);

  return (
    <>
      {/* ================= HERO (BACKGROUND IMAGE & SLEEK GRADIENT OVERLAY) ================= */}
      <section className="wl-dark-hero">
        <div className="container">
          <div className="wl-dark-hero-inner">
            <div className="wl-dark-hero-copy">
              <span className="wl-kicker-gold">
                Custom Web Development &amp; Software in Indore
              </span>

              <h1>
                Websites &amp; Software
                <br />
                <em>Engineered to Drive Revenue</em>
              </h1>

              <p>
                Based in Indore, Madhya Pradesh, Webleora builds high-speed websites, scalable web applications, and custom business software that help growing companies convert visitors and streamline operations.
              </p>

              <div className="wl-hero-ai-badge">
                <i className="fa-solid fa-microchip" aria-hidden="true" />
                <span>Modern Full-Stack Engineering &amp; AI-Enabled Workflows</span>
              </div>

              <div className="wl-dark-hero-btns">
                <Link href="/contact" className="wl-btn-gold">
                  Get a Free Quote
                  <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </Link>
                <Link href="/our-work" className="wl-btn-line-white">
                  View Our Portfolio
                </Link>
              </div>

              {/* Trust Points */}
              <div style={{ marginTop: '28px', display: 'flex', flexWrap: 'wrap', gap: '16px 24px' }}>
                {trustPoints.map((tp) => (
                  <span
                    key={tp}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#cbd5e1',
                      fontSize: '13.5px',
                      fontWeight: '500',
                    }}
                  >
                    <i className="fa-solid fa-check" style={{ color: '#d8ac66', fontSize: '12px' }} aria-hidden="true" />
                    {tp}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUICK SERVICES STRIP ================= */}
      <section className="wl-strip-section" id="services">
        <div className="container">
          <div className="wl-strip-grid">
            {quickServices.map(([icon, title, text, href]) => (
              <Link href={href} className="wl-strip-card" key={title}>
                <div className="wl-strip-icon">
                  <i className={`fa-solid ${icon}`} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT WEBLEORA ================= */}
      <section className="wl-about">
        <div className="container">
          <div className="wl-about-row">
            {/* Left: Office photo */}
            <div className="wl-about-photo-wrap">
              <img
                src="/images/about-office-clear.jpg"
                alt="Webleora team office and development center in Indore"
                className="wl-about-reception-img"
              />
            </div>

            {/* Right: Content */}
            <div className="wl-about-content">
              <span className="wl-kicker-gold">About Webleora</span>
              <h2>
                Engineering Excellence
                <br />
                <em>Rooted in Indore, Serving Worldwide</em>
              </h2>
              <p>
                Webleora is an engineering-first web development and custom software firm based in Indore, Madhya Pradesh. We eliminate agency bloat and deliver clean architectures, sub-1.5s load speeds, and milestone-based transparent pricing for ambitious businesses.
              </p>

              <div className="wl-about-features">
                {aboutPoints.map(([icon, t, d]) => (
                  <div className="wl-about-feature-item" key={t}>
                    <div className="wl-about-feature-icon">
                      <i className={`fa-solid ${icon}`} />
                    </div>
                    <div className="wl-about-feature-text">
                      <h4>{t}</h4>
                      <p>{d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '24px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link href="/about" className="wl-btn-gold">
                  About Us &amp; Our Process
                  <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </Link>
                <Link href="/contact" className="wl-invest-secondary-link">
                  Get Free Project Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY YOUR WEBSITE IS YOUR MOST PROFITABLE INVESTMENT ================= */}
      <WebsiteInvestmentSection />

      {/* ================= ALL CORE SERVICES ================= */}
      <div className="our-services">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title dark-section">
                <h3>Our Core Services</h3>
                <h2>
                  Full-Lifecycle Digital Solutions <span>Tailored to Your Goals</span>
                </h2>
              </div>
            </div>
          </div>
          <ServiceCards items={cards} />
          <div className="text-center mt-4">
            <Link href="/services" className="btn-default">
              View All 9 Services &amp; Tech Details
            </Link>
          </div>
        </div>
      </div>

      {/* ================= HOW WE WORK (5-STEP PROCESS) ================= */}
      <div className="page-section">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <Title sub="our transparent process">How We Work</Title>
            </div>
          </div>
          <div className="wl-steps">
            {steps.map(([t, d]) => {
              const [n, name] = t.split(" — ");
              return (
                <div className="wl-step" key={t}>
                  <span>{n}</span>
                  <h3>{name}</h3>
                  <p>{d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= WHY CHOOSE WEBLEORA ================= */}
      <div className="why-choose-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="why-choose-image">
                <figure className="image-anime">
                  <img src="/images/why-choose-image.jpg" alt="Webleora software engineering values" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="why-choose-content">
                <Title sub="why webleora" dark>
                  Why Partner with Webleora?
                </Title>
                <div className="why-choose-list">
                  {why.map(([t, d], i) => (
                    <div className="why-choose-item" key={t}>
                      <div className="icon-box">
                        <img
                          src={`/images/icon-why-choose-${(i % 3) + 1}.svg`}
                          alt={`${t} Icon`}
                          width="32"
                          height="32"
                        />
                      </div>
                      <div className="why-choose-item-content">
                        <h3>{t}</h3>
                        <p>{d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SELECTED WORK (SAMPLE PROJECTS) ================= */}
      <div className="our-projects">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <Title sub="sample work">Sample Projects &amp; Architecture Concepts</Title>
              <p className="wl-projects-intro">
                Explore sample web platforms, portals, and software architectures built by our engineering team to demonstrate our approach to modern web applications, scalable design, and high-performance websites.
              </p>
            </div>
          </div>
          <div className="our-projeect-box">
            <ProjectList items={projects} />
          </div>
          <div className="text-center mt-4">
            <Link href="/our-work" className="btn-default">
              View All Sample Projects &amp; Architecture Specs
            </Link>
          </div>
        </div>
      </div>

      {/* ================= FAQ SECTION (SHORT CURATED 4 QUESTIONS ON HOMEPAGE) ================= */}
      <div className="our-faqs home-our-faqs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-content">
                <div className="section-title dark-section">
                  <h3>FAQ &amp; Pricing</h3>
                  <h2>
                    Transparent Answers <span>to Common Questions</span>
                  </h2>
                </div>

                <div className="faq-image">
                  <figure className="image-anime">
                    <img src="/images/faq-image.jpg" alt="Webleora pricing and delivery FAQ" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <Accordion items={homeFaqs} />
              <div style={{ marginTop: '24px' }}>
                <Link href="/faqs" className="btn-default btn-highlighted">
                  View All FAQs &amp; Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FINAL CTA ================= */}
      <Cta
        title="Ready to Build a High-Performing Website or Software?"
        text="Discuss your project directly with our senior engineers in Indore. We’ll provide a free discovery call, architectural recommendations, and a transparent fixed-price estimate."
        btn="Schedule Free Consultation"
      />
    </>
  );
}
