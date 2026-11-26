'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import site from '@/config/site';
import { services } from '@/data/content';
import { productsCatalog, weddingThemes } from '@/data/productsData';
export default function Header() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  useEffect(() => {
    const f = () => setStuck(window.scrollY > 600);
    window.addEventListener('scroll', f); return () => window.removeEventListener('scroll', f);
  }, []);
  const close = () => setOpen(false);
  return (<>
    <div className="topbar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-7 col-12 topbar-contact-col">
            <ul className="wl-contact-top">
              {site.email && (
                <li>
                  <i className="fa-regular fa-envelope" aria-hidden="true" />
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
              )}
              {site.phone && (
                <li>
                  <i className="fa-solid fa-phone" aria-hidden="true" />
                  <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
                </li>
              )}
            </ul>
          </div>
          <div className="col-lg-4 col-md-5 d-none d-md-block topbar-social-col">
            <div className="topbar-social-links">
              <ul>
                {[
                  ['linkedin', 'fa-linkedin-in'],
                  ['instagram', 'fa-instagram'],
                  ['facebook', 'fa-facebook-f'],
                  ['x', 'fa-x-twitter'],
                ].map(
                  ([k, i]) =>
                    site.social[k] && (
                      <li key={k}>
                        <a
                          href={site.social[k]}
                          target={site.social[k] !== '#' ? '_blank' : undefined}
                          rel={site.social[k] !== '#' ? 'noopener noreferrer' : undefined}
                          aria-label={k}
                        >
                          <i className={`fa-brands ${i}`} />
                        </a>
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <header className="main-header" style={stuck ? { height: 84 } : undefined}>
      <div className={'header-sticky' + (stuck ? ' active' : '')}>
        <nav className="navbar navbar-expand-lg"><div className="container">
          <Link className="navbar-brand" href="/"><img src="/images/logo.png" alt="Webleora" /></Link>
          <div className="collapse navbar-collapse main-menu"><div className="nav-menu-wrapper">
            <ul className="navbar-nav mr-auto" id="menu">
              <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/about">About Us</Link></li>
              <li className="nav-item submenu"><Link className="nav-link" href="/services">Services</Link>
                <ul>{services.map((s) => <li className="nav-item" key={s.slug}><Link className="nav-link" href={`/services/${s.slug}`}>{s.title}</Link></li>)}</ul></li>
              <li className="nav-item submenu"><Link className="nav-link" href="/products">Our Products</Link>
                <ul>
                  <li className="nav-item"><Link className="nav-link" href="/products">All Digital Products</Link></li>
                  {productsCatalog.map((p) => (
                    <li className="nav-item" key={p.slug}>
                      <Link className="nav-link" href={`/products/${p.slug}`}>{p.menuTitle || p.title}</Link>
                    </li>
                  ))}
                  {weddingThemes.map((t) => (
                    <li className="nav-item" key={t.id}>
                      <Link className="nav-link" href={`/products/wedding-themes#${t.id}`}>{t.title}</Link>
                    </li>
                  ))}
                  <li className="nav-item"><Link className="nav-link" href="/products/wedding-themes#all-occasions">Birthdays, Anniversaries &amp; Parties</Link></li>
                </ul></li>
              <li className="nav-item submenu"><Link className="nav-link" href="/portfolio">Portfolio</Link>
                <ul>
                  <li className="nav-item"><Link className="nav-link" href="/portfolio/website-design">Website Design Portfolio</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="/portfolio/mobile-app">Mobile App Portfolio</Link></li>
                  <li className="nav-item"><Link className="nav-link" href="/portfolio/graphic-design">Graphic Design Portfolio</Link></li>
                </ul></li>
              <li className="nav-item"><Link className="nav-link" href="/why-website">Why You Need a Website</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/blog">Blog</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/contact">Contact</Link></li>
            </ul></div>
            <div className="header-btn"><Link href="/contact" className="btn-default">Start with Us</Link></div></div>
          <div className="navbar-toggle"><button type="button" aria-label="Toggle Navigation Menu" className={'slicknav_btn ' + (open ? 'slicknav_open' : 'slicknav_collapsed')} onClick={() => setOpen(!open)}>
            <span className="slicknav_icon"><span className="slicknav_icon-bar"></span><span className="slicknav_icon-bar"></span><span className="slicknav_icon-bar"></span></span></button></div>
        </div></nav>
        <div className="responsive-menu">{open && <div className="slicknav_menu"><ul className="slicknav_nav" onClick={close}>
          <li><Link href="/">Home</Link></li><li><Link href="/about">About Us</Link></li><li><Link href="/services">Services</Link></li>
          <li><Link href="/products">Our Products</Link></li>
          <li style={{ paddingLeft: '14px' }}><Link href="/products/wedding-themes">• Wedding, Birthday &amp; Event Themes</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li style={{ paddingLeft: '14px' }}><Link href="/portfolio/website-design">• Website Design Portfolio</Link></li>
          <li style={{ paddingLeft: '14px' }}><Link href="/portfolio/mobile-app">• Mobile App Portfolio</Link></li>
          <li style={{ paddingLeft: '14px' }}><Link href="/portfolio/graphic-design">• Graphic Design Portfolio</Link></li>
          <li><Link href="/why-website">Why You Need a Website</Link></li><li><Link href="/blog">Blog</Link></li><li><Link href="/faqs">FAQs</Link></li><li><Link href="/contact">Contact</Link></li></ul></div>}</div>
      </div>
    </header></>);
}
