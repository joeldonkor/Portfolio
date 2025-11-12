"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "RESTful APIs", "GraphQL"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Supabase", "Firebase"],
  },
  {
    category: "Design & Creative",
    items: ["Figma", "Adobe XD", "UI/UX Design", "Video Editing", "Graphic Design"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "GitHub", "Docker", "Vercel", "AWS", "CI/CD"],
  },
  {
    category: "Other",
    items: ["Project Management", "Agile", "Problem Solving", "Team Leadership"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-8 lg:px-12 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-[var(--muted)] border border-[var(--border)] rounded-full text-sm font-medium text-[var(--primary)]">
            🛠️ Tech Stack
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 hover:border-[var(--primary)] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-5 text-[var(--primary)] group-hover:gradient-text transition-all">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-[var(--muted)] text-[var(--foreground)] rounded-lg text-sm font-medium border border-[var(--border)] hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
