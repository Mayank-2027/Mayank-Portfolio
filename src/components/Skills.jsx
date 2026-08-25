import React from 'react';
import { motion } from 'framer-motion';
import { skillsCategories } from '../data/portfolioData';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-mono text-blue-400 mb-2 font-semibold">
            // Tech Stack & Proficiency
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Skills & <span className="text-gradient">Technologies</span>
          </h3>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skill Category Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
                  <h4 className="text-lg font-bold text-white tracking-wide">
                    {cat.title}
                  </h4>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {cat.skills.length} skills
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {cat.skills.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="skill-tile flex items-center gap-3 p-2.5 rounded-xl transition-all group"
                      >
                        <div className="skill-icon-box p-2 rounded-lg text-xl group-hover:scale-110 transition-transform">
                          <IconComponent className={`skill-icon ${skill.color}`} />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
