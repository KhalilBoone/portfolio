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
  const pathname = usePathname();
  const { emoji, section } = getTopbarMeta(pathname);

  return (
    <div className="layout">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)} />
      <div className="main-scroll">
        <Topbar
          emoji={emoji}
          section={section}
          onToggleSidebar={() => setCollapsed((c) => !c)}
        />
        {children}
      </div>
    </div>
  );
}
