"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "GSSoC'25",
    role: "Project Admin/Maintainer",
    period: "Aug 2025 - Sept 2025",
    description: "As a Project Admin, I reviewed code, merged pull requests, and communicated with developers, ensuring smooth project workflow and collaboration during GSSoC'25. My full responsibilities included:",
    responsibilities: [
      "Reviewed code submissions and resolved technical blockers to maintain project quality",
      "Collaborated with fellow open-source developers on project planning and implementation",
      "Designed and implemented UI/UX solutions with modern animation libraries like Framer Motion and GSAP",
      "Managed API integrations and ensured smooth communication across the development team",
      "Mentored contributors and facilitated knowledge sharing within the community",
      "Coordinated pull request reviews and maintained high code quality standards"
    ],
  },
  {
    title: "Sheryians Coding School",
    role: "Trainee",
    period: "May 2025 - Oct 2025",
    description: "Trainee at Sheryians Coding School, where I learned full-stack technologies and DevOps practices. Participated in hackathons and collaborated on projects with the developer community. My learning journey included:",
    responsibilities: [
      "Completed comprehensive training in modern web technologies (React, Node.js, Next.js)",
      "Participated in multiple hackathons and coding challenges",
      "Built full-stack projects with databases and RESTful APIs",
      "Learned DevOps practices including CI/CD, Docker, and cloud deployment",
      "Collaborated with peers on team projects and code reviews",
      "Gained hands-on experience with Git workflows and agile methodologies"
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-20 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[var(--primary)]/10 rounded-xl">
              <svg className="w-6 h-6 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Professional Journey
            </h2>
          </div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.period}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 hover:border-[var(--primary)] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-lg text-[var(--primary)] font-medium">{exp.role}</p>
                </div>
                <div className="flex items-center gap-2 text-[var(--muted-foreground)]">
                  <span className="text-sm md:text-base whitespace-nowrap">{exp.period}</span>
                </div>
              </div>

              <p className="text-[var(--muted-foreground)] mb-4 leading-relaxed">
                {exp.description}
              </p>

              {exp.responsibilities && (
                <ul className="space-y-2 ml-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[var(--muted-foreground)]">
                      <svg className="w-5 h-5 text-[var(--primary)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="3" />
                      </svg>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
