"use client";

import { motion } from "framer-motion";
import ContactSection from "@/components/ContactSection";
import Newsletter from "@/components/Newsletter";
import { SCHOOL } from "@/lib/constants";
import { Globe, Camera, Video, ExternalLink } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-28 pb-16 bg-gradient-to-br from-pastel-blue via-white to-pastel-pink overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-text mb-4"
          >
            <span className="text-primary">Contact</span> Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-light"
          >
            We&apos;d love to hear from you. Get in touch with us!
          </motion.p>
        </div>
      </section>

      <ContactSection />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-text mb-8"
          >
            Follow Us on Social Media
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6"
          >
            {[
              { icon: Globe, href: SCHOOL.social.facebook, label: "Facebook", color: "hover:bg-blue-600" },
              { icon: Camera, href: SCHOOL.social.instagram, label: "Instagram", color: "hover:bg-pink-600" },
              { icon: Video, href: SCHOOL.social.youtube, label: "YouTube", color: "hover:bg-red-600" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 rounded-full bg-bg-soft flex items-center justify-center ${s.color} hover:text-white transition-all shadow-sm hover:shadow-lg hover:scale-110`}
              >
                <s.icon className="w-6 h-6" />
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
