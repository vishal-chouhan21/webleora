import Legal from '@/components/Legal';
export const metadata = {
  title: 'Terms & Conditions | Webleora International',
  description: 'Read the terms and conditions for using the Webleora International website and services.',
  alternates: {
    canonical: '/terms-and-conditions',
  },
};
export default function Page() { return <Legal kind="terms" title="Terms & Conditions" />; }
