import doc from './doc.json';
export const cats = doc.cats;
export const faqs = doc.faqs;
export const steps = doc.steps;
export const why = doc.why;
const all = cats.flatMap((c) => c.items);
const pick = (...n) => n.map((x) => all.find((i) => i[0] === x)).filter(Boolean);
export const catIntro = {
  A: 'Professional websites that explain your value clearly and make the next step easy for visitors.',
  B: 'Browser-based applications and portals built around a defined business workflow.',
  C: 'Online stores and selling workflows, from product catalogues to checkout and orders.',
  D: 'Software, CRM and operations systems shaped around how your business actually works.',
  E: 'Mobile applications delivered through our own team or a reliable specialist partner.',
  F: 'Interface design, prototypes and brand assets that keep the experience clear and consistent.',
  G: 'Search visibility, content and measurement to help the right people find you.',
  H: 'Connect your tools, reduce repetitive work and explore practical AI-assisted workflows.',
  I: 'Hosting, deployment, security basics and support to keep your solution running well.',
};
const base = {
  affects: [
    'Scope and number of pages, features or modules',
    'Integrations with third-party tools',
    'Design and content requirements',
    'Timeline and ongoing support needs',
  ],
};

export const services = [
  {
    slug: 'website-design-development',
    title: 'Website Design & Development',
    need: 'a professional website that explains what you do and brings in enquiries',
    who: 'Businesses, startups, professionals and companies looking for clear, responsive websites or redesigns that explain their offer clearly and work across devices.',
    items: cats[0].items,
    affects: base.affects,
    faqs: [
      [
        'Will my website work on mobile?',
        'We plan responsive layouts so the website can adapt to common screen sizes. The final behaviour depends on the agreed design and features.',
      ],
      [
        'Can you redesign my existing website?',
        'Yes, after reviewing the current website and understanding what needs to change.',
      ],
      [
        'Can I update the content myself?',
        'That depends on the platform and content-management features included in the project. We’ll explain the available options during planning.',
      ],
      [
        'Will you provide domain and hosting?',
        'Domain and hosting services are provided by third-party providers. We can discuss setup or configuration as part of the agreed scope.',
      ],
    ],
  },
  {
    slug: 'web-applications',
    title: 'Web Applications',
    need: 'a web application or portal for your team or customers',
    who: 'Teams, growing businesses and operations that need online tools, portals, dashboards or workflows to complete important tasks.',
    items: cats[1].items,
    affects: base.affects,
    faqs: [
      [
        'Can users have different access levels?',
        'Role-based access can be included where it is part of the agreed requirements.',
      ],
      [
        'Can you connect the application to another system?',
        'Possibly. We review the other system’s available integration options and confirm feasibility during planning.',
      ],
      [
        'Can the application be expanded later?',
        'Future improvements can be planned based on the original scope and the application’s technical structure.',
      ],
    ],
  },
  {
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    need: 'software built around your own business processes',
    who: 'Businesses with unique workflows, repetitive manual tasks or operational requirements that ready-made off-the-shelf software cannot fulfill.',
    items: cats[3].items,
    affects: base.affects,
    faqs: [
      [
        'Should I build custom software or use an existing tool?',
        'If an existing tool meets most of your needs, it may be the more practical choice. We’ll discuss the trade-offs based on your requirements.',
      ],
      [
        'Can you take over software someone else started?',
        'We can review the existing code and access first. After that, we can discuss whether improvement or rebuilding is practical.',
      ],
      [
        'Who owns the final work?',
        'Ownership, source code, access and handover terms are set out in the project agreement.',
      ],
    ],
  },
  {
    slug: 'crm-erp-admin-panels',
    title: 'CRM, ERP & Admin Panels',
    need: 'one organised place for your records, workflows and reports',
    who: 'Growing teams and operations managers needing to organise leads, inventory, orders, permissions and reports in one structured system.',
    items: pick(
      'CRM & Lead Management Systems',
      'ERP & Business Management Systems',
      'Admin Panels & Dashboards',
      'Reports & Business Dashboards',
      'Workflow & Approval Systems'
    ),
    affects: base.affects,
    faqs: [
      [
        'Can you import data from Excel or Google Sheets?',
        'Data import can be included after reviewing the format, quality and volume of the existing data.',
      ],
      [
        'Can different staff members have different access?',
        'Role-based access can be included where it is part of the agreed requirements.',
      ],
      [
        'Can the system connect to WhatsApp, email or accounting tools?',
        'That depends on the tools’ available integrations, provider terms and account permissions. We confirm feasibility during planning.',
      ],
      [
        'Do I need a custom CRM or ERP?',
        'Not always. We’ll discuss whether an existing product or a custom solution is a better fit for your needs.',
      ],
    ],
  },
  {
    slug: 'e-commerce-solutions',
    title: 'E-commerce Solutions',
    need: 'an online store that presents products clearly and supports orders',
    who: 'Retailers, direct-to-consumer brands and product sellers looking for an intuitive online store and manageable order handling.',
    items: cats[2].items,
    affects: base.affects,
    faqs: [
      [
        'Should I choose Shopify, WooCommerce or a custom store?',
        'The right option depends on your products, budget, team and required features. We’ll explain the trade-offs before recommending an approach.',
      ],
      [
        'Can you move products from my existing store or spreadsheet?',
        'Product migration can be included after reviewing the source data and agreed scope.',
      ],
      [
        'Are payment gateways guaranteed to approve my business?',
        'No. Payment providers review and approve businesses according to their own requirements. Approval and timing are outside our control.',
      ],
      [
        'Who confirms tax and shipping rules?',
        'We can configure the options agreed for the store. You should confirm tax and business rules with your accountant or relevant adviser.',
      ],
    ],
  },
  {
    slug: 'website-maintenance-improvements',
    title: 'Website Maintenance & Improvements',
    need: 'ongoing updates, fixes and improvements for your website',
    who: 'Website owners and businesses that need regular updates, bug fixes, performance monitoring and reliable technical support.',
    items: pick(
      'Website Maintenance & Support',
      'Website Speed & Performance Optimization',
      'Website Redesign & Modernization',
      'Backup & Recovery Planning',
      'Bug Fixes & Technical Support'
    ),
    affects: base.affects,
    faqs: [
      [
        'Can you maintain a website built by someone else?',
        'Often, yes. We first review the platform, code and available access.',
      ],
      [
        'Is hosting included?',
        'Hosting and domain services are provided by third-party providers. Setup or management can be discussed as part of the agreed scope.',
      ],
      [
        'Do you guarantee that a website will never be hacked or go offline?',
        'No website can be guaranteed to be completely free from security issues or downtime. We can discuss suitable maintenance measures and the scope of support.',
      ],
    ],
  },
];
export const projects = [
  { slug: 'concept-business-website', title: 'Business Website for a Service Company', cat: 'Website', img: 'project-1.jpg', industry: 'Professional services', type: 'Website', challenge: 'A service business needs a clear website that explains its offering and makes enquiries easy.', solution: 'A multi-page responsive website with a services overview, process, FAQ and enquiry form.', scope: ['Home, About, Services and Contact pages', 'Enquiry form with email notification', 'Responsive layouts and basic SEO setup'] },
  { slug: 'concept-client-portal', title: 'Client Portal & Admin Dashboard', cat: 'Web App', img: 'project-2.jpg', industry: 'Business services', type: 'Web Application', challenge: 'Customers and staff need one place to view requests, documents and status updates.', solution: 'A secure client portal with an admin dashboard for managing records and requests.', scope: ['Client login and request tracking', 'Admin dashboard and user roles', 'Document uploads and notifications'] },
  { slug: 'concept-online-store', title: 'Online Store with Order Management', cat: 'E-commerce', img: 'project-3.jpg', industry: 'Retail', type: 'E-commerce', challenge: 'A small retailer wants to sell online and keep stock and orders organised.', solution: 'A product catalogue with cart, checkout and a simple order and inventory view.', scope: ['Product catalogue and search', 'Cart, checkout and payment gateway setup', 'Order and stock management screens'] },
  { slug: 'concept-crm-lead-tracker', title: 'CRM & Lead Tracking System', cat: 'Business Software', img: 'project-4.jpg', industry: 'Sales teams', type: 'Business Software', challenge: 'A sales team tracks leads in scattered spreadsheets and misses follow-ups.', solution: 'A CRM with lead capture, pipeline stages, follow-up reminders and reports.', scope: ['Lead capture and customer records', 'Pipeline stages and follow-ups', 'Summary reports'] },
];
