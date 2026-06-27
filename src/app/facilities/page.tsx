"use client";

import { motion } from "framer-motion";
import { FACILITIES } from "@/lib/constants";
import AnimatedSection from "@/components/AnimatedSection";
import Newsletter from "@/components/Newsletter";
import { Shield } from "lucide-react";

const colorMap: Record<string, string> = {
  "pastel-blue": "bg-pastel-blue text-primary-dark",
  "pastel-yellow": "bg-pastel-yellow text-secondary-dark",
  "pastel-mint": "bg-pastel-mint text-accent-dark",
  "pastel-pink": "bg-pastel-pink text-warm-dark",
  "pastel-purple": "bg-pastel-purple text-[#8E44AD]",
};

export default function FacilitiesPage() {
  return (
    <>
      <section className="relative pt-28 pb-16 bg-gradient-to-br from-pastel-mint via-white to-pastel-blue overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-text mb-4"
          >
            Our <span className="text-primary">Facilities</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-light max-w-2xl mx-auto"
          >
            World-class infrastructure designed for safety, learning, and fun
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES.map((facility, i) => (
              <AnimatedSection key={facility.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-bg-soft rounded-3xl p-6 hover:shadow-lg transition-all border border-gray-50 group"
                >
                  <div className={`w-14 h-14 rounded-2xl ${colorMap[facility.color]} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                    {facility.icon}
                  </div>
                  <h3 className="text-lg font-bold text-text mb-2">{facility.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{facility.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-secondary" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Your Child&apos;s Safety is Our Priority</h2>
            </div>
            <p className="text-white/80 max-w-2xl mx-auto">
              Every aspect of our campus is designed with your child&apos;s safety and well-being in mind.
              From rounded corners to non-slip flooring, from CCTV monitoring to strict visitor protocols,
              we leave nothing to chance.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
