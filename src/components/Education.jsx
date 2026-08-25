import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
import { educationData } from '../data/portfolioData';

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="education" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-mono text-blue-400 mb-2 font-semibold">
            // Academic Background
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Education <span className="text-gradient">& Qualification</span>
          </h3>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden group hover:border-blue-500/30 transition-all"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30 group-hover:scale-105 transition-transform shrink-0">
                  <FaGraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white">
                    {educationData.institution}
                  </h4>
                  <p className="text-blue-400 font-medium text-sm sm:text-base">
                    {educationData.degree}
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 text-xs font-mono shrink-0">
                <FaCalendarAlt className="w-3.5 h-3.5 text-blue-400" />
                <span>Expected {educationData.expectedGraduation}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-gray-400">Specialization</span>
                <span className="text-sm font-semibold text-white">Information Technology</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-gray-400">Graduation</span>
                <span className="text-sm font-semibold text-white">{educationData.expectedGraduation}</span>
              </div>
            </div>

            {/* Relevant Coursework Highlights */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block font-semibold">Key Academic Pillars:</span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Data Structures & Algorithms
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Object-Oriented Programming
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Database Management Systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Operating Systems & Computer Networks
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
