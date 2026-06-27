"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import AnimatedSection from "@/components/AnimatedSection";
import Newsletter from "@/components/Newsletter";
import { Star, Quote } from "lucide-react";

export default function TestimonialsPage() {
  return (
    <>
      <section className="relative pt-28 pb-16 bg-gradient-to-br from-pastel-purple via-white to-pastel-pink overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-text mb-4"
          >
            Parent <span className="text-primary">Testimonials</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-light"
          >
            Hear what parents have to say about their Scribbles experience
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <AnimatedSection key={`${t.name}-${i}`} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-bg-soft rounded-3xl p-6 hover:shadow-lg transition-all border border-gray-50 h-full flex flex-col"
                >
                  <Quote className="w-6 h-6 text-primary/30 mb-3" />
                  <p className="text-text leading-relaxed mb-4 flex-1 italic text-sm">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-star text-star" />
                    ))}
                    {Array.from({ length: 5 - t.rating }).map((_, i) => (
                      <Star key={`empty-${i}`} className="w-4 h-4 text-gray-200" />
                    ))}
                  </div>
                  <div className="border-t border-gray-100 pt-3">
                    <p className="font-bold text-text text-sm">{t.name}</p>
                    <p className="text-xs text-text-light">Parent of {t.child}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
