"use client";

import { useEffect, useRef } from "react";

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function ParallaxImage({ src, alt, className = "" }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    if (reducedMotion || !isDesktop) return;

    let frame = 0;

    const update = () => {
      const rect = container.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const offset = (elementCenter - viewportCenter) * 0.08;

      image.style.transform = `translate3d(0, ${offset}px, 0) scale(1.03)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      image.style.transform = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`parallax-image mt-10 w-full overflow-hidden rounded-2xl border border-[var(--border)] shadow-2xl ${className}`.trim()}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="aspect-video w-full object-cover object-top"
        loading="lazy"
      />
    </div>
  );
}
