import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { 
  Bot, 
  ExternalLink, 
  Database, 
  Sparkles, 
  ShieldCheck, 
  BarChart3, 
  Check, 
  Server, 
  Layers, 
  Terminal,
  Code2
} from 'lucide-react';
import { GithubIcon } from '../Icons';

interface ProjectsViewProps {
  onNavigate: (tab: string) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onNavigate }) => {
  const project = portfolioData.projects[0];
  const [activeTab, setActiveTab] = useState<'architecture' | 'retrieval' | 'schema' | 'resilience'>('architecture');

  return (
    <div className="w-full bg-white text-[#111111] py-12 sm:py-16 px-4 sm:px-8 max-w-6xl mx-auto animate-fadeIn">
      
      {/* Header */}
      <div className="pb-8 border-b border-zinc-100 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-600 font-semibold flex items-center gap-1.5">
            <Bot className="w-4 h-4" /> Open-Source Applied AI Infrastructure
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] mt-1">
            Projects &amp; Open Source
          </h1>
          <p className="mt-2 text-base text-zinc-500 max-w-2xl font-normal">
            Author and architect of SynapseMCP &mdash; multi-tenant RAG and Model Context Protocol server.
          </p>
        </div>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] hover:bg-black text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm active:scale-95"
        >
          <GithubIcon className="w-4 h-4" />
          <span>View On GitHub</span>
          <ExternalLink className="w-3.5 h-3.5 ml-0.5 text-zinc-400" />
        </a>
      </div>

      {/* Metrics Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 mb-8">
        {project.metrics.map(m => (
          <div key={m.label} className="p-4 rounded-xl bg-[#fafaf9] border border-zinc-200">
            <div className="text-xs font-mono uppercase text-zinc-500 font-semibold">{m.label}</div>
            <div className="text-2xl font-bold font-mono text-zinc-900 mt-1">{m.value}</div>
            <div className="text-[11px] text-zinc-500 mt-0.5">{m.desc}</div>
          </div>
        ))}
      </div>

      {/* Interactive Deep-Dive Terminal Console */}
      <div className="rounded-2xl border border-zinc-300 bg-[#0c0d12] text-white overflow-hidden shadow-xl">
        
        {/* Top tabs */}
        <div className="flex items-center border-b border-zinc-800 bg-[#14151c] px-6 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2 py-3 text-xs font-mono text-zinc-400 mr-6">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="ml-2 text-zinc-300 font-bold">synapse-mcp-core</span>
          </div>

          <div className="flex items-center space-x-1">
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-4 py-3 text-xs font-mono font-medium border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'architecture'
                  ? 'border-cyan-400 text-white bg-white/5 font-semibold'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              1. Dual Protocol Architecture
            </button>
            <button
              onClick={() => setActiveTab('retrieval')}
              className={`px-4 py-3 text-xs font-mono font-medium border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'retrieval'
                  ? 'border-cyan-400 text-white bg-white/5 font-semibold'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              2. Hybrid Search &amp; RRF (k=60)
            </button>
            <button
              onClick={() => setActiveTab('schema')}
              className={`px-4 py-3 text-xs font-mono font-medium border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'schema'
                  ? 'border-cyan-400 text-white bg-white/5 font-semibold'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              3. Sparse Vector Schema
            </button>
            <button
              onClick={() => setActiveTab('resilience')}
              className={`px-4 py-3 text-xs font-mono font-medium border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'resilience'
                  ? 'border-cyan-400 text-white bg-white/5 font-semibold'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              4. Ingestion &amp; Fault Tolerance
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-6 sm:p-10">
          {activeTab === 'architecture' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-800 text-cyan-300 text-xs font-mono">
                  <Sparkles className="w-3.5 h-3.5" /> 15-Tool Native Model Context Protocol Server
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Zero-Loopback REST + Streamable HTTP MCP Server
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  SynapseMCP provides a unified multi-tenant AI backplane where client tenants select their preferred LLM &amp; embedding providers (OpenAI, Anthropic Claude, Ollama local models, Google GenAI).
                </p>
                <p className="text-zinc-400 text-xs font-mono leading-relaxed bg-black/40 p-4 rounded-xl border border-zinc-800">
                  &bull; Native 15-tool MCP Server over Streamable HTTP.<br />
                  &bull; Both REST and MCP invoke identical underlying domain services with zero HTTP loopback overhead.<br />
                  &bull; Verified via combined REST+MCP integration test suite with live containers.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Streamable HTTP', 'Spring AI', 'Multi-Tenant Isolation', 'Zero HTTP Loopback', 'Dynamic LLM Routing'].map(t => (
                    <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#151722] p-6 rounded-2xl border border-zinc-800 font-mono text-xs">
                <div className="text-zinc-500 pb-3 border-b border-zinc-800 flex items-center justify-between">
                  <span>ARCH_FLOW.svg</span>
                  <span className="text-cyan-400">STATUS: PROD</span>
                </div>
                <div className="py-4 space-y-3 text-zinc-300">
                  <div className="p-2.5 rounded bg-black/50 border border-zinc-700/60">
                    <span className="text-blue-400 font-bold">[Tenant Request]</span> &rarr; Streamable HTTP or REST
                  </div>
                  <div className="text-center text-zinc-600 text-xs">&darr; Tenant Context Filter</div>
                  <div className="p-2.5 rounded bg-black/50 border border-cyan-700/60">
                    <span className="text-cyan-300 font-bold">[SynapseMCP Core]</span> &rarr; 15 Tools Registry
                  </div>
                  <div className="text-center text-zinc-600 text-xs">&darr; Dual Engine Retrieval</div>
                  <div className="p-2.5 rounded bg-black/50 border border-emerald-700/60">
                    <span className="text-emerald-400 font-bold">[Hybrid Fusion]</span> &rarr; Lucene BM25 + pgvector ANN
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'retrieval' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs font-mono">
                  <BarChart3 className="w-3.5 h-3.5" /> Benchmarked Golden Query Harness
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Hybrid Retrieval with Reciprocal Rank Fusion (k=60)
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Pure vector embeddings suffer from "near-duplicate distractors" and miss precise alphanumeric identifiers. SynapseMCP fuses Apache Lucene BM25 keyword matching with pgvector cosine ANN using Reciprocal Rank Fusion (RRF k=60), followed by an LLM reranking pass.
                </p>
                
                {/* Benchmarks Progression */}
                <div className="space-y-3 pt-2">
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-zinc-400">1. Vector Only (pgvector Cosine ANN)</span>
                      <span className="text-amber-400 font-bold">0.83 MRR</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: '83%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-zinc-400">2. Hybrid (Lucene BM25 + pgvector via RRF k=60)</span>
                      <span className="text-cyan-400 font-bold">0.94 MRR</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                      <div className="h-full bg-cyan-500 rounded-full" style={{ width: '94%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-zinc-400">3. Hybrid + Cross-Encoder / LLM Reranking</span>
                      <span className="text-emerald-400 font-bold">1.00 MRR (Perfect)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#151722] p-6 rounded-2xl border border-zinc-800 font-mono text-xs">
                <div className="text-zinc-400 pb-2 border-b border-zinc-800">
                  // Reciprocal Rank Fusion formula
                </div>
                <pre className="text-emerald-400 mt-4 leading-relaxed overflow-x-auto text-[11px]">
{`double rrfScore = 0.0;
final int k = 60;

for (Document doc : unionResults) {
  double bm25Rank = getBm25Rank(doc);
  double vectorRank = getVectorRank(doc);
  
  rrfScore = (1.0 / (k + bm25Rank)) 
           + (1.0 / (k + vectorRank));
           
  doc.setScore(rrfScore);
}`}
                </pre>
                <div className="mt-4 pt-3 border-t border-zinc-800 text-[11px] text-zinc-400">
                  Validated against 18-document golden query harness.
                </div>
              </div>
            </div>
          )}

          {activeTab === 'schema' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-purple-950/60 border border-purple-800 text-purple-300 text-xs font-mono">
                  <Database className="w-3.5 h-3.5" /> PostgreSQL + pgvector Schema Architecture
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Sparse-Dimension Schema &bull; Zero Runtime DDL
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Tenants frequently configure different embedding models with incompatible vector dimensions (384, 512, 768, 1024, 1536, 3072). Creating dynamic tables per tenant causes DDL locking and schema bloat.
                </p>
                <p className="text-zinc-400 text-xs font-mono leading-relaxed bg-black/40 p-4 rounded-xl border border-zinc-800">
                  &bull; Stores six vector widths in one unified chunks table with zero runtime DDL.<br />
                  &bull; Uses idempotent HNSW index bootstrapping and pgvector <code className="text-purple-300">halfvec</code> to bypass the default 2,000-dimension indexing limit.<br />
                  &bull; Performance validated with <code className="text-purple-300">EXPLAIN ANALYZE</code> on 313,000+ chunks.
                </p>
              </div>

              <div className="lg:col-span-5 bg-[#151722] p-6 rounded-2xl border border-zinc-800 font-mono text-xs">
                <div className="text-purple-400 font-bold mb-2">// DDL Innovation</div>
                <pre className="text-zinc-300 leading-relaxed text-[11px] overflow-x-auto">
{`CREATE TABLE document_chunks (
  chunk_id UUID PRIMARY KEY,
  tenant_id VARCHAR(64) NOT NULL,
  content TEXT NOT NULL,
  v384 halfvec(384),
  v768 halfvec(768),
  v1536 halfvec(1536),
  v3072 halfvec(3072),
  sha256_hash VARCHAR(64) UNIQUE
);

-- Idempotent HNSW index creation
CREATE INDEX IF NOT EXISTS idx_hnsw_1536 
ON document_chunks 
USING hnsw (v1536 halfvec_cosine_ops);`}
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'resilience' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-blue-950/60 border border-blue-800 text-blue-300 text-xs font-mono">
                  <ShieldCheck className="w-3.5 h-3.5" /> Production Fault Tolerance
                </div>
                <h3 className="text-2xl font-bold text-white">
                  5-Stage Pipeline &amp; In-JVM Rate Limit Fallback
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Designed for real-world distributed failures:
                </p>
                <ul className="space-y-2 text-xs font-mono text-zinc-300">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Five-Stage Async Ingestion:</strong> Extract &rarr; Chunk &rarr; Embed &rarr; Persist &rarr; Index, hardened with SHA-256 idempotency.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Vision-First Extraction:</strong> LLM-vision parser with automatic OCR fallback on unreadable scans.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Self-Healing Lucene:</strong> Hourly reconciliation loop syncing Lucene inverted indices with PostgreSQL source-of-truth.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Bucket4j Rate Limiting:</strong> Enforces per-tenant rate limits on Redis; gracefully fails over to in-JVM token buckets during Redis outages.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>447+ Automated Tests:</strong> 94%+ coverage executed against live PostgreSQL/pgvector and Redis testcontainers.</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-5 bg-[#151722] p-6 rounded-2xl border border-zinc-800 font-mono text-xs text-zinc-300">
                <div className="text-blue-400 font-bold mb-3">// Resilience Metrics</div>
                <div className="space-y-2">
                  <div className="flex justify-between py-1.5 border-b border-zinc-800">
                    <span>Test Coverage</span>
                    <span className="text-emerald-400 font-bold">94%+</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-zinc-800">
                    <span>Total Integration Tests</span>
                    <span className="text-emerald-400 font-bold">447+ Tests</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-zinc-800">
                    <span>Redis Outage Mode</span>
                    <span className="text-cyan-400 font-bold">In-JVM Fallback</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-zinc-800">
                    <span>Deduplication</span>
                    <span className="text-white font-bold">SHA-256 Idempotent</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#14151c] px-6 py-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Open-source on GitHub under Apache-2.0 / MIT</span>
          </div>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
          >
            <span>Explore SynapseMCP Source Code</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

    </div>
  );
};
