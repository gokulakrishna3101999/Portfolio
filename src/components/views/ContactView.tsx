import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Download, 
  ExternalLink,
  Briefcase,
  Globe2,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons';

interface ContactViewProps {
  onOpenResume: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(portfolioData.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="w-full bg-white text-[#111111] py-12 sm:py-16 px-4 sm:px-8 max-w-6xl mx-auto animate-fadeIn">
      
      {/* Header */}
      <div className="pb-8 border-b border-zinc-100 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
            Get In Touch &bull; Direct Communication Channels
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] mt-1">
            Contact &amp; Inquiries
          </h1>
          <p className="mt-2 text-base text-zinc-500 max-w-2xl font-normal">
            Interested in discussing distributed systems, backend microservices, or applied AI infrastructure?
          </p>
        </div>
      </div>

      {/* Main Grid: Contact Channels */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
        
        {/* Email Card */}
        <div className="p-6 rounded-2xl bg-[#fafaf9] border border-zinc-200 hover:border-zinc-300 hover:shadow-xs transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="p-3 rounded-xl bg-white border border-zinc-200 text-blue-600 shadow-2xs">
                <Mail className="w-5 h-5" />
              </span>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-zinc-200 hover:bg-zinc-100 text-xs font-mono text-zinc-700 transition-colors shadow-2xs"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="text-xs font-mono text-zinc-400 uppercase font-semibold">Direct Email</div>
            <a 
              href={`mailto:${portfolioData.personal.email}`}
              className="text-base font-bold text-zinc-900 hover:text-blue-600 transition-colors break-all mt-1 block"
            >
              {portfolioData.personal.email}
            </a>
            <p className="text-xs text-zinc-500 mt-2 font-mono">
              Primary inbox for engineering discussions &amp; recruiter inquiries.
            </p>
          </div>

          <div className="mt-6 pt-3 border-t border-zinc-200/60 flex items-center justify-between text-xs font-mono">
            <span className="text-zinc-400">Response time</span>
            <span className="text-emerald-700 font-semibold">&lt; 24 Hours</span>
          </div>
        </div>

        {/* Phone Card */}
        <div className="p-6 rounded-2xl bg-[#fafaf9] border border-zinc-200 hover:border-zinc-300 hover:shadow-xs transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="p-3 rounded-xl bg-white border border-zinc-200 text-indigo-600 shadow-2xs">
                <Phone className="w-5 h-5" />
              </span>
              <button
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-zinc-200 hover:bg-zinc-100 text-xs font-mono text-zinc-700 transition-colors shadow-2xs"
                title="Copy phone number"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="text-xs font-mono text-zinc-400 uppercase font-semibold">Phone &amp; WhatsApp</div>
            <a 
              href={`tel:${portfolioData.personal.phone}`}
              className="text-base font-bold text-zinc-900 hover:text-indigo-600 transition-colors font-mono mt-1 block"
            >
              {portfolioData.personal.phone}
            </a>
            <p className="text-xs text-zinc-500 mt-2 font-mono">
              Available during IST business hours for calls and messaging.
            </p>
          </div>

          <div className="mt-6 pt-3 border-t border-zinc-200/60 flex items-center justify-between text-xs font-mono">
            <span className="text-zinc-400">Timezone</span>
            <span className="text-zinc-700 font-semibold">IST (UTC +5:30)</span>
          </div>
        </div>

        {/* Location Card */}
        <div className="p-6 rounded-2xl bg-[#fafaf9] border border-zinc-200 hover:border-zinc-300 hover:shadow-xs transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="p-3 rounded-xl bg-white border border-zinc-200 text-emerald-600 shadow-2xs">
                <MapPin className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white text-zinc-600 border border-zinc-200">
                India
              </span>
            </div>

            <div className="text-xs font-mono text-zinc-400 uppercase font-semibold">Location &amp; Mobility</div>
            <div className="text-base font-bold text-zinc-900 mt-1">
              {portfolioData.personal.location}
            </div>
            <p className="text-xs text-zinc-500 mt-2 font-mono">
              Open to Remote, Hybrid, or On-site opportunities in Chennai.
            </p>
          </div>

          <div className="mt-6 pt-3 border-t border-zinc-200/60 flex items-center justify-between text-xs font-mono">
            <span className="text-zinc-400">Work Mode</span>
            <span className="text-zinc-700 font-semibold">Remote / Hybrid</span>
          </div>
        </div>

        {/* LinkedIn Card */}
        <div className="p-6 rounded-2xl bg-[#fafaf9] border border-zinc-200 hover:border-zinc-300 hover:shadow-xs transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="p-3 rounded-xl bg-white border border-zinc-200 text-[#0077b5] shadow-2xs">
                <LinkedinIcon className="w-5 h-5" />
              </span>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-blue-600 hover:underline font-semibold"
              >
                <span>Visit Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="text-xs font-mono text-zinc-400 uppercase font-semibold">LinkedIn Network</div>
            <div className="text-base font-bold text-zinc-900 mt-1">
              gokula-krishna-4878981b1
            </div>
            <p className="text-xs text-zinc-500 mt-2 font-mono">
              Connect for technical networking, career updates, and recommendations.
            </p>
          </div>

          <div className="mt-6 pt-3 border-t border-zinc-200/60">
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-4 rounded-xl bg-[#0077b5] hover:bg-[#006097] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>Connect On LinkedIn</span>
            </a>
          </div>
        </div>

        {/* GitHub Card */}
        <div className="p-6 rounded-2xl bg-[#fafaf9] border border-zinc-200 hover:border-zinc-300 hover:shadow-xs transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="p-3 rounded-xl bg-white border border-zinc-200 text-zinc-900 shadow-2xs">
                <GithubIcon className="w-5 h-5" />
              </span>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-zinc-800 hover:underline font-semibold"
              >
                <span>View Repositories</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="text-xs font-mono text-zinc-400 uppercase font-semibold">GitHub Source Code</div>
            <div className="text-base font-bold text-zinc-900 mt-1">
              gokulakrishna3101999
            </div>
            <p className="text-xs text-zinc-500 mt-2 font-mono">
              Explore open-source contributions including SynapseMCP (RAG + MCP server).
            </p>
          </div>

          <div className="mt-6 pt-3 border-t border-zinc-200/60">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-4 rounded-xl bg-zinc-900 hover:bg-black text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Explore GitHub</span>
            </a>
          </div>
        </div>

        {/* Resume PDF Viewer Card */}
        <div className="p-6 rounded-2xl bg-[#fafaf9] border border-zinc-200 hover:border-zinc-300 hover:shadow-xs transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="p-3 rounded-xl bg-white border border-zinc-200 text-blue-600 shadow-2xs">
                <FileText className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                Updated
              </span>
            </div>

            <div className="text-xs font-mono text-zinc-400 uppercase font-semibold">Curriculum Vitae</div>
            <div className="text-base font-bold text-zinc-900 mt-1">
              Gokulakrishna_Resume.pdf
            </div>
            <p className="text-xs text-zinc-500 mt-2 font-mono">
              Complete career track record with Citiustech, Zoho CRM, and SynapseMCP.
            </p>
          </div>

          <div className="mt-6 pt-3 border-t border-zinc-200/60 flex items-center gap-2">
            <button
              onClick={onOpenResume}
              className="flex-1 py-2 px-3 rounded-xl bg-zinc-900 hover:bg-black text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-xs"
            >
              <span>Preview PDF</span>
            </button>
            <a
              href={portfolioData.personal.resumePdfUrl}
              download="Gokulakrishna_Resume.pdf"
              className="p-2 rounded-xl bg-white border border-zinc-200 hover:bg-zinc-100 text-zinc-700 transition-all shadow-xs"
              title="Direct Download PDF"
            >
              <Download className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Role Preferences Banner */}
      <div className="mt-10 p-6 sm:p-8 rounded-2xl border border-zinc-200 bg-[#fafaf9] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-700 font-bold uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            <span>Target Role &amp; Focus Areas</span>
          </div>
          <h3 className="text-xl font-bold text-zinc-900">
            Senior Software Engineer &mdash; Backend &amp; Applied AI
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 font-normal max-w-2xl leading-relaxed">
            Specializing in high-concurrency microservices, Domain-Driven Design (DDD), Hexagonal Architecture, distributed data pipelines, and multi-tenant RAG / Model Context Protocol (MCP) systems.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 lg:flex-col lg:items-end">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-semibold border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5" /> Open to Opportunities
          </span>
          <span className="text-xs font-mono text-zinc-500">
            Notice Period: Immediate / Standard
          </span>
        </div>
      </div>

    </div>
  );
};
