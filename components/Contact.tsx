"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-[var(--background)] to-[var(--muted)]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="p-4 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-2xl">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Let&apos;s Build Something <span className="text-[var(--primary)]">Amazing</span>
            </h2>
            <p className="text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto mb-12">
              Ready to bring your ideas to life? I&apos;m always excited to collaborate on innovative projects and help transform your vision into reality.
            </p>
          </div>

          <motion.a
            href="mailto:donkorjoel203@gmail.com"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-[var(--primary)]/50 transition-all duration-300 hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span>donkorjoel203@gmail.com</span>
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-[var(--border)] text-[var(--muted-foreground)]"
          >
            <p className="text-sm">&copy; 2025 Joel Sam Donkor. Built with Next.js & Tailwind CSS.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
