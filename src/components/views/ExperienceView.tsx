import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { TechBadge } from '../TechStackIcons';
import { 
  MapPin, 
  ChevronDown, 
  ChevronUp,
  Diamond,
  Briefcase
} from 'lucide-react';

interface ExperienceViewProps {
  onOpenResume?: () => void;
  onNavigate?: (tab: string) => void;
}

import athenaHealthLogoImg from '../../assets/athenahealth-logo.png';
import zohoLogoImg from '../../assets/zoho-logo.png';

// Official Company Logos matching LinkedIn styling
const AthenaHealthLogo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <div className={`${className} rounded-lg bg-white border border-zinc-200/90 flex items-center justify-center p-1 shadow-xs overflow-hidden`}>
    <img 
      src={athenaHealthLogoImg} 
      alt="athenahealth logo" 
      className="w-full h-full object-contain" 
    />
  </div>
);

const ZohoLogo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <div className={`${className} rounded-lg bg-white border border-zinc-200/90 flex items-center justify-center p-1 shadow-xs overflow-hidden`}>
    <img 
      src={zohoLogoImg} 
      alt="Zoho Corporation logo" 
      className="w-full h-full object-contain" 
    />
  </div>
);

export const ExperienceView: React.FC<ExperienceViewProps> = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <div className="w-full bg-[#f4f2ee]/40 min-h-screen py-10 sm:py-14 px-4 sm:px-6 animate-fadeIn">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Section Header */}
        <div className="pb-2">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
            Career Trajectory &bull; 5+ Years Production
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mt-0.5">
            Work Experience
          </h1>
        </div>

        {/* LinkedIn-Style Single White Container */}
        <div className="bg-white rounded-2xl border border-zinc-200 shadow-xs p-6 sm:p-8">
          
          {/* Card Title matching screenshot */}
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-8 tracking-tight">
            Experience
          </h2>

          <div className="space-y-10">
            {portfolioData.experiences.map((exp, index) => {
              const isCiti = exp.id === 'citiustech';
              const isExpanded = expandedId === exp.id;
              const isLast = index === portfolioData.experiences.length - 1;

              return (
                <div key={exp.id} className={!isLast ? "pb-10 border-b border-zinc-200" : ""}>
                  
                  {/* Company Header Row */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      {isCiti ? <AthenaHealthLogo /> : <ZohoLogo />}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-baseline gap-2">
                        <h3 className="text-base sm:text-lg font-bold text-zinc-900 leading-snug">
                          {isCiti ? "athenahealth" : exp.company}
                        </h3>
                        {exp.client && (
                          <span className="text-xs font-medium text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded">
                            via {exp.company}
                          </span>
                        )}
                      </div>

                      <div className="text-xs sm:text-sm text-zinc-600 mt-0.5 font-normal">
                        Full-time &bull; {exp.period.includes('2025 – Present') ? 'Aug 2025 – Present' : 'Aug 2021 – Aug 2025 · 4 yrs'}
                      </div>
                      
                      <div className="text-xs text-zinc-400 mt-0.5">
                        {exp.location} &bull; {isCiti ? 'Hybrid' : 'On-site'}
                      </div>
                    </div>
                  </div>

                  {/* Role Stepper Timeline */}
                  <div className="relative pl-6 sm:pl-8 ml-6 mt-4 border-l-2 border-zinc-200 space-y-6">
                    
                    {/* Stepper Node Dot */}
                    <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-zinc-400 ring-4 ring-white" />

                    <div>
                      {/* Role Title */}
                      <h4 className="text-base font-bold text-zinc-900 leading-tight">
                        {exp.role}
                      </h4>

                      <div className="text-xs text-zinc-500 mt-0.5">
                        {exp.period}
                      </div>

                      <div className="text-xs text-zinc-400 mt-0.5 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-zinc-400" />
                        <span>{exp.location} &bull; {isCiti ? 'Hybrid' : 'On-site'}</span>
                      </div>

                      {/* Summary intro */}
                      <p className="text-xs sm:text-sm text-zinc-600 mt-3 leading-relaxed">
                        {exp.summary}
                      </p>

                      {/* Key Deliverables with "+" prefix */}
                      <div className="mt-3.5 space-y-2">
                        {(isExpanded ? exp.highlights : exp.highlights.slice(0, 3)).map((bullet, bIdx) => (
                          <div key={bIdx} className="text-xs sm:text-sm text-zinc-700 leading-relaxed flex items-start gap-2">
                            <span className="text-zinc-400 font-bold select-none">+</span>
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>

                      {/* Expand / Show More toggle */}
                      {exp.highlights.length > 3 && (
                        <button
                          onClick={() => toggleExpand(exp.id)}
                          className="mt-2 text-xs font-semibold text-zinc-600 hover:text-black flex items-center gap-1 transition-colors"
                        >
                          <span>{isExpanded ? '... show less' : `... more (+${exp.highlights.length - 3} achievements)`}</span>
                          {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                        </button>
                      )}

                      {/* Metrics row */}
                      <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-zinc-100">
                        {exp.metrics.map(m => (
                          <div 
                            key={m.label} 
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#fafaf9] border border-zinc-200 text-xs font-mono"
                          >
                            <span className="font-bold text-zinc-900">{m.value}</span>
                            <span className="text-zinc-500">&bull; {m.label}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skills row with ◇ symbol */}
                      <div className="mt-4 pt-3 flex flex-col sm:flex-row sm:items-center gap-3">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-700 flex-shrink-0">
                          <Diamond className="w-3.5 h-3.5 text-zinc-600 fill-zinc-600" />
                          <span>Tech Stack &amp; Skills:</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          {exp.technologies.map(tech => (
                            <TechBadge key={tech} name={tech} />
                          ))}
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
};
