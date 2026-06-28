type PhotoCollageProps = {
  images: string[];
  title: string;
};

function CollageItem({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="collage-item">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}

export function PhotoCollage({ images, title }: PhotoCollageProps) {
  if (images.length === 0) return null;

  const useSixLayout = images.length === 6;
  const primaryCount = useSixLayout ? 6 : Math.min(images.length, 5);
  const primary = images.slice(0, primaryCount);
  const extra = images.slice(primaryCount);
  const layoutClass = `photo-collage--${useSixLayout ? 6 : Math.min(primary.length, 5)}`;

  return (
    <div>
      <div className={`photo-collage ${layoutClass}`}>
        {primary.map((src, index) => (
          <CollageItem
            key={src}
            src={src}
            alt={`${title}, capture ${index + 1}`}
          />
        ))}
      </div>

      {extra.length > 0 && (
        <div
          className="photo-collage-extra"
          style={{
            gridTemplateColumns: `repeat(${Math.min(extra.length, 4)}, 1fr)`,
          }}
        >
          {extra.map((src, index) => (
            <CollageItem
              key={src}
              src={src}
              alt={`${title}, capture ${primaryCount + index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
