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
const base = { who: 'Startups, small businesses, service providers and established teams that want a solution planned around real requirements.',
  affects: ['Scope and number of pages, features or modules', 'Integrations with third-party tools', 'Design and content requirements', 'Timeline and ongoing support needs'] };
export const services = [
  { slug: 'website-design-development', title: 'Website Design & Development', need: 'a professional website that explains what you do and brings in enquiries', items: cats[0].items, ...base },
  { slug: 'web-applications', title: 'Web Applications', need: 'a web application or portal for your team or customers', items: cats[1].items, ...base },
  { slug: 'custom-software-development', title: 'Custom Software Development', need: 'software built around your own business processes', items: cats[3].items, ...base },
  { slug: 'crm-erp-admin-panels', title: 'CRM, ERP & Admin Panels', need: 'one organised place for your records, workflows and reports', items: pick('CRM & Lead Management Systems', 'ERP & Business Management Systems', 'Admin Panels & Dashboards', 'Reports & Business Dashboards', 'Workflow & Approval Systems'), ...base },
  { slug: 'e-commerce-solutions', title: 'E-commerce Solutions', need: 'an online store that presents products clearly and supports orders', items: cats[2].items, ...base },
  { slug: 'website-maintenance-improvements', title: 'Website Maintenance & Improvements', need: 'ongoing updates, fixes and improvements for your website', items: pick('Website Maintenance & Support', 'Website Speed & Performance Optimization', 'Website Redesign & Modernization', 'Backup & Recovery Planning', 'Bug Fixes & Technical Support'), ...base },
];
export const projects = [
  { slug: 'concept-business-website', title: 'Business Website for a Service Company', cat: 'Website', img: 'project-1.jpg', industry: 'Professional services', type: 'Website', challenge: 'A service business needs a clear website that explains its offering and makes enquiries easy.', solution: 'A multi-page responsive website with a services overview, process, FAQ and enquiry form.', scope: ['Home, About, Services and Contact pages', 'Enquiry form with email notification', 'Responsive layouts and basic SEO setup'] },
  { slug: 'concept-client-portal', title: 'Client Portal & Admin Dashboard', cat: 'Web App', img: 'project-2.jpg', industry: 'Business services', type: 'Web Application', challenge: 'Customers and staff need one place to view requests, documents and status updates.', solution: 'A secure client portal with an admin dashboard for managing records and requests.', scope: ['Client login and request tracking', 'Admin dashboard and user roles', 'Document uploads and notifications'] },
  { slug: 'concept-online-store', title: 'Online Store with Order Management', cat: 'E-commerce', img: 'project-3.jpg', industry: 'Retail', type: 'E-commerce', challenge: 'A small retailer wants to sell online and keep stock and orders organised.', solution: 'A product catalogue with cart, checkout and a simple order and inventory view.', scope: ['Product catalogue and search', 'Cart, checkout and payment gateway setup', 'Order and stock management screens'] },
  { slug: 'concept-crm-lead-tracker', title: 'CRM & Lead Tracking System', cat: 'Business Software', img: 'project-4.jpg', industry: 'Sales teams', type: 'Business Software', challenge: 'A sales team tracks leads in scattered spreadsheets and misses follow-ups.', solution: 'A CRM with lead capture, pipeline stages, follow-up reminders and reports.', scope: ['Lead capture and customer records', 'Pipeline stages and follow-ups', 'Summary reports'] },
];
