import React, { useState } from 'react';
import splitFaceImg from '../assets/split-face-clean.png';

interface HeroSplitProps {
  onNavigate: (tab: string) => void;
}

export const HeroSplit: React.FC<HeroSplitProps> = ({ onNavigate }) => {
  const [hoverSide, setHoverSide] = useState<'left' | 'right' | null>(null);

  return (
    <section 
      id="hero"
      className="w-full flex-1 min-h-[calc(100vh-64px)] bg-white flex flex-col justify-between items-center py-6 sm:py-10 px-4 sm:px-8 select-none"
    >
      {/* Top spacer to balance vertical centering */}
      <div className="hidden sm:block h-2" />

      {/* Main 3-Part Split Row (Gokulakrishna K | split-face | <coder>) */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-2 my-auto">
        
        {/* LEFT COLUMN: Gokulakrishna K */}
        <div 
          onMouseEnter={() => setHoverSide('left')}
          onMouseLeave={() => setHoverSide(null)}
          className={`flex-1 w-full flex flex-col items-center md:items-end text-center md:text-right pr-0 md:pr-6 lg:pr-10 transition-all duration-300 ${
            hoverSide === 'right' ? 'opacity-35 scale-[0.98]' : 'opacity-100 scale-100'
          }`}
        >
          <button 
            onClick={() => onNavigate('about')}
            className="group block text-center md:text-right focus:outline-none cursor-pointer"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] font-bold tracking-tight text-[#111111] whitespace-nowrap transition-colors group-hover:text-blue-600 leading-tight">
              Gokulakrishna K
            </h1>
            <p className="mt-3 text-sm sm:text-base text-zinc-500 max-w-[320px] md:ml-auto leading-relaxed font-normal">
              Senior Software Engineer specialising in distributed systems and fault-tolerant microservices.
            </p>
          </button>
        </div>

        {/* CENTER COLUMN: The Split Face Graphic */}
        <div className="flex-shrink-0 w-60 sm:w-72 lg:w-80 flex items-center justify-center">
          <div className="relative group cursor-pointer" onClick={() => onNavigate('about')}>
            <img 
              src={splitFaceImg} 
              alt="Gokulakrishna - systems vs coder" 
              className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              style={{ filter: 'contrast(1.02)' }}
            />
          </div>
        </div>

        {/* RIGHT COLUMN: <coder> */}
        <div 
          onMouseEnter={() => setHoverSide('right')}
          onMouseLeave={() => setHoverSide(null)}
          className={`flex-1 w-full flex flex-col items-center md:items-start text-center md:text-left pl-0 md:pl-6 lg:pl-10 transition-all duration-300 ${
            hoverSide === 'left' ? 'opacity-35 scale-[0.98]' : 'opacity-100 scale-100'
          }`}
        >
          <button 
            onClick={() => onNavigate('skills')}
            className="group block text-center md:text-left focus:outline-none cursor-pointer"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] font-bold tracking-tight text-[#111111] font-mono whitespace-nowrap transition-colors group-hover:text-cyan-600 leading-tight">
              &lt;coder&gt;
            </h1>
            <p className="mt-3 text-sm sm:text-base text-zinc-500 max-w-[320px] md:mr-auto leading-relaxed font-normal">
              Applied AI builder engineering multi-tenant RAG pipelines, MCP servers, and vector search.
            </p>
          </button>
        </div>

      </div>

      {/* BOTTOM STATUS LINE: Clean ribbon */}
      <div className="w-full max-w-4xl mx-auto pt-6 border-t border-zinc-100 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-zinc-500 font-mono">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          Senior Software Engineer
        </span>
        <span className="text-zinc-300">&bull;</span>
        <span>Citiustech (athenahealth)</span>
        <span className="text-zinc-300">&bull;</span>
        <span>Zoho Corporation</span>
        <span className="text-zinc-300">&bull;</span>
        <span>Author of SynapseMCP</span>
      </div>
    </section>
  );
};
