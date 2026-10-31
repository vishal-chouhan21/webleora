import site from '@/config/site';
import { PageHeader } from '@/components/ui';
export const metadata = { title: 'Privacy Policy' };
export default function Page() {
  return (<><PageHeader title="Privacy Policy" /><div className="page-section"><div className="container wl-plain">
    <h2>Information we collect</h2><p>When you submit the enquiry form we receive the details you provide, such as your name, email, company, country, project details, budget and timeline.</p>
    <h2>How we use it</h2><p>We use this information only to respond to your enquiry, discuss your project and prepare a scope or estimate. We do not sell your information.</p>
    <h2>Retention and your choices</h2><p>We keep enquiry details only as long as needed for these purposes. You can ask us to access, correct or delete your information at any time.</p>
    <h2>Contact</h2><p>Questions? Email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
    <p><em>Draft text. Have it reviewed against your legal entity and local requirements before launch.</em></p>
  </div></div></>);
}
