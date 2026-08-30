import React from 'react';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import { personalDetails } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-slate-900/10 relative z-10 bg-white/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Left Info */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-slate-950 font-mono">
              {personalDetails.name}
            </span>
            <span className="text-slate-400 text-xs">•</span>
            <span className="text-xs text-slate-600 font-mono">
              {personalDetails.title}
            </span>
          </div>

          {/* Right Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personalDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-slate-950/5 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-slate-950/5 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4 text-emerald-700" />
            </a>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg border border-slate-900/10 bg-white/80 hover:bg-white text-slate-700 hover:text-slate-950 shadow-sm transition-colors"
              aria-label="Back to Top"
            >
              <FaArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-900/10 text-center text-xs text-slate-500 font-mono">
          © {new Date().getFullYear()} {personalDetails.name}. Built with React, Vite, Tailwind CSS & Framer Motion.
        </div>
      </div>
    </footer>
  );
}
