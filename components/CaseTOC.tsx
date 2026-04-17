'use client';

import { useEffect, useState } from 'react';

export type TocItem = { id: string; heading: string };

export function CaseTOC({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? '');

  useEffect(() => {
    if (!items.length) return;

    const observers: IntersectionObserver[] = [];

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        // Trigger when top ~30% of viewport crosses the element
        { rootMargin: '-15% 0px -60% 0px', threshold: 0 }
      );
      io.observe(el);
      observers.push(io);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActive(id);
    }
  }

  if (!items.length) return null;

  return (
    <nav aria-label="Table of contents">
      <div className="case-toc-label">Contents</div>
      {items.map(({ id, heading }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`case-toc-link ${active === id ? 'toc-active' : ''}`}
          onClick={(e) => handleClick(e, id)}
        >
          {heading}
        </a>
      ))}
    </nav>
  );
}
