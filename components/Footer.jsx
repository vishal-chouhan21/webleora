import Link from 'next/link';
import site from '@/config/site';
import { services } from '@/data/content';
export default function Footer() {
  return (
    <footer className="main-footer"><div className="container"><div className="row">
      <div className="col-lg-12"><div className="footer-header">
        <div className="footer-logo"><img src="/images/footer-logo.svg" alt="Webleora" /></div>
        <div className="footer-social-links"><ul>
          {site.social.linkedin && <li><a href={site.social.linkedin} aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a></li>}
          {site.social.x && <li><a href={site.social.x} aria-label="X"><i className="fa-brands fa-x-twitter"></i></a></li>}
          {site.social.facebook && <li><a href={site.social.facebook} aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a></li>}
          {site.social.instagram && <li><a href={site.social.instagram} aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a></li>}
        </ul></div></div></div>
      <div className="col-lg-4"><div className="footer-links footer-newsletter-form">
        <h3>About Webleora</h3>
        <p>Webleora builds thoughtful digital experiences and business-focused software to help organizations strengthen their online presence and improve how they work.</p>
        <p><strong style={{ color: '#fff' }}>Planning a digital project? Let’s discuss it.</strong></p>
        <Link href="/contact" className="btn-default btn-highlighted">Discuss Your Project</Link></div></div>
      <div className="col-lg-2 col-md-3 col-6"><div className="footer-links footer-quick-links"><h3>Quick link</h3><ul>
        <li><Link href="/">Home</Link></li><li><Link href="/services">Services</Link></li><li><Link href="/about">About Us</Link></li>
        <li><Link href="/our-work">Our Work</Link></li><li><Link href="/contact">Contact</Link></li></ul></div></div>
      <div className="col-lg-3 col-md-3 col-6"><div className="footer-links"><h3>Services</h3><ul>
        {services.slice(0, 5).map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.title}</Link></li>)}</ul></div></div>
      <div className="col-lg-3 col-md-3 col-6"><div className="footer-links"><h3>Contact</h3><ul>
        {site.email && <li><a href={`mailto:${site.email}`}>{site.email}</a></li>}
        {site.phone && <li><a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></li>}
        {site.location && <li>{site.location}</li>}
        <li><Link href="/privacy-policy">Privacy Policy</Link></li><li><Link href="/terms-and-conditions">Terms &amp; Conditions</Link></li></ul></div></div>
    </div></div>
    <div className="footer-copyright"><div className="container"><div className="row"><div className="col-md-12"><div className="footer-copyright-text">
      <p>© {new Date().getFullYear()} Webleora. All rights reserved.</p></div></div></div></div></div></footer>);
}
