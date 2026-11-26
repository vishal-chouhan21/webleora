// Ready-to-launch digital products offered under Webleora "Our Products".
// Single source of truth for Header dropdown, /products hub, and /products/wedding-themes marketing page.

export const productsCatalog = [
  {
    slug: 'wedding-themes',
    title: 'Wedding Themes & Digital Invitations',
    menuTitle: 'Wedding Invitation Themes',
    tagline: 'Interactive Save-the-Date & Royal Digital Wedding Websites',
    badge: 'Flagship Product',
    delivery: '48–72 Hour Launch',
    shortDesc:
      'Replace static PDFs with royal, mobile-first interactive wedding websites featuring 3D book or wax-seal reveals, bilingual Hindi & English support, live countdowns, music, itineraries, and Google Maps venue directions.',
    highlights: [
      '3 signature ready-to-customize royal themes',
      '3D Book, Royal Gate & Wax-Seal Envelope openers',
      'WhatsApp preview card & QR print link ready',
      'Live countdown, wedding music & Google Maps',
    ],
  },
];

export const weddingThemes = [
  {
    id: 'royal-book-reveal',
    title: 'Royal Wine & Gold — Book Reveal',
    edition: 'Theme 01 · Interactive 3D Book',
    styleTag: 'Wine Maroon, Ivory & Gold',
    subtitle: 'Signature Animated 3D Book Opening & Multi-Day Festivities Suite',
    liveUrl: 'https://dhruv-weds-nidhi.vercel.app/',
    displayUrl: 'dhruv-weds-nidhi.vercel.app',
    desc: 'Guests open an animated 3D royal cover book that unfolds over warm blush-ivory cards accented with wine maroon and antique gold. Designed for multi-day Indian weddings with ambient wedding music, a live Save-the-Date countdown, 6-day itinerary schedule, couple story, Grand Reception card, and one-tap venue directions.',
    tech: ['3D Book Reveal', 'Wedding Audio Player', 'Live Countdown', 'Multi-Day Itinerary', 'Google Maps PIN'],
    features: [
      'Captivating 3D animated book cover opening loader on launch',
      'Ambient background wedding song player with mute/play toggle',
      'Multi-day wedding festivities timeline (Jan–Dec custom dates)',
      'Grand Reception card, Save-the-Date calendar & one-tap copy address',
    ],
    preview: {
      motif: '3D Book Cover Reveal',
      invocation: 'Save the Date · Royal Wine Edition',
      couple: 'Dhruv & Nidhi',
      dateLabel: 'Multi-Day Festivities · Grand Reception',
      bgGradient: 'linear-gradient(155deg, #fffcf8 0%, #fbeae8 55%, #f3d7d3 100%)',
      accentBg: '#6e1f2f',
      accentGold: '#c9a24b',
      textColor: '#4a2a30',
      headingColor: '#6e1f2f',
      isDark: false,
      iconClass: 'fa-solid fa-book-open',
      countdown: ['42d', '09h', '28m', '14s'],
    },
    palette: [
      { name: 'Royal Wine', hex: '#6e1f2f' },
      { name: 'Antique Gold', hex: '#c9a24b' },
      { name: 'Warm Ivory', hex: '#fffcf8' },
      { name: 'Soft Blush', hex: '#fbeae8' },
    ],
  },
  {
    id: 'shubh-vivah-royal-gate',
    title: 'Shubh Vivah — Royal Gate Edition',
    edition: 'Theme 02 · Ceremonial Gate',
    styleTag: 'Parchment Ivory, Maroon & Devanagari',
    subtitle: 'Bilingual Hindi & English Editorial Invite with Photo Lightbox',
    liveUrl: 'https://wedding-session.vercel.app/',
    displayUrl: 'wedding-session.vercel.app',
    desc: 'Greets guests behind ceremonial Royal Gates before revealing sacred Ganesh blessings, double-line gold borders, and warm parchment styling. Highlights editorial Bride & Groom portraits, family introductions, Sacred Rituals & Vivah Sansmaran photo sliders with full-screen lightbox, countdown, and calendar actions.',
    tech: ['Royal Gate Opener', 'Devanagari + English', 'Couple Portraits', 'Lightbox Gallery', 'Add to Calendar'],
    features: [
      'Ceremonial Royal Gate "Open Invitation" screen with background music',
      'Bilingual Devanagari (शुभ विवाह / वर एवं वधू) & English editorial typography',
      'Bride & Groom portrait grid plus Rituals slider and full-screen Lightbox',
      'Live countdown timer, calendar save trigger & one-click address toast',
    ],
    preview: {
      motif: 'Royal Gate Entrance',
      invocation: '॥ श्री गणेशाय नमः ॥ • शुभ विवाह',
      couple: 'Kasandra weds Imanule',
      dateLabel: 'Sacred Rituals · Editorial Portraits',
      bgGradient: 'linear-gradient(155deg, #fbf3e2 0%, #f4e6c8 65%, #e8d2a6 100%)',
      accentBg: '#5c0f1d',
      accentGold: '#d4a84b',
      textColor: '#3b0912',
      headingColor: '#5c0f1d',
      isDark: false,
      iconClass: 'fa-solid fa-dungeon',
      countdown: ['18d', '14h', '40m', '05s'],
    },
    palette: [
      { name: 'Deep Maroon', hex: '#5c0f1d' },
      { name: 'Sacred Gold', hex: '#d4a84b' },
      { name: 'Parchment Cream', hex: '#fbf3e2' },
      { name: 'Crimson Ink', hex: '#3b0912' },
    ],
  },
  {
    id: 'royal-wax-seal-envelope',
    title: 'Royal Burgundy — Wax-Seal Edition',
    edition: 'Theme 03 · 3D Vintage Envelope',
    styleTag: 'Velvet Burgundy & Metallic Gold',
    subtitle: 'Dark Luxury Velvet Invite with Wax Seal, Sliders & Dress Code Guide',
    liveUrl: 'https://weddings-rouge.vercel.app',
    displayUrl: 'weddings-rouge.vercel.app',
    desc: 'An opulent dark burgundy velvet invitation introduced by an interactive 3D vintage wax-seal envelope. Includes Ganesh Vandana artwork with flickering diya accents, Hindi & English sliders for Love Story (Premkatha), Sacred Rituals, Event Schedule, a Traditional Dress Code Guide, lightbox gallery, and Google Maps venue card.',
    tech: ['3D Wax-Seal Envelope', 'Dark Velvet UI', 'Bilingual Sliders', 'Dress Code Guide', 'Lightbox Gallery'],
    features: [
      'Interactive 3D vintage wax-seal envelope opener with instant skip control',
      'Ganesh Vandana motif with metallic gold gradients & diya embellishments',
      'Interactive card sliders for Premkatha, Manglik Sanskar, Schedule & Attire',
      'Live countdown blocks, gallery lightbox modal & Google Maps navigation',
    ],
    preview: {
      motif: '3D Wax-Seal Envelope',
      invocation: '॥ शुभ विवाह ॥ • Royal Hindu Edition',
      couple: 'Kasandra & Imanule',
      dateLabel: 'Premkatha · Dress Code · Venue Map',
      bgGradient: 'linear-gradient(155deg, #2b0718 0%, #16020A 65%, #320C1C 100%)',
      accentBg: '#D4AF37',
      accentGold: '#F5DFA0',
      textColor: '#EADBCE',
      headingColor: '#F5DFA0',
      isDark: true,
      iconClass: 'fa-solid fa-envelope-open-text',
      countdown: ['27d', '06h', '12m', '49s'],
    },
    palette: [
      { name: 'Velvet Burgundy', hex: '#220613' },
      { name: 'Metallic Gold', hex: '#D4AF37' },
      { name: 'Champagne Gold', hex: '#F5DFA0' },
      { name: 'Crimson Plum', hex: '#48142B' },
    ],
  },
];

export const weddingBenefits = [
  {
    icon: 'fa-brands fa-whatsapp',
    title: 'Built for Instant WhatsApp Sharing',
    desc: 'Send one sleek custom link to every family group and outstation guest—no heavy compressed PDFs or blurry WhatsApp images.',
  },
  {
    icon: 'fa-solid fa-wand-magic-sparkles',
    title: 'Memorable First-Impression Reveals',
    desc: 'Wow guests from the first tap with 3D book openings, ceremonial royal gates, or clickable vintage wax-seal envelopes.',
  },
  {
    icon: 'fa-solid fa-language',
    title: 'English, Hindi & Regional Scripts',
    desc: 'Thoughtful bilingual typography supporting crisp Devanagari shlokas, Gujarati/Marathi titles, and modern English details.',
  },
  {
    icon: 'fa-solid fa-calendar-check',
    title: 'Complete Event Schedule & Dress Code',
    desc: 'Organize Haldi, Mehendi, Sangeet, Wedding Pheras, and Reception timings alongside dress code guidance in clean sections.',
  },
  {
    icon: 'fa-solid fa-map-location-dot',
    title: 'One-Tap Google Maps & Address Copy',
    desc: 'Guests reach the venue effortlessly with pinned Google Maps directions, copy-address toasts, and calendar reminders.',
  },
  {
    icon: 'fa-solid fa-qrcode',
    title: 'QR Print Ready for Physical Cards',
    desc: 'Embed your wedding website link as a scannable gold QR code on printed box invites so physical and digital blend seamlessly.',
  },
];

export const weddingLaunchSteps = [
  {
    step: '01',
    title: 'Pick Your Wedding Theme',
    desc: 'Choose from Royal Wine Book Reveal, Shubh Vivah Royal Gate, or Royal Burgundy Wax Seal based on your ceremony aesthetic.',
  },
  {
    step: '02',
    title: 'Send Photos, Text & Music',
    desc: 'Share couple photos, family names, function dates, venue Google Maps links, and an optional wedding song via WhatsApp or form.',
  },
  {
    step: '03',
    title: 'Staging Link & Revisions',
    desc: 'Within 48 hours we send your personalized live staging URL so both families can verify spellings, timings, and photos.',
  },
  {
    step: '04',
    title: 'Go Live & Share Worldwide',
    desc: 'Receive your final hosted link, WhatsApp preview card setup, and optional custom domain ready to invite guests effortlessly.',
  },
];

export const weddingPackages = [
  {
    name: 'Theme Express Edition',
    tag: 'Most Popular',
    turnaround: '48 Hours Delivery',
    idealFor: 'Couples & families who love one of our 3 live themes and want fast personalization.',
    deliverables: [
      'Choice of any 1 live wedding theme (Book, Gate, or Wax-Seal)',
      'Custom couple names, family blessings & ceremony timeline',
      'Couple & pre-wedding photo gallery integration',
      'Live countdown timer & background music track setup',
      'Google Maps venue link & WhatsApp-friendly Open Graph card',
    ],
  },
  {
    name: 'Royal Bilingual & Custom Domain',
    tag: 'Complete Celebration',
    turnaround: '2–3 Days Delivery',
    idealFor: 'Grand multi-day weddings needing Hindi/regional personalization and a dedicated couple URL.',
    deliverables: [
      'Everything in Theme Express Edition',
      'Bilingual English + Hindi / Gujarati / Marathi section copy',
      'Custom domain hookup (e.g., namewedsname.com) + SSL',
      'Dress Code Guide + Unlimited ceremony cards (Haldi to Reception)',
      'Print-ready high-resolution QR code for physical invite boxes',
    ],
  },
  {
    name: 'Wedding Planners & Agencies',
    tag: 'Multi-Client / Bespoke',
    turnaround: 'Priority Custom SLA',
    idealFor: 'Event planners, photographers, or families requesting bespoke illustrations or RSVP dashboards.',
    deliverables: [
      'Custom color palette, crest logo & personalized illustrations',
      'Interactive RSVP form collecting guest count & travel details',
      'Guest pass / table allocation lookup or WhatsApp alert hooks',
      'White-label agency partnership support for wedding studios',
      'Dedicated engineer support through the wedding weekend',
    ],
  },
];

export const weddingFaqs = [
  [
    'How quickly will my personalized wedding website be ready?',
    'Once you share your couple names, family details, event schedule, venue Google Maps link, and photographs, our team delivers your personalized live staging link within 48 hours so you can review everything before sharing.',
  ],
  [
    'Can I preview each of the 3 themes on my phone before choosing?',
    'Yes. All three demos (Dhruv & Nidhi Royal Book Reveal, Shubh Vivah Royal Gate, and Royal Burgundy Wax-Seal) are live and mobile-first. You can tap "Live Demo" on any card above to test the animations, music toggle, and sliders right on your smartphone.',
  ],
  [
    'Can we customize the colors, Hindi/English shlokas, event names, and wedding song?',
    'Completely. Every element—from opening invocations (Ganesh Vandana, Save-the-Date badges, or custom couple monograms) and dress code rules to background music MP3 tracks and multiple ceremony cards—is tailored to your wedding traditions.',
  ],
  [
    'What if our reception timing or venue hall changes after sharing the link?',
    'Unlike printed cards or static PDFs that cannot be changed once forwarded, your wedding website updates instantly from a single link. Guests opening the same WhatsApp link immediately see the updated timing or venue directions.',
  ],
  [
    'Can we use our own custom domain name like rahulwedspriya.com?',
    'Yes. Every website can be hosted on a clean fast Vercel link out of the box or connected to your own custom `.com` / `.in` couple domain with full HTTPS security and QR code export for your physical invitation boxes.',
  ],
];
