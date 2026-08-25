import React from 'react';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import { personalDetails } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-white/10 relative z-10 bg-[#08080A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Left Info */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white font-mono">
              Mayank Chandravanshi
            </span>
            <span className="text-gray-500 text-xs">•</span>
            <span className="text-xs text-gray-400 font-mono">
              Full-Stack MERN Developer
            </span>
          </div>

          {/* Right Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personalDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-sm transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-sm transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4 text-blue-400" />
            </a>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
              aria-label="Back to Top"
            >
              <FaArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/5 text-center text-xs text-gray-500 font-mono">
          © {new Date().getFullYear()} Mayank Chandravanshi. Built with React, Vite, Tailwind CSS & Framer Motion.
        </div>
      </div>
    </footer>
  );
}
