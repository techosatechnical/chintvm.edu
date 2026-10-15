"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Maximize2, X, ChevronLeft, ChevronRight, MapPin, Sparkles } from "lucide-react";
import { ALL_GALLERY_IMAGES } from "@/data/galleryData";

// Featured 6 high-res moments for homepage
const HOMEPAGE_FEATURED = ALL_GALLERY_IMAGES.slice(0, 6);

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const nextLightbox = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % HOMEPAGE_FEATURED.length);
  }, [lightboxIndex]);

  const prevLightbox = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + HOMEPAGE_FEATURED.length) % HOMEPAGE_FEATURED.length);
  }, [lightboxIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, nextLightbox, prevLightbox]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [lightboxIndex]);

  return (
    <section className="py-20 md:py-24 bg-[#F9F6F7] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header with Title and View All Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#FFE8D6] text-[#FF971D] mb-2 border border-[#FF971D]/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Moments & Memories</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-[#2B2129] tracking-tight">
              Campus Gallery
            </h2>
          </div>

          <Link
            href="/gallery"
            className="group inline-flex items-center gap-2.5 px-6 py-3 bg-[#FF971D] hover:bg-[#e68412] text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-xl self-start sm:self-auto shrink-0"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6-Card Clean Pattern Grid: 3 columns on desktop, natural 4:3 cards for clear viewing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOMEPAGE_FEATURED.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              onClick={() => openLightbox(index)}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col border border-slate-200/60"
            >
              {/* Photo Box with clear aspect-4/3 so faces and subjects are never awkwardly cropped */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-900">
                <Image
                  src={item.img}
                  alt="Gallery photo"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`object-cover ${item.objectPosition || "object-center"} group-hover:scale-105 transition-transform duration-500 ease-out`}
                />

                  {/* Subtle top badge & expand trigger */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                    <span className="backdrop-blur-md bg-black/50 text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                      {item.category}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-white/90 text-navy flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && HOMEPAGE_FEATURED[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 md:p-8"
            onClick={closeLightbox}
          >
            {/* Top Bar */}
            <div
              className="w-full flex items-center justify-between z-20 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/15 border border-white/20 text-saffron">
                  {HOMEPAGE_FEATURED[lightboxIndex].category}
                </span>
                <span className="text-xs md:text-sm text-white/70 font-mono">
                  {String(lightboxIndex + 1).padStart(2, "0")} / {String(HOMEPAGE_FEATURED.length).padStart(2, "0")}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/gallery"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white text-white hover:text-navy transition-colors"
                >
                  View Full Gallery &rarr;
                </Link>
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-navy backdrop-blur-md transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Center Image */}
            <div
              className="relative flex-1 w-full flex items-center justify-center my-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={prevLightbox}
                className="absolute left-2 md:left-6 z-30 p-3 md:p-4 rounded-full bg-black/50 hover:bg-white text-white hover:text-navy backdrop-blur-md border border-white/15 transition-all cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="relative w-full max-w-5xl h-[65vh] md:h-[75vh] flex items-center justify-center">
                <Image
                  src={HOMEPAGE_FEATURED[lightboxIndex].img}
                  alt="Gallery photo"
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              <button
                type="button"
                onClick={nextLightbox}
                className="absolute right-2 md:right-6 z-30 p-3 md:p-4 rounded-full bg-black/50 hover:bg-white text-white hover:text-navy backdrop-blur-md border border-white/15 transition-all cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox center image */}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
