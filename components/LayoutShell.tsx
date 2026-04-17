'use client';

import { useEffect } from 'react';
import { TopNav } from '@/components/TopNav';
import { CustomCursor } from '@/components/CustomCursor';

export function LayoutShell({ children }: { children: React.ReactNode }) {
  // Scroll-reveal: add 'in-view' when elements enter viewport
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div className="page-glow" aria-hidden="true" />
      <CustomCursor />
      <TopNav />
      <main className="main-content">{children}</main>
    </>
  );
}
