import Link from 'next/link';
export default function NotFound() {
  return (<div className="page-section"><div className="container text-center"><h1>Page not found</h1><p>The page you are looking for does not exist.</p><Link href="/" className="btn-default btn-highlighted">Back to Home</Link></div></div>);
}
