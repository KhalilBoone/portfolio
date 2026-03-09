'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Sidebar } from '@/components/Sidebar';
import { Topbar } from '@/components/Topbar';

function getTopbarMeta(pathname: string): { emoji: string; section: string } {
  if (pathname === '/') return { emoji: '👋', section: 'Home' };
  if (pathname.startsWith('/cases')) return { emoji: '📋', section: 'Case Studies' };
  if (pathname.startsWith('/teardowns')) return { emoji: '🔍', section: 'Product Teardowns' };
  if (pathname.startsWith('/projects')) return { emoji: '🛠️', section: 'Projects' };
  if (pathname.startsWith('/personal')) return { emoji: '🏡', section: 'Personal' };
  return { emoji: '📄', section: 'Portfolio' };
}

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { emoji, section } = getTopbarMeta(pathname);

  const handleToggle = () => {
    setCollapsed((c) => !c);
    setMobileOpen((o) => !o);
  };

  return (
    <div className="layout">
      {mobileOpen && (
        <div className="sidebar-backdrop" onClick={handleToggle} />
      )}
      <Sidebar collapsed={collapsed} mobileOpen={mobileOpen} onToggle={handleToggle} />
      <div className="main-scroll">
        <Topbar
          emoji={emoji}
          section={section}
          onToggleSidebar={handleToggle}
        />
        {children}
      </div>
    </div>
  );
}
