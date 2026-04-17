'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

type NavLink = {
  label: string;
  href: string;
  scrollId: string | null;
};

const NAV_LINKS: NavLink[] = [
  { label: 'Work',       href: '/#work',       scrollId: 'work'       },
  { label: 'Experience', href: '/#experience', scrollId: 'experience' },
];

const MOBILE_NAV_LINKS: NavLink[] = [
  { label: 'Work',       href: '/#work',       scrollId: 'work'       },
  { label: 'Experience', href: '/#experience', scrollId: 'experience' },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function TopNav() {
  const pathname  = usePathname();
  const router    = useRouter();
  const { theme, toggle } = useTheme();
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  // Pill morphs in after 80px of scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Scroll to hash after route change (e.g. coming from /cases → /#work)
  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const id = window.location.hash.slice(1);
      const t = setTimeout(() => scrollToSection(id), 80);
      return () => clearTimeout(t);
    }
  }, [pathname]);

  function handleNavClick(e: React.MouseEvent, link: NavLink) {
    if (!link.scrollId) return;
    e.preventDefault();
    if (pathname === '/') {
      scrollToSection(link.scrollId);
    } else {
      router.push(link.href);
    }
  }

  return (
    <header className={`top-nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-inner">

        {/* Logo */}
        <a
          href="/"
          className="nav-logo"
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          Khalîl Boone
        </a>

        {/* Desktop nav links */}
        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: desktop CTAs + theme pill + hamburger */}
        <div className="nav-actions">
          <div className="nav-desktop-ctas">
            <a
              href="/Khalîl (Clarence) Boone Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-btn-primary"
            >
              Resume
              <span className="nav-btn-arrow">↓</span>
            </a>
            <a href="mailto:khalil.i.boone@gmail.com" className="nav-btn-ghost">
              Email
            </a>
          </div>
          <button className="theme-pill" onClick={toggle} aria-label="Toggle theme">
            {theme === 'light' ? (
              /* Sun icon */
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="3" fill="currentColor"/>
                <line x1="8" y1="1" x2="8" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="8" y1="13" x2="8" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="1" y1="8" x2="3" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="13" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="3.05" y1="3.05" x2="4.46" y2="4.46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="11.54" y1="11.54" x2="12.95" y2="12.95" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="12.95" y1="3.05" x2="11.54" y2="4.46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="4.46" y1="11.54" x2="3.05" y2="12.95" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            ) : (
              /* Moon icon */
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M13.5 9.5A6 6 0 0 1 6.5 2.5a5.5 5.5 0 1 0 7 7z" fill="currentColor"/>
              </svg>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`ham-bar ham-top ${menuOpen ? 'open' : ''}`} />
            <span className={`ham-bar ham-bottom ${menuOpen ? 'open' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`nav-mobile-drawer ${menuOpen ? 'drawer-open' : ''}`}>
        {MOBILE_NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav-mobile-link"
            onClick={(e) => { setMenuOpen(false); handleNavClick(e, link); }}
          >
            {link.label}
          </a>
        ))}
        <div className="nav-mobile-ctas">
          <a
            href="/Khalîl (Clarence) Boone Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn-primary"
          >
            Resume
            <span className="nav-btn-arrow">↓</span>
          </a>
          <a href="mailto:khalil.i.boone@gmail.com" className="nav-btn-ghost">
            Email
          </a>
        </div>
      </div>
    </header>
  );
}
