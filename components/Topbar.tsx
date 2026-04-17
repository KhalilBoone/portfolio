'use client';

import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

type TopbarProps = {
  emoji: string;
  section: string;
  onToggleSidebar: () => void;
};

export function Topbar({ emoji, section, onToggleSidebar }: TopbarProps) {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const el = document.querySelector('.main-scroll');
    if (!el) return;
    const handler = () => setScrolled(el.scrollTop > 8);
    el.addEventListener('scroll', handler, { passive: true });
    return () => el.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className={scrolled ? 'topbar scrolled' : 'topbar'}>
      <div className="breadcrumb">
        <button className="icon-btn" onClick={onToggleSidebar} aria-label="Toggle sidebar">
          ☰
        </button>
        <span style={{ fontWeight: 500, color: 'var(--text)', fontSize: '13px' }}>{section}</span>
      </div>
      <div className="topbar-actions">
        <a href="/Khalîl (Clarence) Boone Resume.pdf" target="_blank" rel="noopener noreferrer" className="topbar-btn-primary">
          Resume <span className="arrow-circle">↓</span>
        </a>
        <a href="mailto:khalil.i.boone@gmail.com" className="topbar-btn-secondary">
          Email Me
        </a>
        {/* <button onClick={toggle} className="icon-btn" aria-label="Toggle theme">
          {theme === 'light' ? '🌙' : '☀️'}
        </button> */}
      </div>
    </div>
  );
}
