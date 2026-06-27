"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, GraduationCap, Sparkles } from "lucide-react";

export default function AdmissionBanner() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-dark to-[#1a5276] p-8 sm:p-12 text-center"
        >
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-40 h-40 border-[20px] border-white/5 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-20 -left-20 w-60 h-60 border-[30px] border-white/5 rounded-full"
            />
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-white/10"
                animate={{ y: [-20, 20, -20] }}
                transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
                style={{ top: `${10 + i * 20}%`, left: `${5 + i * 20}%` }}
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>
            ))}
          </div>

          <div className="relative z-10">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6"
            >
              <GraduationCap className="w-8 h-8 text-white" />
            </motion.div>

            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
              Admissions Open for 2026-27
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Give your child the best start in life. Enroll at Scribbles International PreSchool today!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-text px-8 py-3.5 rounded-full font-semibold shadow-lg hover:bg-secondary-dark transition-all hover:scale-105"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/15 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/25 transition-all border border-white/20"
              >
                Schedule a Visit
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
