import Link from 'next/link';
import { PageHeader, Title, Cta } from '@/components/ui';
import { projects } from '@/data/content';

export const metadata = {
  title: 'Our Work | Featured Projects & Client Case Studies | Webleora',
  description:
    'Explore featured projects showing how Webleora builds high-impact websites, web applications, portals, and custom software systems.',
  alternates: {
    canonical: '/our-work',
  },
  openGraph: {
    title: 'Our Work | Featured Projects & Case Studies | Webleora',
    description:
      'Explore featured projects showing how Webleora builds high-impact websites, web applications, and custom software.',
    url: '/our-work',
    type: 'website',
  },
};

export default function Work() {
  return (
    <>
      <PageHeader title="Our Work" />
      <div className="page-projects page-section">
        <div className="container">
          <Title sub="selected work">Featured Projects &amp; Digital Solutions</Title>
          <p className="wl-projects-intro" style={{ maxWidth: 700, margin: '14px auto 40px', textAlign: 'center' }}>
            Explore examples of high-performing websites, portals, and custom software engineered for our clients.
          </p>
          <div className="row">
            {projects.map((p) => (
              <div className="col-lg-3 col-md-6 mb-4" key={p.slug}>
                <div className="project-item" style={{ height: '100%' }}>
                  <div className="project-image">
                    <Link href={`/our-work/${p.slug}`}>
                      <figure className="image-anime">
                        <img src={`/images/${p.img}`} alt={p.title} />
                      </figure>
                    </Link>
                  </div>
                  <div className="project-content">
                    <p>
                      <Link href={`/our-work/${p.slug}`}>{p.cat}</Link>
                    </p>
                    <h3>
                      <Link href={`/our-work/${p.slug}`}>{p.title}</Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Cta />
    </>
  );
}
