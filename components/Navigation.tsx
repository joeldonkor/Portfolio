"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Clock from "./Clock";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--background)]/90 backdrop-blur-lg border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-base md:text-lg font-bold hover:text-[var(--primary)] transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-white text-xs">
              JD
            </div>
            <span>joeldonkor.site</span>
          </button>

          {/* Time Display */}
          <div className="text-xs md:text-sm text-[var(--muted-foreground)] font-mono">
            <Clock />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
