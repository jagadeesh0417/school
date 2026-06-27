"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "@/lib/constants";
import AnimatedSection from "@/components/AnimatedSection";
import Newsletter from "@/components/Newsletter";
import { ChevronDown, HelpCircle } from "lucide-react";

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatedSection delay={index * 0.05}>
      <div className="bg-bg-soft rounded-2xl overflow-hidden border border-gray-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-5 text-left gap-4 hover:bg-white/50 transition-colors"
        >
          <span className="font-semibold text-text text-sm sm:text-base">{faq.q}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="shrink-0"
          >
            <ChevronDown className="w-5 h-5 text-primary" />
          </motion.div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <p className="px-5 pb-5 text-sm text-text-light leading-relaxed">{faq.a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}

export default function FAQPage() {
  return (
    <>
      <section className="relative pt-28 pb-16 bg-gradient-to-br from-pastel-yellow via-white to-pastel-blue overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-text mb-4"
          >
            Frequently Asked <span className="text-primary">Questions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-light"
          >
            Everything you need to know about Scribbles International PreSchool
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 mb-10">
            <HelpCircle className="w-6 h-6 text-primary" />
            <span className="text-text-light">Got more questions? <a href="/contact" className="text-primary hover:underline font-medium">Contact us</a></span>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
