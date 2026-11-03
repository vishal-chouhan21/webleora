import Link from "next/link";
import site from "@/config/site";
import doc from "@/data/doc.json";
import { services, projects, faqs, steps, why } from "@/data/content";
import { Title, Cta } from "@/components/ui";
import { ServiceCards, ProjectList } from "@/components/HoverCards";
import Accordion from "@/components/Accordion";

export const metadata = {
  title: { absolute: "Webleora | Website Development & Digital Solutions" },
};

const heroWords = ["Technology", "People", "Ideas", "Growth"];

const quickServices = [
  [
    "fa-code",
    "Web Development",
    "Custom, scalable and high-performing websites.",
    "/services/website-design-development",
  ],
  [
    "fa-mobile-screen",
    "Mobile App Development",
    "Powerful mobile solutions for your business.",
    "/services",
  ],
  [
    "fa-gear",
    "Software Solutions",
    "Tailored software to simplify operations.",
    "/services/custom-software-development",
  ],
  [
    "fa-chart-simple",
    "Digital Marketing",
    "Grow your brand with result-driven strategies.",
    "/services",
  ],
  [
    "fa-cloud",
    "IT Consulting",
    "Expert guidance for your digital transformation.",
    "/services",
  ],
];

const aboutPoints = [
  ["fa-user-group", "Client-Centric Approach", "Your goals, our priority."],
  ["fa-lightbulb", "Innovative Solutions", "Fresh ideas, real results."],
  ["fa-headset", "Reliable Support", "Always here for you."],
  ["fa-chart-simple", "Long-Term Growth", "Building success together."],
];

export default function Home() {
  const cards = services.map((s, i) => ({ ...s, text: doc.overview[i][1] }));

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="wl-home-hero">
        <div className="container">
          <div className="wl-home-hero-inner">
            <div className="wl-home-hero-copy">
              <span className="wl-kicker">
                IT Solutions for a Brighter Tomorrow
              </span>

              <h1>
                Ideas Today,
                <br />
                <em>Digital Growth</em> Tomorrow
              </h1>

              <p>
                We build innovative web, software and digital solutions that
                help businesses grow, adapt and stay ahead in a digital world.
              </p>

              <div className="wl-home-btns">
                <Link href="/services" className="wl-h-btn wl-h-btn-gold">
                  Our Services
                  <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </Link>
                <Link href="/contact" className="wl-h-btn wl-h-btn-line">
                  Let&apos;s Talk
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right side artwork */}
        <div className="wl-home-hero-art" aria-hidden="true">
          <div className="wl-home-hero-photo">
            {/* Replace with your office / business photo */}
            <img src="/images/hero-image55.jpg" alt="" />
          </div>
          <ul className="wl-home-hero-words">
            {heroWords.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
          <Link
            href="#services"
            className="wl-home-scroll"
            aria-label="Scroll down"
          >
            <span>Scroll</span>
            <i className="fa-solid fa-arrow-down" />
          </Link>
        </div>
      </section>

      {/* ================= QUICK SERVICES ================= */}
      <section className="wl-svc" id="services">
        <div className="container">
          <div className="wl-svc-grid">
            <div className="wl-svc-label">
              <h2>
                <span />
                Our
                <br />
                Services
              </h2>
              <Link href="/services" aria-label="All services">
                <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>

            <div className="wl-svc-cards">
              {quickServices.map(([icon, title, text, href]) => (
                <Link href={href} className="wl-svc-card" key={title}>
                  <div className="wl-svc-top">
                    <span className="wl-svc-icon">
                      <i className={`fa-solid ${icon}`} />
                    </span>
                    <span className="wl-svc-go">
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="wl-about">
        <div className="container">
          <div className="wl-about-grid">
            <div className="wl-about-copy">
              <span className="wl-kicker wl-kicker-sm">About Webleora</span>
              <h2>
                A Trusted Partner <em>in Your Digital Journey</em>
              </h2>
              <p>
                Webleora International is a results-driven IT solutions company
                focused on delivering innovative, reliable and scalable digital
                solutions. We combine technology, creativity and strategy to
                help businesses build stronger digital presence and achieve
                long-term growth.
              </p>
              <Link href="/about" className="wl-h-btn wl-h-btn-gold">
                Know More
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>

            <ul className="wl-about-points">
              {aboutPoints.map(([icon, t, d]) => (
                <li key={t}>
                  <span className="wl-about-icon">
                    <i className={`fa-solid ${icon}`} />
                  </span>
                  <div>
                    <b>{t}</b>
                    <small>{d}</small>
                  </div>
                </li>
              ))}
            </ul>

            <div className="wl-about-photo" aria-hidden="true">
              <img src="/images/about-image-1.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= REST OF PAGE (unchanged) ================= */}
      <div className="our-services">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title dark-section">
                <h3>Our Services</h3>

                <h2>
                  Digital services <span>for every stage of your business</span>
                </h2>
              </div>
            </div>
          </div>
          <ServiceCards items={cards} />
          <div className="text-center mt-4">
            <Link href="/services" className="btn-default">
              View all services
            </Link>
          </div>
        </div>
      </div>
      <div className="page-section">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <Title sub="our process">How we work</Title>
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
      <div className="why-choose-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="why-choose-image">
                <figure className="image-anime">
                  <img src="/images/why-choose-image.jpg" alt="" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="why-choose-content">
                <Title sub="why webleora" dark>
                  Why work with Webleora?
                </Title>
                <div className="why-choose-list">
                  {why.map(([t, d], i) => (
                    <div className="why-choose-item" key={t}>
                      <div className="icon-box">
                        <img
                          src={`/images/icon-why-choose-${(i % 3) + 1}.svg`}
                          alt=""
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

      <div className="our-projects">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <Title sub="our work">Selected Work</Title>
              <p>
                Explore examples of digital experiences and business tools we
                have worked on. These are concept projects that show our
                approach.
              </p>
            </div>
          </div>
          <div className="our-projeect-box">
            <ProjectList items={projects} />
          </div>
          <div className="text-center mt-4">
            <Link href="/our-work" className="btn-default">
              View all work
            </Link>
          </div>
        </div>
      </div>
      <div className="our-faqs home-our-faqs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-content">
                <div className="section-title dark-section">
                  <h3>faq</h3>
                  <h2>
                    Questions <span>answered clearly</span>
                  </h2>
                </div>

                <div className="faq-image">
                  <figure className="image-anime">
                    <img src="/images/faq-image.jpg" alt="" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <Accordion items={faqs} />
            </div>
          </div>
        </div>
      </div>
      <Cta text="Tell us what you are planning, what you need to solve and what success would look like. We’ll review the details and discuss a practical next step." />
    </>
  );
}
