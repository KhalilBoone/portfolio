import Link from 'next/link';
import { teardowns } from '@/lib/teardowns';

export default function TeardownsPage() {
  return (
    <div className="content">
      <div className="page-emoji">🔍</div>
      <h1 className="page-title">Product Teardowns</h1>
      <p className="page-subtitle">
        How I analyze AI products — what's working, what's broken, and the one product bet I'd
        make. Each teardown includes a concept sketch for the opportunity I'd pursue.
      </p>

      <div className="callout">
        <span>📐</span>
        <span>
          Each teardown follows the same structure: What's Working → What's Broken → The One Bet
          I'd Make → How I'd Measure Success. Concept wireframes included.
        </span>
      </div>

      <hr className="divider" />

      <div className="section-label">All Teardowns ({teardowns.length})</div>

      {teardowns.map((td) => (
        <Link key={td.slug} href={`/teardowns/${td.slug}`} className="card">
          <div className="card-header">
            <div className="card-title">
              <span>{td.emoji}</span>
              {td.title}
            </div>
            <span className="tag">{td.date}</span>
          </div>
          <div className="card-subtitle">{td.subtitle}</div>
          <p className="card-preview">{td.preview}</p>
          <div className="tags-row">
            {td.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}
