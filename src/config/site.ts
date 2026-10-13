// Everything on the site comes from this file.

export const site = {
  name: 'Pranay Haldiya',
  role: 'Software Engineer',
  focus: 'AI agents',
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
    'Software engineer in Jaipur, India. I build AI agents for real users: ad agents, an iMessage agent and an MCP server at Roger (YC S24). Open to remote roles.',
  bio: [
    'I build AI agents that do real work for real users. At Roger (YC S24) I built Roger Ads, which turns a company’s website into ads and launches them on Meta, and an iMessage agent that reached 630+ users.',
    'I work mostly in TypeScript and Next.js, and I build on Solana too. Open to remote roles in AI agents, full-stack TypeScript and Web3.',
  ],
  githubUsername: 'PranayHaldiya',
  resume: '/resume.pdf',
};

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
  companyNote?: string;
  href?: string;
  role: string;
  start: string;
  end: string;
  location: string;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: 'Roger AI',
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
      'TypeScript',
      'Next.js',
      'Vercel AI SDK',
      'BullMQ',
      'PostgreSQL',
      'Prisma',
      'MCP',
      'fal',
    ],
  },
  {
    company: 'Metaverse Ventures',
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
      'Next.js',
      'tRPC',
      'NestJS',
      'FastAPI',
      'Redis',
      'Solidity',
      'Solana',
    ],
  },
  {
    company: 'Logics PowerAMR',
    role: 'Software Developer Intern',
    start: 'Dec 2024',
    end: 'Feb 2025',
    location: 'Noida, India',
    points: [
      'Built MERN energy-monitoring dashboards for 100+ concurrent users, and Node.js/MQTT APIs that store real-time telemetry from 500+ IoT devices in MongoDB time-series collections.',
    ],
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'MQTT'],
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
