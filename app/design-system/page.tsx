'use client';

import Link from 'next/link';
import { useState } from 'react';

// ─── Token data ────────────────────────────────────────────
const COLOR_TOKENS = [
  { name: '--bg',          value: '#F7F6F2', label: 'Background',    dark: '#111110' },
  { name: '--sidebar',     value: '#F0EFE9', label: 'Surface',       dark: '#0D0D0C' },
  { name: '--border',      value: '#E2E0DA', label: 'Border',        dark: '#2A2927' },
  { name: '--text',        value: '#1A1916', label: 'Text Primary',  dark: '#E8E6E0' },
  { name: '--muted',       value: '#7C7B78', label: 'Text Secondary',dark: '#6B6A67' },
  { name: '--accent',      value: '#0F2D52', label: 'Accent Navy',   dark: '#4A7FB5' },
  { name: '--accent-bg',   value: '#E8EEF5', label: 'Accent Tint',   dark: '#152030' },
  { name: '--card-bg',     value: '#FAFAF7', label: 'Card Surface',  dark: '#181715' },
];

const SEMANTIC_COLORS = [
  { name: 'Success', value: '#2D7A4F', hex: '#2D7A4F' },
  { name: 'Warning', value: '#C47A2B', hex: '#C47A2B' },
  { name: 'Error',   value: '#B53B3B', hex: '#B53B3B' },
  { name: 'Info',    value: '#0F2D52', hex: '#0F2D52' },
];

const SPACING_SCALE = [
  { token: '2xs',  px: '2px',   rem: '0.125rem' },
  { token: 'xs',   px: '4px',   rem: '0.25rem' },
  { token: 'sm',   px: '8px',   rem: '0.5rem' },
  { token: 'md',   px: '12px',  rem: '0.75rem' },
  { token: 'lg',   px: '16px',  rem: '1rem' },
  { token: 'xl',   px: '24px',  rem: '1.5rem' },
  { token: '2xl',  px: '32px',  rem: '2rem' },
  { token: '3xl',  px: '48px',  rem: '3rem' },
  { token: '4xl',  px: '64px',  rem: '4rem' },
  { token: '5xl',  px: '96px',  rem: '6rem' },
  { token: '6xl',  px: '128px', rem: '8rem' },
];

const TYPE_SCALE = [
  { label: 'Display',    size: '52px', weight: '400', font: 'DM Serif Display', sample: 'Khalîl Boone' },
  { label: 'Heading 1',  size: '38px', weight: '400', font: 'DM Serif Display', sample: 'Design Systems' },
  { label: 'Heading 2',  size: '24px', weight: '700', font: 'Inter',            sample: 'Token Architecture' },
  { label: 'Heading 3',  size: '18px', weight: '700', font: 'Inter',            sample: 'Component Variants' },
  { label: 'Body Large', size: '16px', weight: '400', font: 'Inter',            sample: 'Designing for finance, capital, and complex data.' },
  { label: 'Body',       size: '14px', weight: '400', font: 'Inter',            sample: 'Each token maps to a semantic intent and a component-level usage.' },
  { label: 'Caption',    size: '12px', weight: '400', font: 'Inter',            sample: 'The React component library, with 30+ components across 41 product sites.' },
  { label: 'Label',      size: '10px', weight: '700', font: 'Inter',            sample: 'DESIGN TOKENS · TYPOGRAPHY · SPACING' },
];

const TOKEN_TABLE = [
  { name: 'COLORS',       desc: 'Brand palette, semantic, background, text, border, accent', count: '8+' },
  { name: 'TYPOGRAPHY',   desc: 'Font families, sizes, weights, line heights, letter spacing', count: '15+' },
  { name: 'SPACING',      desc: 'Consistent scale from 2px to 128px (11 steps)',             count: '11' },
  { name: 'ANIMATION',    desc: 'Easing functions, durations, stagger delays',               count: '8' },
  { name: 'EFFECTS',      desc: 'Border radius, shadows, backdrop blur levels',              count: '12' },
  { name: 'BREAKPOINTS',  desc: 'Responsive breakpoints for layout (mobile → desktop)',      count: '4' },
];

const DS_SECTIONS = [
  { id: 'overview',    label: 'Overview',           group: 'Foundation' },
  { id: 'tokens',      label: 'Tokens',             group: 'Foundation' },
  { id: 'colors',      label: 'Colors',             group: 'Foundation' },
  { id: 'typography',  label: 'Typography',         group: 'Foundation' },
  { id: 'spacing',     label: 'Spacing',            group: 'Foundation' },
  { id: 'components',  label: 'Components',         group: 'Components' },
  { id: 'data-viz',    label: 'Data Visualization', group: 'Components' },
  { id: 'motion',      label: 'Motion',             group: 'Motion' },
];

const TOKENS_JS = `// design-tokens.js — Blackstone Design System
export const tokens = {
  colors: {
    brand: {
      navy:    '#0F2D52',
      navyMid: '#1B4A7A',
      tint:    '#E8EEF5',
    },
    semantic: {
      success: '#2D7A4F',
      warning: '#C47A2B',
      error:   '#B53B3B',
    },
    neutral: {
      bg:      '#F7F6F2',
      surface: '#F0EFE9',
      border:  '#E2E0DA',
      textPrimary:   '#1A1916',
      textSecondary: '#7C7B78',
    },
  },
  spacing: {
    '2xs': '0.125rem',  // 2px
    xs:    '0.25rem',   // 4px
    sm:    '0.5rem',    // 8px
    md:    '0.75rem',   // 12px
    lg:    '1rem',      // 16px
    xl:    '1.5rem',    // 24px
    '2xl': '2rem',      // 32px
    '3xl': '3rem',      // 48px
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '9999px',
  },
  animation: {
    fast:     '120ms',
    default:  '200ms',
    slow:     '350ms',
    spring:   'cubic-bezier(0.22, 1, 0.36, 1)',
  },
};`;

// ─── Component ────────────────────────────────────────────
export default function DesignSystemPage() {
  const [activeSection, setActiveSection] = useState('overview');
  const [copiedTokens, setCopiedTokens] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(TOKENS_JS);
    setCopiedTokens(true);
    setTimeout(() => setCopiedTokens(false), 2000);
  };

  const seen = new Set<string>();
  const groups = DS_SECTIONS.map((s) => s.group).filter((g) => {
    if (seen.has(g)) return false;
    seen.add(g);
    return true;
  });

  return (
    <div className="ds-layout">

      {/* ── Left nav ── */}
      <nav className="ds-sidebar">
        <div style={{ marginBottom: '20px' }}>
          <div style={{
            fontFamily: 'var(--serif)',
            fontSize: '22px',
            color: 'var(--text)',
            letterSpacing: '-0.01em',
            marginBottom: '4px',
          }}>
            KB Design System
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
            <span className="ds-badge">
              <span className="ds-badge-dot" />
              v2.0 · Live
            </span>
          </div>
          <div style={{ fontSize: '11px', color: 'var(--muted)' }}>
            Blackstone Enterprise Platform
          </div>
        </div>

        {groups.map((group) => (
          <div key={group} className="ds-nav-section">
            <div className="ds-nav-label">{group}</div>
            {DS_SECTIONS.filter((s) => s.group === group).map((s) => (
              <button
                key={s.id}
                className={`ds-nav-item ${activeSection === s.id ? 'active' : ''}`}
                onClick={() => setActiveSection(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>
        ))}

        <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
          <Link href="/cases/blackstone-design-system" className="ds-nav-item" style={{ textDecoration: 'none', display: 'flex' }}>
            ← Full Case Study
          </Link>
        </div>
      </nav>

      {/* ── Main content ── */}
      <main className="ds-content">

        {/* OVERVIEW */}
        {activeSection === 'overview' && (
          <div>
            <h1 className="ds-title">Design System</h1>
            <p className="ds-subtitle">
              A production design system built for Blackstone's enterprise platform —
              spanning 41 product sites, 3 design teams, and a React component library
              with shared token architecture across brands.
            </p>

            <div className="ds-section">
              <h2 className="ds-section-title">At a Glance</h2>
              <p className="ds-section-desc">
                This system was built to solve a real problem: 41 enterprise sites with no shared
                design language, and designers rebuilding the same components from scratch. The result
                is a three-tier token architecture, a versioned React component library, and a
                hub-and-spoke governance model that reduced design iteration cycles by 30%.
              </p>
              <div className="token-table">
                {TOKEN_TABLE.map((row) => (
                  <div key={row.name} className="token-row">
                    <span className="token-name">{row.name}</span>
                    <span className="token-desc">{row.desc}</span>
                    <span className="token-count">{row.count}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="ds-section">
              <h2 className="ds-section-title">Token Architecture</h2>
              <p className="ds-section-desc">
                A three-tier architecture — primitive → semantic → component — enables per-brand
                theming without forking the system. Tokens are version-controlled and published
                via GitHub CI/CD pipelines.
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                marginBottom: '24px',
              }}>
                {[
                  { tier: 'Primitive', desc: 'Raw values: hex codes, px, ms', example: '#0F2D52 · 16px · 200ms' },
                  { tier: 'Semantic', desc: 'Intent-based names', example: 'color.accent · space.lg · duration.default' },
                  { tier: 'Component', desc: 'Component-scoped usage', example: 'button.bg · card.padding · nav.transition' },
                ].map((t) => (
                  <div key={t.tier} style={{
                    background: 'var(--card-bg)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    padding: '16px',
                  }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>
                      {t.tier}
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text)', marginBottom: '6px' }}>{t.desc}</div>
                    <div style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'monospace' }}>{t.example}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TOKENS */}
        {activeSection === 'tokens' && (
          <div>
            <h1 className="ds-title">Design Tokens</h1>
            <p className="ds-subtitle">
              A single source of truth for all design decisions. These tokens power the entire
              system — from colors and typography to spacing and animation.
            </p>

            <div className="ds-section">
              <h2 className="ds-section-title">Token Map</h2>
              <p className="ds-section-desc">
                All tokens are organized into six categories. Each category is versioned independently
                and published to npm for engineering consumption.
              </p>
              <div className="token-table">
                {TOKEN_TABLE.map((row) => (
                  <div key={row.name} className="token-row">
                    <span className="token-name">{row.name}</span>
                    <span className="token-desc">{row.desc}</span>
                    <span className="token-count">{row.count}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="ds-section">
              <h2 className="ds-section-title">tokens.js</h2>
              <p className="ds-section-desc">
                Published as a versioned npm package. Engineering consumes tokens directly —
                no manual value syncing between design and code.
              </p>
              <div className="code-block">
                <div className="code-block-header">
                  <span className="code-filename">design-tokens.js</span>
                  <button className="code-copy-btn" onClick={handleCopy}>
                    {copiedTokens ? '✓ Copied' : 'Copy'}
                  </button>
                </div>
                <pre style={{ margin: 0, overflowX: 'auto', fontSize: '12px', lineHeight: '1.65' }}>
                  <code>{TOKENS_JS}</code>
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* COLORS */}
        {activeSection === 'colors' && (
          <div>
            <h1 className="ds-title">Colors</h1>
            <p className="ds-subtitle">
              Color with intention — every value has a purpose. The palette is
              organized into brand, semantic, and neutral tiers.
            </p>

            <div className="ds-section">
              <h2 className="ds-section-title">Brand Palette</h2>
              <p className="ds-section-desc">
                Navy as the primary brand anchor. Optimized for financial contexts
                where trust, authority, and clarity are the primary signals.
              </p>
              <div className="color-grid">
                {COLOR_TOKENS.map((token) => (
                  <div key={token.name} className="color-swatch">
                    <div className="swatch-block" style={{ background: token.value }} />
                    <div className="swatch-label">
                      <span className="swatch-name">{token.label}</span>
                      <span className="swatch-hex">{token.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="ds-section">
              <h2 className="ds-section-title">Semantic Palette</h2>
              <p className="ds-section-desc">For status indication — success, warning, error, info.</p>
              <div className="color-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                {SEMANTIC_COLORS.map((c) => (
                  <div key={c.name} className="color-swatch">
                    <div className="swatch-block" style={{ background: c.value }} />
                    <div className="swatch-label">
                      <span className="swatch-name">{c.name}</span>
                      <span className="swatch-hex">{c.hex}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TYPOGRAPHY */}
        {activeSection === 'typography' && (
          <div>
            <h1 className="ds-title">Typography</h1>
            <p className="ds-subtitle">
              Two typefaces: DM Serif Display for display and editorial moments;
              Inter for all UI text. Clarity and legibility at every scale.
            </p>

            <div className="ds-section">
              <h2 className="ds-section-title">Type Scale</h2>
              <div className="type-scale">
                {TYPE_SCALE.map((t) => (
                  <div key={t.label} className="type-row">
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text)', marginBottom: '2px' }}>{t.label}</div>
                      <div className="type-meta">{t.size} / {t.weight} / {t.font}</div>
                    </div>
                    <div style={{
                      fontFamily: t.font === 'DM Serif Display' ? 'var(--serif)' : 'var(--sans)',
                      fontSize: Math.min(parseInt(t.size), 32) + 'px',
                      fontWeight: t.weight,
                      color: 'var(--text)',
                      lineHeight: 1.2,
                    }}>
                      {t.sample}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SPACING */}
        {activeSection === 'spacing' && (
          <div>
            <h1 className="ds-title">Spacing</h1>
            <p className="ds-subtitle">
              A consistent 11-step spacing scale from 2px to 128px.
              Every layout, padding, and gap value in the system maps to this scale.
            </p>

            <div className="ds-section">
              <h2 className="ds-section-title">Scale</h2>
              <div className="token-table">
                {SPACING_SCALE.map((s) => (
                  <div key={s.token} className="token-row" style={{ gridTemplateColumns: '80px 1fr auto' }}>
                    <span className="token-name">{s.token}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        height: '8px',
                        width: s.px,
                        background: 'var(--accent)',
                        borderRadius: '2px',
                        flexShrink: 0,
                      }} />
                      <span className="token-desc" style={{ fontFamily: 'monospace', fontSize: '12px' }}>{s.px}</span>
                    </div>
                    <span className="token-count">{s.rem}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* COMPONENTS */}
        {activeSection === 'components' && (
          <div>
            <h1 className="ds-title">Components</h1>
            <p className="ds-subtitle">
              30+ production-ready React components. Every component ships with
              usage guidelines, prop tables, and do/don't examples.
            </p>

            <div className="ds-section">
              <h2 className="ds-section-title">Buttons</h2>
              <p className="ds-section-desc">
                Buttons communicate actions. Use sparingly — too many buttons create decision fatigue.
              </p>

              {/* Usage guidelines */}
              <div className="token-table" style={{ marginBottom: '16px' }}>
                <div className="token-row" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>Primary</div>
                    <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Main CTA. One per section max.</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>Secondary</div>
                    <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Supporting actions. Cancel, Back, Edit.</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>Ghost</div>
                    <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Tertiary actions, inline links.</div>
                  </div>
                </div>
              </div>

              {/* Live component preview */}
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Variants</div>
              <div className="component-preview">
                <button style={{
                  background: 'var(--accent)', color: '#fff', border: 'none',
                  padding: '8px 20px', borderRadius: '6px', fontWeight: 600,
                  fontSize: '12px', cursor: 'pointer', letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}>Primary</button>
                <button style={{
                  background: 'transparent', color: 'var(--text)',
                  border: '1.5px solid var(--border)',
                  padding: '7px 20px', borderRadius: '6px', fontWeight: 500,
                  fontSize: '12px', cursor: 'pointer',
                }}>Secondary</button>
                <button style={{
                  background: 'transparent', color: 'var(--muted)',
                  border: 'none',
                  padding: '7px 12px', borderRadius: '6px', fontWeight: 500,
                  fontSize: '12px', cursor: 'pointer',
                }}>Ghost</button>
              </div>

              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px', marginTop: '16px' }}>Sizes</div>
              <div className="component-preview">
                {['SM', 'MD', 'LG'].map((size, i) => (
                  <button key={size} style={{
                    background: 'var(--accent)', color: '#fff', border: 'none',
                    padding: `${5 + i * 3}px ${12 + i * 6}px`,
                    borderRadius: '6px', fontWeight: 600,
                    fontSize: `${11 + i}px`, cursor: 'pointer',
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                  }}>{size}</button>
                ))}
              </div>
            </div>

            <div className="ds-section">
              <h2 className="ds-section-title">Props API</h2>
              <div className="token-table">
                <div className="token-row" style={{ background: 'var(--hover)', gridTemplateColumns: '1fr 1fr 1fr 2fr', fontWeight: 700, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  <span>PROP</span><span>TYPE</span><span>DEFAULT</span><span>DESCRIPTION</span>
                </div>
                {[
                  { prop: 'variant', type: "'primary' | 'secondary' | 'ghost'", def: "'primary'", desc: 'Visual style of the button' },
                  { prop: 'size',    type: "'sm' | 'md' | 'lg'",                def: "'md'",      desc: 'Size variant for the button' },
                  { prop: 'disabled', type: 'boolean',                          def: 'false',     desc: 'Disables the button and its interactions' },
                  { prop: 'loading',  type: 'boolean',                          def: 'false',     desc: 'Shows loading state with spinner' },
                  { prop: 'onClick',  type: '() => void',                       def: '—',         desc: 'Click handler callback' },
                ].map((row) => (
                  <div key={row.prop} className="token-row" style={{ gridTemplateColumns: '1fr 1fr 1fr 2fr' }}>
                    <span className="token-name">{row.prop}</span>
                    <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#c47a2b' }}>{row.type}</span>
                    <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--accent)' }}>{row.def}</span>
                    <span className="token-desc">{row.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* DATA VIZ */}
        {activeSection === 'data-viz' && (
          <div>
            <h1 className="ds-title">Data Visualization</h1>
            <p className="ds-subtitle">
              Clarity over complexity. Color used with intention — every element
              should help the viewer understand the data, not distract from it.
            </p>

            <div className="ds-section">
              <h2 className="ds-section-title">Categorical Palette</h2>
              <p className="ds-section-desc">For multi-series charts. Uses the brand palette in order.</p>
              <div className="color-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
                {[
                  { name: 'Navy',    hex: '#0F2D52' },
                  { name: 'Slate',   hex: '#3D6896' },
                  { name: 'Sky',     hex: '#6BAED6' },
                  { name: 'Mist',    hex: '#A8C8E8' },
                  { name: 'Neutral', hex: '#9B9A97' },
                ].map((c) => (
                  <div key={c.name} className="color-swatch">
                    <div className="swatch-block" style={{ background: c.hex }} />
                    <div className="swatch-label">
                      <span className="swatch-name">{c.name}</span>
                      <span className="swatch-hex">{c.hex}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="ds-section">
              <h2 className="ds-section-title">Chart Components — Horizontal Bars</h2>
              <p className="ds-section-desc">4px height, rounded ends, full-width track. Used for skill/progress indicators.</p>
              <div style={{
                border: '1px solid var(--border)',
                borderRadius: '10px',
                padding: '24px',
                background: 'var(--card-bg)',
              }}>
                {[
                  { label: 'Interaction Design', pct: 92, color: '#0F2D52' },
                  { label: 'Design Systems',     pct: 88, color: '#3D6896' },
                  { label: 'Design Strategy',    pct: 80, color: '#6BAED6' },
                  { label: 'AI Development',     pct: 68, color: '#A8C8E8' },
                ].map((bar) => (
                  <div key={bar.label} style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{bar.label}</span>
                      <span style={{ fontSize: '12px', color: 'var(--muted)' }}>{bar.pct}%</span>
                    </div>
                    <div style={{ height: '4px', background: 'var(--border)', borderRadius: '2px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${bar.pct}%`, background: bar.color, borderRadius: '2px' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* MOTION */}
        {activeSection === 'motion' && (
          <div>
            <h1 className="ds-title">Motion</h1>
            <p className="ds-subtitle">
              Motion with purpose. Every animation communicates something — spatial
              relationships, feedback, or progression. Never motion for its own sake.
            </p>

            <div className="ds-section">
              <h2 className="ds-section-title">Easing Functions</h2>
              <div className="token-table">
                {[
                  { name: 'spring',     value: 'cubic-bezier(0.22, 1, 0.36, 1)',    use: 'Enter/exit animations. Overshoots slightly for life.' },
                  { name: 'smooth',     value: 'cubic-bezier(0.25, 0.1, 0.25, 1)',  use: 'State changes. Hover transitions.' },
                  { name: 'sharp',      value: 'cubic-bezier(0.4, 0, 0.6, 1)',      use: 'Collapses, dismissals.' },
                  { name: 'decelerate', value: 'cubic-bezier(0, 0, 0.2, 1)',        use: 'Elements entering from off-screen.' },
                  { name: 'accelerate', value: 'cubic-bezier(0.4, 0, 1, 1)',        use: 'Elements leaving to off-screen.' },
                ].map((row) => (
                  <div key={row.name} className="token-row" style={{ gridTemplateColumns: '120px 260px 1fr' }}>
                    <span className="token-name">{row.name}</span>
                    <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--muted)' }}>{row.value}</span>
                    <span className="token-desc">{row.use}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="ds-section">
              <h2 className="ds-section-title">Duration Scale</h2>
              <div className="token-table">
                {[
                  { name: 'instant',  ms: '0ms',   use: 'Immediate — no perceived delay' },
                  { name: 'fast',     ms: '120ms',  use: 'Micro-interactions: button press, toggle' },
                  { name: 'default',  ms: '200ms',  use: 'State changes: hover, focus' },
                  { name: 'slow',     ms: '350ms',  use: 'Page entrances, panel slides' },
                  { name: 'stagger',  ms: '+60ms',  use: 'Per-item delay for list entrances' },
                ].map((row) => (
                  <div key={row.name} className="token-row">
                    <span className="token-name">{row.name}</span>
                    <span className="token-desc">{row.use}</span>
                    <span className="token-count">{row.ms}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
