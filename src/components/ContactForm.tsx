"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";

interface ContactFormProps {
  compact?: boolean;
}

export default function ContactForm({ compact = false }: ContactFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {submitted ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-center py-8 bg-success/5 rounded-2xl"
        >
          <div className="w-14 h-14 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-3">
            <Check className="w-7 h-7 text-success" />
          </div>
          <h4 className="font-bold text-text mb-1">Message Sent!</h4>
          <p className="text-sm text-text-light">We&apos;ll get back to you shortly.</p>
        </motion.div>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name *"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
            />
            <input
              type="email"
              placeholder="Email Address *"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
            />
          </div>
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
          />
          <textarea
            placeholder="Your Message *"
            required
            rows={compact ? 3 : 4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary-dark transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" /> Send Message
          </button>
        </>
      )}
    </form>
  );
}
