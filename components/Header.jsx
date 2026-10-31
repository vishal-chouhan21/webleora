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
      <div className="col-md-8"><ul className="wl-contact-top">
        {site.email && <li><i className="fa-regular fa-envelope"></i><a href={`mailto:${site.email}`}>{site.email}</a></li>}
        {site.phone && <li><i className="fa-solid fa-phone"></i><a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></li>}</ul></div>
      <div className="col-md-4"><div className="topbar-social-links"><ul>{[['linkedin','fa-linkedin-in'],['instagram','fa-instagram'],['facebook','fa-facebook-f'],['youtube','fa-youtube'],['x','fa-x-twitter']].map(([k,i]) => site.social[k] && <li key={k}><a href={site.social[k]} aria-label={k}><i className={`fa-brands ${i}`}></i></a></li>)}</ul></div></div></div></div></div>
    <header className="main-header" style={stuck ? { height: 90 } : undefined}>
      <div className={'header-sticky' + (stuck ? ' active' : '')}>
        <nav className="navbar navbar-expand-lg"><div className="container">
          <Link className="navbar-brand" href="/"><img src="/images/logo.png" alt="Webleora" /></Link>
          <div className="collapse navbar-collapse main-menu"><div className="nav-menu-wrapper">
            <ul className="navbar-nav mr-auto" id="menu">
              <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/about">About Us</Link></li>
              <li className="nav-item submenu"><Link className="nav-link" href="/services">Services</Link>
                <ul>{services.map((s) => <li className="nav-item" key={s.slug}><Link className="nav-link" href={`/services/${s.slug}`}>{s.title}</Link></li>)}</ul></li>
              <li className="nav-item"><Link className="nav-link" href="/our-work">Our Work</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/contact">Contact Us</Link></li>
            </ul></div>
            <div className="header-btn"><Link href="/contact" className="btn-default">Get a Quote</Link></div></div>
          <div className="navbar-toggle"><a href="#" role="button" aria-label="Menu" className={'slicknav_btn ' + (open ? 'slicknav_open' : 'slicknav_collapsed')} onClick={(e) => { e.preventDefault(); setOpen(!open); }}>
            <span className="slicknav_icon"><span className="slicknav_icon-bar"></span><span className="slicknav_icon-bar"></span><span className="slicknav_icon-bar"></span></span></a></div>
        </div></nav>
        <div className="responsive-menu">{open && <div className="slicknav_menu"><ul className="slicknav_nav" onClick={close}>
          <li><Link href="/">Home</Link></li><li><Link href="/about">About Us</Link></li><li><Link href="/services">Services</Link></li>
          <li><Link href="/our-work">Our Work</Link></li><li><Link href="/faqs">FAQs</Link></li><li><Link href="/contact">Contact</Link></li></ul></div>}</div>
      </div>
    </header></>);
}
