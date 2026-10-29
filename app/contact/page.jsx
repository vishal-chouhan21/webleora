import site from '@/config/site';
import { PageHeader, Title } from '@/components/ui';
import ContactForm from '@/components/ContactForm';
import { cats } from '@/data/content';
export const metadata = { title: 'Discuss Your Project | Contact Webleora' };
export default function Contact() {
  return (<>
    <PageHeader title="Contact Us" />
    <div className="page-contact-us"><div className="container">
      <div className="row section-row"><div className="col-lg-12"><Title sub="contact us">Let’s Talk <span>About Your Project.</span></Title>
        <p>Share a few details about your business, your goals and the solution you have in mind. We’ll review your enquiry and get back to you using the contact details you provide.</p></div></div>
      <div className="page-contact-box"><div className="contact-info-list">
        {site.email && <div className="contact-info-item"><div className="icon-box"><img src="/images/icon-mail-accent.svg" alt="" /></div><div className="contact-info-content"><h3>e-mail us</h3><p><a href={`mailto:${site.email}`}>{site.email}</a></p></div></div>}
        {site.phone && <div className="contact-info-item"><div className="icon-box"><img src="/images/icon-phone-accent.svg" alt="" /></div><div className="contact-info-content"><h3>call / whatsapp</h3><p><a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></p></div></div>}
        {site.location && <div className="contact-info-item"><div className="icon-box"><img src="/images/icon-location.svg" alt="" /></div><div className="contact-info-content"><h3>our location</h3><p>{site.location}</p></div></div>}
      </div>
      <div className="contact-us-form"><div className="section-title dark-section"><h2>Send us your project details</h2></div>
        <div className="member-contact-form"><ContactForm serviceOptions={cats.map((c) => c.title)} /></div></div></div>
    </div></div>
  </>);
}
