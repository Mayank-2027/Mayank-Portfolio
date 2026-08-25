import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaStar, FaAward } from 'react-icons/fa';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="achievements" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-mono text-blue-400 mb-2 font-semibold">
            // Recognition & Awards
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Key <span className="text-gradient">Achievements</span>
          </h3>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Animated Achievement Banner / Card */}
        <div className="max-w-4xl mx-auto">
          {achievementsData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="glass-panel rounded-3xl p-8 sm:p-10 border border-amber-500/20 relative overflow-hidden bg-gradient-to-r from-amber-500/5 via-blue-600/5 to-purple-600/5 shadow-2xl"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                {/* Trophy Graphic Container */}
                <div className="shrink-0 relative">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-xl shadow-amber-500/20 border border-amber-300/30">
                    <FaTrophy className="w-12 h-12 text-black" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full border-2 border-[#0A0A0A]">
                    <FaStar className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center md:text-left flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold mb-3">
                    <FaAward className="w-3.5 h-3.5" />
                    <span>{item.subtitle}</span>
                  </div>

                  <h4 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                    {item.title}
                  </h4>

                  <p className="text-sm font-semibold text-blue-400 mb-3 font-mono">
                    {item.event} • Winner
                  </p>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
