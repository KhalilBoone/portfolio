import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LayoutShell } from '@/components/LayoutShell';

// ── Analytics ────────────────────────────────────────────────────────────────
// To activate, swap this component for your chosen analytics provider:
//   Vercel Analytics:   import { Analytics } from '@vercel/analytics/react';
//   GA4 (gtag.js): add a <Script> tag with your G-XXXXXXXX measurement ID
// ─────────────────────────────────────────────────────────────────────────────
function Analytics() {
  // Replace with: <Analytics /> (Vercel) or GA4 <Script> snippet
  return null;
}

const BASE_URL = 'https://khalilboone.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Khalîl Boone — Senior Product Designer',
    template: '%s — Khalîl Boone',
  },
  description:
    'Senior Product Designer with 7+ years crafting interaction design, design systems, and product strategy for fintech and financial services. Currently at Prosek Partners. Formerly Blackstone, EquityZen, Netflix.',
  keywords: [
    'Product Designer',
    'Senior Product Designer',
    'UX Designer',
    'Design Systems',
    'Interaction Design',
    'Fintech Design',
    'Financial Services UX',
    'Blackstone',
    'EquityZen',
    'Khalil Boone',
    'New York Designer',
  ],
  authors: [{ name: 'Khalîl Boone', url: BASE_URL }],
  creator: 'Khalîl Boone',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Khalîl Boone',
    title: 'Khalîl Boone — Senior Product Designer',
    description:
      'Interaction design, design systems, and product strategy for fintech and financial services. Currently at Prosek Partners.',
    images: [
      {
        url: '/images/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'Khalîl Boone — Senior Product Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khalîl Boone — Senior Product Designer',
    description:
      'Interaction design, design systems, and product strategy for fintech and financial services.',
    images: ['/images/og-cover.png'],
    creator: '@khalilboone',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <LayoutShell>{children}</LayoutShell>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
