import nodemailer from 'nodemailer';
export const runtime = 'nodejs';

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const clean = (v) => String(v ?? '').replace(/<[^>]*>/g, '').trim().slice(0, 5000);
const wrap = (title, inner) =>
  `<div style="background:#f3f5fb;padding:30px 12px;font-family:Arial,Helvetica,sans-serif;color:#333"><table align="center" width="600" style="max-width:600px;width:100%;background:#fff;border-radius:14px;overflow:hidden" cellpadding="0" cellspacing="0">` +
  `<tr><td style="background:#4D51AB;padding:24px 30px;color:#fff;font-size:22px;font-weight:bold">Webleora</td></tr>` +
  `<tr><td style="padding:30px"><h2 style="margin:0 0 20px;font-size:20px;color:#1a1a3d">${title}</h2>${inner}</td></tr>` +
  `<tr><td style="padding:16px 30px;background:#f3f5fb;font-size:12px;color:#777">Webleora · Thoughtful Digital Solutions</td></tr></table></div>`;

export async function POST(req) {
  const fail = (error, status = 400) => Response.json({ ok: false, error }, { status });
  let form;
  try { form = await req.formData(); } catch { return fail('Invalid request.'); }
  if (form.get('website')) return Response.json({ ok: true }); // honeypot

  const g = (k) => clean(form.get(k));
  const name = g('name'), email = g('email'), details = g('details');
  if (!name || !details || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return fail('Please fill in your name, a valid email and project details.');

  const fields = { Name: name, Email: email, Company: g('company'), 'Country / Time zone': g('country'), 'Service of interest': g('service'), 'Estimated budget': g('budget'), 'Target timeline': g('timeline') };
  const rows = Object.entries(fields).filter(([, v]) => v).map(([k, v]) =>
    `<tr><td style="padding:10px 12px;border-bottom:1px solid #eee;font-weight:bold;width:170px;vertical-align:top">${esc(k)}</td><td style="padding:10px 12px;border-bottom:1px solid #eee">${esc(v)}</td></tr>`).join('');
  const html = wrap('New project enquiry', `<table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px">${rows}</table><h3 style="margin:24px 0 8px;font-size:16px;color:#1a1a3d">Project details</h3><div style="font-size:14px;line-height:1.6;background:#f3f5fb;padding:16px;border-radius:10px">${esc(details).replace(/\n/g, '<br>')}</div>`);
  const text = Object.entries(fields).filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join('\n') + `\n\nProject details:\n${details}\n`;

  const port = Number(process.env.SMTP_PORT || 587);
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST, port, secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
  const from = process.env.MAIL_FROM || process.env.SMTP_USER;
  const to = process.env.MAIL_TO || process.env.SMTP_USER;

  try {
    await transport.sendMail({ from: `"Webleora Website" <${from}>`, to, replyTo: `"${name.replace(/"/g, '')}" <${email}>`, subject: `New project enquiry from ${name}`, html, text });
  } catch (e) {
    console.error('Mail error:', e);
    return fail('We could not send your enquiry right now. Please try again later.', 500);
  }
  if (process.env.AUTO_REPLY !== 'false') {
    try {
      await transport.sendMail({
        from: `"Webleora" <${from}>`, to: email, replyTo: to, subject: 'Thank you for contacting Webleora',
        html: wrap(`Thank you, ${esc(name)}`, '<p style="font-size:14px;line-height:1.7">Thank you for contacting Webleora. We have received your enquiry and will review the details you shared. We will get back to you using the contact details you provided.</p><p style="font-size:14px;line-height:1.7">If you would like to add anything, simply reply to this email.</p>'),
        text: `Hi ${name},\n\nThank you for contacting Webleora. We have received your enquiry and will get back to you using the details you provided.\n\nWebleora`,
      });
    } catch (e) { console.error('Auto-reply error:', e); }
  }
  return Response.json({ ok: true });
}
