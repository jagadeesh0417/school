"use client";

import { motion } from "framer-motion";
import { SCHOOL } from "@/lib/constants";
import { Heart, Eye, Target, BookOpen, Shield, Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Newsletter from "@/components/Newsletter";

const values = [
  { icon: Heart, title: "Nurturing Love", text: "Every child is unique and deserves a loving environment where they feel safe, valued, and encouraged to explore." },
  { icon: Eye, title: "Our Vision", text: "To create a world where every child discovers their innate potential and develops a lifelong love for learning." },
  { icon: Target, title: "Our Mission", text: "Provide exceptional Montessori-based early education that nurtures cognitive, social, emotional, and physical growth." },
  { icon: BookOpen, title: "Montessori Philosophy", text: "Child-centered approach with self-directed activity, hands-on learning, and collaborative play guided by trained teachers." },
  { icon: Shield, title: "Safe Foundation", text: "Building character, confidence, and curiosity in a secure, stimulating environment that feels like home." },
  { icon: Users, title: "Parent Partnership", text: "We believe in strong parent-teacher collaboration for the holistic development of every child." },
];

const milestones = [
  { year: "2018", text: "Scribbles International PreSchool was founded with a vision to transform early childhood education" },
  { year: "2019", text: "Expanded to full Montessori curriculum with certified teachers and specialized learning materials" },
  { year: "2021", text: "Introduced smart classrooms and digital learning tools while maintaining Montessori principles" },
  { year: "2023", text: "Recognized as one of the top preschools in Kurnool with 4.7★ Google rating" },
  { year: "2025", text: "Continuing to nurture young minds with expanded facilities and enriched programs" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-28 pb-16 bg-gradient-to-br from-pastel-blue via-white to-pastel-yellow overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/40"
              style={{
                width: `${100 + i * 60}px`,
                height: `${100 + i * 60}px`,
                top: `${5 + i * 20}%`,
                right: `${-5 + i * 8}%`,
              }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 5 + i, repeat: Infinity }}
            />
          ))}
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-text mb-4"
          >
            About <span className="text-primary">Scribbles</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-light max-w-2xl mx-auto"
          >
            Discover our journey, our philosophy, and our commitment to early childhood education
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-pastel-blue via-pastel-yellow to-pastel-mint rounded-[40px]" />
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4"
                >
                  <p className="text-lg font-bold text-primary">3+ Years</p>
                  <p className="text-xs text-text-light">of Excellence</p>
                </motion.div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} direction="right">
              <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
                Welcome to {SCHOOL.shortName}
              </h2>
              <p className="text-text-light leading-relaxed mb-4">
                At Scribbles International PreSchool, we believe that early childhood is the most crucial period for brain development and character formation. Our Montessori-based approach provides children with the freedom to learn at their own pace in a carefully prepared environment.
              </p>
              <p className="text-text-light leading-relaxed mb-4">
                Located in the heart of Kurnool, our school offers a warm, home-like atmosphere where children feel safe, loved, and inspired to explore. Every corner of our campus is designed to spark curiosity and creativity.
              </p>
              <p className="text-text-light leading-relaxed">
                As a <strong>women-owned institution</strong>, we bring a unique blend of nurturing care and professional excellence to early childhood education.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-3">Our Values & Philosophy</h2>
            <p className="text-text-light max-w-2xl mx-auto">The principles that guide everything we do</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <AnimatedSection key={v.title} delay={i * 0.1}>
                  <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-50 group">
                    <div className="w-12 h-12 rounded-2xl bg-pastel-blue flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-text mb-2">{v.title}</h3>
                    <p className="text-sm text-text-light leading-relaxed">{v.text}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-3">Our Journey</h2>
            <p className="text-text-light">Key milestones in our story</p>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary hidden md:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <AnimatedSection key={m.year} delay={i * 0.15}>
                  <div className={`relative flex items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="hidden md:flex flex-1 justify-end">
                      {i % 2 === 0 && (
                        <div className="bg-bg-soft rounded-2xl p-5 shadow-sm max-w-md">
                          <p className="text-sm text-text-light">{m.text}</p>
                        </div>
                      )}
                    </div>
                    <div className="shrink-0 relative z-10">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-lg"
                      >
                        {m.year}
                      </motion.div>
                    </div>
                    <div className="flex-1 md:hidden">
                      <div className="bg-bg-soft rounded-2xl p-5 shadow-sm">
                        <p className="text-sm text-text-light">{m.text}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex flex-1">
                      {i % 2 !== 0 && (
                        <div className="bg-bg-soft rounded-2xl p-5 shadow-sm max-w-md">
                          <p className="text-sm text-text-light">{m.text}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-pastel-blue/30 to-pastel-mint/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-6"
            >
              <Heart className="w-7 h-7 text-warm-dark" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl font-bold text-text mb-4">Founder&apos;s Message</h2>
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg max-w-2xl mx-auto">
              <p className="text-text-light leading-relaxed mb-6 italic">
                &ldquo;Every child is born with infinite potential. Our mission at Scribbles is to create an environment where this potential can unfold naturally, joyfully, and confidently. We don&apos;t just prepare children for school; we prepare them for life.&rdquo;
              </p>
              <div className="w-16 h-0.5 bg-primary mx-auto mb-4" />
              <p className="font-bold text-text">Founder</p>
              <p className="text-sm text-text-light">{SCHOOL.name}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
