import Link from 'next/link';

const CAREER_HIGHLIGHTS = [
  {
    company: 'Prosek Partners',
    role: 'Senior UX Strategist',
    period: '2025–Present',
    badge: true,
    quote: 'Defined product strategy and information architecture for Neuberger Berman and Stellex Capital — leading stakeholder interviews, sitemaps, wireframes, and content architecture to align complex financial products with user needs.',
  },
  {
    company: 'Blackstone',
    role: 'Senior Product Owner',
    period: '2023–2025',
    badge: false,
    quote: 'Led design systems implementation across 41 product websites, reducing design iteration cycles by 30% and aligning 3 design teams with engineering and product leadership. This included the creation of a design system library, component library, and design system documentation.',
  },
  {
    company: 'Netflix',
    role: 'Product Development Specialist',
    period: '2021–2023',
    badge: false,
    quote: 'Owned end-to-end product lifecycle for licensed consumer products tied to Netflix\'s highest-grossing IP (Stranger Things, Squid Games, Bridgerton & The Witcher). Managed vendor relationships, production timelines, and cross-functional alignment across marketing and manufacturing, delivering products on schedule against consumer demand signals.',
  },
  {
    company: 'EquityZen',
    role: 'Product Owner',
    period: '2021–2023',
    badge: false,
    quote: 'Launched UX research program that directly shaped product direction for accredited investors in the secondary market. Ultimately, driving an additional 250k+ subscribers and $40M in revenue.'
  },
  {
    company: 'Publicis Groupe',
    role: 'UX Designer',
    period: '2020–2021',
    badge: false,
    quote: 'Improved patient engagement metrics by 58% across 5 AbbVie brands in partnership with PMs and engineers.',
  },
];

export default function HomePage() {
  return (
    <div className="content">
      <div className="page-emoji">👋</div>
      <h1 className="page-title">Khalîl Boone</h1>
      <p className="page-subtitle">Technical Product Manager · UX Strategy · Fintech · Fashion Tech · Consumer</p>

      <div className="callout">
        <span>💡</span>
        <span>
          Senior Product Owner with 7+ years translating complex user needs into product decisions across
          fintech, financial services, enterprise SaaS and consumer platforms. I have a deep background in UX strategy, design
          systems, and stakeholder alignment with hands-on technical fluency (React, Vercel, Firebase, Supabase, Python, R, SQL and
          AI integrations) that closes the gap between product vision and engineering execution.
        </span>
      </div>

      <hr className="divider" />

      <div className="section-label">Career Highlights</div>

      {/* Prosek — current — full width */}
      <div className="career-highlight-card career-highlight-current">
        <div className="ch-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="ch-company">{CAREER_HIGHLIGHTS[0].company}</span>
            <span className="ch-badge">Current</span>
          </div>
          <span className="ch-period">{CAREER_HIGHLIGHTS[0].period}</span>
        </div>
        <div className="ch-role">{CAREER_HIGHLIGHTS[0].role}</div>
        <p className="ch-quote">&ldquo;{CAREER_HIGHLIGHTS[0].quote}&rdquo;</p>
      </div>

      {/* Remaining — 2-col grid */}
      <div className="ch-grid">
        {CAREER_HIGHLIGHTS.slice(1).map((h) => (
          <div key={h.company} className="career-highlight-card">
            <div className="ch-header">
              <span className="ch-company">{h.company}</span>
              <span className="ch-period">{h.period}</span>
            </div>
            <div className="ch-role">{h.role}</div>
            <p className="ch-quote">&ldquo;{h.quote}&rdquo;</p>
          </div>
        ))}
      </div>

      <hr className="divider" />

      <div className="section-label">Currently Building</div>
      <Link href="/projects/ai-tech-pack-generator" className="card">
        <div className="card-header">
          <div className="card-title"><span>🤖</span> AI Product Developer</div>
          <span className="status-badge" style={{ color: '#f59e0b', background: '#f59e0b22' }}>In Progress</span>
        </div>
        <div className="card-subtitle" style={{ marginTop: '4px' }}>Personal Project · In Progress</div>
        <p className="card-preview" style={{ marginTop: '8px' }}>
          An AI-powered system that generates garment technical specifications from images.
          Independently owning product architecture, UX design, and technical integration across
          four AI pipelines: image analysis, flat sketch generation, specification generation,
          and document assembly.
        </p>
        <div className="tags-row">
          <span className="tag">AI / ML</span>
          <span className="tag">Computer Vision</span>
          <span className="tag">Fashion Tech</span>
          <span className="tag">Enterprise SaaS</span>
          <span className="tag">Firebase</span>
          <span className="tag">React</span>
        </div>
      </Link>

      <hr className="divider" />

      <div className="section-label">Explore</div>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <Link href="/cases" className="quick-link">📋 Case Studies</Link>
        {/* <Link href="/teardowns" className="quick-link">🔍 Product Teardowns</Link> */}
        <Link href="/projects" className="quick-link">🛠️ Projects</Link>
      </div>

      <hr className="divider" />

      <div className="section-label">Contact</div>
      <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: '1.7', marginBottom: '16px' }}>
        Open to Technical PM roles in fintech, consumer, and AI-powered product environments.
      </p>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <a href="mailto:khalil.i.boone@gmail.com" className="contact-btn">
          Let's Connect
        </a>
        <a href="https://linkedin.com/in/khalilboone" target="_blank" rel="noopener noreferrer" className="contact-btn">
          LinkedIn ↗
        </a>
      </div>
    </div>
  );
}
