import site from '@/config/site';
import { PageHeader } from '@/components/ui';
export const metadata = { title: 'Terms & Conditions' };
export default function Page() {
  return (<><PageHeader title="Terms & Conditions" /><div className="page-section"><div className="container wl-plain">
    <h2>Use of this website</h2><p>The content on this website is provided for general information about Webleora’s services and does not form an offer or contract.</p>
    <h2>Projects</h2><p>Scope, deliverables, timelines, pricing, ownership and support terms are agreed in writing for each project before work begins.</p>
    <h2>No guarantees</h2><p>We do not guarantee specific rankings, sales, conversion rates or delivery times from using this website or our services.</p>
    <h2>Contact</h2><p>Questions? Email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
    <p><em>Draft text. Have it reviewed against your legal entity and local requirements before launch.</em></p>
  </div></div></>);
}
