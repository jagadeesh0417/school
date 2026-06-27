"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Stay Connected with Scribbles
          </h2>
          <p className="text-white/80 mb-6 text-sm sm:text-base">
            Subscribe to receive updates on events, activities, and parenting tips!
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3 rounded-xl border-0 outline-none text-sm text-text"
            />
            <button
              type="submit"
              className="bg-secondary text-text px-6 py-3 rounded-xl font-semibold hover:bg-secondary-dark transition-all shadow-md flex items-center justify-center gap-2 text-sm"
            >
              {subscribed ? (
                <><Check className="w-4 h-4" /> Subscribed!</>
              ) : (
                <><Send className="w-4 h-4" /> Subscribe</>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
