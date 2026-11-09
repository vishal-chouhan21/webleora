import Legal from '@/components/Legal';
export const metadata = {
  title: 'Cookie Policy | Webleora',
  description: 'How cookies and similar technologies may be used on the Webleora website and how you can manage them.',
  alternates: {
    canonical: './',
  },
};
export default function Page() { return <Legal kind="cookie" title="Cookie Policy" />; }
