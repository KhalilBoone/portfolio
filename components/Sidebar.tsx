'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';

const navItems = [
  { href: '/',              label: 'Home' },
  { href: '/cases',         label: 'Work' },
  { href: '/design-system', label: 'Design System' },
  { href: '/projects',      label: 'Projects' },
  { href: '/personal',      label: 'Personal' },
];

export function Sidebar({ collapsed, mobileOpen, onToggle }: {
  collapsed: boolean;
  mobileOpen: boolean;
  onToggle: () => void;
}) {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
      <div className="sidebar-inner">

        {/* Identity */}
        <div className="workspace-row">
          <div className="workspace-monogram">KB</div>
          <div>
            <div className="workspace-name">Khalîl Boone</div>
            <div className="workspace-title">Senior Product Designer</div>
          </div>
        </div>

        {/* Primary nav */}
        <div className="sidebar-section-label">Portfolio</div>
        {navItems.map((item) => {
          const isActive =
            item.href === '/'
              ? pathname === '/'
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => { if (mobileOpen) onToggle(); }}
            >
              <span className="nav-dot" />
              <span>{item.label}</span>
            </Link>
          );
        })}

        {/* Theme + spacer */}
        <div style={{ marginTop: 'auto', paddingTop: '24px' }}>
          <div className="sidebar-section-label">Appearance</div>
          <button
            className="nav-item"
            style={{ width: '100%', border: 'none', background: 'none', cursor: 'pointer', textAlign: 'left' }}
            onClick={toggle}
          >
            <span className="nav-dot" style={{ background: 'var(--muted)' }} />
            <span>{theme === 'light' ? 'Dark mode' : 'Light mode'}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
