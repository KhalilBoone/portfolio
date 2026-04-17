'use client';

import { useState } from 'react';
import Image from 'next/image';

type DeviceViewerProps = {
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
};

function LaptopIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="16" height="11" rx="1.5" stroke={active ? '#fff' : 'currentColor'} strokeWidth="1.5"/>
      <path d="M1 17h20" stroke={active ? '#fff' : 'currentColor'} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function PhoneIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="7" y="2" width="8" height="18" rx="2" stroke={active ? '#fff' : 'currentColor'} strokeWidth="1.5"/>
      <circle cx="11" cy="17" r="1" fill={active ? '#fff' : 'currentColor'}/>
    </svg>
  );
}

export function DeviceViewer({ desktopSrc, mobileSrc, alt }: DeviceViewerProps) {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const isDesktop = device === 'desktop';

  return (
    <div className="device-viewer">

      {/* Toggle pill */}
      <div className="device-toggle">
        <button
          className={`device-toggle-btn ${isDesktop ? 'active' : ''}`}
          onClick={() => setDevice('desktop')}
          aria-label="Desktop view"
        >
          <LaptopIcon active={isDesktop} />
        </button>
        <button
          className={`device-toggle-btn ${!isDesktop ? 'active' : ''}`}
          onClick={() => setDevice('mobile')}
          aria-label="Mobile view"
        >
          <PhoneIcon active={!isDesktop} />
        </button>
      </div>

      {/* Hint */}
      <p className="device-hint">Scroll on the screen below to view more</p>

      {/* Scrollable frame */}
      <div className={`device-frame ${isDesktop ? 'device-frame--desktop' : 'device-frame--mobile'}`}>
        <div className="device-screen">
          <Image
            src={isDesktop ? desktopSrc : mobileSrc}
            alt={alt}
            width={isDesktop ? 1400 : 390}
            height={isDesktop ? 900 : 844}
            style={{ width: '100%', maxWidth: '100%', height: 'auto', display: 'block' }}
            unoptimized
          />
        </div>
      </div>

    </div>
  );
}
