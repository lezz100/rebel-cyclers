"use client";

import { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { galleryImages, galleryCategories } from "@/data/gallery";
import Lightbox from "./Lightbox";

export default function GalleryGrid() {
  const shouldReduce = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeCategory),
    [activeCategory]
  );

  const handleCategoryChange = (cat: string) => {
    setLightboxIndex(null);
    setActiveCategory(cat);
  };

  const handlePrev = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + filtered.length) % filtered.length : null
    );
  }, [filtered.length]);

  const handleNext = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % filtered.length : null
    );
  }, [filtered.length]);

  return (
    <>
      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {galleryCategories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => handleCategoryChange(cat.value)}
            className={`px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${
              activeCategory === cat.value
                ? "bg-[#FF6B00] text-white border border-[#FF6B00]"
                : "bg-transparent text-white/50 border border-white/15 hover:border-white/35 hover:text-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
        <span className="ml-auto self-center text-white/25 text-xs font-mono">
          {filtered.length} photo{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Masonry grid */}
      <div className="columns-2 md:columns-3 gap-3">
        {filtered.map((image, i) => (
          <motion.button
            key={image.id}
            className="break-inside-avoid mb-3 w-full block relative overflow-hidden rounded group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00]"
            onClick={() => setLightboxIndex(i)}
            aria-label={`Open photo: ${image.alt}`}
            initial={shouldReduce ? undefined : { opacity: 0, y: 16 }}
            animate={shouldReduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: Math.min(i * 0.06, 0.4) }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              style={{ width: "100%", height: "auto" }}
              className="rounded transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-[#0B0B0B]/0 group-hover:bg-[#0B0B0B]/40 transition-colors duration-300 rounded flex items-end p-4">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs font-semibold leading-snug text-left line-clamp-2">
                {image.caption ?? image.alt}
              </span>
            </div>
            {/* Category badge */}
            <span className="absolute top-2.5 left-2.5 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-[#0B0B0B]/70 text-white/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {image.category}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="py-24 text-center">
          <p className="text-white/30 text-sm font-mono">No photos in this category yet.</p>
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            key="lightbox"
            initial={shouldReduce ? undefined : { opacity: 0 }}
            animate={shouldReduce ? undefined : { opacity: 1 }}
            exit={shouldReduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Lightbox
              images={filtered}
              index={lightboxIndex}
              onClose={() => setLightboxIndex(null)}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
