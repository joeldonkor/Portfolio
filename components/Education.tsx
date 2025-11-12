"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "BSc Computer Science",
    institution: "Kwame Nkrumah University of Science and Technology (KNUST)",
    period: "2019 - 2023",
    description: "Focused on software engineering, algorithms, data structures, and artificial intelligence. Graduated with strong foundations in computer science principles and practical development experience.",
  },
  {
    degree: "Senior High School Certificate",
    institution: "Presbyterian Boys' Senior High School",
    period: "Completed 2023",
    description: "Developed strong analytical and problem-solving skills. Excelled in mathematics and science courses, laying the groundwork for a career in technology.",
  },
];

export default function Education() {
  return (
    <section id="education" className="min-h-screen flex items-center justify-center px-8 lg:px-12 py-20">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-[var(--muted)] border border-[var(--border)] rounded-full text-sm font-medium text-[var(--primary)]">
            🎓 Academic Background
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Academic background that shaped my technical foundation
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--border)]"></div>

          <div className="space-y-10">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full border-4 border-[var(--background)] bg-[var(--secondary)] shadow-lg"></div>

                <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-8 hover:border-[var(--primary)] transition-all duration-300 hover:shadow-lg">
                  <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>

                  <div className="flex flex-wrap items-center gap-3 mb-3 text-[var(--muted-foreground)]">
                    <span className="font-semibold text-[var(--primary)]">{edu.institution}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-[var(--muted-foreground)] leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
