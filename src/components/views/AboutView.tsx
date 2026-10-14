import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { 
  GraduationCap, 
  Download, 
  MapPin, 
  Mail, 
  Phone, 
  Award, 
  Layers, 
  Server, 
  Bot, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons';

interface AboutViewProps {
  onOpenResume: () => void;
  onNavigate: (tab: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenResume, onNavigate }) => {
  return (
    <div className="w-full bg-white text-[#111111] py-12 sm:py-16 px-4 sm:px-8 max-w-6xl mx-auto animate-fadeIn">
      
      {/* Header */}
      <div className="pb-8 border-b border-zinc-100 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
            Biography &bull; Dual Specialization
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] mt-1">
            About Gokulakrishna
          </h1>
          <p className="mt-2 text-base text-zinc-500 max-w-2xl font-normal">
            Senior Software Engineer bridging mission-critical distributed systems and Applied AI infrastructure.
          </p>
        </div>

        <button
          onClick={onOpenResume}
          className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] hover:bg-black text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm active:scale-95"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download Resume (PDF)</span>
        </button>
      </div>

      {/* 2-Column Story & Bio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10">
        
        {/* Left Column: Narrative & Engineering Philosophy */}
        <div className="lg:col-span-7 space-y-6 text-zinc-700 leading-relaxed text-base">
          <div className="p-6 rounded-2xl bg-[#fafaf9] border border-zinc-200">
            <h2 className="font-bold text-lg text-zinc-900 mb-2">
              High-Scale Backend Engineering
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-zinc-600">
              I have <strong className="text-zinc-900">5 years of experience</strong> building distributed, fault-tolerant backend microservices in <span className="text-zinc-900 font-medium">Java and Spring Boot</span> across healthcare and CRM products serving <strong className="text-zinc-900">250,000+ users</strong>.
            </p>
            <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
              At <strong>Zoho Corporation</strong>, I owned core metadata infrastructure behind custom modules, layouts, and fields for 4 years, slashing production deployment failures by 70% with full sandbox configuration support. At <strong>Citiustech healthcare Technology Private limited</strong> (Client: athenahealth), I redesigned core domain models for Medical Record Release reconciliation using Domain-Driven Design (DDD) and hexagonal architecture.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#fafaf9] border border-zinc-200">
            <h2 className="font-bold text-lg text-zinc-900 mb-2 flex items-center gap-2">
              <Bot className="w-4 h-4 text-cyan-600" />
              <span>Applied AI &amp; Model Context Protocol (MCP)</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-zinc-600">
              I am the author of <strong className="text-zinc-900">SynapseMCP</strong>, an open-source multi-tenant RAG + Model Context Protocol server. I specialize in applying deep systems rigor to modern LLM pipelines: hybrid retrieval fusing Lucene BM25 with pgvector cosine ANN via Reciprocal Rank Fusion ($k=60$), sparse vector schemas with zero runtime DDL, and fault-tolerant ingestion with in-JVM rate limit fallback.
            </p>
          </div>

          {/* Quick Pillars Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "Domain-Driven Design & Hexagonal Architecture",
              "Multi-Tenant Isolation & Zero-Downtime DDL",
              "Model Context Protocol (15-Tool Native Server)",
              "AWS Cloud (EC2, EKS, S3, SQS, Lambda) & Tracing"
            ].map((pillar, i) => (
              <div key={i} className="flex items-center gap-2 p-3 rounded-lg border border-zinc-200 bg-white text-xs font-mono text-zinc-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>{pillar}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Key Details & Education */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Quick Profile Summary Card */}
          <div className="p-6 rounded-2xl border border-zinc-200 bg-white shadow-xs">
            <h3 className="font-bold text-sm uppercase tracking-wider text-zinc-400 font-mono mb-4">
              Snapshot
            </h3>
            
            <div className="space-y-3.5 text-sm font-mono">
              <div className="flex justify-between py-1 border-b border-zinc-100">
                <span className="text-zinc-400">Name</span>
                <span className="text-zinc-900 font-semibold">{portfolioData.personal.name}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-100">
                <span className="text-zinc-400">Role</span>
                <span className="text-zinc-900 font-semibold">Senior Software Engineer</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-100">
                <span className="text-zinc-400">Experience</span>
                <span className="text-zinc-900 font-semibold">5+ Years Production</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-100">
                <span className="text-zinc-400">Location</span>
                <span className="text-zinc-900 font-semibold">{portfolioData.personal.location}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-100">
                <span className="text-zinc-400">Primary Stack</span>
                <span className="text-blue-600 font-semibold">Java 21 &bull; Spring Boot</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-zinc-400">AI Stack</span>
                <span className="text-cyan-600 font-semibold">RAG &bull; MCP &bull; pgvector</span>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="p-6 rounded-2xl border border-zinc-200 bg-[#fafaf9]">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-600 mb-3">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Foundation</span>
            </div>
            
            <h3 className="font-bold text-base text-zinc-900">
              {portfolioData.education.institution}
            </h3>
            <p className="text-xs font-semibold text-blue-600 font-mono mt-1">
              {portfolioData.education.degree}
            </p>
            <div className="mt-2 text-xs font-mono text-zinc-500">
              {portfolioData.education.period} &bull; {portfolioData.education.location}
            </div>
            <p className="mt-3 pt-3 border-t border-zinc-200/80 text-xs text-zinc-600 leading-relaxed">
              <strong className="text-zinc-800">Key Coursework:</strong> {portfolioData.education.focus}
            </p>
          </div>

          {/* Connect Bar */}
          <div className="p-4 rounded-xl border border-zinc-200 bg-white flex items-center justify-between text-xs font-mono">
            <span className="text-zinc-500">Connect directly:</span>
            <div className="flex items-center gap-3">
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-700 hover:text-black">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="text-zinc-700 hover:text-black">
                <GithubIcon className="w-4 h-4" />
              </a>
              <a href={`mailto:${portfolioData.personal.email}`} className="text-zinc-700 hover:text-black">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
