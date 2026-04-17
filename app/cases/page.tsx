import Link from 'next/link';
import Image from 'next/image';
import { cases } from '@/lib/cases';

const THUMBNAIL_BCOLORS: Record<string, string> = {
  'blackstone-design-system': '#E8EEF5',
  'equityzen-investor-marketplace': '#EEF5EE',
  'netflix-operations-systems': '#F5EEEE',
};

export default function CasesPage() {
  return (
    <div className="content">
      <h1 className="page-title">Work</h1>
      <p className="page-subtitle">
        End-to-end design work across fintech, enterprise SaaS, and financial services —
        from research and strategy through interaction design and shipped product.
      </p>

      <hr className="divider" />

      <div className="section-label">All Case Studies ({cases.length})</div>

      <div className="work-grid">
        {cases.map((c) => (
          <Link key={c.slug} href={`/cases/${c.slug}`} className="work-card">
            {/* Thumbnail */}
            <div
              className="work-card-thumbnail"
              style={{ background: THUMBNAIL_BCOLORS[c.slug] ?? 'var(--accent-bg)' }}
            >
              {c.coverPhoto?.src && (
                <Image
                  src={c.coverPhoto.src}
                  alt={c.coverPhoto?.alt || c.title}
                  width={1200}
                  height={525}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                />
              )}
            </div>

            {/* Body */}
            <div className="work-card-body">
              <div className="work-card-header">
                <div>
                  <div className="work-card-title">{c.title}</div>
                  <div className="card-subtitle" style={{ marginTop: '3px' }}>{c.subtitle}</div>
                </div>
                <div className="work-card-arrow">→</div>
              </div>
              <p className="work-card-desc">{c.preview}</p>
              <div className="tags-row">
                {c.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
                <span
                  className="status-badge"
                  style={{ color: c.statusColor, background: c.statusColor + '18' }}
                >
                  {c.status}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
