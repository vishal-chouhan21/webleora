import { PageHeader, Title, Cta } from '@/components/ui';
import Accordion from '@/components/Accordion';
import { faqs } from '@/data/content';
export const metadata = {
  title: 'Frequently Asked Questions (FAQs) | Webleora',
  description:
    'Find clear answers about Webleora’s development process, project timelines, deliverables, technology stack, and pricing details.',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Frequently Asked Questions (FAQs) | Webleora',
    description:
      'Find clear answers about Webleora’s development process, project timelines, deliverables, and pricing.',
    url: './',
    type: 'website',
  },
};

export default function Faqs() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHeader title="FAQs" />
      <div className="our-faqs">
        <div className="container">
          <Title sub="faq">Frequently asked questions</Title>
          <Accordion items={faqs} />
        </div>
      </div>
      <Cta />
    </>
  );
}
