'use client';
import { useState } from 'react';
import Link from 'next/link';
export function ServiceCards({ items }) {
  const [on, setOn] = useState(1);
  return (
    <div className="row">{items.map((s, i) => (
      <div className="col-lg-4 col-md-6" key={s.slug}>
        <div className={'service-item' + (on === i ? ' active' : '')} onMouseEnter={() => setOn(i)}>
          <div className="icon-box"><img src={`/images/icon-service-${i + 1}.svg`} alt="" /></div>
          <div className="service-title-box">
            <div className="service-title"><h3><Link href={`/services/${s.slug}`}>{s.title}</Link></h3></div>
            <div className="service-btn"><Link href={`/services/${s.slug}`} aria-label={s.title}><i className="fa-solid fa-arrow-right"></i></Link></div>
          </div>
          <div className="service-content"><p>{s.text}</p></div>
        </div>
      </div>))}</div>
  );
}
export function ProjectList({ items }) {
  const [on, setOn] = useState(1);
  return (
    <div className="projects-list">{items.map((p, i) => (
      <div className={'project-item' + (on === i ? ' active' : '')} key={p.slug} onMouseEnter={() => setOn(i)}>
        <div className="project-image"><Link href={`/our-work/${p.slug}`}><figure className="image-anime"><img src={`/images/${p.img}`} alt={p.title} /></figure></Link></div>
        <div className="project-content"><p><Link href={`/our-work/${p.slug}`}>{p.cat}</Link></p><h3><Link href={`/our-work/${p.slug}`}>{p.title}</Link></h3></div>
      </div>))}</div>
  );
}
