import Link from 'next/link';
import Image from 'next/image';
import { LogoTicker } from '@/components/LogoTicker';

const SELECTED_WORK = [
  {
    slug: 'prosek-financial-ux',
    company: 'Prosek Partners',
    title: 'Financial Services UX Strategy',
    subtitle: 'Neuberger Berman · Stellex Capital',
    desc: 'Owning end-to-end UX strategy and interaction design for three concurrent financial services clients — scoping, information architecture, detailed interaction design, and implementation review.',
    thumbnail: '/images/design & collaboration.png',
    thumbnailBg: '#E8EEF5',
    tags: ['UX Strategy', 'Fintech', 'Interaction Design'],
    gallery: [
      { src: '/images/nb_sitemap.png',   label: 'Discovery',          caption: 'Stakeholder research & IA', chips: ['Research', 'IA'],        thumbPosition: 'top center'  },
      { src: '/images/wireframes.png',   label: 'Interaction Design', caption: 'Wireframes & flows',        chips: ['Wireframes', 'Flows'],   thumbPosition: 'center'      },
      { src: '/images/desktop_home.png', label: 'Implementation',     caption: 'Dev handoff & review',      chips: ['Handoff', 'Review'],     thumbPosition: 'top center'  },
    ],
  },
  {
    slug: 'blackstone-design-system',
    company: 'Blackstone',
    title: 'Blackstone Design System',
    subtitle: 'Enterprise · Design Systems · Product Strategy',
    desc: 'Built a scalable design system adopted across 41 enterprise products — token architecture, React component library, and a hub-and-spoke governance model that reduced iteration cycles by 30%.',
    thumbnail: '/images/bx_guidelines.png',
    thumbnailBg: '#E8EEF5',
    tags: ['Design Systems', 'Enterprise', 'React'],
    gallery: [
      { src: '/images/bx_guidelines.png',   label: 'Component Library',  caption: 'Tokens & components',     chips: ['Design Systems', 'React']  },
      { src: '/images/bx_spacing.png',      label: 'Token Architecture', caption: 'Spacing & typography',    chips: ['Tokens', 'Typography']     },
      { src: '/images/bx_product-pages.png',label: 'Product Sites',      caption: '41 enterprise products',  chips: ['Enterprise', 'UI', 'Web']         },
    ],
  },
  {
    slug: 'equityzen-investor-marketplace',
    company: 'EquityZen',
    title: 'EquityZen Investor Marketplace',
    subtitle: 'Fintech · Interaction Design · Research',
    desc: 'Designed data-rich dashboards and AI-informed interfaces for private equity transactions — launched structured UX research program that directly shaped product direction.',
    thumbnail: '/images/ez_dashboard.png',
    thumbnailBg: '#EEF5EE',
    tags: ['Fintech', 'Data Visualization', 'Research'],
    gallery: [
      { src: '/images/ez_dashboard.png',     label: 'Dashboard',     caption: 'Investor overview',       chips: ['Data Viz', 'Fintech']      },
      { src: '/images/ez_flow-maps.png',     label: 'User Research', caption: 'Flow maps & synthesis',   chips: ['UXR', 'Synthesis']         },
      { src: '/images/ez_final-designs.png', label: 'Final Designs', caption: 'High-fidelity UI',        chips: ['Interaction', 'UI']        },
    ],
  },
  {
    slug: 'netflix-operations-systems',
    company: 'Netflix',
    title: 'Netflix Operations & Vendor Systems',
    subtitle: 'Enterprise SaaS · Systems Design · Operations',
    desc: 'Architected the operational infrastructure coordinating 8+ vendor relationships across PLM systems — designing the data model, workflow automations, and cross-functional visibility layer.',
    thumbnail: '/images/overview.png',
    thumbnailBg: '#F5EEEE',
    tags: ['Systems Design', 'PLM', 'B2B'],
    gallery: [
      { src: '/images/overview.png',        label: 'System of Record', caption: 'Data model & schema',    chips: ['PLM', 'Systems']           },
      { src: '/images/vendor.png',          label: 'Vendor Schema',    caption: 'Cross-vendor mapping',   chips: ['B2B', 'Schema']            },
      { src: '/images/vendor tracker.png',  label: 'Timeline View',    caption: 'Workflow automations',   chips: ['Automation', 'Operations'] },
    ],
  },
];

const EXPERIENCE = [
  { company: 'Prosek Partners',  role: 'Senior UX Strategist',          period: '2025–Present', current: true  },
  { company: 'Blackstone',       role: 'Senior Product Designer',        period: '2023–2025',    current: false },
  { company: 'EquityZen',        role: 'Product Designer',               period: '2021–2023',    current: false },
  { company: 'Netflix',          role: 'Product Development Specialist', period: '2021–2023',    current: false },
  { company: 'Publicis Groupe',  role: 'UX Designer',                    period: '2020–2021',    current: false },
];

export default function HomePage() {
  return (
    <div className="content">

      {/* ── HERO ─────────────────────────────────── */}
      <section id="about">
        <p className="hero-bio-block">
          Senior Product Designer based in New York. Currently building{' '}
          <span className="bio-current">Amenity AI</span>, developing 
          for Hedge Fund and Private Equity firms like Neuberger Berman &amp; Stellex Capital. 
          Formerly at{' '}
          <span className="bio-former">Blackstone · EquityZen · Netflix · Publicis Groupe.</span>{' '}
          Specializing in interaction design, design systems, and AI-native product
          development for fintech and financial services.
        </p>
      </section>

      {/* ── LOGO TICKER ──────────────────────────── */}
      <LogoTicker />

      {/* ── SELECTED WORK ────────────────────────── */}
      <section id="work" style={{ paddingTop: '80px' }}>
        <a href="#work" className="section-eyebrow" data-reveal>Selected Works</a>

        <div className="work-grid">
          {SELECTED_WORK.map((work, i) => (
            <div key={work.slug} className="work-project-group" data-reveal data-reveal-delay={String(Math.min(i + 1, 4)) as '1' | '2' | '3' | '4'}>
              {/* ── Company label ── */}
              <div className="work-project-label">{work.company}</div>

              {/* ── 3 cards ── */}
              <div className="work-gallery">
                {work.gallery.map((item) => (
                  <Link
                    key={item.label}
                    href={`/cases/${work.slug}`}
                    className="work-gallery-item"
                  >
                    <div
                      className="work-gallery-thumb"
                      style={{ background: work.thumbnailBg, position: 'relative' }}
                    >
                      <Image
                        src={item.src}
                        alt={item.label}
                        fill
                        style={{ objectFit: 'cover', objectPosition: (item as any).thumbPosition ?? 'top center' }}
                        sizes="(max-width: 768px) 200px, 33vw"
                      />
                    </div>
                    <div className="work-gallery-info">
                      <div className="work-gallery-text">
                        <div className="work-gallery-label">{item.label}</div>
                        <div className="work-gallery-caption">{item.caption}</div>
                        <div className="work-gallery-chips">
                          {item.chips.map((chip) => (
                            <span key={chip} className="work-gallery-chip">{chip}</span>
                          ))}
                        </div>
                      </div>
                      <div className="work-gallery-arrow">→</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────────────────── */}
      <section id="experience" style={{ paddingTop: '96px' }} data-reveal>
        <a href="#experience" className="section-eyebrow">Experience</a>

        <div className="exp-grid">
          {EXPERIENCE.map((exp, i) => (
            <div
              key={exp.company}
              className="exp-row"
              data-reveal
              data-reveal-delay={String(Math.min(i + 1, 4)) as '1' | '2' | '3' | '4'}
            >
              <div>
                <div className="exp-company">
                  {exp.current && <span className="exp-current-dot" />}
                  {exp.company}
                </div>
                <div className="exp-role">{exp.role}</div>
              </div>
              <div className="exp-period">{exp.period}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────── */}
      <section id="contact" style={{ paddingTop: '96px' }} data-reveal>
        <a href="#contact" className="section-eyebrow">Contact</a>
        <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: '1.7', marginBottom: '20px', maxWidth: '480px' }}>
          Open to Senior &amp; Staff Product Design roles in fintech, hedge funds,
          private equity, and AI-powered products.
        </p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a href="mailto:khalil.i.boone@gmail.com" className="contact-btn">
            Let's Connect
          </a>
          <a
            href="https://linkedin.com/in/khalilboone"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/KhalilBoone/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            GitHub ↗
          </a>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────── */}
      <footer className="site-footer">
        © Khalil Boone Design 2026
      </footer>

    </div>
  );
}
