import Legal from '@/components/Legal';
export const metadata = {
  title: 'Terms & Conditions | Webleora',
  description: 'Read the terms and conditions for using the Webleora website and services.',
  alternates: {
    canonical: './',
  },
};
export default function Page() { return <Legal kind="terms" title="Terms & Conditions" />; }
