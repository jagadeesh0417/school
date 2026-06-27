"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SCHOOL } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                scrolled ? "bg-primary text-white" : "bg-white/90 text-primary"
              )}
            >
              <GraduationCap className="w-6 h-6" />
            </motion.div>
            <div className="hidden sm:block">
              <h1
                className={cn(
                  "text-lg font-bold leading-tight transition-colors",
                  scrolled ? "text-text" : "text-white"
                )}
              >
                {SCHOOL.shortName}
              </h1>
              <p
                className={cn(
                  "text-xs leading-tight transition-colors",
                  scrolled ? "text-text-light" : "text-white/80"
                )}
              >
                {SCHOOL.tagline}
              </p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    isActive
                      ? scrolled
                        ? "bg-primary text-white shadow-md"
                        : "bg-white/20 text-white"
                      : scrolled
                      ? "text-text hover:bg-pastel-blue hover:text-primary"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/admissions"
              className={cn(
                "hidden sm:inline-flex px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg",
                scrolled
                  ? "bg-secondary text-text hover:bg-secondary-dark"
                  : "bg-white text-primary hover:bg-secondary"
              )}
            >
              Enroll Now
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                scrolled
                  ? "text-text hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md shadow-lg overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "block px-4 py-2.5 rounded-xl text-sm font-medium transition-all",
                      isActive
                        ? "bg-primary text-white"
                        : "text-text hover:bg-pastel-blue hover:text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/admissions"
                className="block px-4 py-2.5 rounded-xl text-sm font-semibold bg-secondary text-text text-center mt-2"
              >
                Enroll Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
