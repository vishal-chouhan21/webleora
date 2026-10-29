import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHeader, Title, Cta } from '@/components/ui';
import Accordion from '@/components/Accordion';
import { services, faqs, steps } from '@/data/content';
export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));
export const generateMetadata = async ({ params }) => { const { slug } = await params; const s = services.find((x) => x.slug === slug); return { title: s ? `${s.title} for Your Business` : 'Service' }; };
export default async function Service({ params }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  return (<>
    <PageHeader title={s.title} crumbs={[['services', '/services']]} />
    <div className="page-section"><div className="container"><div className="row">
      <div className="col-lg-4"><div className="wl-side">{services.map((x) => <Link key={x.slug} href={`/services/${x.slug}`} className={x.slug === s.slug ? 'on' : ''}>{x.title}</Link>)}</div></div>
      <div className="col-lg-8 wl-plain">
        <h2 style={{ marginTop: 0 }}>{s.title} for Your Business</h2>
        <p>Need {s.need}? Webleora helps you plan and build a solution shaped around your requirements, users and workflow.</p>
        <h2>Who it helps</h2><p>{s.who}</p>
        <h2>What we can help with</h2>
        <ul className="wl-cap">{s.items.map(([n, d]) => <li key={n}><strong>{n}</strong>{d}</li>)}</ul>
        <h2>Our approach</h2>
        <p>We begin by understanding your requirements, then define the scope, agree on priorities, design the experience, develop the solution and test the agreed functionality.</p>
        <ol className="wl-bullets">{steps.map(([t, d]) => <li key={t}><strong>{t.split(' — ')[1]}:</strong> {d}</li>)}</ol>
        <h2>What affects cost and timing</h2>
        <ul className="wl-bullets">{s.affects.map((a) => <li key={a}>{a}</li>)}</ul>
        <p><Link href="/contact" className="btn-default btn-highlighted">Discuss Your {s.title} Project</Link></p>
      </div></div></div></div>
    <div className="our-faqs"><div className="container"><Title sub="faq">Common questions</Title><Accordion items={faqs} /></div></div>
    <Cta />
  </>);
}
