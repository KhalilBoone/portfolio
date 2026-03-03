import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/lib/projects';
import { ProcessImage } from '@/components/ProcessImage';

const IS_DEV = process.env.NODE_ENV === 'development';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  return { title: p ? `${p.title} — Clarence Boone` : 'Project' };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) notFound();

  return (
    <div className="content">
      <Link href="/projects" className="article-back animate-fade-up">
        ← Back to Projects
      </Link>

      {/* Header */}
      <div className="animate-fade-up" style={{ animationDelay: '40ms', fontSize: '44px', marginBottom: '12px', lineHeight: 1 }}>
        {p.emoji}
      </div>
      <h1 className="article-title animate-fade-up" style={{ animationDelay: '80ms' }}>
        {p.title}
      </h1>
      <div className="article-meta animate-fade-up" style={{ animationDelay: '120ms' }}>
        <span>{p.timeline}</span>
        <span>·</span>
        <span>{p.role}</span>
        <span
          className="status-badge"
          style={{ color: p.statusColor, background: p.statusColor + '22' }}
        >
          {p.status}
        </span>
      </div>
      <div className="tags-row animate-fade-up" style={{ animationDelay: '160ms' }}>
        {p.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      {/* Project meta grid */}
      <div className="info-grid animate-fade-up" style={{ animationDelay: '200ms', marginTop: '24px' }}>
        <div className="info-block">
          <div className="info-label">Timeline</div>
          <div className="info-value">{p.timeline}</div>
        </div>
        <div className="info-block">
          <div className="info-label">Role</div>
          <div className="info-value">{p.role}</div>
        </div>
        <div className="info-block">
          <div className="info-label">Status</div>
          <div className="info-value" style={{ color: p.statusColor }}>{p.status}</div>
        </div>
        <div className="info-block">
          <div className="info-label">Stack</div>
          <div className="info-value">Firebase, React, GPT-4 Vision</div>
        </div>
      </div>

      <hr className="divider" />

      {/* Cover photo */}
      <div className="animate-fade-up" style={{ animationDelay: '240ms' }}>
        <ProcessImage
          src={p.coverPhoto.src}
          alt={p.coverPhoto.alt}
          caption={p.coverPhoto.caption}
          suggestion={p.coverPhoto.suggestion}
          isDev={IS_DEV}
        />
      </div>

      {/* Sections */}
      {p.sections.map((section, i) => (
        <div
          key={section.heading}
          className="article-section animate-fade-up"
          style={{ animationDelay: `${280 + i * 60}ms` }}
        >
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
      <Link href="/projects" className="article-back">← Back to Projects</Link>
    </div>
  );
}
