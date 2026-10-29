'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import site from '@/config/site';
import { services } from '@/data/content';
export default function Header() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  useEffect(() => {
    const f = () => setStuck(window.scrollY > 600);
    window.addEventListener('scroll', f); return () => window.removeEventListener('scroll', f);
  }, []);
  const close = () => setOpen(false);
  return (<>
    <div className="topbar"><div className="container"><div className="row align-items-center">
      <div className="col-md-7"><div className="topbar-info-text"><p>Planning a digital project? <Link href="/contact">Let’s discuss it</Link></p></div></div>
      <div className="col-md-5"><div className="topbar-links"><div className="topbar-contact-info"><ul>
        <li><Link href="/faqs">FAQs</Link></li><li><Link href="/contact">Contact</Link></li></ul></div>
        <div className="topbar-social-links"><ul>
          {site.social.linkedin && <li><a href={site.social.linkedin} aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a></li>}
          {site.social.x && <li><a href={site.social.x} aria-label="X"><i className="fa-brands fa-x-twitter"></i></a></li>}
          {site.social.facebook && <li><a href={site.social.facebook} aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a></li>}
          {site.social.instagram && <li><a href={site.social.instagram} aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a></li>}
        </ul></div></div></div></div></div></div>
    <header className="main-header" style={stuck ? { height: 90 } : undefined}>
      <div className={'header-sticky' + (stuck ? ' active' : '')}>
        <nav className="navbar navbar-expand-lg"><div className="container">
          <Link className="navbar-brand" href="/"><img src="/images/logo.svg" alt="Webleora" /></Link>
          <div className="collapse navbar-collapse main-menu"><div className="nav-menu-wrapper">
            <ul className="navbar-nav mr-auto" id="menu">
              <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/about">About Us</Link></li>
              <li className="nav-item submenu"><Link className="nav-link" href="/services">Services</Link>
                <ul>{services.map((s) => <li className="nav-item" key={s.slug}><Link className="nav-link" href={`/services/${s.slug}`}>{s.title}</Link></li>)}</ul></li>
              <li className="nav-item"><Link className="nav-link" href="/our-work">Our Work</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/contact">Contact</Link></li>
            </ul></div>
            <div className="header-btn"><Link href="/contact" className="btn-default">Discuss Your Project</Link></div></div>
          <div className="navbar-toggle"><a href="#" role="button" aria-label="Menu" className={'slicknav_btn ' + (open ? 'slicknav_open' : 'slicknav_collapsed')} onClick={(e) => { e.preventDefault(); setOpen(!open); }}>
            <span className="slicknav_icon"><span className="slicknav_icon-bar"></span><span className="slicknav_icon-bar"></span><span className="slicknav_icon-bar"></span></span></a></div>
        </div></nav>
        <div className="responsive-menu">{open && <div className="slicknav_menu"><ul className="slicknav_nav" onClick={close}>
          <li><Link href="/">Home</Link></li><li><Link href="/about">About Us</Link></li><li><Link href="/services">Services</Link></li>
          <li><Link href="/our-work">Our Work</Link></li><li><Link href="/faqs">FAQs</Link></li><li><Link href="/contact">Contact</Link></li></ul></div>}</div>
      </div>
    </header></>);
}
