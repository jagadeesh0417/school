"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Users, Lightbulb, Sparkles, ClipboardCheck } from "lucide-react";

const reasons = [
  { icon: Heart, title: "Loving Environment", text: "Every child is nurtured with warmth, care, and individual attention in a home-like setting.", color: "warm" },
  { icon: Lightbulb, title: "Montessori Method", text: "Self-directed learning with specially designed materials that foster independence and curiosity.", color: "star" },
  { icon: Users, title: "Expert Teachers", text: "Qualified, trained, and passionate early childhood educators who truly love what they do.", color: "primary" },
  { icon: Shield, title: "Safe & Secure", text: "Child-safe infrastructure, CCTV monitoring, and strict safety protocols for complete peace of mind.", color: "accent" },
  { icon: Sparkles, title: "Holistic Growth", text: "Focus on cognitive, social, emotional, and physical development through a balanced curriculum.", color: "purple" },
  { icon: ClipboardCheck, title: "Regular Updates", text: "Stay connected with daily reports, photos, and progress updates through our parent communication system.", color: "secondary" },
];

const colorMap: Record<string, string> = {
  warm: "bg-warm/10 text-warm-dark",
  star: "bg-star/10 text-star",
  primary: "bg-primary/10 text-primary-dark",
  accent: "bg-accent/10 text-accent-dark",
  purple: "bg-pastel-purple text-[#8E44AD]",
  secondary: "bg-secondary/10 text-secondary-dark",
};

export default function WhyChooseSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-bg-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-3">
            Why Choose <span className="text-primary">Scribbles</span>?
          </h2>
          <p className="text-text-light max-w-2xl mx-auto">
            We provide the perfect foundation for your child&apos;s educational journey
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all border border-gray-50 group"
              >
                <div className={`w-12 h-12 rounded-2xl ${colorMap[reason.color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-text mb-2">{reason.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{reason.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
