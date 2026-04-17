'use client';

const serif  = "'DM Serif Display', Georgia, serif";
const sans   = "'Inter', ui-sans-serif, sans-serif";
const muted  = 'var(--muted)';

function Blackstone() {
  return (
    <span style={{ fontFamily: serif, fontSize: '32px', fontWeight: 400, color: muted, whiteSpace: 'nowrap' }}>
      Blackstone
    </span>
  );
}

function NeubergerBerman() {
  return (
    <span style={{ fontFamily: sans, fontSize: '28px', fontWeight: 900, letterSpacing: '-0.02em', color: muted, whiteSpace: 'nowrap' }}>
      NEUBERGER
    </span>
  );
}

function Stellex() {
  return (
    <span style={{ display: 'inline-flex', flexDirection: 'column', gap: '3px', whiteSpace: 'nowrap' }}>
      <span style={{ fontFamily: sans, fontSize: '28px', fontWeight: 500, color: muted, lineHeight: 1 }}>
        stellex
      </span>
      <span style={{ fontFamily: sans, fontSize: '9px', fontWeight: 600, letterSpacing: '0.22em', color: muted, opacity: 0.55, lineHeight: 1 }}>
        CAPITAL MANAGEMENT
      </span>
    </span>
  );
}

function Netflix() {
  return (
    <span style={{ fontFamily: sans, fontSize: '28px', fontWeight: 900, letterSpacing: '-0.02em', color: muted, whiteSpace: 'nowrap' }}>
      NETFLIX
    </span>
  );
}

function AbbVie() {
  return (
    <span style={{ fontFamily: sans, fontSize: '30px', fontWeight: 300, letterSpacing: '0.02em', color: muted, whiteSpace: 'nowrap' }}>
      abbvie
    </span>
  );
}

/* ─── Ticker ────────────────────────────────────────────────────────────── */

const LOGOS = [
  { name: 'Blackstone',       Logo: Blackstone      },
  { name: 'Neuberger Berman', Logo: NeubergerBerman },
  { name: 'Stellex Capital',  Logo: Stellex         },
  { name: 'Netflix',          Logo: Netflix         },
  { name: 'AbbVie',           Logo: AbbVie          },
];

export function LogoTicker() {
  const items = [...LOGOS, ...LOGOS];

  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {items.map((item, i) => (
          <span key={i} className="ticker-item">
            <item.Logo />
          </span>
        ))}
      </div>
    </div>
  );
}
