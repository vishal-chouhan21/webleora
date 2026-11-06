'use client';
import { useState } from 'react';
import Link from 'next/link';

const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || '/api/contact';

export default function ContactForm({ serviceOptions }) {
  const [state, setState] = useState({ status: 'idle', msg: '' });

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    setState({ status: 'sending', msg: '' });
    try {
      const res = await fetch(ENDPOINT, { method: 'POST', body: new FormData(form) });
      const data = await res.json();
      if (data.ok) { form.reset(); setState({ status: 'ok', msg: 'Thank you for contacting Webleora. Your enquiry has been submitted successfully.' }); }
      else setState({ status: 'err', msg: data.error || 'Something went wrong. Please try again.' });
    } catch { setState({ status: 'err', msg: 'Could not send your enquiry. Please try again or email us directly.' }); }
  }

  const f = 'form-group col-md-6 mb-4';

  return (
    <form onSubmit={onSubmit} noValidate={false} className="contact-form">
      <div className="row">
        <div className={f}><input className="form-control" name="name" placeholder="Name *" required /></div>
        <div className={f}><input className="form-control" type="email" name="email" placeholder="Work email *" required /></div>
        <div className={f}><input className="form-control" name="company" placeholder="Company (optional)" /></div>
        <div className={f}><input className="form-control" name="country" placeholder="Country / time zone (optional)" /></div>
        <div className={f}>
          <select className="form-control" name="service" defaultValue="">
            <option value="">Service of interest</option>
            {serviceOptions.map((s) => <option key={s}>{s}</option>)}
            <option>Something else / not sure yet</option>
          </select>
        </div>
        <div className={f}><input className="form-control" name="budget" placeholder="Estimated budget (optional)" /></div>
        <div className="form-group col-md-12 mb-4"><input className="form-control" name="timeline" placeholder="Target timeline (optional)" /></div>
        <div className="form-group col-md-12 mb-4"><textarea className="form-control" name="details" rows="4" placeholder="Project details *" required /></div>
        <input type="text" name="website" tabIndex="-1" autoComplete="off" style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true" />
        <div className="col-md-12">
          <button type="submit" className="wl-contact-submit-btn" disabled={state.status === 'sending'}>
            <span>{state.status === 'sending' ? 'Sending Enquiry…' : 'Send Project Enquiry'}</span>
            <span className="wl-submit-btn-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </button>
          {state.msg && <p className={state.status === 'ok' ? 'wl-ok' : 'wl-err'} style={{ marginTop: 20, fontWeight: 600 }}>{state.msg}</p>}
          <p className="wl-contact-privacy-note">
            We’ll use the information you submit to respond to your enquiry and handle it according to our{' '}
            <Link href="/privacy-policy" className="wl-privacy-link">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </form>
  );
}
