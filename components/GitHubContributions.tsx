"use client";

import { motion } from "framer-motion";

export default function GitHubContributions() {
  // Mock contribution data - replace with real data from GitHub API
  const contributions = Array.from({ length: 52 }, () =>
    Array.from({ length: 7 }, () => Math.floor(Math.random() * 5))
  );

  const stats = [
    { label: "Followers", value: "118", icon: "users" },
    { label: "Following", value: "33", icon: "userPlus" },
    { label: "Love Count", value: "841", icon: "heart" },
    { label: "Views", value: "2058", icon: "eye" },
  ];

  const getContributionColor = (level: number) => {
    if (level === 0) return "bg-[var(--border)]";
    if (level === 1) return "bg-green-900/40";
    if (level === 2) return "bg-green-700/60";
    if (level === 3) return "bg-green-600/80";
    return "bg-green-500";
  };

  return (
    <section id="github" className="py-16 md:py-20 px-6 md:px-12">
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
              <svg className="w-6 h-6 text-[var(--primary)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              GitHub Contributions
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8"
        >
          {/* Contribution Graph */}
          <div className="mb-8">
            <div className="overflow-x-auto">
              <div className="inline-flex flex-col gap-1 min-w-max">
                <div className="flex gap-1 mb-2">
                  <div className="w-full text-xs text-[var(--muted-foreground)] flex justify-between px-1">
                    <span>Nov</span>
                    <span>Dec</span>
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                    <span>Aug</span>
                    <span>Sep</span>
                  </div>
                </div>
                <div className="flex gap-1">
                  {contributions.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-1">
                      {week.map((day, dayIndex) => (
                        <div
                          key={dayIndex}
                          className={`w-3 h-3 rounded-sm ${getContributionColor(day)} hover:ring-2 hover:ring-[var(--primary)] transition-all cursor-pointer`}
                          title={`${day} contributions`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-[var(--muted-foreground)]">
                1122 contributions in the last year
              </p>
              <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)]">
                <span>Less</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-sm bg-[var(--border)]" />
                  <div className="w-3 h-3 rounded-sm bg-green-900/40" />
                  <div className="w-3 h-3 rounded-sm bg-green-700/60" />
                  <div className="w-3 h-3 rounded-sm bg-green-600/80" />
                  <div className="w-3 h-3 rounded-sm bg-green-500" />
                </div>
                <span>More</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[var(--muted)] border border-[var(--border)] rounded-xl p-6 text-center hover:border-[var(--primary)] transition-all"
              >
                <div className="flex justify-center mb-3">
                  {stat.icon === "users" && (
                    <svg className="w-6 h-6 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                  {stat.icon === "userPlus" && (
                    <svg className="w-6 h-6 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                  )}
                  {stat.icon === "heart" && (
                    <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  )}
                  {stat.icon === "eye" && (
                    <svg className="w-6 h-6 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </div>
                <p className="text-sm text-[var(--muted-foreground)] mb-1">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
