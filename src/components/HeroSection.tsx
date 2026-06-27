"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SCHOOL } from "@/lib/constants";
import { ArrowRight, Play, Star, Sparkles, BookOpen, Cloud, CloudSun } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-pastel-blue via-white to-pastel-yellow">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: i * 0.2 }}
          >
            <Cloud
              className="text-white/50"
              style={{
                width: `${80 + i * 40}px`,
                height: `${80 + i * 40}px`,
                top: `${10 + i * 12}%`,
                left: `${5 + i * 18}%`,
              }}
            />
          </motion.div>
        ))}
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] right-[10%]"
        >
          <CloudSun className="w-20 h-20 text-secondary/30" />
        </motion.div>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute text-star/40"
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.4 }}
            style={{ top: `${5 + i * 11}%`, right: `${8 + i * 10}%` }}
          >
            <Star className="w-4 h-4 fill-current" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-text">
                {SCHOOL.type}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-sm font-medium text-text">
                {SCHOOL.identity}
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text leading-tight mb-4">
              Where Little{" "}
              <span className="text-primary">Dreams</span>{" "}
              Take Flight
            </h1>

            <p className="text-lg sm:text-xl text-text-light mb-3">
              {SCHOOL.tagline}
            </p>

            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-star text-star" />
                ))}
              </div>
              <span className="text-sm font-semibold text-text">
                {SCHOOL.googleRating}★
              </span>
              <span className="text-sm text-text-light">
                ({SCHOOL.googleReviews} Reviews)
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-semibold shadow-lg hover:bg-primary-dark transition-all hover:scale-105 text-sm sm:text-base"
              >
                Enroll Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-text px-8 py-3.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105 border border-gray-100 text-sm sm:text-base"
              >
                <Play className="w-4 h-4" /> Schedule a Visit
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-br from-pastel-blue/40 via-pastel-yellow/40 to-pastel-mint/40 rounded-[60px]"
              />
              <div className="absolute inset-4 grid grid-cols-2 gap-4">
                {["🧸", "📚", "🎨", "🌟"].map((emoji, i) => (
                  <motion.div
                    key={i}
                    className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg flex items-center justify-center text-5xl sm:text-6xl"
                    animate={{ y: [0, -10, 0], rotate: [0, i % 2 === 0 ? 5 : -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
                  >
                    {emoji}
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
              >
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-text">Montessori Certified</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />
    </section>
  );
}
