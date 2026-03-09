import { ProcessImage } from '@/components/ProcessImage';

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
    caption: 'Yayoi Kusama\'s Infinity Room',
    suggestion: '',
  },
  {
    src: '/images/IMG_2589.jpeg',
    alt: 'Yayoi Kusama',
    caption: 'Yayoi Kusuma\'s Pumpkin',
    suggestion: '',
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
          I believe it's important to find your sense of purpose in life and to be driven by a WHY. This is a little of what that
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
          <div className="about-value">Design — which taught me to always start with the user in mind</div>
        </div>
        <div className="about-block">
          <div className="about-icon">🤖</div>
          <div className="about-label">Currently obsessed with</div>
          <div className="about-value">Building AI products for fashion brands that help streamline the product development process</div>
        </div>
      </div>
    </div>
  );
}
