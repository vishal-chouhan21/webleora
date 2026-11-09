import Link from 'next/link';
import { PageHeader, Title, Cta } from '@/components/ui';
import { why } from '@/data/content';

export const metadata = {
  title: 'About Us | Webleora',
  description:
    'Discover Webleora—a results-driven IT solutions and web development company based in Indore, delivering modern digital experiences, custom web apps, and enterprise software.',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'About Us | Webleora',
    description:
      'Discover Webleora—a results-driven IT solutions and web development company based in Indore, delivering modern digital experiences, custom web apps, and enterprise software.',
    url: './',
    type: 'website',
  },
};

const teamMembers = [
  {
    name: 'Vishal Singh Chouhan',
    role: 'Founder & Principal Architect',
    bio: 'Full-stack software architect specializing in Next.js, Node.js, and high-scale cloud platforms.',
    img: 'team-1.jpg',
  },
  {
    name: 'Priya Sharma',
    role: 'Lead UI/UX & Design Systems',
    bio: 'Digital product designer creating conversion-focused user interfaces and design systems.',
    img: 'team-2.jpg',
  },
  {
    name: 'Aman Verma',
    role: 'Senior Full-Stack Engineer',
    bio: 'Backend & database specialist focusing on PostgreSQL, Python, and microservice APIs.',
    img: 'team-3.jpg',
  },
  {
    name: 'Neha Joshi',
    role: 'QA & Technical SEO Lead',
    bio: 'Quality assurance and Core Web Vitals optimization specialist ensuring zero-defect launches.',
    img: 'team-4.jpg',
  },
];

const guides = [
  ['Clarity', 'We aim to explain requirements, decisions and next steps in straightforward language.'],
  ['Practicality', 'We focus on the features and improvements that serve the project’s real purpose.'],
  ['Careful Planning', 'We agree on scope and deliverables before development begins.'],
  ['Responsible Delivery', 'We discuss handover, access and support as part of the project agreement.'],
];

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
              <Title sub="our approach" dark>
                What Guides Our Work
              </Title>
              <div className="why-choose-list">
                {guides.map(([t, d], i) => (
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

      <div className="page-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="mission-vision-item" style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
                <h3>A Collaborative Process</h3>
                <p>
                  We work with clients to understand their requirements, review options and make decisions together.
                  Depending on the service and project needs, specialist partners may be involved. The delivery approach and
                  responsibilities are discussed before work begins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MEET OUR TEAM ================= */}
      <div className="page-section" style={{ background: '#f8fafc', padding: '80px 0' }}>
        <div className="container">
          <div className="row text-center" style={{ marginBottom: '44px' }}>
            <div className="col-lg-12">
              <span className="wl-badge">Our People</span>
              <h2 style={{ fontSize: 'clamp(28px, 3.2vw, 38px)', fontWeight: '800', color: '#0b2239', marginTop: '10px' }}>
                Meet Our Leadership &amp; Engineering Team
              </h2>
              <p style={{ color: '#64748b', maxWidth: '640px', margin: '12px auto 0', fontSize: '15.5px' }}>
                Engineers, architects, and designers based in Indore dedicated to building fast, scalable, and reliable software.
              </p>
            </div>
          </div>

          <div className="row">
            {teamMembers.map((member) => (
              <div className="col-lg-3 col-md-6 mb-4" key={member.name}>
                <div
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    height: '100%',
                    boxShadow: '0 4px 16px rgba(11, 34, 57, 0.04)',
                    transition: 'transform 0.25s ease',
                  }}
                >
                  <img
                    src={`/images/${member.img}`}
                    alt={`${member.name} - ${member.role} at Webleora`}
                    style={{ width: '100%', height: '240px', objectFit: 'cover' }}
                  />
                  <div style={{ padding: '22px 20px' }}>
                    <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#0b2239', margin: '0 0 4px' }}>
                      {member.name}
                    </h3>
                    <span style={{ fontSize: '13px', fontWeight: '600', color: '#c58f3f', display: 'block', marginBottom: '10px' }}>
                      {member.role}
                    </span>
                    <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Cta
        title="Let’s talk about what you need"
        text="Share your idea or current challenge, and we’ll discuss a practical way forward."
        btn="Contact Webleora"
      />
    </>
  );
}