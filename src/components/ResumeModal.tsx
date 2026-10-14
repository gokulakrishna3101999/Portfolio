import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-zinc-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0c0d10] text-white border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-zinc-800 text-blue-400">
              <FileText className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-bold text-base text-zinc-100">
                {portfolioData.personal.name} &mdash; Resume
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                Senior Software Engineer &bull; Backend &amp; Applied AI
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={portfolioData.personal.resumePdfUrl}
              download="Gokulakrishna_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <a
              href={portfolioData.personal.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-all"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-all ml-1"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: PDF Preview Container */}
        <div className="flex-1 overflow-y-auto bg-zinc-100 p-4">
          <div className="w-full h-[65vh] rounded-xl overflow-hidden border border-zinc-300 bg-white shadow-inner">
            <iframe
              src={`${portfolioData.personal.resumePdfUrl}#view=FitH`}
              title="Gokulakrishna Resume PDF"
              className="w-full h-full border-none"
            />
          </div>
        </div>

        {/* Modal Footer: Summary & Actions */}
        <div className="px-6 py-3 bg-zinc-50 border-t border-zinc-200 flex flex-wrap items-center justify-between text-xs font-mono text-zinc-600 gap-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Updated with latest Citiustech healthcare Technology Private limited (athenahealth) and SynapseMCP project experience.</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="text-blue-600 hover:underline font-semibold"
            >
              Contact: {portfolioData.personal.email}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
