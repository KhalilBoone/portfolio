import { ProcessImage } from '@/components/ProcessImage';

const IS_DEV = process.env.NODE_ENV === 'development';

export const metadata = {
  title: 'Personal — Clarence Boone',
};

const PHOTOS = [
  {
    src: '/images/personal/family-1.jpg',
    alt: 'Family photo',
    caption: '',
    suggestion: '📸 Add a favorite family photo here — outdoors, at home, or at an event. Candid works better than posed.',
  },
  {
    src: '/images/personal/family-2.jpg',
    alt: 'Family photo',
    caption: '',
    suggestion: '📸 A moment with your kids or partner — something that shows your world outside of work.',
  },
  {
    src: '/images/personal/family-3.jpg',
    alt: 'Family photo',
    caption: '',
    suggestion: '📸 A trip, a celebration, or a regular Tuesday. The specificity is what makes it feel real.',
  },
  {
    src: '/images/personal/family-4.jpg',
    alt: 'Family photo',
    caption: '',
    suggestion: '📸 Something that shows what you care about — a hobby, a place, a person.',
  },
];

export default function PersonalPage() {
  return (
    <div className="content">
      <div className="page-emoji">🏡</div>
      <h1 className="page-title">Personal</h1>
      <p className="page-subtitle">The person behind the portfolio.</p>

      <div className="callout">
        <span>❤️</span>
        <span>
          I believe the best product work comes from people with full lives — people who build
          things because they care about the humans who use them. This is a little of what that
          looks like for me.
        </span>
      </div>

      <hr className="divider" />

      <div className="section-label">Family &amp; Life</div>

      <div className="photo-grid">
        {PHOTOS.map((photo, i) => (
          <div key={i} className="photo-grid-item">
            <ProcessImage
              src={photo.src}
              alt={photo.alt}
              caption={photo.caption}
              suggestion={photo.suggestion}
              isDev={IS_DEV}
            />
          </div>
        ))}
      </div>

      <hr className="divider" />

      <div className="section-label">A few things about me</div>
      <div className="about-grid">
        <div className="about-block">
          <div className="about-icon">🏙️</div>
          <div className="about-label">Based in</div>
          <div className="about-value">Montclair, NJ — NYC Metro</div>
        </div>
        <div className="about-block">
          <div className="about-icon">🎓</div>
          <div className="about-label">Education</div>
          <div className="about-value">B.S. Computer Science &amp; Marketing · NJIT</div>
        </div>
        <div className="about-block">
          <div className="about-icon">✏️</div>
          <div className="about-label">Started in</div>
          <div className="about-value">Design — which taught me to always start with the person using the thing</div>
        </div>
        <div className="about-block">
          <div className="about-icon">🤖</div>
          <div className="about-label">Currently obsessed with</div>
          <div className="about-value">Building AI products that replace hours of manual work with seconds of insight</div>
        </div>
      </div>
    </div>
  );
}
