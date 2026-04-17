import Link from 'next/link';
import { projects } from '@/lib/projects';
import { IconWrench } from '@/components/Icons';

export default function ProjectsPage() {
  return (
    <div className="content">
      <h1 className="page-title animate-fade-up">Projects</h1>
      <p className="page-subtitle animate-fade-up" style={{ animationDelay: '60ms' }}>
        Things I'm building — documented as products, not just side projects.
      </p>

      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px',
          background: 'var(--card-bg)',
          border: '1px solid var(--border)',
          borderRadius: '10px',
          padding: '16px 20px',
          marginBottom: '32px',
          fontSize: '13.5px',
          color: 'var(--muted)',
          lineHeight: '1.65',
          animationDelay: '120ms',
        }}
        className="animate-fade-up"
      >
        <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }}>
          <IconWrench size={18} />
        </span>
        <span>
          Each project is documented with full product thinking: the problem, architecture
          decisions, key tradeoffs, and what&apos;s next. Process photos included.
        </span>
      </div>

      <hr className="divider" />

      <div className="section-label">Active Projects ({projects.length})</div>

      {projects.map((p, i) => (
        <Link
          key={p.slug}
          href={`/projects/${p.slug}`}
          className="card animate-fade-up"
          style={{ animationDelay: `${200 + i * 80}ms` }}
        >
          <div className="card-header">
            <div className="card-title">
              {p.title}
            </div>
            <span
              className="status-badge"
              style={{ color: p.statusColor, background: p.statusColor + '22' }}
            >
              {p.status}
            </span>
          </div>
          <div className="card-subtitle">{p.subtitle}</div>
          <p className="card-preview">{p.preview}</p>
          <div className="tags-row">
            {p.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}
