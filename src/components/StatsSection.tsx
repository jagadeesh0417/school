"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Star, BookOpen, Shield, Users } from "lucide-react";

const stats = [
  { value: "4.7", suffix: "★", label: "Google Rating", icon: Star, bg: "bg-star/10 text-star" },
  { value: "Montessori", suffix: "", label: "Curriculum", icon: BookOpen, bg: "bg-accent/10 text-accent-dark" },
  { value: "Safe", suffix: "", label: "Environment", icon: Shield, bg: "bg-primary/10 text-primary-dark" },
  { value: "Experienced", suffix: "", label: "Teachers", icon: Users, bg: "bg-warm/10 text-warm-dark" },
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-bg-soft rounded-2xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-50"
              >
                <div className={`w-12 h-12 rounded-full ${stat.bg} flex items-center justify-center mx-auto mb-3`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-3xl sm:text-4xl font-bold text-text">
                  {stat.value}{stat.suffix}
                </span>
                <p className="text-sm text-text-light mt-1 font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
