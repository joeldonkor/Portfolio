"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-8 lg:px-12 py-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-[var(--muted)] border border-[var(--border)] rounded-full text-sm font-medium text-[var(--primary)]">
            👨‍💻 About Me
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Know More <span className="gradient-text">About Me</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative bg-[var(--card)] border border-[var(--border)] rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden"
        >
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10 rounded-full blur-3xl -z-0"></div>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Hi! I&apos;m <span className="font-semibold text-[var(--primary)]">Joel Sam Donkor</span>,
              a passionate software engineer and creative designer based in Accra, Ghana.
            </p>

            <p>
              With a <span className="font-semibold">BSc in Computer Science from KNUST</span> and
              five years of hands-on experience, I specialize in building impactful digital solutions
              that bridge the gap between technology and creativity.
            </p>

            <p>
              My expertise spans <span className="font-semibold text-[var(--secondary)]">full-stack development</span>,
              <span className="font-semibold text-[var(--secondary)]"> UI/UX design</span>,
              <span className="font-semibold text-[var(--secondary)]"> video editing</span>, and
              <span className="font-semibold text-[var(--secondary)]"> project management</span>.
              I thrive on solving complex problems and creating seamless user experiences.
            </p>

            <p>
              Currently, I&apos;m working at <span className="font-semibold text-[var(--accent)]">Alle AI</span> as
              a Software Developer, where I contribute to cutting-edge AI-powered solutions.
              Previously, I&apos;ve worked with Rx Health Info Systems and founded HostelHubb,
              a platform that simplifies accommodation search for students.
            </p>

            <p>
              When I&apos;m not coding or designing, you&apos;ll find me exploring new technologies,
              mentoring aspiring developers, or working on side projects that make a difference in people&apos;s lives.
            </p>

            <div className="pt-6 border-t border-[var(--border)] mt-8">
              <p className="text-[var(--muted-foreground)] italic">
                &quot;I believe code is more than just logic—it&apos;s a creative medium for expressing
                ideas and solving real-world problems.&quot;
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
