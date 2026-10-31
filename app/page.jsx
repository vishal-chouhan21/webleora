import Link from 'next/link';
import site from '@/config/site';
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
        <h3>Your Trust, Our Commitment</h3>
        <h1>Building Digital <span>Possibilities Together</span></h1>
        <p>We deliver innovative web, software and digital solutions that help businesses grow, adapt and stay ahead in a digital world.</p></div>
      <div className="hero-content-body"><div className="hero-btn">
        <Link href="/services" className="btn-default">Our Services</Link>{' '}
        <Link href="/contact" className="btn-default btn-highlighted">Get in Touch</Link></div></div>
    </div></div>
    <div className="col-lg-5"><div className="wl-hero-card"><img src="/images/logo.png" alt="Webleora International" /><p>IDEAS. TECHNOLOGY. PEOPLE. GROWTH.</p></div></div></div></div></div>

    <div className="container"><div className="wl-strip">
      {[['fa-code', 'Web Development', 'Custom, scalable and high-performing websites.', '/services/website-design-development'],
        ['fa-mobile-screen', 'Mobile App Development', 'Powerful mobile solutions for your business.', '/services'],
        ['fa-gear', 'Software Solutions', 'Tailored software to simplify operations.', '/services/custom-software-development'],
        ['fa-bullhorn', 'Digital Marketing', 'Grow your brand with result-driven strategies.', '/services'],
        ['fa-cloud', 'IT Consulting', 'Expert guidance for your digital transformation.', '/services']].map(([i, t, d, h]) => (
        <Link href={h} key={t}><i className={`fa-solid ${i}`}></i><h3>{t}</h3><p>{d}</p></Link>))}
    </div></div>

    <div className="about-us"><div className="container"><div className="row align-items-center">
      <div className="col-lg-4"><div className="about-img-2"><figure className="image-anime"><img src="/images/about-image-1.jpg" alt="" /></figure></div></div>
      <div className="col-lg-4"><div className="about-us-content">
        <Title sub="about webleora">A Trusted Partner <span>in Your Digital Journey</span></Title>
        <p>Webleora International is a results-driven IT solutions company focused on delivering innovative, reliable and scalable digital solutions. We combine technology, creativity and strategy to help businesses build stronger digital presence and achieve long-term growth.</p>
        <Link href="/about" className="btn-default">Know More</Link></div></div>
      <div className="col-lg-4">{site.stats.length > 0 && <div className="wl-stats">{site.stats.map(([i, n, t]) => (
        <div className="wl-stat" key={t}><i className={`fa-solid ${i}`}></i><div><b>{n}</b><span>{t}</span></div></div>))}</div>}</div>
    </div></div></div>

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
