import { PageHeader } from '@/components/ui';
import legal from '@/data/legal.json';

export default function Legal({ kind, title }) {
  const sections = legal.pages[kind];
  return (
    <>
      <PageHeader title={title} />
      <div className="page-section">
        <div className="container wl-plain">
          <p><em>Last updated: {legal.updated}</em></p>
          {sections.map((s) => (
            <section key={s.h}>
              <h2>{s.h}</h2>
              {s.b.map(([type, val], i) =>
                type === 'ul' ? (
                  <ul key={i}>{val.map((li) => <li key={li}>{li}</li>)}</ul>
                ) : type === 'h3' ? (
                  <h3 key={i}>{val}</h3>
                ) : (
                  <p key={i}>{val}</p>
                )
              )}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
