"use client";

import { motion } from "framer-motion";
import { PROGRAMS } from "@/lib/constants";
import AnimatedSection from "@/components/AnimatedSection";
import Newsletter from "@/components/Newsletter";
import { Clock, Users, Calendar, Check, Activity } from "lucide-react";

const colorMap: Record<string, string> = {
  "pastel-yellow": "bg-pastel-yellow text-secondary-dark",
  "pastel-blue": "bg-pastel-blue text-primary-dark",
  "pastel-mint": "bg-pastel-mint text-accent-dark",
  "pastel-pink": "bg-pastel-pink text-warm-dark",
  "pastel-purple": "bg-pastel-purple text-[#8E44AD]",
};

const borderMap: Record<string, string> = {
  "pastel-yellow": "border-secondary/20",
  "pastel-blue": "border-primary/20",
  "pastel-mint": "border-accent/20",
  "pastel-pink": "border-warm/20",
  "pastel-purple": "border-[#8E44AD]/20",
};

export default function ProgramsPage() {
  return (
    <>
      <section className="relative pt-28 pb-16 bg-gradient-to-br from-pastel-yellow via-white to-pastel-mint overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-text mb-4"
          >
            Our <span className="text-primary">Programs</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-light max-w-2xl mx-auto"
          >
            Age-appropriate Montessori programs designed to nurture every stage of early development
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {PROGRAMS.map((program, i) => (
            <AnimatedSection key={program.id} delay={i * 0.1}>
              <div className={`bg-bg-soft rounded-3xl p-6 sm:p-8 border-2 ${borderMap[program.color]} hover:shadow-xl transition-shadow`}>
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className={`w-16 h-16 rounded-2xl ${colorMap[program.color]} flex items-center justify-center text-2xl mb-4`}>
                      {program.icon}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-text mb-1">{program.title}</h2>
                    <p className="text-text-light mb-4">{program.description}</p>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-1.5 text-sm bg-white rounded-full px-3 py-1.5 shadow-sm">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="font-medium">{program.age}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm bg-white rounded-full px-3 py-1.5 shadow-sm">
                        <Clock className="w-4 h-4 text-secondary-dark" />
                        <span className="font-medium">{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm bg-white rounded-full px-3 py-1.5 shadow-sm">
                        <Users className="w-4 h-4 text-accent-dark" />
                        <span className="font-medium">Ratio 1:{program.ratio}</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Check className="w-5 h-5 text-success" />
                        <h3 className="font-bold text-text">Learning Outcomes</h3>
                      </div>
                      <ul className="space-y-2">
                        {program.outcomes.map((o) => (
                          <li key={o} className="flex items-start gap-2 text-sm text-text-light">
                            <span className="w-1.5 h-1.5 rounded-full bg-success mt-1.5 shrink-0" />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Activity className="w-5 h-5 text-primary" />
                        <h3 className="font-bold text-text">Activities</h3>
                      </div>
                      <ul className="space-y-2">
                        {program.activities.map((a) => (
                          <li key={a} className="flex items-start gap-2 text-sm text-text-light">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  );
}
