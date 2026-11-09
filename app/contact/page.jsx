import site from '@/config/site';
import { PageHeader } from '@/components/ui';
import ContactForm from '@/components/ContactForm';
import { cats } from '@/data/content';


export const metadata = {
  title: 'Contact Us | Start Your Project | Webleora',
  description:
    'Get in touch with Webleora to discuss your website, mobile app, or custom software project. Receive a free technical estimate and clear proposal.',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Contact Us | Start Your Project | Webleora',
    description:
      'Get in touch with Webleora to discuss your website, mobile app, or custom software project. Receive a free technical estimate and clear proposal.',
    url: './',
    type: 'website',
  },
};

/* Outline icons (inline so no extra assets are needed) */
const Icon = {
  phone: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21l1.6-5A8.5 8.5 0 1 1 8 19.4L3 21z" /><path d="M9 9c0 3.5 2.5 6 6 6l1.2-1.4-2-1-1 .8a4 4 0 0 1-2-2l.8-1-1-2L9 9z" /></svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
  ),
};

export default function Contact() {
  const phoneHref = site.phone ? site.phone.replace(/\s/g, '') : '';
  const waHref = site.phone ? `https://wa.me/${site.phone.replace(/\D/g, '')}` : '';
  const mapSrc = site.location
    ? `https://maps.google.com/maps?q=${encodeURIComponent(site.location)}&z=14&output=embed`
    : null;

  return (
    <>
      <PageHeader title="Contact Us" />

      <section className="wl-contact">
        <div className="container">
          <div className="wl-contact__grid">
            {/* LEFT — form card */}
            <div className="wl-form-card">
              <span className="wl-form-card__sub">Contact us</span>
              <h2 className="wl-form-card__title">Send us your project details</h2>
              <ContactForm serviceOptions={cats.map((c) => c.title)} />
            </div>

            {/* RIGHT — intro, info grid, map */}
            <div className="wl-contact__side">
              <p className="wl-contact__intro">
                Share a few details about your business, your goals and the solution you have in mind.
                We’ll review your enquiry and get back to you using the contact details you provide.
              </p>

              <div className="wl-info-grid">
                {site.phone && (
                  <a className="wl-info" href={`tel:${phoneHref}`}>
                    <span className="wl-info__icon">{Icon.phone}</span>
                    <h3>Phone Number</h3>
                    <p>{site.phone}</p>
                  </a>
                )}
                {site.email && (
                  <a className="wl-info" href={`mailto:${site.email}`}>
                    <span className="wl-info__icon">{Icon.mail}</span>
                    <h3>Email Address</h3>
                    <p>{site.email}</p>
                  </a>
                )}
                {site.phone && (
                  <a className="wl-info" href={waHref} target="_blank" rel="noopener noreferrer">
                    <span className="wl-info__icon">{Icon.whatsapp}</span>
                    <h3>WhatsApp Direct</h3>
                    <p>{site.phone}</p>
                  </a>
                )}
                {site.location && (
                  <div className="wl-info">
                    <span className="wl-info__icon">{Icon.pin}</span>
                    <h3>Office &amp; Workshop</h3>
                    <p>{site.location}</p>
                  </div>
                )}
              </div>

              {/* Working Hours & Service Area */}
              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '18px 22px', margin: '20px 0' }}>
                <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#0b2239', margin: '0 0 6px' }}>
                  <i className="fa-regular fa-clock" style={{ color: '#d8ac66', marginRight: '8px' }} aria-hidden="true" />
                  Business Hours &amp; Consultations
                </h4>
                <p style={{ fontSize: '13.5px', color: '#64748b', margin: '0 0 6px' }}>
                  <strong>Monday – Saturday:</strong> 9:30 AM – 7:30 PM IST (Sunday Closed)
                </p>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
                  <strong>Service Radius:</strong> In-person meetings in Indore &amp; MP; virtual consultations for pan-India and international clients across USA, UK &amp; UAE.
                </p>
              </div>

              {mapSrc && (
                <div className="wl-map" style={{ minHeight: '260px', borderRadius: '12px', overflow: 'hidden' }}>
                  <iframe
                    title="Webleora Office in Indore"
                    src="https://maps.google.com/maps?q=Gulab+Bagh,+Indore,+Madhya+Pradesh+452010&z=15&output=embed"
                    style={{ width: '100%', height: '260px', border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}