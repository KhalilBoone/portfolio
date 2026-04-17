import { ProcessImage } from '@/components/ProcessImage';
import { IconBuildings, IconGraduationCap, IconPencil, IconRobot, IconHeart } from '@/components/Icons';

const IS_DEV = process.env.NODE_ENV === 'development';

export const metadata = {
  title: 'Personal — Khalîl Boone',
};

const PHOTOS = [
  {
    src: '/images/SA.jpg',
    alt: 'Table Mountain',
    caption: 'I climbed Table Mountain',
    suggestion: '',
  },
  {
    src: '/images/IMG_3783.jpeg',
    alt: 'Biking',
    caption: 'First time on a tandem bike',
    suggestion: '',
  },
  {
    src: '/images/IMG_0081.jpeg',
    alt: 'Elephant ride',
    caption: 'Riding elephants in Bali',
    suggestion: '',
  },
  {
    src: '/images/IMG_0415.jpeg',
    alt: 'Coding Class',
    caption: 'Teaching a Saturday coding class',
    suggestion: '',
  },
  {
    src: '/images/oxford.JPG',
    alt: 'Green Oxford',
    caption: 'Oxford by my brand, Khalil Idris',
    suggestion: '',
  },
  {
    src: '/images/single_monk.jpg',
    alt: 'Yellow Single Monk',
    caption: 'Single Monk by my brand, Khalil Idris',
    suggestion: '',
  },
  {
    src: '/images/IMG_2598.jpeg',
    alt: 'Infinity Room',
    caption: "Yayoi Kusama's Infinity Room",
    suggestion: '',
  },
  {
    src: '/images/IMG_2589.jpeg',
    alt: 'Yayoi Kusama',
    caption: "Yayoi Kusama's Pumpkin",
    suggestion: '',
  },
];

const ABOUT_BLOCKS = [
  {
    icon: <IconBuildings size={20} />,
    label: 'Based in',
    value: 'Montclair, NJ — NYC Metro',
  },
  {
    icon: <IconGraduationCap size={20} />,
    label: 'Education',
    value: 'B.S. Computer Science & Marketing · NJIT',
  },
  {
    icon: <IconPencil size={20} />,
    label: 'Started in',
    value: 'Design — which taught me to always start with the user in mind',
  },
  {
    icon: <IconRobot size={20} />,
    label: 'Currently obsessed with',
    value: 'Building AI products for fashion brands that help streamline the product development process',
  },
];

export default function PersonalPage() {
  return (
    <div className="content">
      <h1 className="page-title">Personal</h1>
      <p className="page-subtitle">The person behind the portfolio.</p>

      <div style={{
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
      }}>
        <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }}>
          <IconHeart size={18} />
        </span>
        <span>
          I believe it&apos;s important to find your sense of purpose in life and to be driven by a WHY. This is a little of what that
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
        {ABOUT_BLOCKS.map((block) => (
          <div key={block.label} className="about-block">
            <div className="about-icon" style={{ color: 'var(--accent)' }}>{block.icon}</div>
            <div className="about-label">{block.label}</div>
            <div className="about-value">{block.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
