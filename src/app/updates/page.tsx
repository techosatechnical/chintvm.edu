"use client";

import { useState, useEffect, useCallback } from "react";
import PageHeader from "@/components/shared/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  ArrowLeft, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  Tag
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ALL_UPDATES, UpdateItem } from "@/data/updates";

const CATEGORIES = [
  "All",
  "Celebrations & Yajnam",
  "Youth & Camps",
  "Academic & Awards",
  "Institutional",
] as const;

export default function UpdatesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredUpdates = selectedCategory === "All"
    ? ALL_UPDATES
    : ALL_UPDATES.filter((u) => u.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const nextLightbox = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % filteredUpdates.length);
  }, [lightboxIndex, filteredUpdates.length]);

  const prevLightbox = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + filteredUpdates.length) % filteredUpdates.length);
  }, [lightboxIndex, filteredUpdates.length]);

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
        title="Chinmaya Updates & Events" 
        description="Official announcements, festival celebrations, academic achievements, and youth camps across our institutions." 
      />

      <div className="bg-[#F9F6F7] min-h-screen py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Top Navigation & Filter Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 pb-6 border-b border-[#FFE8D6]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-[#FF971D] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => {
                const count = cat === "All"
                  ? ALL_UPDATES.length
                  : ALL_UPDATES.filter((u) => u.category === cat).length;
                const isSelected = selectedCategory === cat;

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                      isSelected
                        ? "bg-[#FF971D] text-white shadow-md shadow-[#FF971D]/25 scale-105"
                        : "bg-white text-slate-700 hover:text-[#FF971D] hover:bg-[#FFE8D6]/40 border border-slate-200/80 shadow-2xs"
                    }`}
                  >
                    <span>{cat}</span>
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

          {/* All Posters Responsive Grid (Aspect 3:4 portrait matching flyers) */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredUpdates.map((update, index) => (
                <motion.div
                  key={update.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  onClick={() => openLightbox(index)}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#FF971D]/40 border border-slate-200/80 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5"
                >
                  <div>
                    {/* Portrait Flyer Image */}
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={update.img}
                        alt={update.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                        <span className="backdrop-blur-md bg-white/95 text-[#FF971D] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#FF971D]/20 shadow-xs">
                          {update.category}
                        </span>
                        <div className="w-7 h-7 rounded-full bg-white/90 text-navy flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                          <Maximize2 className="w-3.5 h-3.5 text-[#FF971D]" />
                        </div>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-5">
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF971D] mb-1.5">
                        <Calendar className="w-3.5 h-3.5 shrink-0" />
                        <span>{update.date}</span>
                      </div>
                      <h3 className="font-heading font-extrabold text-navy text-sm md:text-base leading-snug uppercase tracking-tight group-hover:text-[#FF971D] transition-colors line-clamp-2">
                        {update.title}
                      </h3>
                      {update.desc && (
                        <p className="text-slate-600 text-xs leading-relaxed mt-2 line-clamp-2">
                          {update.desc}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="px-5 pb-5 pt-0">
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#FF971D]">
                      <span>View Full Flyer</span>
                      <Maximize2 className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredUpdates.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200">
              <Sparkles className="w-12 h-12 text-[#FF971D] mx-auto mb-3 opacity-60" />
              <h3 className="font-heading text-xl font-bold text-navy">No updates found</h3>
              <p className="text-slate-500 text-sm mt-1">Please select another category.</p>
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 md:p-6"
            onClick={closeLightbox}
          >
            {/* Top Bar */}
            <div
              className="flex items-center justify-between z-10 w-full max-w-5xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <span className="text-xs uppercase font-bold text-[#FF971D] tracking-wider block">
                  {filteredUpdates[lightboxIndex].date} &bull; {filteredUpdates[lightboxIndex].category}
                </span>
                <h3 className="font-heading font-bold text-white text-base md:text-lg leading-tight mt-0.5">
                  {filteredUpdates[lightboxIndex].title}
                </h3>
              </div>

              <button
                type="button"
                onClick={closeLightbox}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-navy backdrop-blur-md transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Center Poster Image with Prev/Next Controls */}
            <div
              className="relative flex-1 w-full flex items-center justify-center my-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={prevLightbox}
                className="absolute left-2 md:left-6 z-30 p-3 md:p-4 rounded-full bg-black/50 hover:bg-white text-white hover:text-navy backdrop-blur-md border border-white/15 transition-all cursor-pointer"
                aria-label="Previous flyer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="relative w-full max-w-2xl h-[70vh] md:h-[80vh] flex items-center justify-center">
                <Image
                  src={filteredUpdates[lightboxIndex].img}
                  alt={filteredUpdates[lightboxIndex].title}
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
                aria-label="Next flyer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption & Counter */}
            <div
              className="text-center z-10 w-full max-w-2xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-xs text-white/70">
                Flyer {lightboxIndex + 1} of {filteredUpdates.length} &bull; Use &larr; &rarr; keys or click sides to navigate
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}