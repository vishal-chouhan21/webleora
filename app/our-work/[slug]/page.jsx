import { notFound } from 'next/navigation';
import { PageHeader, Cta } from '@/components/ui';
import { projects } from '@/data/content';
export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));
export const generateMetadata = async ({ params }) => { const { slug } = await params; return { title: projects.find((p) => p.slug === slug)?.title || 'Project' }; };
export default async function Project({ params }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  return (<>
    <PageHeader title={p.title} crumbs={[['our work', '/our-work']]} />
    <div className="page-section"><div className="container"><div className="row">
      <div className="col-lg-8"><figure className="image-anime"><img src={`/images/${p.img}`} alt={p.title} style={{ width: '100%', borderRadius: 20 }} /></figure>
        <div className="wl-plain"><span className="wl-badge">Concept project</span>
          <h2>The challenge</h2><p>{p.challenge}</p><h2>The solution</h2><p>{p.solution}</p>
          <h2>Scope</h2><ul className="wl-bullets">{p.scope.map((x) => <li key={x}>{x}</li>)}</ul>
          <h2>Outcome</h2><p>This is a concept project that describes the intended scope. No live client results are claimed.</p></div></div>
      <div className="col-lg-4"><div className="wl-side"><a>Industry: {p.industry}</a><a>Project type: {p.type}</a></div></div>
    </div></div></div>
    <Cta title="Have a similar project?" text="Discuss your requirements with Webleora." />
  </>);
}
