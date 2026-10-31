'use client';
import { useState } from 'react';
export default function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-accordion">
      {items.map(([q, a], i) => (
        <div className="accordion-item" key={q}>
          <h2 className="accordion-header"><button type="button" className={'accordion-button' + (open === i ? '' : ' collapsed')} aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>{q}</button></h2>
          <div className={'accordion-collapse collapse' + (open === i ? ' show' : '')}><div className="accordion-body"><p>{a}</p></div></div>
        </div>
      ))}
    </div>
  );
}
