"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GALLERY_IMAGES } from "@/lib/constants";
import { ArrowRight, ImageIcon } from "lucide-react";

export default function GalleryPreview() {
  const previewImages = GALLERY_IMAGES.slice(0, 4);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-3">
            Our <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-text-light">A glimpse into the vibrant world of Scribbles</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {previewImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-pastel-blue via-pastel-yellow to-pastel-mint"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageIcon className="w-10 h-10 text-primary/30" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-sm font-medium">{img.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-bg-soft text-text px-6 py-3 rounded-full font-semibold hover:bg-pastel-blue transition-all shadow-sm"
          >
            View Full Gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
