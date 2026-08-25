import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTrophy, FaCheckCircle } from 'react-icons/fa';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-white/5">
      {/* Glow highlight */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-mono text-blue-400 mb-2 font-semibold">
            // Portfolio Highlights
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Featured <span className="text-gradient">Projects</span>
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            Real-world full-stack web applications, real-time engines, and AI integrations.
          </p>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative border border-white/10 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-600/10 group"
            >
              <div>
                {/* Header Badge & Title */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 text-xs font-mono font-semibold rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {project.badge}
                  </span>
                  
                  {project.highlightBadge && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      <FaTrophy className="w-3 h-3 text-amber-400" />
                      {project.highlightBadge}
                    </span>
                  )}
                </div>

                <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3">
                  {project.title}
                </h4>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Features List */}
                {project.features && (
                  <div className="mb-6 space-y-2">
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-2 font-semibold">Key Capabilities:</span>
                    {project.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                        <FaCheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-medium text-gray-300 bg-white/5 rounded-md border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-live-action flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl transition-all"
                  >
                    <span>Live Demo</span>
                    <FaExternalLinkAlt className="w-3.5 h-3.5" />
                  </a>
                )}
                
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`project-github-action inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl transition-all ${
                    !project.liveDemo ? 'w-full' : ''
                  }`}
                >
                  <FaGithub className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
