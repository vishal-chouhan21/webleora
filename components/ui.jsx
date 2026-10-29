import Link from 'next/link';
export const Title = ({ sub, children, dark }) => (
  <div className={'section-title' + (dark ? ' dark-section' : '')}>{sub && <h3>{sub}</h3>}<h2>{children}</h2></div>
);
export const PageHeader = ({ title, crumbs = [] }) => (
  <div className="page-header"><div className="container"><div className="row align-items-center"><div className="col-lg-12">
    <div className="page-header-box"><h1>{title}</h1>
      <nav><ol className="breadcrumb">
        <li className="breadcrumb-item"><Link href="/">home</Link></li>
        {crumbs.map(([l, h]) => <li key={l} className="breadcrumb-item"><Link href={h}>{l}</Link></li>)}
        <li className="breadcrumb-item active" aria-current="page">{title}</li>
      </ol></nav></div></div></div></div></div>
);
export const Cta = ({ title = 'Have a Project in Mind?', text, btn = 'Discuss Your Project' }) => (
  <div className="page-section"><div className="container"><div className="row"><div className="col-lg-12">
    <div className="cta-box"><div className="cta-box-content">
      <Title dark>{title}</Title>
      {text && <p style={{ color: '#fff', marginBottom: 30 }}>{text}</p>}
      <div className="hero-btn"><Link href="/contact" className="btn-default btn-highlighted">{btn}</Link></div>
    </div><div className="cta-box-image"><figure className="image-anime"><img src="/images/cta-box-image.jpg" alt="" /></figure></div></div>
  </div></div></div></div>
);
