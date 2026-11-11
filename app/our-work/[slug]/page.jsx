import { notFound } from 'next/navigation';
import { PageHeader, Cta } from '@/components/ui';
import { projects } from '@/data/content';
export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));
export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return { title: 'Project Not Found' };
  return {
    title: `Sample Project: ${p.title} | Webleora`,
    description: `${p.title}: ${p.challenge} ${p.solution}`,
    alternates: {
      canonical: './',
    },
    openGraph: {
      title: `Sample Project: ${p.title} | Webleora`,
      description: `${p.challenge} ${p.solution}`,
      url: './',
      type: 'article',
      images: [
        {
          url: `/images/${p.img}`,
          width: 1200,
          height: 630,
          alt: `Sample Project: ${p.title}`,
        },
      ],
    },
  };
};
export default async function Project({ params }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <>
      <PageHeader title={`Sample Project: ${p.title}`} crumbs={[['our work', '/our-work']]} />
      <div className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <figure className="image-anime">
                <img
                  src={`/images/${p.img}`}
                  alt={`Sample Project: ${p.title}`}
                  style={{ width: '100%', borderRadius: 20 }}
                />
              </figure>
              <div className="wl-plain">
                <span className="wl-badge">{p.cat}</span>
                <h2>Concept Overview &amp; Use Case</h2>
                <p>{p.challenge}</p>
                <h2>Technical Architecture</h2>
                <p>{p.solution}</p>
                {p.techStack && (
                  <>
                    <h2>Technologies &amp; Architecture</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                      {p.techStack.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            display: 'inline-block',
                            background: '#0b2239',
                            color: '#d8ac66',
                            padding: '6px 14px',
                            borderRadius: '20px',
                            fontSize: '13.5px',
                            fontWeight: '600',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </>
                )}
                <h2>Project Scope &amp; Deliverables</h2>
                <ul className="wl-bullets">
                  {p.scope.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <h2>Key Technical Capabilities</h2>
                <p style={{ background: '#f8fafc', borderLeft: '4px solid #d8ac66', padding: '16px 20px', borderRadius: '6px', fontWeight: '500' }}>
                  {p.outcome}
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="wl-side">
                <a><strong>Industry:</strong> {p.industry}</a>
                <a><strong>Project Type:</strong> {p.type}</a>
                <a><strong>Location:</strong> India &amp; Global Delivery</a>
                <div style={{ marginTop: '24px', padding: '20px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
                  <h4 style={{ fontSize: '17px', color: '#0b2239', marginBottom: '8px', fontWeight: '700' }}>Need a Similar Solution?</h4>
                  <p style={{ fontSize: '13.5px', color: '#64748b', marginBottom: '16px' }}>Let’s discuss your requirements and provide a free technical estimate.</p>
                  <a href="/contact" className="btn-default" style={{ display: 'block', textAlign: 'center', padding: '10px 16px', fontSize: '14px' }}>
                    Request Proposal
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cta title="Have a similar project?" text="Discuss your requirements with Webleora." />
    </>
  );
}
