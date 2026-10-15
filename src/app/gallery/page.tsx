"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, ChevronLeft, ChevronRight, MapPin, ArrowLeft } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import { ALL_GALLERY_IMAGES } from "@/data/galleryData";

const CATEGORIES = [
  "All",
  "Celebrations",
  "Spiritual & Values",
  "Campus & Life",
  "Cultural & Arts",
] as const;

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? ALL_GALLERY_IMAGES
      : ALL_GALLERY_IMAGES.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const nextLightbox = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % filteredImages.length);
  }, [lightboxIndex, filteredImages.length]);

  const prevLightbox = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + filteredImages.length) % filteredImages.length);
  }, [lightboxIndex, filteredImages.length]);

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
    <>
      <PageHeader
        title="Photo Gallery"
        description="A visual archive of celebrations, sacred events, campus life, and achievements across Chinmaya institutions."
      />

      <div className="bg-[#F9F6F7] min-h-screen py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header navigation bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 pb-6 border-b border-slate-200">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-[#FF971D] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((category) => {
                const count =
                  category === "All"
                    ? ALL_GALLERY_IMAGES.length
                    : ALL_GALLERY_IMAGES.filter((img) => img.category === category).length;
                const isSelected = selectedCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                      isSelected
                        ? "bg-[#FF971D] text-white shadow-md shadow-[#FF971D]/25 scale-105"
                        : "bg-white text-slate-600 hover:text-[#FF971D] hover:bg-[#FFE8D6]/30 border border-slate-200/80 shadow-xs"
                    }`}
                  >
                    <span>{category}</span>
                    <span
                      className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                        isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Clean 3-4 column card grid where all images are fully visible */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  onClick={() => openLightbox(index)}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col border border-slate-200/70"
                >
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={image.img}
                      alt="Gallery photo"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={`object-cover ${image.objectPosition || "object-center"} group-hover:scale-105 transition-transform duration-500 ease-out`}
                    />

                      {/* Top tag */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                        <span className="backdrop-blur-md bg-black/50 text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                          {image.category}
                        </span>
                        <div className="w-7 h-7 rounded-full bg-white/90 text-navy flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredImages[lightboxIndex] && (
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
                  {filteredImages[lightboxIndex].category}
                </span>
                <span className="text-xs md:text-sm text-white/70 font-mono">
                  {String(lightboxIndex + 1).padStart(2, "0")} / {String(filteredImages.length).padStart(2, "0")}
                </span>
              </div>

              <button
                type="button"
                onClick={closeLightbox}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-navy backdrop-blur-md transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
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
                  src={filteredImages[lightboxIndex].img}
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
    </>
  );
}
