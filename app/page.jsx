import Link from 'next/link';
import doc from '@/data/doc.json';
import { services, projects, faqs, steps, why } from '@/data/content';
import { Title, Cta } from '@/components/ui';
import { ServiceCards, ProjectList } from '@/components/HoverCards';
import Accordion from '@/components/Accordion';
export const metadata = { title: { absolute: 'Webleora | Website Development & Digital Solutions' } };
export default function Home() {
  const cards = services.map((s, i) => ({ ...s, text: doc.overview[i][1] }));
  return (<>
    <div className="hero"><div className="container"><div className="row align-items-center"><div className="col-lg-7"><div className="hero-content">
      <div className="section-title dark-section">
        <h3>Web design • Development • Custom digital solutions</h3>
        <h1>Digital Solutions Built Around Your Business.</h1>
        <p>Webleora helps businesses turn ideas and everyday challenges into clear, useful digital experiences — from professional websites and web applications to custom business software.</p></div>
      <div className="hero-content-body"><div className="hero-btn">
        <Link href="/contact" className="btn-default btn-highlighted">Discuss Your Project</Link>{' '}
        <Link href="/services" className="btn-default">Explore Our Services</Link></div></div>
      <div className="hero-content-footer"><div className="hero-list"><ul>
        <li>Clear communication</li><li>Thoughtful execution</li><li>Solutions shaped around your goals</li></ul></div></div>
    </div></div></div></div></div>

    <div className="our-services"><div className="container">
      <div className="row section-row"><div className="col-lg-12"><Title sub="our services">Digital services <span>for every stage of your business</span></Title></div></div>
      <ServiceCards items={cards} />
      <div className="text-center mt-4"><Link href="/services" className="btn-default">View all services</Link></div>
    </div></div>

    <div className="why-choose-us"><div className="container"><div className="row align-items-center">
      <div className="col-lg-6"><div className="why-choose-image"><figure className="image-anime"><img src="/images/why-choose-image.jpg" alt="" /></figure></div></div>
      <div className="col-lg-6"><div className="why-choose-content">
        <Title sub="why webleora" dark>Why work with Webleora?</Title>
        <div className="why-choose-list">{why.map(([t, d], i) => (
          <div className="why-choose-item" key={t}>
            <div className="icon-box"><img src={`/images/icon-why-choose-${(i % 3) + 1}.svg`} alt="" /></div>
            <div className="why-choose-item-content"><h3>{t}</h3><p>{d}</p></div></div>))}</div>
      </div></div></div></div></div>

    <div className="page-section"><div className="container">
      <div className="row section-row"><div className="col-lg-12"><Title sub="our process">How we work</Title></div></div>
      <div className="wl-steps">{steps.map(([t, d]) => { const [n, name] = t.split(' — '); return (
        <div className="wl-step" key={t}><span>{n}</span><h3>{name}</h3><p>{d}</p></div>); })}</div>
    </div></div>

    <div className="our-projects"><div className="container">
      <div className="row section-row"><div className="col-lg-12"><Title sub="our work">Selected Work</Title>
        <p>Explore examples of digital experiences and business tools we have worked on. These are concept projects that show our approach.</p></div></div>
      <div className="our-projeect-box"><ProjectList items={projects} /></div>
      <div className="text-center mt-4"><Link href="/our-work" className="btn-default">View all work</Link></div>
    </div></div>

    <Cta text="Tell us what you are planning, what you need to solve and what success would look like. We’ll review the details and discuss a practical next step." />

    <div className="our-faqs home-our-faqs"><div className="container"><div className="row align-items-center">
      <div className="col-lg-6"><div className="faq-content"><Title sub="faq">Questions <span>answered clearly</span></Title>
        <div className="faq-image"><figure className="image-anime"><img src="/images/faq-image.jpg" alt="" /></figure></div></div></div>
      <div className="col-lg-6"><Accordion items={faqs} /></div></div></div></div>
  </>);
}
