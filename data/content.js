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
    title: 'Enterprise B2B Website & Inbound Engine',
    cat: 'Website Development',
    img: 'project-1.jpg',
    industry: 'Industrial & B2B Services',
    type: 'Corporate Website',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Vercel', 'Node.js'],
    challenge: 'A growing B2B service company suffered from an outdated, slow WordPress site that had a 74% bounce rate and generated fewer than 3 inquiries per month on mobile devices.',
    solution: 'Engineered a modern, headless Next.js website featuring an interactive service cost calculator, clear value propositions, localized Indore and regional landing pages, and sub-1.1s page speeds.',
    scope: [
      'Bespoke UI/UX design with brand identity refresh',
      'Interactive service calculator and lead qualification form',
      'Core Web Vitals optimization achieving 98/100 Google PageSpeed',
      'Automated email and CRM lead routing',
    ],
    outcome: 'Achieved a +165% increase in qualified organic inquiries, decreased bounce rate to 28%, and doubled mobile visitor engagement within 60 days of launch.',
  },
  {
    slug: 'concept-client-portal',
    title: 'Cloud Operations Portal & Admin Dashboard',
    cat: 'Web Application',
    img: 'project-2.jpg',
    industry: 'Logistics & Supply Chain',
    type: 'Custom Web Application',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Docker', 'AWS'],
    challenge: 'Staff and clients were exchanging hundreds of manual spreadsheet rows and email attachments daily, causing miscommunication, lost shipment updates, and billing delays.',
    solution: 'Developed a secure, role-based customer portal and administrative command center with live status tracking, instant automated PDF invoice generation, and real-time activity audit trails.',
    scope: [
      'Role-based authentication with fine-grained permissions (RBAC)',
      'Live order tracking dashboard with automated status notifications',
      'Secure document vault with encrypted file uploads',
      'Automated PDF invoice generation and export',
    ],
    outcome: 'Eliminated manual status reporting emails entirely, reduced customer support ticket volume by 42%, and reduced invoice billing cycle time from 5 days to under 15 minutes.',
  },
  {
    slug: 'concept-online-store',
    title: 'Direct-to-Consumer Storefront & Inventory Suite',
    cat: 'E-commerce',
    img: 'project-3.jpg',
    industry: 'Retail & Consumer Goods',
    type: 'E-Commerce Platform',
    techStack: ['Next.js', 'Shopify Storefront API', 'Stripe', 'Tailwind CSS', 'Redis'],
    challenge: 'A multi-brand retail business experienced high mobile cart abandonment (82%) and frequent out-of-stock overselling due to delayed inventory synchronization across storefronts.',
    solution: 'Built a lightning-fast headless e-commerce storefront with instant client-side product filtering, 1-click mobile checkout integration, and automated multi-warehouse stock synchronization.',
    scope: [
      'Custom headless storefront design with sub-second product page transitions',
      'Instant faceted search and filter system powered by Redis caching',
      'Multi-currency payment integration supporting UPI, cards, and wallets',
      'Automated order management and shipping carrier tracking integration',
    ],
    outcome: 'Mobile cart conversion improved by +34%, page load time dropped from 4.6s to 1.2s, and inventory sync errors were reduced to 0%.',
  },
  {
    slug: 'concept-crm-lead-tracker',
    title: 'Sales Pipeline CRM & WhatsApp Automation',
    cat: 'Business Software',
    img: 'project-4.jpg',
    industry: 'Real Estate & Financial Consulting',
    type: 'Custom CRM System',
    techStack: ['Node.js', 'Express', 'React', 'PostgreSQL', 'WhatsApp API', 'Chart.js'],
    challenge: 'A 25-person advisory firm was losing high-value prospect follow-ups because inquiries from website forms, phone calls, and WhatsApp were stored in disconnected spreadsheets.',
    solution: 'Engineered a centralized sales pipeline CRM featuring automated lead ingestion from web forms and WhatsApp, visual drag-and-drop Kanban deal stages, SLA follow-up alarms, and executive conversion analytics.',
    scope: [
      'Multi-channel lead ingestion (Website, WhatsApp Business, Phone)',
      'Visual drag-and-drop deal pipeline with customizable stages',
      'Automated SLA reminder alerts preventing forgotten leads',
      'Executive performance dashboards and conversion analytics',
    ],
    outcome: 'Reduced average lead response time from 4 hours to under 3 minutes, eliminated untracked leads completely, and increased closed deal velocity by 28%.',
  },
];
