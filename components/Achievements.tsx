"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    title: "Open Source Contributor",
    description: "Active contributor to various open-source projects",
    icon: "code",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "GSSoC'25 Participant",
    description: "Project Admin/Maintainer at GirlScript Summer of Code 2025",
    icon: "award",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Full-Stack Developer",
    description: "Proficient in modern web technologies and frameworks",
    icon: "stack",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Community Builder",
    description: "Building and fostering developer communities",
    icon: "users",
    color: "from-orange-500 to-red-500"
  },
];

const badges = [
  { name: "React", level: "Advanced", color: "bg-blue-500" },
  { name: "Next.js", level: "Advanced", color: "bg-black" },
  { name: "TypeScript", level: "Intermediate", color: "bg-blue-600" },
  { name: "Node.js", level: "Intermediate", color: "bg-green-600" },
  { name: "Tailwind CSS", level: "Advanced", color: "bg-cyan-500" },
  { name: "MongoDB", level: "Intermediate", color: "bg-green-500" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 md:py-20 px-6 md:px-12">
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Achievements & <span className="text-[var(--primary)]">Badges</span>
            </h2>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--primary)] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`p-4 bg-gradient-to-br ${achievement.color} rounded-xl flex-shrink-0`}>
                  {achievement.icon === "code" && (
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  )}
                  {achievement.icon === "award" && (
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  )}
                  {achievement.icon === "stack" && (
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  )}
                  {achievement.icon === "users" && (
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-[var(--muted-foreground)]">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Badges Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6">Tech Stack Proficiency</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {badges.map((badge, index) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-3 p-4 bg-[var(--muted)] rounded-xl hover:bg-[var(--muted)]/50 transition-all border border-[var(--border)] hover:border-[var(--primary)]"
              >
                <div className={`w-12 h-12 ${badge.color} rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {badge.name.charAt(0)}
                </div>
                <div className="text-center">
                  <p className="font-semibold text-sm mb-1">{badge.name}</p>
                  <p className="text-xs text-[var(--muted-foreground)]">{badge.level}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
