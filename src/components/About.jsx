import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaNetworkWired, FaDatabase, FaCogs, FaProjectDiagram, FaBriefcase, FaMapMarkerAlt, FaServer } from 'react-icons/fa';
import { personalDetails } from '../data/portfolioData';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const csPillars = [
    { title: "DSA", name: "Data Structures & Algorithms", icon: FaBrain, desc: "Problem solving, time/space complexity optimization, dynamic programming & graphs." },
    { title: "OOP", name: "Object-Oriented Programming", icon: FaCogs, desc: "Modularity, encapsulation, inheritance, polymorphism, design patterns." },
    { title: "DBMS", name: "Database Management Systems", icon: FaDatabase, desc: "Relational schema design, SQL optimization, indexing, ACID transactions & NoSQL." },
    { title: "OS", name: "Operating Systems", icon: FaProjectDiagram, desc: "Process management, multithreading, concurrency, memory allocation & file systems." },
    { title: "Networks", name: "Computer Networks", icon: FaNetworkWired, desc: "TCP/IP protocol suite, HTTP/HTTPS, WebSockets, DNS & network security." }
  ];

  return (
    <section id="about" className="py-14 sm:py-20 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-mono text-blue-400 mb-2 font-semibold">
            // Who I Am
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            About <span className="text-gradient">Mayank</span>
          </h3>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Main Bio Card */}
          <motion.div variants={itemVariants} className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 text-blue-400 mb-4">
                <FaServer className="w-6 h-6" />
                <span className="text-sm font-semibold tracking-wide uppercase font-mono">Developer Profile</span>
              </div>

              <h4 className="text-2xl font-bold text-white mb-3">
                Backend-focused full-stack developer
              </h4>
              <p className="text-blue-400 font-medium mb-6">
                MERN applications, REST APIs, real-time systems, and clean product interfaces
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                {personalDetails.about}
              </p>

              {/* Small Profile Card: Available for Internships and SDE Opportunities */}
              <div className="p-4 rounded-xl bg-white/70 border border-emerald-900/10 mb-6 flex items-center gap-4 shadow-sm">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-emerald-900/10 bg-emerald-50 text-sm font-extrabold text-emerald-800">
                  SDE
                  <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-emerald-700 text-xs font-mono font-semibold">
                    <FaBriefcase className="w-3.5 h-3.5" />
                    <span>Open to Roles</span>
                  </div>
                  <h5 className="text-sm font-bold text-slate-950 mt-0.5">
                    Available for Internships and SDE Opportunities
                  </h5>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Ready to contribute to scalable web applications and real-time backend systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div>
                <span className="text-xs text-gray-400 block font-mono">Primary Stack</span>
                <span className="text-sm font-semibold text-blue-300">MERN</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 block font-mono">Focus</span>
                <span className="text-sm font-semibold text-white">Backend & APIs</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 block font-mono">Location</span>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-300">
                  <FaMapMarkerAlt className="w-3 h-3" />
                  Jabalpur
                </span>
              </div>
            </div>
          </motion.div>

          {/* Core CS Foundations Grid */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="glass-panel p-6 rounded-2xl">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                Strong Foundation In Core CS
              </h4>
              <div className="space-y-3">
                {csPillars.map((pillar) => {
                  const IconComp = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.08] transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-white font-mono">{pillar.title}</span>
                            <span className="text-xs text-gray-400">— {pillar.name}</span>
                          </div>
                          <p className="text-xs text-gray-400 mt-0.5">{pillar.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
