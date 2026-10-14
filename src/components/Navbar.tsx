import React, { useState } from 'react';
import { Mail, Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeTab, 
  onSelectTab, 
  onOpenResume 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'experience', name: 'Experience' },
    { id: 'projects', name: 'Projects' },
    { id: 'contact', name: 'Contact' },
  ];

  return (
    <nav className="w-full bg-[#0a0a0b] text-white select-none border-b border-zinc-800/80 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        
        {/* Left: Circular Monogram Logo -> Goes to Home */}
        <button 
          onClick={() => onSelectTab('home')}
          className="flex items-center group focus:outline-none"
          title="Home - Gokulakrishna K"
        >
          <div className={`w-9 h-9 rounded-full border-2 flex items-center justify-center font-bold tracking-tighter text-xs transition-all ${
            activeTab === 'home' 
              ? 'border-white bg-white text-black' 
              : 'border-white/80 bg-black text-white group-hover:border-white group-hover:scale-105'
          }`}>
            <span className="font-mono">GK</span>
          </div>
        </button>

        {/* Center: Clean Nav links (Capitalized) */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onSelectTab(link.id)}
                className={`transition-colors py-1 relative ${
                  isActive
                    ? 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-white'
                    : 'text-zinc-400 hover:text-white font-normal'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </div>

        {/* Right: Social icons (LinkedIn, GitHub, Email, Resume) */}
        <div className="hidden sm:flex items-center space-x-5 text-zinc-300">
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            aria-label="Email"
            className="hover:text-white transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={onOpenResume}
            className="px-3.5 py-1 rounded-full bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-all ml-1 active:scale-95 shadow-sm"
          >
            Resume
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="px-2.5 py-1 text-xs font-semibold rounded bg-white text-black"
          >
            Resume
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded text-zinc-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111113] border-t border-zinc-800 px-6 py-4 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-medium">
            <button
              onClick={() => {
                onSelectTab('home');
                setMobileMenuOpen(false);
              }}
              className={`text-left py-1.5 ${activeTab === 'home' ? 'text-white font-bold' : 'text-zinc-400 hover:text-white'}`}
            >
              Home
            </button>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onSelectTab(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-1.5 ${activeTab === link.id ? 'text-white font-bold' : 'text-zinc-400 hover:text-white'}`}
              >
                {link.name}
              </button>
            ))}
          </div>
          <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-zinc-400">
            <div className="flex items-center space-x-4">
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <GithubIcon className="w-4 h-4" />
              </a>
              <a href={`mailto:${portfolioData.personal.email}`} className="hover:text-white">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
