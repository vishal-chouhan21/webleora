import Link from 'next/link';
import site from '@/config/site';
import { services } from '@/data/content';

export default function Footer() {
  return (
    <footer className="main-footer">
      {/* ================= MAIN FOOTER COLUMNS ================= */}
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="footer-links footer-newsletter-form">
              <div className="footer-logo mb-3">
                <img
                  src="/images/footer-logo.png"
                  alt="Webleora"
                  style={{ height: 60, width: 'auto' }}
                />
              </div>
              <p>
                Webleora builds thoughtful digital experiences and business-focused
                software to help organizations strengthen their online presence and
                improve how they work.
              </p>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 col-6">
            <div className="footer-links footer-quick-links">
              <h3>Quick Links</h3>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/products">Our Products</Link></li>
                <li><Link href="/products/wedding-themes">Wedding &amp; Event Themes</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/portfolio/website-design">Web Design Portfolio</Link></li>
                <li><Link href="/portfolio/mobile-app">Mobile App Portfolio</Link></li>
                <li><Link href="/portfolio/graphic-design">Graphic Design Portfolio</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div className="footer-links">
              <h3>Services</h3>
              <ul>
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`}>{s.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-5 col-12">
            <div className="footer-links">
              <h3>Legal &amp; Support</h3>
              <ul>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/terms-and-conditions">Terms &amp; Conditions</Link></li>
                <li><Link href="/cookie-policy">Cookie Policy</Link></li>
                <li><Link href="/faqs">FAQs &amp; Pricing</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CONSULTATION & CONTACT BAR ================= */}
      <div className="wl-footer-banner">
        <div className="container">
          <div className="wl-footer-banner-inner">
            <div className="wl-footer-banner-left">
              <h3 className="wl-footer-banner-title">
                WEBLEORA <span>· Web Development &amp; Software Company in Indore</span>
              </h3>
              <p className="wl-footer-banner-address">
                <i className="fa-solid fa-location-dot" style={{ marginRight: 6, color: '#d8ac66' }} aria-hidden="true" />
                403 Gulab Bagh, Near Shiv Convent School, Indore, Madhya Pradesh 452010, India
              </p>
              <p style={{ color: '#94a3b8', fontSize: 13, margin: '4px 0 12px' }}>
                <i className="fa-regular fa-clock" style={{ marginRight: 6, color: '#d8ac66' }} aria-hidden="true" />
                Mon – Sat: 9:30 AM – 7:30 PM IST · Serving Indore, Pan-India &amp; International Clients
              </p>
              <div className="wl-footer-banner-contact">
                <a href={`tel:${(site.phone || '+91 95891 36915').replace(/\s/g, '')}`} className="wl-footer-contact-item">
                  <i className="fa-solid fa-phone" aria-hidden="true" />
                  <span>{site.phone || '+91 95891 36915'}</span>
                </a>
                <span className="wl-footer-contact-sep">,</span>
                <a href={`mailto:${site.email || 'info@webleora.com'}`} className="wl-footer-contact-item">
                  <i className="fa-solid fa-envelope" aria-hidden="true" />
                  <span>{site.email || 'info@webleora.com'}</span>
                </a>
              </div>
              <div className="wl-footer-banner-social">
                <span className="wl-footer-social-title">Connect With Us:</span>
                <div className="wl-footer-social-icons">
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wl-social-sq wl-sq-insta"
                    aria-label="Instagram"
                  >
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a
                    href={site.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wl-social-sq wl-sq-in"
                    aria-label="LinkedIn"
                  >
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                  <a
                    href={site.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wl-social-sq wl-sq-fb"
                    aria-label="Facebook"
                  >
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a
                    href={site.social.x || '#'}
                    target={site.social.x && site.social.x !== '#' ? '_blank' : undefined}
                    rel={site.social.x && site.social.x !== '#' ? 'noopener noreferrer' : undefined}
                    className="wl-social-sq wl-sq-x"
                    aria-label="X (Twitter)"
                  >
                    <i className="fa-brands fa-x-twitter" />
                  </a>
                </div>
              </div>
            </div>

            <div className="wl-footer-banner-right">
              <h4 className="wl-footer-cta-heading">Ready to Start Your Project?</h4>
              <Link href="/contact" className="wl-btn-consultation">
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer-copyright-text">
                <p>© {new Date().getFullYear()} Webleora. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
