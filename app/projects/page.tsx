import Link from 'next/link';
import { projects } from '@/lib/projects';

export default function ProjectsPage() {
  return (
    <div className="content">
      <div className="page-emoji animate-fade-up">🛠️</div>
      <h1 className="page-title animate-fade-up" style={{ animationDelay: '60ms' }}>Projects</h1>
      <p className="page-subtitle animate-fade-up" style={{ animationDelay: '120ms' }}>
        Things I'm building — documented as products, not just side projects.
      </p>

      <div className="callout animate-fade-up" style={{ animationDelay: '160ms' }}>
        <span>🔬</span>
        <span>
          Each project is documented with full product thinking: the problem, architecture
          decisions, key tradeoffs, and what's next. Process photos included.
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
              <span>{p.emoji}</span>
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
