// Ready-to-launch digital products offered under Webleora "Our Products".
// Single source of truth for Header dropdown, /products hub, and /products/wedding-themes marketing page.

export const productsCatalog = [
  {
    slug: 'wedding-themes',
    title: 'Wedding, Birthday, Anniversary & Party Templates',
    menuTitle: 'Wedding & Event Themes',
    tagline: 'Interactive Save-the-Date & Custom Celebration Invitation Websites',
    badge: 'Flagship Product',
    delivery: '48–72 Hour Launch',
    shortDesc:
      'Replace static PDFs with royal, mobile-first interactive websites for Weddings, Birthdays, Anniversaries, Housewarmings, and Parties—featuring 3D book, gate, or wax-seal reveals, music, countdowns, photo galleries, itineraries, and Google Maps venue directions.',
    highlights: [
      'Built for Weddings, Birthdays, Anniversaries & Parties',
      '3D Book, Royal Gate & Wax-Seal Envelope openers',
      'WhatsApp preview card & QR print link ready',
      'Live countdown, event music & Google Maps PIN',
    ],
  },
];

export const occasionTemplates = [
  {
    icon: 'fa-heart',
    tag: 'Weddings & Engagements',
    title: 'Weddings, Ring Ceremonies & Engagements',
    desc: 'Multi-day celebrations including Haldi, Mehendi, Sangeet, Baraat, and Reception with bilingual Hindi & English blessings, family cards, and Google Maps venue pins.',
    includes: ['3D Book, Gate or Wax-Seal Opener', 'Multi-Event Schedule & Dress Code'],
  },
  {
    icon: 'fa-cake-candles',
    tag: 'Birthdays · Kids to Milestones',
    title: 'Birthday Parties (1st Birthday to 50th Milestone)',
    desc: 'Playful or glamorous interactive invitation sites for kids’ 1st birthdays, Sweet 16s, 21st/30th bash nights, and 50th surprise parties with party themes and countdowns.',
    includes: ['Animated Theme Entrance & Music', 'Party Schedule, Photo Gallery & Map'],
  },
  {
    icon: 'fa-champagne-glasses',
    tag: 'Anniversaries & Jubilees',
    title: '25th Silver & 50th Golden Wedding Anniversaries',
    desc: 'Honor decades together with custom couple story sliders, "Through the Years" memory galleries, evening gala schedule, and easy WhatsApp sharing for relatives worldwide.',
    includes: ['Couple Timeline & Memory Slider', 'Blessings, Toast Details & Venue Route'],
  },
  {
    icon: 'fa-gift',
    tag: 'Parties & Evening Galas',
    title: 'Cocktail Nights, Sangeet & Private Parties',
    desc: 'Sleek dark-velvet or metallic-gold digital invites built for private cocktail evenings, bachelor/bachelorette nights, farewells, and VIP weekend celebrations.',
    includes: ['Dress Code Guide (Paridhan Card)', 'Custom Playlist Toggle & Instant Share'],
  },
  {
    icon: 'fa-house-chimney',
    tag: 'Family & Cultural Events',
    title: 'Baby Showers, Naming & Griha Pravesh',
    desc: 'Warm traditional invites for Godh Bharai, Naamkaran, Mundan, and Housewarming ceremonies complete with Shubh Muhurat timings and bilingual script support.',
    includes: ['Hindi / Regional Script Invocations', 'Muhurat Card & Copy-Address Toast'],
  },
  {
    icon: 'fa-wand-magic-sparkles',
    tag: 'Custom Event Websites',
    title: 'Any Special Celebration or Corporate Event',
    desc: 'Have a reunion, festival celebration, graduation party, or corporate milestone? We craft this exact interactive reveal template style around your colors, theme, and guest flow.',
    includes: ['100% Bespoke Theme Palette & Copy', 'Custom Domain + Printable QR Card'],
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
    idealFor: 'Weddings, Birthdays, Anniversaries & Parties needing fast personalization of any live style.',
    deliverables: [
      'Choice of any live reveal style (3D Book, Royal Gate, or Wax-Seal)',
      'Custom host/couple/birthday names, blessings & event timeline',
      'Personalized photo gallery & memory slider integration',
      'Live countdown timer & background music track setup',
      'Google Maps venue link & WhatsApp-friendly Open Graph card',
    ],
  },
  {
    name: 'Royal Bilingual & Custom Domain',
    tag: 'Complete Celebration',
    turnaround: '2–3 Days Delivery',
    idealFor: 'Grand multi-day weddings, silver/golden anniversaries, or milestone parties needing a custom URL.',
    deliverables: [
      'Everything in Theme Express Edition',
      'Bilingual English + Hindi / Gujarati / Marathi section copy',
      'Custom domain hookup (e.g., celebrationurl.com) + SSL',
      'Dress Code Guide + Unlimited ceremony/party event cards',
      'Print-ready high-resolution QR code for physical invite boxes',
    ],
  },
  {
    name: 'Event Planners & Bespoke Suites',
    tag: 'Multi-Event / Bespoke',
    turnaround: 'Priority Custom SLA',
    idealFor: 'Event planners, party organizers, or families wanting custom birthday/anniversary/event themes.',
    deliverables: [
      'Custom color palette, crest logo & bespoke occasion layout',
      'Interactive RSVP form collecting guest count & attendance',
      'Dedicated theme variants for Weddings, Birthdays & Corporate Galas',
      'White-label agency partnership support for event planners',
      'Dedicated engineer support through your celebration weekend',
    ],
  },
];

export const weddingFaqs = [
  [
    'Can you build this same interactive template style for Birthdays, Anniversaries, or Parties?',
    'Yes! Every visual style and interactive mechanic shown in our live demos—including 3D book openers, clickable wax-seal envelopes, royal gate reveals, music players, photo galleries, countdown timers, dress code guides, and Google Maps directions—can be custom-tailored for Birthday Parties (1st birthdays to 50th milestones), Wedding Anniversaries (25th Silver & 50th Golden), Engagements, Housewarmings (Griha Pravesh), Baby Showers, and Private Parties.',
  ],
  [
    'How quickly will my personalized invitation website be ready?',
    'Once you share the honoree/couple names, family details, event schedule, venue Google Maps link, and photographs, our team delivers your personalized live staging link within 48 hours so you can review everything before sharing.',
  ],
  [
    'Can I preview each of the 3 themes on my phone before choosing?',
    'Yes. All three demos (Dhruv & Nidhi Royal Book Reveal, Shubh Vivah Royal Gate, and Royal Burgundy Wax-Seal) are live and mobile-first. You can tap "Live Demo" on any card above to test the animations, music toggle, and sliders right on your smartphone.',
  ],
  [
    'Can we customize the colors, Hindi/English shlokas, event names, and background music?',
    'Completely. Whether it is a Ganesh Vandana for a wedding/Griha Pravesh, joyful birthday themes, or an anniversary toast timeline, every section heading, dress code card, song MP3, and event card is tailored to your occasion.',
  ],
  [
    'What if our party timing or venue hall changes after sharing the link?',
    'Unlike printed cards or static PDFs that cannot be changed once forwarded, your invitation website updates instantly from a single link. Guests opening the same WhatsApp link immediately see the updated timing or venue directions.',
  ],
  [
    'Can we use our own custom domain name for the event?',
    'Yes. Every website can be hosted on a clean fast Vercel link out of the box or connected to your own custom `.com` / `.in` domain with full HTTPS security and QR code export for physical invite boxes.',
  ],
];
