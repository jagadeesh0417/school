"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SCHOOL } from "@/lib/constants";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-bg-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-3">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-text-light">We&apos;d love to hear from you</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50">
              <h3 className="text-lg font-bold text-text mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-pastel-blue flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-text text-sm">Address</p>
                    <p className="text-sm text-text-light">{SCHOOL.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-pastel-yellow flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-secondary-dark" />
                  </div>
                  <div>
                    <p className="font-semibold text-text text-sm">Phone</p>
                    <a href={`tel:${SCHOOL.phone}`} className="text-sm text-primary hover:underline">{SCHOOL.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-pastel-mint flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent-dark" />
                  </div>
                  <div>
                    <p className="font-semibold text-text text-sm">Email</p>
                    <a href={`mailto:${SCHOOL.email}`} className="text-sm text-primary hover:underline">{SCHOOL.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-pastel-pink flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-warm-dark" />
                  </div>
                  <div>
                    <p className="font-semibold text-text text-sm">Working Hours</p>
                    <p className="text-sm text-text-light">Mon - Fri: 8:00 AM - 1:00 PM</p>
                    <p className="text-sm text-text-light">Sat: 9:00 AM - 12:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-50 h-[250px]">
              <iframe
                src={SCHOOL.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-50"
          >
            <h3 className="text-lg font-bold text-text mb-4">Send us a Message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
