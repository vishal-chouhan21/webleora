import Link from 'next/link';
import { PageHeader, Title, Cta } from '@/components/ui';
import { why } from '@/data/content';

export const metadata = {
  title: 'About Webleora | Website, Web App & Digital Solutions Company',
  description:
    'Webleora builds fast, user-friendly websites, web apps and digital solutions that help businesses grow online. Clear communication, careful development, reliable delivery.',
};

export default function About() {
  return (
    <>
      <PageHeader title="About Us" />
      <div className="about-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-us-image">
                <div className="about-image-box about-img-1">
                  <figure className="image-anime">
                    <img
                      src="/images/about-image-1.jpg"
                      alt="Webleora team planning a website project"
                    />
                  </figure>
                </div>
                <div className="about-image-box">
                  <div className="about-img-2">
                    <figure className="image-anime">
                      <img
                        src="/images/about-image-2.jpg"
                        alt="Web design and development work in progress"
                      />
                    </figure>
                  </div>
                  <div className="about-img-3">
                    <figure className="image-anime">
                      <img
                        src="/images/about-image-3.jpg"
                        alt="Client discussion about digital solutions"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-us-content">
                <Title sub="about webleora">
                  Technology Should Make <span>Business Simpler.</span>
                </Title>
                <p>
                  Webleora is a digital solutions company that helps businesses build a strong online presence and run
                  smarter. From business websites and web applications to custom software and digital tools, we turn your
                  ideas into products that look great and work reliably.
                </p>
                <p>
                  We start by understanding your business, your customers and your goals. Then we recommend the right
                  solution, agree on a clear scope and keep you updated at every step, from planning and design to
                  development, testing and launch. No confusing jargon, no surprises, just practical results that help your
                  business grow.
                </p>
                <div className="about-us-footer">
                  <div className="about-footer-list">
                    <ul>
                      <li>Understand your business goals</li>
                      <li>Agree on a clear scope</li>
                      <li>Transparent communication</li>
                      <li>Careful design &amp; development</li>
                      <li>Thorough testing before launch</li>
                    </ul>
                  </div>
                  <div className="about-footer-btn">
                    <Link href="/contact" className="btn-default">
                      Start Your Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mission-vision-item">
                <h3>Our Mission</h3>
                <p>
                  To make technology simple and useful for every business. We design and build websites and digital
                  solutions that attract the right customers, improve day-to-day operations and deliver measurable value,
                  with honest advice and clear communication throughout.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mission-vision-item">
                <h3>Our Vision</h3>
                <p>
                  To become a trusted digital partner for growing businesses, known for quality work, dependable delivery
                  and long-term relationships. We want every client to feel confident that their digital presence is built
                  to last and ready to scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="why-choose-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Title sub="what to expect" dark>
                Why Businesses Choose Webleora
              </Title>
              <div className="why-choose-list">
                {why.map(([t, d], i) => (
                  <div className="why-choose-item" key={t}>
                    <div className="icon-box">
                      <img src={`/images/icon-why-choose-${(i % 3) + 1}.svg`} alt="" />
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

      <Cta />
    </>
  );
}