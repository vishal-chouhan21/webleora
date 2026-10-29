import Link from 'next/link';
import { PageHeader, Title, Cta } from '@/components/ui';
import Accordion from '@/components/Accordion';
import { cats, catIntro, faqs } from '@/data/content';
export const metadata = { title: 'Our Services', description: 'Explore Webleora’s website development, web application and custom software capabilities for business needs.' };
export default function Services() {
  return (<>
    <PageHeader title="Services" />
    <div className="page-section"><div className="container">
      <Title sub="our services">Digital Services for Every Stage of Your Business</Title>
      <p style={{ maxWidth: 820 }}>From your first business website to custom software, e-commerce, automation and ongoing digital growth, Webleora helps you explore practical solutions around your goals. Tell us what you need—even if it does not fit neatly into one category—and we’ll discuss the right next step.</p>
      <Link href="/contact" className="btn-default btn-highlighted">Discuss Your Project</Link>
      {cats.map((c) => (
        <div className="wl-cat" key={c.id}><div className="row"><div className="col-lg-4"><h3>{c.title}</h3><p>{catIntro[c.id]}</p></div>
          <div className="col-lg-8"><ul className="wl-cap">{c.items.map(([n, d]) => <li key={n}><strong>{n}</strong>{d}</li>)}</ul></div></div></div>))}
    </div></div>
    <Cta title="Need Something Specific?" text="Not sure what you need, or your requirement is not listed above? Describe it to us and we’ll discuss the right next step." btn="Tell Us What You Need" />
    <div className="our-faqs"><div className="container"><Title sub="faq">Frequently asked questions</Title><Accordion items={faqs} /></div></div>
  </>);
}
