"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_IMAGES } from "@/lib/constants";
import AnimatedSection from "@/components/AnimatedSection";
import Newsletter from "@/components/Newsletter";
import { X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";

const categories = ["All", ...Array.from(new Set(GALLERY_IMAGES.map((img) => img.category)))];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <>
      <section className="relative pt-28 pb-16 bg-gradient-to-br from-pastel-pink via-white to-pastel-purple overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-text mb-4"
          >
            Our <span className="text-primary">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-light"
          >
            A visual journey through life at Scribbles
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-md"
                    : "bg-bg-soft text-text-light hover:bg-pastel-blue hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((img, i) => (
              <AnimatedSection key={`${img.alt}-${i}`} delay={i * 0.05}>
                <motion.button
                  layout
                  onClick={() => setLightboxIndex(GALLERY_IMAGES.indexOf(img))}
                  className={`group relative rounded-2xl overflow-hidden w-full bg-gradient-to-br from-pastel-blue via-pastel-yellow to-pastel-mint ${
                    i % 3 === 0 ? "aspect-square" : "aspect-[4/3]"
                  } ${i === 0 || i === 5 ? "md:row-span-2" : ""}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon className="w-10 h-10 text-primary/30" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-sm font-medium">{img.category}</span>
                  </div>
                </motion.button>
              </AnimatedSection>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null));
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full aspect-video bg-gradient-to-br from-pastel-blue via-pastel-yellow to-pastel-mint rounded-2xl flex items-center justify-center relative"
            >
              <ImageIcon className="w-20 h-20 text-primary/30" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-2xl">
                <p className="text-white font-medium">{GALLERY_IMAGES[lightboxIndex].alt}</p>
                <p className="text-white/70 text-sm">{GALLERY_IMAGES[lightboxIndex].category}</p>
              </div>
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null));
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {lightboxIndex + 1} / {GALLERY_IMAGES.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Newsletter />
    </>
  );
}
