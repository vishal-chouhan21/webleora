import Legal from '@/components/Legal';
export const metadata = {
  title: 'Privacy Policy | Webleora',
  description: 'Read how Webleora handles information submitted through this website.',
  alternates: {
    canonical: './',
  },
};
export default function Page() { return <Legal kind="privacy" title="Privacy Policy" />; }
