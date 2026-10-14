import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { TechBadge } from '../TechStackIcons';
import { 
  Code2, 
  Server, 
  Bot, 
  Database, 
  Cloud, 
  Layers, 
  Search, 
  LayoutGrid,
  List
} from 'lucide-react';

interface SkillsViewProps {
  onNavigate?: (tab: string) => void;
}

export const SkillsView: React.FC<SkillsViewProps> = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'systems' | 'ai' | 'infra' | 'languages'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showLabels, setShowLabels] = useState(false);

  const filterTabs = [
    { key: 'all', label: 'All Capabilities' },
    { key: 'systems', label: 'Distributed Systems' },
    { key: 'ai', label: 'Applied AI & Vector Search' },
    { key: 'languages', label: 'Languages' },
    { key: 'infra', label: 'Cloud, Data & DevOps' },
  ];

  const filteredCategories = portfolioData.skillCategories.filter(cat => {
    if (activeFilter !== 'all' && cat.categoryKey !== activeFilter) {
      return false;
    }
    if (searchQuery.trim() === '') return true;

    const query = searchQuery.toLowerCase();
    const matchesTitle = cat.title.toLowerCase().includes(query);
    const matchesSkills = cat.skills.some(s => s.name.toLowerCase().includes(query));
    return matchesTitle || matchesSkills;
  });

  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'languages': return <Code2 className="w-4 h-4 text-blue-600" />;
      case 'systems': return <Server className="w-4 h-4 text-indigo-600" />;
      case 'ai': return <Bot className="w-4 h-4 text-cyan-600" />;
      case 'infra': return <Cloud className="w-4 h-4 text-emerald-600" />;
      default: return <Layers className="w-4 h-4 text-zinc-600" />;
    }
  };

  return (
    <div className="w-full bg-white text-[#111111] py-12 sm:py-16 px-4 sm:px-8 max-w-6xl mx-auto animate-fadeIn">
      
      {/* Header */}
      <div className="pb-8 border-b border-zinc-100 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
            Competencies &bull; 5+ Years Production
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] mt-1">
            Technical Skills &amp; Architecture
          </h1>
          <p className="mt-2 text-base text-zinc-500 max-w-2xl font-normal">
            Disciplines, frameworks, and architecture patterns battle-tested in high-concurrency environments.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            placeholder="Search skills (Java, AWS, MCP)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-full border border-zinc-200 bg-[#fafaf9] focus:bg-white focus:outline-none focus:ring-1 focus:ring-zinc-900 font-mono transition-all"
          />
        </div>
      </div>

      {/* Filter Tabs & View Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 border-b border-zinc-100">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
          {filterTabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key as any)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all whitespace-nowrap ${
                activeFilter === tab.key
                  ? 'bg-[#111111] text-white font-semibold shadow-xs'
                  : 'bg-[#fafaf9] text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 border border-zinc-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* View Mode Toggle: Icons vs Icons+Labels */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto bg-[#fafaf9] p-1 rounded-xl border border-zinc-200">
          <button
            onClick={() => setShowLabels(false)}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
              !showLabels 
                ? 'bg-white text-zinc-900 font-semibold shadow-2xs border border-zinc-200' 
                : 'text-zinc-500 hover:text-zinc-800'
            }`}
            title="Icons only (hover to inspect)"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Icons</span>
          </button>
          <button
            onClick={() => setShowLabels(true)}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
              showLabels 
                ? 'bg-white text-zinc-900 font-semibold shadow-2xs border border-zinc-200' 
                : 'text-zinc-500 hover:text-zinc-800'
            }`}
            title="Icons with labels"
          >
            <List className="w-3.5 h-3.5" />
            <span>With Labels</span>
          </button>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {filteredCategories.map(cat => (
          <div 
            key={cat.title}
            className="p-6 rounded-2xl border border-zinc-200 bg-[#fafaf9] hover:bg-white hover:border-zinc-300 hover:shadow-xs transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-white border border-zinc-200">
                    {getCategoryIcon(cat.categoryKey)}
                  </span>
                  <h2 className="font-bold text-sm text-zinc-900">{cat.title}</h2>
                </div>
                <span className="text-[10px] font-mono uppercase text-zinc-400 bg-white px-2 py-0.5 rounded border border-zinc-200">
                  {cat.categoryKey}
                </span>
              </div>

              <p className="text-xs text-zinc-500 mb-5 leading-relaxed">
                {cat.description}
              </p>

              {/* Skill icons / badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {cat.skills.map(s => (
                  <TechBadge 
                    key={s.name}
                    name={s.name}
                    level={s.level}
                    highlight={s.highlight}
                    showLabel={showLabels}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
