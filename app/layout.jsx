import Header from '@/components/Header';
import Footer from '@/components/Footer';
export const metadata = {
  title: { default: 'Webleora | Website Development & Digital Solutions', template: '%s | Webleora' },
  description: 'Webleora helps businesses build professional websites, web applications and custom digital solutions shaped around their goals and workflows.',
  icons: { icon: '/images/favicon.png' },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en"><head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200..800&display=swap" rel="stylesheet" />
      <link href="/css/bootstrap.min.css" rel="stylesheet" />
      <link href="/css/slicknav.min.css" rel="stylesheet" />
      <link href="/css/all.min.css" rel="stylesheet" />
      <link href="/css/custom.css" rel="stylesheet" />
      <link href="/css/webleora.css" rel="stylesheet" />
    </head><body><Header />{children}<Footer /></body></html>
  );
}
