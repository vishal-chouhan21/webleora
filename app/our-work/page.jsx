import Link from 'next/link';
import { PageHeader, Title, Cta } from '@/components/ui';
import { projects } from '@/data/content';

export const metadata = {
  title: {
    absolute: 'Our Work | Sample Projects & Architecture Concepts | Webleora',
  },
  description:
    'Explore sample projects showing how Webleora builds high-impact websites, web applications, portals, and custom software systems.',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Our Work | Sample Projects & Architecture Concepts | Webleora',
    description:
      'Explore sample projects showing how Webleora builds high-impact websites, web applications, and custom software.',
    url: './',
    type: 'website',
  },
};

export default function Work() {
  return (
    <>
      <PageHeader title="Our Work" />
      <div className="page-projects page-section">
        <div className="container">
          <Title sub="sample work">Sample Projects &amp; Architecture Concepts</Title>
          <p className="wl-projects-intro" style={{ maxWidth: 740, margin: '14px auto 40px', textAlign: 'center' }}>
            Explore sample web platforms, portals, and software architectures built by our engineering team to demonstrate our approach to modern web applications, scalable design, and high-performance websites.
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
