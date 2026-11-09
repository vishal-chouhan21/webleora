import doc from './doc.json';
export const cats = doc.cats;
export const steps = doc.steps;

export const catIntro = {
  A: 'Professional websites engineered to communicate your value clearly, outrank competitors, and generate consistent business inquiries.',
  B: 'High-performance web applications, customer portals, and SaaS platforms built around modern React and Node.js architectures.',
  C: 'Scalable e-commerce storefronts with frictionless checkout, inventory synchronization, and automated order workflows.',
  D: 'Bespoke enterprise software, CRM systems, and ERP dashboards tailored to simplify complex business operations.',
  E: 'Native and cross-platform mobile apps for iOS and Android built with Flutter and React Native.',
  F: 'Conversion-focused UI/UX design, interactive design prototypes, and brand identities.',
  G: 'Data-backed search engine optimization, technical SEO audits, and ROI-driven digital growth strategies.',
  H: 'API integrations, automated business workflows, and smart automation systems.',
  I: 'Cloud infrastructure setup, AWS/Vercel deployments, cybersecurity best practices, and 24/7 ongoing SLA support.',
};

const base = {
  affects: [
    'Scope and complexity of features, custom workflows, or user roles',
    'Third-party software, payment gateway, and CRM/ERP integrations',
    'Custom UI/UX animation, interactive components, and asset creation',
    'Project timeline urgency and ongoing maintenance SLA level',
  ],
};

export const why = [
  [
    'Modern Full-Stack Engineering',
    'We build with battle-tested modern tech: Next.js, React, Node.js, Python, PostgreSQL, and AWS—guaranteeing sub-1.5s load times and 90+ PageSpeed scores.',
  ],
  [
    'Milestone-Based Fixed Pricing',
    'No hidden fees or scope creep. You receive a comprehensive written scope, fixed pricing milestones, and clear delivery dates before any work starts.',
  ],
  [
    'Direct Access to Senior Engineers',
    'Work directly with senior software architects and designers who write the code—no non-technical account managers or communication delays.',
  ],
  [
    '100% Code & IP Ownership',
    'Upon completion, you receive full source code, GitHub repository access, design files, and complete intellectual property ownership with zero vendor lock-in.',
  ],
  [
    'Local Indore Roots, Global Standards',
    'Headquartered in Indore, Madhya Pradesh, we combine accessible, dedicated local collaboration with international engineering quality for clients worldwide.',
  ],
];

export const faqs = [
  [
    'How much does a website or custom software cost?',
    'Our pricing is transparent and milestone-based. A professional business website starts at ₹25,000 ($350) for modern design, responsive mobile layouts, and technical SEO. Custom web applications, client portals, and e-commerce stores typically range from ₹65,000 to ₹1,80,000 ($850 to $2,400) depending on modules, integrations, and database architecture. Enterprise software and custom CRM/ERP platforms are scoped per milestone. We provide a guaranteed fixed-cost proposal before development begins.',
  ],
  [
    'What are your typical project delivery timelines?',
    'Standard business websites are typically delivered in 2 to 3 weeks. Custom web applications, portals, and e-commerce platforms take between 4 to 8 weeks, organized into structured sprints (Discovery, UI/UX Wireframing, Development, Testing, and Deployment). You receive weekly staging links to test features as they are built.',
  ],
  [
    'What is included with every Webleora project?',
    'Every project includes custom UI/UX design, mobile responsiveness, semantic HTML & SEO architecture, Core Web Vitals speed optimization, SSL security, contact form automation, cross-browser testing, 30 days of post-launch technical warranty, and complete source code ownership.',
  ],
  [
    'Do I own the final code and design assets?',
    'Yes, 100%. Upon final project milestone completion, full source code, GitHub repositories, Figma design assets, administrative credentials, and all intellectual property rights belong exclusively to you with zero vendor lock-in.',
  ],
  [
    'Can you redesign or take over an existing website or software?',
    'Yes. We perform a comprehensive technical audit of your existing codebase, database, or CMS, identify performance bottlenecks and security vulnerabilities, and outline a clear modernization or rebuilding plan.',
  ],
  [
    'Where is Webleora based and do you serve international clients?',
    'We are headquartered in Indore, Madhya Pradesh, India (403 Gulab Bagh, 452010). We serve growing companies locally in Indore, pan-India, and international clients across the US, UK, Canada, and UAE with seamless async communication, video consultations, and transparent project tracking.',
  ],
];

export const services = [
  {
    slug: 'website-design-development',
    title: 'Website Design & Development',
    need: 'a modern, high-converting website that establishes authority and drives qualified business inquiries',
    who: 'B2B companies, service providers, startups, and growing enterprises looking for custom, fast-loading websites built on modern stacks.',
    items: cats[0].items,
    affects: base.affects,
    faqs: [
      [
        'Will my website be mobile-friendly and fast?',
        'Yes. We follow a mobile-first responsive design approach and optimize Core Web Vitals to achieve sub-1.5s load times and 90+ Google PageSpeed scores.',
      ],
      [
        'Can I update text, images, and blogs myself?',
        'Yes. We can integrate an intuitive headless CMS (such as Sanity, Strapi, or WordPress API) allowing your team to update content effortlessly without touching code.',
      ],
      [
        'Is search engine optimization (SEO) included?',
        'Every website we engineer includes foundational on-page SEO: semantic HTML5 tags, Open Graph meta previews, automated XML sitemaps, robots.txt, and fast server rendering.',
      ],
    ],
  },
  {
    slug: 'web-applications',
    title: 'Web Applications & Portals',
    need: 'a scalable web application, customer dashboard, or SaaS platform',
    who: 'Startups, operational teams, and businesses requiring online customer portals, dashboards, or subscription SaaS tools.',
    items: cats[1].items,
    affects: base.affects,
    faqs: [
      [
        'What tech stack do you use for web applications?',
        'We primarily build with React, Next.js, Node.js, Express, Python, PostgreSQL, MongoDB, and Redis, deployed on scalable cloud infrastructure like AWS or Vercel.',
      ],
      [
        'Can users have different permission levels and roles?',
        'Yes. We implement robust Role-Based Access Control (RBAC) allowing admins, staff, clients, and partners to access designated modules securely.',
      ],
      [
        'Can the web application integrate with third-party APIs?',
        'Yes. We integrate REST and GraphQL APIs for payment gateways (Stripe, Razorpay), CRMs (HubSpot, Salesforce), accounting, WhatsApp, and email platforms.',
      ],
    ],
  },
  {
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    need: 'tailor-made software built around your unique internal business workflows and data',
    who: 'Enterprises and growing businesses with specialized operational workflows that off-the-shelf software cannot adequately handle.',
    items: cats[3].items,
    affects: base.affects,
    faqs: [
      [
        'Why should I choose custom software over SaaS subscriptions?',
        'Custom software eliminates recurring monthly per-user licensing fees, adapts 100% to your unique workflow, and becomes an appreciating asset that you fully own.',
      ],
      [
        'How do you ensure data security and compliance?',
        'We implement industry-standard encryption (AES-256 at rest, TLS 1.3 in transit), secure authentication (JWT/OAuth), automated database backups, and rigorous security testing.',
      ],
    ],
  },
  {
    slug: 'crm-erp-admin-panels',
    title: 'CRM, ERP & Admin Panels',
    need: 'one centralized system to manage leads, inventory, invoicing, team tasks, and executive reporting',
    who: 'Business owners, operations directors, and sales managers who want to eliminate chaotic spreadsheets and track business operations in one intuitive dashboard.',
    items: cats[3].items,
    affects: base.affects,
    faqs: [
      [
        'Can you migrate our existing spreadsheets and legacy data?',
        'Yes. We clean, normalize, and safely migrate your historical records from Excel, Google Sheets, or legacy software into the new centralized database.',
      ],
      [
        'Can the CRM connect to WhatsApp and email for lead notifications?',
        'Yes. We integrate WhatsApp Business API and SMTP/SendGrid so sales reps receive real-time notifications the moment a new inquiry arrives.',
      ],
    ],
  },
  {
    slug: 'e-commerce-solutions',
    title: 'E-commerce Solutions',
    need: 'a high-converting online store with seamless payment processing, inventory tracking, and order management',
    who: 'DTC brands, wholesalers, and retail merchants looking to scale direct online sales with custom storefronts or headless e-commerce.',
    items: cats[2].items,
    affects: base.affects,
    faqs: [
      [
        'Which e-commerce platform is best for my business?',
        'We help you choose between Shopify, WooCommerce, or a headless Next.js e-commerce architecture based on your catalog size, custom workflow needs, and transaction volume.',
      ],
      [
        'Which payment gateways can you integrate?',
        'We integrate Razorpay, Cashfree, Stripe, PayPal, Paytm, and PayU, supporting UPI, credit/debit cards, net banking, and international multi-currency transactions.',
      ],
    ],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    need: 'intuitive iOS and Android mobile applications that deliver smooth mobile user experiences',
    who: 'Brands, startups, and service companies looking to engage mobile users with reliable, high-performance native and cross-platform apps.',
    items: cats[4].items,
    affects: base.affects,
    faqs: [
      [
        'Do you build for both iOS and Android?',
        'Yes. We specialize in cross-platform development using Flutter and React Native, which reduces development costs by up to 40% while maintaining native performance on both Apple iOS and Android.',
      ],
      [
        'Do you handle App Store and Google Play publishing?',
        'Yes. We assist with developer account setup, app store guidelines compliance, screenshot generation, and the full submission process.',
      ],
    ],
  },
  {
    slug: 'digital-marketing-seo',
    title: 'Digital Marketing & SEO',
    need: 'proven search engine visibility, local SEO dominance, and high-ROI digital marketing campaigns',
    who: 'Businesses seeking consistent organic Google traffic, higher local search rankings in Indore and regional markets, and qualified inbound leads.',
    items: cats[6].items,
    affects: base.affects,
    faqs: [
      [
        'How long does SEO take to show results?',
        'Foundational technical fixes and local Google Business Profile improvements often show initial gains in 3 to 6 weeks. Competitive organic keyword ranking typically produces compounding ROI within 3 to 6 months.',
      ],
      [
        'Do you handle Local SEO for Indore businesses?',
        'Yes. We optimize Google Business Profiles, localized landing pages, NAP citations, Google Maps ranking, and customer review workflows specifically for Indore and Central India.',
      ],
    ],
  },
  {
    slug: 'it-consulting-cloud',
    title: 'IT Consulting & Cloud Solutions',
    need: 'strategic technology advisory, cloud infrastructure architecture, and technical roadmap planning',
    who: 'Founders, CTOs, and business leaders seeking expert guidance on architecture, cloud migrations, tech stack selection, and software scalability.',
    items: cats[8].items,
    affects: base.affects,
    faqs: [
      [
        'Can you help us choose the right architecture for a new product?',
        'Yes. We analyze your product vision, scalability needs, and budget to recommend the most cost-effective, scalable architecture and database structure.',
      ],
      [
        'Which cloud platforms do you support?',
        'We design and manage environments across Amazon Web Services (AWS), Google Cloud Platform (GCP), DigitalOcean, and Vercel.',
      ],
    ],
  },
  {
    slug: 'website-maintenance-improvements',
    title: 'Website Maintenance & Speed Optimization',
    need: 'ongoing technical maintenance, security monitoring, speed enhancements, and bug fixes',
    who: 'Businesses that require dependable, on-demand software engineers to keep their digital infrastructure fast, secure, and always up to date.',
    items: cats[8].items,
    affects: base.affects,
    faqs: [
      [
        'Can you maintain websites built by other agencies?',
        'Yes. We conduct an initial health audit to assess code quality, hosting configuration, and dependencies, then establish an SLA maintenance plan.',
      ],
      [
        'What is included in monthly maintenance?',
        'Monthly plans include core framework updates, security vulnerability scanning, daily cloud backups, 24/7 uptime monitoring, Core Web Vitals speed tuning, and allocated hours for content updates and new feature development.',
      ],
    ],
  },
];

export const projects = [
  {
    slug: 'concept-business-website',
    title: 'Enterprise B2B Website Architecture',
    cat: 'Website Development',
    img: 'project-1.jpg',
    industry: 'Industrial & B2B Services',
    type: 'Sample Concept Project',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Vercel', 'Node.js'],
    challenge: 'Demonstrating how B2B companies can replace outdated, slow websites with a fast, modern lead-generation architecture.',
    solution: 'A headless Next.js web architecture featuring interactive qualification forms, clear service hierarchies, and sub-1.2s page load performance.',
    scope: [
      'Modular UI/UX design system with reusable component library',
      'Interactive service calculator and lead qualification flow',
      'Core Web Vitals optimization achieving 95+ PageSpeed scores',
      'Automated email lead routing and notification workflow',
    ],
    outcome: 'Sub-1.2s First Contentful Paint, mobile-first responsive layout, and clean semantic SEO structure ready for high-intent business search indexing.',
  },
  {
    slug: 'concept-client-portal',
    title: 'Operations Portal & Admin Dashboard',
    cat: 'Web Application',
    img: 'project-2.jpg',
    industry: 'Logistics & Supply Chain',
    type: 'Sample Concept Project',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Docker', 'AWS'],
    challenge: 'Demonstrating how businesses can replace manual spreadsheet communications with a centralized client operations portal.',
    solution: 'A secure, role-based web application with live order tracking, automated PDF invoice generation, and audit logging.',
    scope: [
      'Role-based access control with granular staff/client permissions (RBAC)',
      'Live status dashboard with real-time progress indicators',
      'Secure document vault with encrypted file handling',
      'Automated invoice generation and export capabilities',
    ],
    outcome: 'Clean multi-tenant relational database schema, JWT-secured REST API endpoints, and responsive administrative dashboards.',
  },
  {
    slug: 'concept-online-store',
    title: 'Headless E-Commerce Storefront',
    cat: 'E-commerce',
    img: 'project-3.jpg',
    industry: 'Retail & Consumer Goods',
    type: 'Sample Concept Project',
    techStack: ['Next.js', 'Shopify Storefront API', 'Stripe', 'Tailwind CSS', 'Redis'],
    challenge: 'Demonstrating how to overcome slow e-commerce page transitions and checkout friction with modern headless frontend architecture.',
    solution: 'A headless e-commerce store with instant client-side product filtering, streamlined checkout flows, and dynamic cart state.',
    scope: [
      'Headless storefront design with sub-second page transitions',
      'Instant multi-parameter product filter and search system',
      'Payment gateway integration supporting cards, UPI, and digital wallets',
      'Synchronized order state and inventory notification architecture',
    ],
    outcome: 'Sub-1.0s catalog navigation, zero-layout-shift UI, and optimized mobile-first checkout workflow.',
  },
  {
    slug: 'concept-crm-lead-tracker',
    title: 'Sales Pipeline CRM & Inbound System',
    cat: 'Business Software',
    img: 'project-4.jpg',
    industry: 'Real Estate & Financial Consulting',
    type: 'Sample Concept Project',
    techStack: ['Node.js', 'Express', 'React', 'PostgreSQL', 'WhatsApp API', 'Chart.js'],
    challenge: 'Demonstrating how multi-channel inquiries (forms, chat, phone) can be centralized into a structured visual sales pipeline.',
    solution: 'A custom CRM system featuring Kanban deal stages, lead assignment rules, follow-up notifications, and executive conversion reporting.',
    scope: [
      'Unified lead ingestion from web forms and contact channels',
      'Visual drag-and-drop deal pipeline with customizable stages',
      'Follow-up reminder and notification scheduler',
      'Executive performance dashboards and conversion analytics',
    ],
    outcome: 'Centralized lead repository, automated lead status alerts, and scalable relational schema design.',
  },
];
