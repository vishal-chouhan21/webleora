import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import site from '@/config/site';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || site.siteUrl || 'https://www.webleora.com';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Webleora | Custom Websites, Web Apps & Business Software Development',
  description:
    'Webleora designs and develops high-performance websites, web applications, and custom business software tailored to your goals.',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Webleora | Custom Websites, Web Apps & Business Software',
    description:
      'Webleora designs and develops high-performance websites, web applications, and custom business software tailored to your goals.',
    url: './',
    siteName: 'Webleora',
    type: 'website',
    images: ['/images/hero-team-it.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webleora | Websites, Apps & Business Software',
    description:
      'Webleora designs and develops custom websites, web apps and software solutions for growing businesses.',
    images: ['/images/hero-team-it.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['ProfessionalService', 'LocalBusiness', 'Organization'],
      '@id': `${baseUrl}/#organization`,
      name: 'Webleora',
      alternateName: 'Webleora Web Development & Software Solutions',
      url: baseUrl,
      logo: `${baseUrl}/images/logo.png`,
      image: `${baseUrl}/images/hero-team-it.jpg`,
      description:
        'Webleora is a top-rated web development and custom software company based in Indore, India. We engineer bespoke websites, SaaS web applications, CRM/ERP systems, and e-commerce platforms.',
      telephone: site.phone || '+91 87190 71209',
      email: site.email || 'info@webleora.com',
      priceRange: '₹₹ / $$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '403 Gulab Bagh, Near Shiv Convent School',
        addressLocality: 'Indore',
        addressRegion: 'Madhya Pradesh',
        postalCode: '452010',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 22.7533,
        longitude: 75.8937,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:30',
          closes: '19:30',
        },
      ],
      areaServed: [
        { '@type': 'City', name: 'Indore' },
        { '@type': 'AdministrativeArea', name: 'Madhya Pradesh' },
        { '@type': 'Country', name: 'India' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'United Arab Emirates' },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '38',
        bestRating: '5',
        worstRating: '1',
      },
      sameAs: [
        'https://www.linkedin.com/company/webleora',
        'https://www.instagram.com/webleora',
        'https://www.facebook.com/webleora',
        'https://www.youtube.com/@webleora',
        'https://x.com/webleora',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'Webleora',
      publisher: {
        '@id': `${baseUrl}/#organization`,
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200..800&display=swap"
          rel="stylesheet"
        />
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/slicknav.min.css" rel="stylesheet" />
        <link href="/css/all.min.css" rel="stylesheet" />
        <link href="/css/custom.css" rel="stylesheet" />
        <link href="/css/webleora.css" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
