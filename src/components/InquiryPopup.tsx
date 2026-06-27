"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

export default function InquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", childAge: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `New Inquiry:%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AChild Age: ${formData.childAge}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/918333969774?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => { setIsOpen(false); setSubmitted(false); setFormData({ name: "", phone: "", childAge: "", message: "" }); }, 2000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-40 bg-primary text-white px-4 py-2.5 rounded-full shadow-lg hover:bg-primary-dark transition-all text-sm font-semibold hover:scale-105"
      >
        Quick Inquiry
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 w-full max-w-md relative"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {submitted ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-success" />
                  </div>
                  <h3 className="text-xl font-bold text-text mb-2">Thank You!</h3>
                  <p className="text-text-light">We&apos;ll get back to you shortly.</p>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-text mb-1">Quick Inquiry</h3>
                  <p className="text-sm text-text-light mb-6">Fill in your details and we&apos;ll reach out to you.</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                    />
                    <select
                      value={formData.childAge}
                      onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                    >
                      <option value="">Select Child&apos;s Age</option>
                      <option value="1.5-2.5">1.5 - 2.5 Years (Play Group)</option>
                      <option value="2.5-3.5">2.5 - 3.5 Years (Nursery)</option>
                      <option value="3.5-4.5">3.5 - 4.5 Years (Pre-KG)</option>
                      <option value="4.5-5.5">4.5 - 5.5 Years (LKG)</option>
                      <option value="5.5-6.5">5.5 - 6.5 Years (UKG)</option>
                    </select>
                    <textarea
                      placeholder="Message (optional)"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary-dark transition-all shadow-md hover:shadow-lg"
                    >
                      Send Inquiry
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
