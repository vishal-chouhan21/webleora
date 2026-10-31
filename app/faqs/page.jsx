import { PageHeader, Title, Cta } from '@/components/ui';
import Accordion from '@/components/Accordion';
import { faqs } from '@/data/content';
export const metadata = { title: 'FAQs' };
export default function Faqs() {
  return (<><PageHeader title="FAQs" /><div className="our-faqs"><div className="container"><Title sub="faq">Frequently asked questions</Title><Accordion items={faqs} /></div></div><Cta /></>);
}
