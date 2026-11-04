import site from '@/config/site';
import { PageHeader } from '@/components/ui';
import ContactForm from '@/components/ContactForm';
import { cats } from '@/data/content';


export const metadata = {
  title: { absolute: 'Contact Webleora | Start a Project' },
  description:
    'Tell Webleora about your website, app or software project and receive a clear next step.',
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
                    <h3>WhatsApp</h3>
                    <p>{site.phone}</p>
                  </a>
                )}
                {site.location && (
                  <div className="wl-info">
                    <span className="wl-info__icon">{Icon.pin}</span>
                    <h3>Our Office</h3>
                    <p>{site.location}</p>
                  </div>
                )}
              </div>

              {mapSrc && (
                <div className="wl-map">
                  <iframe
                    title="Webleora office location"
                    src={mapSrc}
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