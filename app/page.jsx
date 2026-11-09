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
    "Webleora is a top web development and custom software engineering firm based in Indore, India. We build high-speed websites, web apps, and enterprise software for businesses worldwide.",
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
  "Sub-1.5s Core Web Vitals Guarantee",
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
];

const aboutPoints = [
  ["fa-code-branch", "Modern Full-Stack", "Built with Next.js, React, Node.js, Python, and PostgreSQL."],
  ["fa-handshake", "Milestone Pricing", "Guaranteed fixed scope and delivery timelines with zero surprises."],
  ["fa-user-check", "Direct Senior Access", "Communicate directly with senior engineers and architects."],
  ["fa-shield-halved", "100% IP Ownership", "Complete source code, design files, and repository ownership."],
];

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Managing Director",
    company: "Apex Industrial Logistics",
    rating: 5,
    quote:
      "Webleora transformed our entire client booking and tracking operations. The custom web portal they built replaced hundreds of manual email threads and cut our dispatch delays by more than 40%. Direct communication with their engineers in Indore was effortless.",
  },
  {
    name: "Ananya Patel",
    role: "Founder & CMO",
    company: "Sanskriti Retail DTC",
    rating: 5,
    quote:
      "Our previous store took nearly 5 seconds to load and was losing mobile shoppers. Webleora rebuilt our storefront on Next.js—our page load dropped to 1.2s and our mobile checkout conversion increased by 34% within the first month.",
  },
  {
    name: "Vikram Malhotra",
    role: "Chief Operating Officer",
    company: "Credence Advisory Partners",
    rating: 5,
    quote:
      "Finding a development partner that delivers clean code, respects milestone deadlines, and gives 100% source code ownership is rare. Webleora delivered our custom CRM ahead of schedule. Highly recommended for any serious business.",
  },
];

const techPills = [
  "Next.js",
  "React",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "TypeScript",
  "AWS",
  "Docker",
  "Tailwind CSS",
  "REST APIs",
  "GraphQL",
];

export default function Home() {
  const cards = services.map((s) => ({
    ...s,
    text: s.need,
  }));

  const homeFaqs = faqs.slice(0, 4);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="wl-dark-hero">
        <div className="wl-hero-globe-wrap" aria-hidden="true">
          <svg viewBox="0 0 500 500" width="100%" height="100%">
            <defs>
              <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#2980b9" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#081423" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="250" cy="250" r="230" fill="url(#globeGlow)" stroke="rgba(64,158,255,0.22)" strokeWidth="1.5" />
            <circle cx="250" cy="250" r="170" fill="none" stroke="rgba(64,158,255,0.13)" strokeWidth="1" />
            <circle cx="250" cy="250" r="110" fill="none" stroke="rgba(64,158,255,0.1)" strokeWidth="1" />
            <ellipse cx="250" cy="250" rx="230" ry="110" fill="none" stroke="rgba(64,158,255,0.15)" strokeWidth="1" />
            <ellipse cx="250" cy="250" rx="110" ry="230" fill="none" stroke="rgba(64,158,255,0.15)" strokeWidth="1" />
            <line x1="20" y1="250" x2="480" y2="250" stroke="rgba(64,158,255,0.18)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="250" y1="20" x2="250" y2="480" stroke="rgba(64,158,255,0.18)" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>

        <div className="container">
          <div className="wl-dark-hero-inner">
            <div className="wl-dark-hero-copy">
              <span className="wl-kicker-gold">
                Top Web Development &amp; Software Company in Indore
              </span>

              <h1>
                Websites &amp; Software
                <br />
                <em>Engineered to Drive Revenue</em>
              </h1>

              <p>
                Based in Indore, Madhya Pradesh, Webleora builds high-speed websites, scalable web applications, and custom business software. We help growing companies convert visitors, automate operations, and scale digitally.
              </p>

              <div className="wl-dark-hero-btns">
                <Link href="/contact" className="wl-btn-gold">
                  Book Free 15-Min Discovery Call
                  <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </Link>
                <Link href="/services" className="wl-btn-line-white">
                  Explore Services
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

        {/* Right side artwork */}
        <div className="wl-dark-hero-art" aria-hidden="true">
          <div className="wl-dark-hero-photo">
            <img
              src="/images/hero-team-it.jpg"
              alt="Webleora engineering team collaborating on custom software development in Indore"
            />
          </div>
        </div>
      </section>

      {/* ================= SOCIAL PROOF & GOOGLE REVIEW BANNER ================= */}
      <section style={{ background: '#05101d', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '16px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: '#f59e0b', fontSize: '17px', letterSpacing: '2px' }}>★★★★★</span>
              <span style={{ color: '#ffffff', fontWeight: '700', fontSize: '14px' }}>
                5.0 Rating on Google Reviews
              </span>
              <span style={{ color: '#94a3b8', fontSize: '13px' }}>
                · Top Web Development Agency in Indore
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{ color: '#94a3b8', fontSize: '13px', fontWeight: '600' }}>Tech Stack:</span>
              {techPills.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  style={{
                    color: '#cbd5e1',
                    background: 'rgba(255,255,255,0.06)',
                    padding: '3px 10px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  {tech}
                </span>
              ))}
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
                  Meet Our Team &amp; Process
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

      {/* ================= CLIENT TESTIMONIALS & REVIEWS ================= */}
      <section style={{ padding: '88px 0', background: '#081423', color: '#ffffff' }}>
        <div className="container">
          <div className="row section-row text-center" style={{ marginBottom: '48px' }}>
            <div className="col-lg-12">
              <span style={{ color: '#d8ac66', fontSize: '13px', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                Verified Client Reviews
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 3.2vw, 40px)', fontWeight: '800', color: '#ffffff', marginTop: '8px' }}>
                Trusted by Founders &amp; Business Leaders
              </h2>
              <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '12px auto 0', fontSize: '15.5px' }}>
                Read how our engineering team delivers measurable ROI, streamlined workflows, and reliable support.
              </p>
            </div>
          </div>

          <div className="row">
            {testimonials.map((item) => (
              <div className="col-lg-4 col-md-6 mb-4" key={item.name}>
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: '34px 28px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                  }}
                >
                  <div style={{ color: '#f59e0b', fontSize: '16px', letterSpacing: '2px', marginBottom: '14px' }}>
                    {'★'.repeat(item.rating)}
                  </div>
                  <p style={{ color: '#e2e8f0', fontSize: '14.5px', lineHeight: '1.65', flexGrow: 1, marginBottom: '20px', fontStyle: 'italic' }}>
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
                    <strong style={{ color: '#ffffff', fontSize: '15px', display: 'block' }}>{item.name}</strong>
                    <span style={{ color: '#d8ac66', fontSize: '13px', fontWeight: '600', display: 'block' }}>{item.role}</span>
                    <span style={{ color: '#94a3b8', fontSize: '12.5px' }}>{item.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '28px' }}>
            <Link href="/contact" className="wl-btn-gold">
              Start Your Project with Webleora
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

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

      {/* ================= SELECTED WORK (CASE STUDIES) ================= */}
      <div className="our-projects">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <Title sub="proven results">Selected Case Studies &amp; Outcomes</Title>
              <p className="wl-projects-intro">
                Explore real-world software platforms, client portals, and websites engineered by Webleora to deliver measurable ROI and operational efficiency.
              </p>
            </div>
          </div>
          <div className="our-projeect-box">
            <ProjectList items={projects} />
          </div>
          <div className="text-center mt-4">
            <Link href="/our-work" className="btn-default">
              View All Case Studies &amp; Tech Specs
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
                <Link href="/faqs" className="btn-default btn-highlighted" style={{ padding: '12px 24px', fontSize: '14px' }}>
                  View All FAQs &amp; Pricing Ranges →
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
