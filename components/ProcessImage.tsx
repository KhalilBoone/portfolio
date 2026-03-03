// ProcessImage renders a process/evidence photo with a caption.
// In development (NODE_ENV=development), if the image file doesn't exist yet,
// it shows a styled placeholder with exact instructions on what photo to take or create.
// In production, it renders the real image + caption.

type ProcessImageProps = {
  src: string;
  alt: string;
  caption: string;
  suggestion?: string;
  isDev?: boolean;
};

export function ProcessImage({ src, alt, caption, suggestion, isDev = false }: ProcessImageProps) {
  if (isDev && suggestion) {
    return (
      <figure className="process-photo">
        <div className="photo-placeholder">
          <div className="photo-placeholder-label">📷 Photo Placeholder</div>
          <div className="photo-placeholder-suggestion">{suggestion}</div>
          <div className="photo-placeholder-path">Add image to: public{src}</div>
        </div>
        <figcaption className="photo-caption">{caption}</figcaption>
      </figure>
    );
  }

  return (
    <figure className="process-photo">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
      <figcaption className="photo-caption">{caption}</figcaption>
    </figure>
  );
}
