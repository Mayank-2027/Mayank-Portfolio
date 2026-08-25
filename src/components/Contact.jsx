import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaCopy, FaCheck, FaPaperPlane } from 'react-icons/fa';
import { personalDetails } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalDetails.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/5">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/15 rounded-t-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-mono text-blue-400 mb-2 font-semibold">
            // Get In Touch
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Let's build something <span className="text-gradient">impactful together.</span>
          </h3>
          <p className="text-gray-300 text-base sm:text-lg mt-4 max-w-xl mx-auto">
            I am actively seeking SDE, Backend, and Full-Stack MERN opportunities. Feel free to reach out for hires, projects, or technical conversations.
          </p>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Quick Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="glass-panel p-6 rounded-2xl flex items-center justify-between border border-white/10 hover:border-blue-500/30 transition-all">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-400 block">Email Address</span>
                  <a
                    href={`mailto:${personalDetails.email}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-blue-400 transition-colors"
                  >
                    {personalDetails.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <FaCheck className="w-4 h-4 text-green-400" /> : <FaCopy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-panel p-6 rounded-2xl flex items-center justify-between border border-white/10 hover:border-blue-500/30 transition-all">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400">
                  <FaPhoneAlt className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-400 block">Phone</span>
                  <a
                    href={`tel:${personalDetails.phone}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-blue-400 transition-colors"
                  >
                    {personalDetails.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                title="Copy Phone"
              >
                {copiedPhone ? <FaCheck className="w-4 h-4 text-green-400" /> : <FaCopy className="w-4 h-4" />}
              </button>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-5 rounded-2xl flex items-center gap-3 border border-white/10 hover:border-blue-500/40 hover:bg-white/10 transition-all group"
              >
                <FaGithub className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                <div>
                  <span className="text-xs font-mono text-gray-400 block">Codebase</span>
                  <span className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">GitHub</span>
                </div>
              </a>

              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-5 rounded-2xl flex items-center gap-3 border border-white/10 hover:border-blue-500/40 hover:bg-white/10 transition-all group"
              >
                <FaLinkedin className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <div>
                  <span className="text-xs font-mono text-gray-400 block">Network</span>
                  <span className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">LinkedIn</span>
                </div>
              </a>
            </div>

          </div>

          {/* Quick Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10">
              <h4 className="text-xl font-bold text-white mb-2">Send a Message</h4>
              <p className="text-xs text-gray-400 mb-6 font-mono">
                Have a question or role opening? Drop a message directly.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-blue-600/20 border border-blue-500/40 text-center">
                  <FaCheck className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <h5 className="text-lg font-bold text-white mb-1">Message Sent!</h5>
                  <p className="text-sm text-gray-300">Thank you for reaching out. Mayank will respond shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">Subject</label>
                    <input
                      type="text"
                      required
                      placeholder="Opportunity / SDE Role / Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">Message</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Hello Mayank, we saw your portfolio and would like to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 text-sm transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="send-action w-full py-3.5 px-6 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <FaPaperPlane className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
