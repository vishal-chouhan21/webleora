import Link from 'next/link';
import { PageHeader, Title, Cta } from '@/components/ui';
import { why } from '@/data/content';
export const metadata = { title: 'About Webleora | Our Approach to Digital Solutions' };
export default function About() {
  return (<>
    <PageHeader title="About Us" />
    <div className="about-us"><div className="container"><div className="row align-items-center">
      <div className="col-lg-6"><div className="about-us-image">
        <div className="about-image-box about-img-1"><figure className="image-anime"><img src="/images/about-image-1.jpg" alt="" /></figure></div>
        <div className="about-image-box"><div className="about-img-2"><figure className="image-anime"><img src="/images/about-image-2.jpg" alt="" /></figure></div>
          <div className="about-img-3"><figure className="image-anime"><img src="/images/about-image-3.jpg" alt="" /></figure></div></div></div></div>
      <div className="col-lg-6"><div className="about-us-content">
        <Title sub="about webleora">Technology Should Make <span>Business Simpler.</span></Title>
        <p>Webleora is a digital solutions company focused on helping businesses build and improve their online presence and digital operations.</p>
        <p>Our approach combines clear requirements, thoughtful design and practical development. We aim to understand the business need first, recommend a suitable solution and keep communication clear from planning through delivery.</p>
        <div className="about-us-footer"><div className="about-footer-list"><ul>
          <li>Understand the need</li><li>Agree on the scope</li><li>Communicate clearly</li><li>Build carefully</li><li>Test before launch</li></ul></div>
          <div className="about-footer-btn"><Link href="/contact" className="btn-default">Discuss Your Project</Link></div></div>
      </div></div></div></div></div>
    <div className="page-section"><div className="container"><div className="row">
      <div className="col-md-6"><div className="mission-vision-item"><h3>Our Mission</h3><p>To help businesses use digital solutions with greater clarity, confidence and purpose.</p></div></div>
      <div className="col-md-6"><div className="mission-vision-item"><h3>Our Vision</h3><p>To build lasting working relationships by delivering useful, well-considered digital experiences and software.</p></div></div></div></div></div>
    <div className="why-choose-us"><div className="container"><div className="row"><div className="col-lg-12">
      <Title sub="what to expect" dark>Why work with Webleora?</Title>
      <div className="why-choose-list">{why.map(([t, d], i) => (<div className="why-choose-item" key={t}>
        <div className="icon-box"><img src={`/images/icon-why-choose-${(i % 3) + 1}.svg`} alt="" /></div>
        <div className="why-choose-item-content"><h3>{t}</h3><p>{d}</p></div></div>))}</div></div></div></div></div>
    <Cta />
  </>);
}
