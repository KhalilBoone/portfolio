'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';

const navItems = [
  { href: '/', icon: '🏠', label: 'Home' },
  { href: '/cases', icon: '📋', label: 'Case Studies' },
  // { href: '/teardowns', icon: '🔍', label: 'Product Teardowns' },
  { href: '/projects', icon: '🛠️', label: 'Projects' },
  { href: '/personal', icon: '🏡', label: 'Personal' },
];

export function Sidebar({ collapsed, mobileOpen, onToggle }: { collapsed: boolean; mobileOpen: boolean; onToggle: () => void }) {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
      <div className="sidebar-inner">
        {/* Workspace header */}
        <div className="workspace-row">
          <div className="workspace-icon">KB</div>
          <span className="workspace-name">Khalîl Boone</span>
        </div>

        {/* Nav */}
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
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}

        {/* Theme toggle at bottom */}
        <div style={{ marginTop: 'auto', paddingTop: '24px' }}>
          <div className="sidebar-section-label">Appearance</div>
          <button className="nav-item" style={{ width: '100%', border: 'none', background: 'none', cursor: 'pointer', textAlign: 'left' }} onClick={toggle}>
            <span className="nav-icon">{theme === 'light' ? '🌙' : '☀️'}</span>
            <span>{theme === 'light' ? 'Dark mode' : 'Light mode'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
