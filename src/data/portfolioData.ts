import resumePdf from '../assets/Gokulakrishna Resume.pdf';

export interface ExperienceItem {
  id: string;
  company: string;
  client?: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  githubUrl: string;
  summary: string;
  architecturePoints: { title: string; description: string; tag: string }[];
  metrics: { label: string; value: string; desc: string }[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  categoryKey: 'systems' | 'ai' | 'infra' | 'languages';
  description: string;
  skills: { name: string; level?: 'Expert' | 'Advanced' | 'Proficient'; highlight?: boolean }[];
}

export const portfolioData = {
  personal: {
    name: "Gokulakrishna K",
    shortName: "Gokul",
    initials: "GK",
    title: "Senior Software Engineer – Backend & Applied AI",
    subtitles: {
      leftHero: "Gokulakrishna K",
      leftSub: "Senior Backend Engineer specialising in distributed systems, high-scale microservices, and Domain-Driven Design.",
      rightHero: "<ai coder>",
      rightSub: "Applied AI builder engineering multi-tenant RAG pipelines, MCP servers, and vector search systems."
    },
    location: "Chennai, India",
    phone: "+91 9080424870",
    email: "gokulakrishna3101999@gmail.com",
    linkedin: "https://www.linkedin.com/in/gokula-krishna-4878981b1",
    github: "https://github.com/gokulakrishna3101999",
    resumePdfUrl: resumePdf,
    summary: "Senior Software Engineer with 5 years of experience building distributed, fault-tolerant backend microservices in Java and Spring Boot across healthcare and CRM products serving 250K+ users. Author of SynapseMCP, an open-source multi-tenant RAG + Model Context Protocol (MCP) platform, extending systems rigor into applied AI infrastructure. Strong in system design, Domain-Driven Design, REST APIs, concurrency, and multi-tenant architecture."
  },

  stats: [
    { label: "Production Experience", value: "5+ Years", note: "Distributed systems & microservices" },
    { label: "Active Enterprise Users", value: "250K+", note: "High-scale CRM & healthcare workflows" },
    { label: "Hot Path Latency Drop", value: "-35%", note: "Targeted REST/Bulk Java API tuning" },
    { label: "RAG Retrieval MRR", value: "1.00", note: "Hybrid BM25 + pgvector + Rerank (SynapseMCP)" },
    { label: "Integration Test Coverage", value: "94%+", note: "447+ tests against live DB & Redis" }
  ],

  skillCategories: [
    {
      title: "Core Languages",
      categoryKey: "languages",
      description: "Strong typing, concurrency control, and high-performance system programming.",
      skills: [
        { name: "Java 21 (Primary)", level: "Expert", highlight: true },
        { name: "Python", level: "Advanced", highlight: true },
        { name: "SQL (PostgreSQL, MySQL)", level: "Expert", highlight: true },
        { name: "C++", level: "Proficient" }
      ]
    },
    {
      title: "Architecture & Distributed Systems",
      categoryKey: "systems",
      description: "Architectural patterns for high concurrency, fault tolerance, and data consistency.",
      skills: [
        { name: "Domain-Driven Design (DDD)", level: "Expert", highlight: true },
        { name: "Microservices Architecture", level: "Expert", highlight: true },
        { name: "Hexagonal Architecture", level: "Advanced", highlight: true },
        { name: "Distributed Systems & Concurrency", level: "Expert", highlight: true },
        { name: "High-Volume REST & Bulk APIs", level: "Expert", highlight: true },
        { name: "System Design & Scalability", level: "Expert", highlight: true },
        { name: "Data Structures & Algorithms", level: "Advanced" }
      ]
    },
    {
      title: "Applied AI & Vector Search",
      categoryKey: "ai",
      description: "State-of-the-art AI infrastructure, protocol servers, and hybrid retrieval engines.",
      skills: [
        { name: "Retrieval-Augmented Generation (RAG)", level: "Expert", highlight: true },
        { name: "Model Context Protocol (MCP)", level: "Expert", highlight: true },
        { name: "pgvector & Cosine ANN", level: "Expert", highlight: true },
        { name: "Apache Lucene (BM25)", level: "Advanced", highlight: true },
        { name: "Reciprocal Rank Fusion (RRF)", level: "Advanced", highlight: true },
        { name: "LLM Reranking & Prompt Orchestration", level: "Advanced" },
        { name: "Multi-Vector Embeddings", level: "Advanced" }
      ]
    },
    {
      title: "Frameworks & Runtime",
      categoryKey: "systems",
      description: "Enterprise Java enterprise frameworks, AI SDKs, and rate limiting engines.",
      skills: [
        { name: "Spring Boot", level: "Expert", highlight: true },
        { name: "Spring AI", level: "Advanced", highlight: true },
        { name: "Spring Data JPA", level: "Expert" },
        { name: "Bucket4j Rate Limiting", level: "Advanced" },
        { name: "JUnit 5 & Integration Test Harnesses", level: "Expert" },
        { name: "Struts", level: "Proficient" }
      ]
    },
    {
      title: "Databases, Caching & Search",
      categoryKey: "infra",
      description: "Relational, in-memory, and inverted-index storage engines.",
      skills: [
        { name: "PostgreSQL & pgvector", level: "Expert", highlight: true },
        { name: "Redis", level: "Expert", highlight: true },
        { name: "MySQL", level: "Advanced" },
        { name: "Apache Lucene", level: "Advanced" }
      ]
    },
    {
      title: "Cloud, DevOps & Observability",
      categoryKey: "infra",
      description: "Cloud-native deployments, container orchestration, and real-time tracing.",
      skills: [
        { name: "AWS (EC2, EKS, SQS, S3, VPC, Lambda)", level: "Advanced", highlight: true },
        { name: "Docker & Containerization", level: "Expert", highlight: true },
        { name: "Kubernetes", level: "Proficient" },
        { name: "Terraform", level: "Proficient" },
        { name: "Jenkins, Maven & Gradle", level: "Advanced" },
        { name: "Amazon CloudWatch & Prometheus", level: "Advanced" },
        { name: "MDC-based Structured Distributed Tracing", level: "Expert", highlight: true }
      ]
    }
  ] as SkillCategory[],

  experiences: [
    {
      id: "citiustech",
      company: "Citiustech healthcare Technology Private limited",
      client: "athenahealth",
      role: "Senior Software Engineer",
      period: "August 2025 – Present",
      location: "Chennai, India",
      summary: "Leading backend engineering for healthcare microservices, focusing on Medical Record Release (MRR) document reconciliation, hexagonal architecture integrations, and regulatory compliance.",
      highlights: [
        "Redesigned core healthcare domain models for Medical Record Release (MRR) document reconciliation using Domain-Driven Design (DDD), resolving scalability and data-consistency gaps across independently deployed message-generation and document-update microservices.",
        "Built hexagonal-architecture integrations with IAM authentication and idempotency/retry semantics for external Medical Document Platform (MDP) APIs, sustaining fault-tolerant exchange of 2K+ documents monthly in production.",
        "Developed high-throughput REST APIs transforming FHIR Audit Events into vendor messages, establishing the record-level regulatory compliance required across the multi-system reconciliation pipeline.",
        "Implemented a domain-level validation framework separating terminal from transient failures, blocking invalid data from propagating downstream and cutting retry-related incidents from ~2/week to ~1/month by making automated retries safe by default.",
        "Introduced MDC-based structured logging with distributed tracing across services, cutting cross-service incident diagnosis from manual multi-system log correlation to following a single trace ID."
      ],
      metrics: [
        { label: "Document Throughput", value: "2K+/mo" },
        { label: "Incident Reduction", value: "From 2/wk to 1/mo" },
        { label: "Traceability", value: "Single Trace ID" }
      ],
      technologies: ["Java", "Spring Boot", "Domain-Driven Design", "Hexagonal Architecture", "FHIR", "IAM", "REST APIs", "MDC Tracing", "AWS"]
    },
    {
      id: "zoho",
      company: "Zoho Corporation",
      role: "Member Technical Staff",
      period: "August 2021 – August 2025",
      location: "Chennai, India",
      summary: "Owned core metadata infrastructure behind custom modules and fields in Zoho CRM, serving 250K+ enterprise accounts across 4 years of continuous releases.",
      highlights: [
        "Owned the Module Builder – Fields component serving 250K+ users, evolving the field-metadata architecture behind custom modules, layouts, sections, and fields through four years of stable releases.",
        "Built dynamic field-limit expansion and on-demand field-type conversion tooling, eliminating a hard product limit and the recurring per-customer escalations it caused.",
        "Implemented sandbox support for the full field-configuration lifecycle (create, update, delete, deploy) after customers repeatedly broke production with untested configurations, reducing production deployment failures by 70%.",
        "Engineered Rich Text and Address field types to close competitive gaps in CRM data capture, driving adoption across 15K+ accounts and cited by sales in enterprise deal wins.",
        "Diagnosed latency bottlenecks in legacy, high-volume CRM workflows, built REST and bulk Java APIs, and optimized hot paths, reducing API latency by 35% while stabilizing the legacy stack."
      ],
      metrics: [
        { label: "Scale Served", value: "250K+ Users" },
        { label: "Deploy Failures", value: "-70% in Prod" },
        { label: "API Latency", value: "-35% Faster" },
        { label: "Adoption", value: "15K+ Accounts" }
      ],
      technologies: ["Java", "Spring Boot", "Distributed Architecture", "PostgreSQL", "MySQL", "Redis", "Bulk APIs", "Sandbox Lifecycle"]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "synapsemcp",
      title: "SynapseMCP",
      subtitle: "Multi-Tenant RAG + Model Context Protocol (MCP) Platform",
      category: "Applied AI / Distributed Systems",
      githubUrl: "https://github.com/gokulakrishna3101999/SynapseMCP",
      summary: "An open-source multi-tenant RAG + Model Context Protocol (MCP) server engineered in Java 21 and Spring Boot. Delivers hybrid BM25 + pgvector retrieval with reciprocal rank fusion, dynamic sparse vector dimensions, and resilient multi-stage async ingestion pipelines.",
      architecturePoints: [
        {
          title: "Multi-Tenant RAG + 15-Tool MCP Server",
          description: "Tenants dynamically select chat & embedding providers (OpenAI, Anthropic, Ollama, Google GenAI) via REST or a native 15-tool MCP server (Streamable HTTP), both invoking identical domain services with zero HTTP loopback.",
          tag: "Architecture"
        },
        {
          title: "Hybrid Retrieval with Reciprocal Rank Fusion",
          description: "Fuses Lucene BM25 keyword matching with pgvector cosine ANN via Reciprocal Rank Fusion (k=60) plus an LLM reranking pass to defeat near-duplicate distractors. Lifted Mean Reciprocal Rank (MRR) from 0.83 (vector-only) to 0.94 (hybrid) to 1.00 (with reranking) on an 18-document golden-query harness.",
          tag: "Search AI"
        },
        {
          title: "Sparse-Dimension Dynamic Vector Schema",
          description: "Stores six vector widths (384–3072) in a single chunks table so tenants on incompatible embedding models share infrastructure with zero runtime DDL. Employs idempotent HNSW bootstrapping and halfvec to clear pgvector's 2000-dimension ceiling; validated via EXPLAIN ANALYZE on 313K chunks.",
          tag: "Database"
        },
        {
          title: "Hardened Five-Stage Async Ingestion Pipeline",
          description: "Extract, chunk, embed, persist, and index stages hardened for partial failure with SHA-256 idempotency, LLM-vision-first extraction with OCR fallback, and hourly self-healing Lucene–PostgreSQL reconciliation.",
          tag: "Pipeline"
        },
        {
          title: "Fault-Tolerant Distributed Rate Limiting",
          description: "Per-tenant Bucket4j rate limiting that gracefully degrades to an in-JVM limiter during Redis outages. Validated platform behavior with 447+ tests at 94%+ coverage against real PostgreSQL and Redis test containers.",
          tag: "Resilience"
        }
      ],
      metrics: [
        { label: "Retrieval MRR", value: "1.00", desc: "0.83 vector -> 0.94 hybrid -> 1.00 reranked" },
        { label: "Ingestion Scale", value: "313K+", desc: "Chunks validated via EXPLAIN ANALYZE" },
        { label: "Native MCP Tools", value: "15 Tools", desc: "Streamable HTTP protocol support" },
        { label: "Test Suite", value: "447+ Tests", desc: "94%+ coverage on live DB/Redis instances" }
      ],
      technologies: ["Java 21", "Spring Boot", "Spring AI", "PostgreSQL", "pgvector", "Apache Lucene", "Redis", "Bucket4j", "Docker", "Model Context Protocol"]
    }
  ] as ProjectItem[],

  education: {
    institution: "Velammal Institute of Technology",
    degree: "Bachelor of Engineering (B.E.) in Computer Science",
    period: "August 2017 – August 2021",
    location: "Chennai, India",
    focus: "Data Structures, Algorithms, Distributed Computing, Database Management Systems, Object-Oriented Software Engineering."
  }
};
