import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import site from '@/config/site';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || site.siteUrl || 'https://webleora.com';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Webleora | Website Development, Web Apps & Software Solutions',
    template: '%s | Webleora',
  },
  description:
    'Webleora International delivers high-performance website development, custom web applications, and scalable business software to accelerate your digital growth.',
  keywords: [
    'Webleora',
    'Webleora International',
    'Website Development Company',
    'Custom Web Applications',
    'Software Development Indore',
    'Web Design Agency',
    'CRM ERP Development',
    'E-commerce Solutions',
    'Website Development India',
  ],
  authors: [{ name: 'Webleora International', url: baseUrl }],
  creator: 'Webleora International',
  publisher: 'Webleora International',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Webleora International',
    title: 'Webleora | Websites, Apps & Business Software',
    description:
      'Webleora designs and develops websites, web apps and custom business software tailored to your workflows and growth goals.',
    images: [
      {
        url: '/images/hero-team-it.jpg',
        width: 1200,
        height: 630,
        alt: 'Webleora International - Building Digital Possibilities Together',
      },
    ],
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
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'Webleora International',
      url: baseUrl,
      logo: `${baseUrl}/images/logo.png`,
      description:
        'Webleora International is a results-driven IT solutions company delivering high-performance websites, custom web applications, and enterprise software.',
      telephone: site.phone || '+91 87190 71209',
      email: site.email || 'info@webleora.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '403 Gulab bagh, Near Shiv Convent school',
        addressLocality: 'Indore',
        postalCode: '452010',
        addressCountry: 'IN',
      },
      sameAs: [
        'https://linkedin.com',
        'https://facebook.com',
        'https://instagram.com',
        'https://x.com',
        'https://youtube.com',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'Webleora International',
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
