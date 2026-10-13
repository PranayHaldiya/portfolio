// Everything on the site comes from this file and ./tech.tsx.
import type { TechKey } from './tech';

export const site = {
  name: 'Pranay Haldiya',
  role: 'Software Engineer',
  focus: 'Full-stack · AI · Web3',
  location: 'Jaipur, India',
  email: 'pranayhaldiya8127@gmail.com',
  url:
    process.env.NEXT_PUBLIC_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'http://localhost:3000'),
  avatar: '/avatar.png',
  status: 'Open to remote roles',
  description:
    'Full-stack software engineer in Jaipur, India: web and mobile apps, backends, AI agents and Web3 on EVM chains and Solana, in TypeScript, Python, Rust or whatever the codebase uses. Built Roger Ads and an iMessage agent with 630+ users at Roger (YC S24). Open to remote roles.',
  githubUsername: 'PranayHaldiya',
  resume: '/resume.pdf',
};

// Bio paragraphs. Strings are text; { tech } renders an icon chip.
export type BioPart = string | { tech: TechKey; label?: string };

export const bio: BioPart[][] = [
  [
    'I’m a full-stack software engineer. I build web and mobile apps, backends, AI agents, and Web3 apps on ',
    { tech: 'evm', label: 'EVM chains' },
    ' and ',
    { tech: 'solana' },
    '.',
  ],
  [
    'I’m not tied to one language. I’ve worked in ',
    { tech: 'typescript' },
    ', ',
    { tech: 'python' },
    ', ',
    { tech: 'rust' },
    ' and ',
    { tech: 'solidity' },
    ', and with coding agents like ',
    { tech: 'claudeCode' },
    ' and ',
    { tech: 'codex' },
    ' I pick up whatever the codebase uses, Go included.',
  ],
  [
    'At Roger (YC S24) I built Roger Ads, which turns a company’s website into ads and launches them on Meta, and an iMessage agent that reached 630+ users. Before that I shipped 10+ Web3 dApps and AI platforms at Metaverse Ventures.',
  ],
  [
    'Open to remote software engineering roles: full-stack, backend, AI or Web3.',
  ],
];

export const socials = [
  { name: 'GitHub', href: 'https://github.com/PranayHaldiya' },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pranay-haldiya-387116253',
  },
  { name: 'X', href: 'https://x.com/pranay_haldiya' },
  { name: 'Email', href: `mailto:${site.email}` },
] as const;

export type Experience = {
  company: string;
  logo: string;
  companyNote?: string;
  href?: string;
  role: string;
  start: string;
  end: string;
  location: string;
  points: string[];
  stack: TechKey[];
};

export const experience: Experience[] = [
  {
    company: 'Roger AI',
    logo: '/logos/roger.jpg',
    companyNote: 'YC S24',
    href: 'https://hireroger.com',
    role: 'Software Engineer',
    start: 'Apr 2026',
    end: 'Sep 2026',
    location: 'Remote',
    points: [
      'Built Roger Ads from zero to production: an agent that turns a company’s website into image and video ads and launches them on Meta. Used by 35+ customer organizations.',
      'Designed an autopilot agent that runs live Meta campaigns every day: it pauses weak ads, shifts budgets and launches new creatives, but only inside spend guardrails. Anything past them waits for a person to approve.',
      'Launched Roger’s iMessage agent: 630+ users and 14K+ messages in four months, with onboarding, Android support and in-chat checkout.',
      'Built Roger’s MCP server with its own OAuth 2.1 authorization server (DCR, PKCE, token rotation) and read, prepare and act consent tiers over 200+ tools.',
      'Built attribution: click-ID capture, server-side conversions to Meta, TikTok, Reddit, LinkedIn and X, and an hourly spend sync that tracked $50K+ in ad spend.',
    ],
    stack: [
      'typescript',
      'nextjs',
      'aiSdk',
      'claude',
      'mcp',
      'bullmq',
      'postgresql',
      'prisma',
      'meta',
      'fal',
      'elevenlabs',
      'grafana',
      'vercel',
    ],
  },
  {
    company: 'Metaverse Ventures',
    logo: '/logos/m0.jpg',
    role: 'Full Stack Developer',
    start: 'May 2025',
    end: 'Mar 2026',
    location: 'Remote',
    points: [
      'Shipped 10+ production Web3 dApps and AI platforms with wallet sign-in, transaction signing and on-chain payments (Loop Crypto, ATLOS, x402).',
      'Built AI agents with LangChain, LangGraph, Mastra and Agno, running agent-generated code in E2B sandboxes.',
      'Moved APIs to tRPC with TanStack Query (about 20% faster client loads) and maintained NestJS and FastAPI services with Redis caching and RAG pipelines.',
    ],
    stack: [
      'nextjs',
      'tailwind',
      'trpc',
      'tanstackQuery',
      'nestjs',
      'fastapi',
      'redis',
      'langchain',
      'langgraph',
      'mastra',
      'evm',
      'wagmi',
      'viem',
      'solana',
      'posthog',
    ],
  },
  {
    company: 'Logics PowerAMR',
    logo: '/logos/logics.jpg',
    role: 'Software Developer Intern',
    start: 'Dec 2024',
    end: 'Feb 2025',
    location: 'Noida, India',
    points: [
      'Built MERN energy-monitoring dashboards for 100+ concurrent users, and Node.js/MQTT APIs that store real-time telemetry from 500+ IoT devices in MongoDB time-series collections.',
    ],
    stack: ['mongodb', 'express', 'react', 'nodejs', 'mqtt'],
  },
];

export type Education = {
  school: string;
  logo: string;
  detail: string;
  start: string;
  end: string;
};

export const education: Education[] = [
  {
    school: 'Amity University Rajasthan, Jaipur',
    logo: '/logos/amity.jpg',
    detail: 'B.Tech in Computer Science · CGPA 8.2/10',
    start: '2021',
    end: '2025',
  },
  {
    school: 'Central Academy',
    logo: '/logos/central-academy.jpg',
    detail: 'Class 12 (CBSE) 94.2% · Class 10 91.8%',
    start: '2007',
    end: '2021',
  },
];

// From the resume's skills section, plus the AI tools used day to day.
export const stack: { group: string; items: TechKey[] }[] = [
  {
    group: 'Languages',
    items: ['typescript', 'javascript', 'python', 'rust', 'solidity'],
  },
  {
    group: 'Frontend & mobile',
    items: [
      'react',
      'nextjs',
      'tailwind',
      'shadcn',
      'trpc',
      'tanstackQuery',
      'reactNative',
      'expo',
    ],
  },
  {
    group: 'Backend',
    items: [
      'nodejs',
      'express',
      'nestjs',
      'fastapi',
      'bullmq',
      'redis',
      'postgresql',
      'prisma',
      'mongodb',
    ],
  },
  {
    group: 'AI tools',
    items: ['claudeCode', 'codex', 'chatgpt', 'claude', 'cursor', 'gemini'],
  },
  {
    group: 'AI & agents',
    items: [
      'aiSdk',
      'claudeAgentSdk',
      'mcp',
      'langchain',
      'langgraph',
      'mastra',
      'openrouter',
    ],
  },
  {
    group: 'Web3',
    items: ['evm', 'wagmi', 'viem', 'solana', 'anchor'],
  },
  {
    group: 'Infra',
    items: [
      'docker',
      'kubernetes',
      'aws',
      'vercel',
      'cloudflareWorkers',
      'githubActions',
      'grafana',
      'posthog',
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
  year: string;
  github: string;
  live?: string;
};

export const projects: Project[] = [
  {
    name: 'software-factory',
    description:
      'Label a GitHub issue and AI stations take it from triage to a reviewed, tested pull request: one model implements, a second reviews, an evidence step attaches screenshots, and it merges when CI is green.',
    tags: ['GitHub Actions', 'Claude Code'],
    year: '2026',
    github: 'https://github.com/PranayHaldiya/software-factory',
  },
  {
    name: 'AgentEconomy',
    description:
      'Three AI agents (researcher, writer, publisher) sell services to each other and get paid per call in USDC over x402. Each agent has its own wallet with spending limits. Built for the OWS hackathon.',
    tags: ['x402', 'Agents', 'Base'],
    year: '2026',
    github: 'https://github.com/PranayHaldiya/AgentEconomy',
  },
  {
    name: 'Launch Studio',
    description:
      'Paste a product URL and get a promo video with voiceover, music and sound effects. A Durable Object runs the pipeline, ElevenLabs makes the audio and Remotion renders the video. Built for ElevenHacks.',
    tags: ['Cloudflare Workers', 'ElevenLabs', 'Remotion'],
    year: '2026',
    github: 'https://github.com/PranayHaldiya/Launch-Studio-AI',
    live: 'https://elevenlabs-starter.pranayhaldiya8127.workers.dev',
  },
  {
    name: 'Clicky',
    description:
      'A voice-first AI assistant phone app: hold to talk, share a screenshot of a confusing screen, and get a short spoken answer back. It remembers past conversations. Built for ElevenHacks 4.',
    tags: ['Expo', 'React Native', 'ElevenLabs', 'Turbopuffer'],
    year: '2026',
    github: 'https://github.com/babuClawd/clicky-mobile',
  },
  {
    name: 'PhantomBid',
    description:
      'Sealed-bid auctions on Solana where nobody sees a bid until the auction settles. Bids are placed inside a MagicBlock Private Ephemeral Rollup running in a TEE. Built for SolanaBlitz v2.',
    tags: ['Solana', 'Anchor', 'MagicBlock'],
    year: '2026',
    github: 'https://github.com/PranayHaldiya/PhantomBid',
    live: 'https://phantom-bid.vercel.app',
  },
  {
    name: 'Cage Proxy',
    description:
      'Run the Claude Agent SDK on OpenRouter or Gemini models without changing agent code. A Cloudflare Worker translates between API formats, including streamed tool calls.',
    tags: ['Claude Agent SDK', 'Cloudflare Workers'],
    year: '2026',
    github: 'https://github.com/PranayHaldiya/cage-proxy',
  },
  {
    name: 'pmx',
    description:
      'A Rust CLI for prediction markets with JSON output for agents. Trades need a preview, a dry run or an explicit confirmation before anything goes live.',
    tags: ['Rust', 'CLI'],
    year: '2026',
    github: 'https://github.com/PranayHaldiya/prediction-market-cli',
  },
];
