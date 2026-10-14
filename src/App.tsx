import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSplit } from './components/HeroSplit';
import { AboutView } from './components/views/AboutView';
import { SkillsView } from './components/views/SkillsView';
import { ExperienceView } from './components/views/ExperienceView';
import { ProjectsView } from './components/views/ProjectsView';
import { ContactView } from './components/views/ContactView';
import { ResumeModal } from './components/ResumeModal';
import { portfolioData } from './data/portfolioData';

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim().toLowerCase();
      if (['about', 'skills', 'experience', 'projects', 'contact'].includes(hash)) {
        setCurrentTab(hash);
      } else {
        setCurrentTab('home');
      }
    };

    // Run on initial mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectTab = (tab: string) => {
    setCurrentTab(tab);
    if (tab === 'home') {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.location.hash = `#${tab}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col font-sans selection:bg-black selection:text-white">
      
      {/* Top Navbar */}
      <Navbar 
        activeTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Main Tab Content Area */}
      <main className="flex-1 flex flex-col">
        {currentTab === 'home' && (
          <HeroSplit 
            onNavigate={handleSelectTab}
          />
        )}

        {currentTab === 'about' && (
          <AboutView 
            onOpenResume={() => setIsResumeModalOpen(true)}
            onNavigate={handleSelectTab}
          />
        )}

        {currentTab === 'skills' && (
          <SkillsView 
            onNavigate={handleSelectTab}
          />
        )}

        {currentTab === 'experience' && (
          <ExperienceView 
            onOpenResume={() => setIsResumeModalOpen(true)}
            onNavigate={handleSelectTab}
          />
        )}

        {currentTab === 'projects' && (
          <ProjectsView 
            onNavigate={handleSelectTab}
          />
        )}

        {currentTab === 'contact' && (
          <ContactView 
            onOpenResume={() => setIsResumeModalOpen(true)}
          />
        )}
      </main>

      {/* Minimal Footer displayed on inner tab pages */}
      {currentTab !== 'home' && (
        <footer className="w-full border-t border-zinc-100 py-6 px-4 sm:px-8 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-400 gap-3">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} {portfolioData.personal.name}</span>
            <span>&bull;</span>
            <button 
              onClick={() => handleSelectTab('home')}
              className="text-zinc-600 hover:text-black font-semibold"
            >
              Return Home &rarr;
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-zinc-700"
            >
              Top &uarr;
            </button>
          </div>
        </footer>
      )}

      {/* Resume Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

    </div>
  );
};

export default App;
