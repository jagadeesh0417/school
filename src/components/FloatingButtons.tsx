"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, X } from "lucide-react";
import { SCHOOL } from "@/lib/constants";
import { useState } from "react";

export default function FloatingButtons() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-xl p-3 mb-2 relative"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="text-xs text-text font-medium whitespace-nowrap">
              Need help? Chat with us! 👋
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={`tel:${SCHOOL.phone}`}
        className="w-12 h-12 rounded-full bg-secondary text-white shadow-lg flex items-center justify-center hover:bg-secondary-dark transition-all hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="w-5 h-5" />
      </a>

      <motion.a
        href={`https://wa.me/${SCHOOL.whatsapp}?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20Scribbles%20International%20PreSchool`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 text-white shadow-lg flex items-center justify-center hover:bg-green-600 transition-all hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
