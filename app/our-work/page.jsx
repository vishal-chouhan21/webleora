import Link from 'next/link';
import { PageHeader, Title, Cta } from '@/components/ui';
import { projects } from '@/data/content';
export const metadata = { title: 'Our Work' };
export default function Work() {
  return (<>
    <PageHeader title="Our Work" />
    <div className="page-projects page-section"><div className="container">
      <Title sub="selected work">Examples of digital experiences and business tools</Title>
      <p>The projects below are clearly labelled concept projects that show how we approach common business needs.</p>
      <div className="row">{projects.map((p) => (
        <div className="col-lg-6 col-md-6 mb-4" key={p.slug}><div className="project-item" style={{ height: '100%' }}>
          <div className="project-image"><Link href={`/our-work/${p.slug}`}><figure className="image-anime"><img src={`/images/${p.img}`} alt={p.title} /></figure></Link></div>
          <div className="project-content"><p><Link href={`/our-work/${p.slug}`}>{p.cat} · Concept project</Link></p><h3><Link href={`/our-work/${p.slug}`}>{p.title}</Link></h3></div></div></div>))}</div>
    </div></div>
    <Cta />
  </>);
}
