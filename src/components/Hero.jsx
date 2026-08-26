import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalDetails } from '../data/portfolioData';

export default function Hero() {
  const [firstName, lastName] = personalDetails.name.split(' ');

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="hero" className="hero-section hero-name-stage relative flex min-h-[100dvh] items-start overflow-hidden px-4 pb-12 pt-16 sm:pt-20 sm:px-6 lg:px-8">
      <div className="hero-grid" />

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12 }}
        className="relative z-10 mx-auto w-full max-w-7xl"
      >
        <motion.div variants={itemVariants} className="status-line mb-6 sm:mb-8">
          <span className="status-dot" />
          Available for SDE and full-stack roles
        </motion.div>

        <div className="hero-name-layout">
          <div>
            <motion.p variants={itemVariants} className="hero-intro">
              Hey, I am
            </motion.p>

            <motion.h1 variants={itemVariants} className="hero-name">
              <span>{firstName}</span>
              <span>{lastName}</span>
            </motion.h1>
          </div>

          <motion.div variants={itemVariants} className="hero-brief">
            <p>{personalDetails.title}</p>
            <span>{personalDetails.tagline}</span>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a href="#contact" className="primary-action hire-action">
                <span>Hire Me</span>
                <FaArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`${import.meta.env.BASE_URL}Mayank_Chandravanshi_Resume.pdf`}
                download="Mayank_Chandravanshi_Resume.pdf"
                className="secondary-action"
              >
                <FaFileDownload className="h-4 w-4" />
                <span>Resume</span>
              </a>
              <a href="#about" className="secondary-action">
                <span>Explore details</span>
              </a>
              <div className="flex gap-2">
                <a href={personalDetails.github} target="_blank" rel="noopener noreferrer" className="icon-action" aria-label="GitHub Profile">
                  <FaGithub className="h-5 w-5" />
                </a>
                <a href={personalDetails.linkedin} target="_blank" rel="noopener noreferrer" className="icon-action" aria-label="LinkedIn Profile">
                  <FaLinkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
