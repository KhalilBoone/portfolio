import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cases } from '@/lib/cases';
import { ProcessImage } from '@/components/ProcessImage';

// Show photo placeholders in dev, real photos in prod
const IS_DEV = process.env.NODE_ENV === 'development';

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const c = cases.find((x) => x.slug === params.slug);
  return {
    title: c ? `${c.title} — Clarence Boone` : 'Case Study',
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const c = cases.find((x) => x.slug === params.slug);
  if (!c) notFound();

  return (
    <div className="content">
      {/* Back link */}
      <Link href="/cases" className="article-back">
        ← Back to Case Studies
      </Link>

      {/* Header */}
      <div style={{ fontSize: '44px', marginBottom: '12px', lineHeight: 1 }}>{c.emoji}</div>
      <h1 className="article-title">{c.title}</h1>
      <div className="article-meta">
        <span>{c.subtitle}</span>
        <span
          className="status-badge"
          style={{ color: c.statusColor, background: c.statusColor + '18' }}
        >
          {c.status}
        </span>
      </div>
      <div className="tags-row">
        {c.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      <hr className="divider" />

      {/* Cover photo */}
      <ProcessImage
        src={c.coverPhoto.src}
        alt={c.coverPhoto.alt}
        caption={c.coverPhoto.caption}
        suggestion={c.coverPhoto.suggestion}
        isDev={IS_DEV}
      />

      {/* Sections */}
      {c.sections.map((section) => (
        <div key={section.heading} className="article-section">
          <h2 className="article-heading">{section.heading}</h2>
          <p className="article-body">{section.body}</p>
          {section.photos?.map((photo) => (
            <ProcessImage
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              caption={photo.caption}
              suggestion={photo.suggestion}
              isDev={IS_DEV}
            />
          ))}
        </div>
      ))}

      <hr className="divider" />
      <Link href="/cases" className="article-back">← Back to Case Studies</Link>
    </div>
  );
}
