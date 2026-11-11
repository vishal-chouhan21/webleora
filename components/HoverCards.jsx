'use client';
import { useState } from 'react';
import Link from 'next/link';
export function ServiceCards({ items }) {
  const [on, setOn] = useState(null);
  return (
    <div className="row" onMouseLeave={() => setOn(null)}>{items.map((s, i) => (
      <div className="col-lg-4 col-md-6" key={s.slug}>
        <div className={'service-item' + (on === i ? ' active' : '')} onMouseEnter={() => setOn(i)}>
          <div className="icon-box"><img src={`/images/icon-service-${(i % 6) + 1}.svg`} alt={`${s.title} Icon`} width="48" height="48" /></div>
          <div className="service-title-box">
            <div className="service-title"><h3><Link href={`/services/${s.slug}`}>{s.title}</Link></h3></div>
            <div className="service-btn"><span className="service-btn-icon" aria-hidden="true"><i className="fa-solid fa-arrow-right"></i></span></div>
          </div>
          <div className="service-content"><p>{s.text || s.need}</p></div>
        </div>
      </div>))}</div>
  );
}
export function ProjectList({ items }) {
  const [on, setOn] = useState(null);
  return (
    <div className="projects-list" onMouseLeave={() => setOn(null)}>{items.map((p, i) => (
      <div className={'project-item' + (on === i ? ' active' : '')} key={p.slug} onMouseEnter={() => setOn(i)}>
        <div className="project-image"><Link href={`/our-work/${p.slug}`}><figure className="image-anime"><img src={`/images/${p.img}`} alt={`Sample Project: ${p.title}`} /></figure></Link></div>
        <div className="project-content"><p><Link href={`/our-work/${p.slug}`}>{p.cat}</Link></p><h3><Link href={`/our-work/${p.slug}`}>Sample Project: {p.title}</Link></h3></div>
      </div>))}</div>
  );
}
