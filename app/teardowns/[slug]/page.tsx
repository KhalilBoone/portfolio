import { notFound } from 'next/navigation';
import Link from 'next/link';
import { teardowns } from '@/lib/teardowns';
import { ProcessImage } from '@/components/ProcessImage';

const IS_DEV = process.env.NODE_ENV === 'development';

export function generateStaticParams() {
  return teardowns.map((td) => ({ slug: td.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const td = teardowns.find((x) => x.slug === params.slug);
  return {
    title: td ? `${td.title} Teardown — Clarence Boone` : 'Teardown',
  };
}

export default function TeardownPage({ params }: { params: { slug: string } }) {
  const td = teardowns.find((x) => x.slug === params.slug);
  if (!td) notFound();

  return (
    <div className="content">
      <Link href="/teardowns" className="article-back">
        ← Back to Teardowns
      </Link>

      <div style={{ fontSize: '44px', marginBottom: '12px', lineHeight: 1 }}>{td.emoji}</div>
      <h1 className="article-title">{td.title}</h1>
      <div className="article-meta">
        <span>{td.subtitle}</span>
        <span>{td.date}</span>
      </div>
      <div className="tags-row">
        {td.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      <hr className="divider" />

      {/* Cover photo */}
      <ProcessImage
        src={td.coverPhoto.src}
        alt={td.coverPhoto.alt}
        caption={td.coverPhoto.caption}
        suggestion={td.coverPhoto.suggestion}
        isDev={IS_DEV}
      />

      {/* Sections */}
      {td.sections.map((section) => (
        <div key={section.heading} className="article-section">
          <h2 className="article-heading">{section.heading}</h2>
          <p className="article-body">{section.body}</p>
          {section.photo && (
            <ProcessImage
              src={section.photo.src}
              alt={section.photo.alt}
              caption={section.photo.caption}
              suggestion={section.photo.suggestion}
              isDev={IS_DEV}
            />
          )}
        </div>
      ))}

      <hr className="divider" />
      <Link href="/teardowns" className="article-back">← Back to Teardowns</Link>
    </div>
  );
}
