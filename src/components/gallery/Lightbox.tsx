"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/types";

interface LightboxProps {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  const image = images[index];
  const total = images.length;

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0B0B0B]/96 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-white/8 text-white/70 hover:bg-white/15 hover:text-white transition-colors z-10"
        aria-label="Close lightbox"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/40 text-xs font-mono tracking-widest">
        {index + 1} / {total}
      </div>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 sm:left-8 w-11 h-11 flex items-center justify-center rounded-full bg-white/8 text-white/70 hover:bg-[#FF6B00] hover:text-white transition-colors z-10"
        aria-label="Previous image"
      >
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 sm:right-8 w-11 h-11 flex items-center justify-center rounded-full bg-white/8 text-white/70 hover:bg-[#FF6B00] hover:text-white transition-colors z-10"
        aria-label="Next image"
      >
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Image */}
      <div
        className="relative max-w-[90vw] max-h-[80vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          style={{ maxWidth: "90vw", maxHeight: "80vh", width: "auto", height: "auto" }}
          className="rounded shadow-2xl shadow-black/60"
          priority
        />
      </div>

      {/* Caption */}
      {image.caption && (
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center px-4"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-white/60 text-sm">{image.caption}</p>
          <p className="text-white/25 text-xs mt-1 font-mono uppercase tracking-widest">{image.category}</p>
        </div>
      )}
    </div>
  );
}
