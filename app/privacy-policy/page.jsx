import Legal from '@/components/Legal';
export const metadata = {
  title: 'Privacy Policy | Webleora International',
  description: 'Read how Webleora handles information submitted through this website.',
  alternates: {
    canonical: '/privacy-policy',
  },
};
export default function Page() { return <Legal kind="privacy" title="Privacy Policy" />; }
