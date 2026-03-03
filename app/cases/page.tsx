import Link from 'next/link';
import { cases } from '@/lib/cases';

export default function CasesPage() {
  return (
    <div className="content">
      <div className="page-emoji">📋</div>
      <h1 className="page-title">Case Studies</h1>
      <p className="page-subtitle">
        Real product work — framed through a PM lens. Each study covers the problem, my role,
        key decisions, and measurable outcomes.
      </p>
      <hr className="divider" />

      <div className="section-label">All Cases ({cases.length})</div>

      {cases.map((c) => (
        <Link key={c.slug} href={`/cases/${c.slug}`} className="card">
          <div className="card-header">
            <div className="card-title">
              <span>{c.emoji}</span>
              {c.title}
            </div>
            <span
              className="status-badge"
              style={{
                color: c.statusColor,
                background: c.statusColor + '18',
              }}
            >
              {c.status}
            </span>
          </div>
          <div className="card-subtitle">{c.subtitle}</div>
          <p className="card-preview">{c.preview}</p>
          <div className="tags-row">
            {c.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}
