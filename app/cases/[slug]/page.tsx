import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cases } from '@/lib/cases';
import { ProcessImage } from '@/components/ProcessImage';
import { CaseTOC, type TocItem } from '@/components/CaseTOC';
import { DeviceViewer } from '@/components/DeviceViewer';

const IS_DEV = process.env.NODE_ENV === 'development';

// Simple heading → URL-safe id
function toId(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const c = cases.find((x) => x.slug === params.slug);
  return { title: c ? `${c.title} — Khalîl Boone` : 'Case Study' };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const c = cases.find((x) => x.slug === params.slug);
  if (!c) notFound();

  const tocItems: TocItem[] = c.sections.map((s) => ({
    id: toId(s.heading),
    heading: s.heading,
  }));

  const idx  = cases.findIndex((x) => x.slug === c.slug);
  const prev = cases[idx - 1];
  const next = cases[idx + 1];

  return (
    <div className="case-layout">

      {/* ── MAIN CONTENT ───────────────────────── */}
      <div className="case-main">
        <Link href="/cases" className="article-back">
          ← Work
        </Link>

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
        <div className="tags-row" style={{ marginBottom: '28px' }}>
          {c.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        {/* Cover photo */}
        {c.coverPhoto && (
          <ProcessImage
            src={c.coverPhoto.src}
            alt={c.coverPhoto.alt}
            caption={c.coverPhoto.caption}
            suggestion={c.coverPhoto.suggestion}
            isDev={IS_DEV}
          />
        )}

        <hr className="divider" />

        {/* Sections — each gets an id for the TOC */}
        {c.sections.map((section) => (
          <div
            key={section.heading}
            id={toId(section.heading)}
            className="article-section"
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
            {section.deviceViewer && (
              <DeviceViewer
                desktopSrc={section.deviceViewer.desktopSrc}
                mobileSrc={section.deviceViewer.mobileSrc}
                alt={section.deviceViewer.alt}
              />
            )}
          </div>
        ))}

        <hr className="divider" />

        {/* Pagination */}
        <div className="case-pagination">
          {prev ? (
            <Link href={`/cases/${prev.slug}`} className="case-pagination-link">
              ← {prev.title}
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/cases/${next.slug}`} className="case-pagination-link">
              {next.title} →
            </Link>
          ) : <div />}
        </div>
      </div>

      {/* ── STICKY TOC ──────────────────────────── */}
      <aside className="case-toc-col">
        <CaseTOC items={tocItems} />
      </aside>

    </div>
  );
}
