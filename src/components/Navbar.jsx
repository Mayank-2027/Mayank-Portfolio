import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { personalDetails } from '../data/portfolioData';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#f7f4ee]/88 backdrop-blur-md border-b border-slate-900/10 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            className="group text-sm sm:text-base font-bold tracking-tight text-slate-950"
          >
            <span className="group-hover:text-emerald-700 transition-colors">
              {personalDetails.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-0.5 sm:gap-1 rounded-full border border-slate-900/10 bg-white/65 px-2.5 sm:px-4 py-1 sm:py-1.5 shadow-sm backdrop-blur">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-950/5 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action & Social Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={personalDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-slate-950 hover:bg-slate-950/5 rounded-lg transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-slate-950 hover:bg-slate-950/5 rounded-lg transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="hire-action px-4 py-2 text-xs font-semibold rounded-lg shadow-sm transition-all duration-200"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-950/5 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#f7f4ee]/95 backdrop-blur-xl border-b border-slate-900/10"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 text-base font-medium text-slate-700 hover:text-emerald-700 hover:bg-slate-950/5 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-900/10 flex items-center justify-around">
                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-950"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-950"
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hire-action px-4 py-1.5 text-xs font-semibold rounded-md"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
