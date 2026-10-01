// All portfolio content lives here, so updating the site is a one-file edit.
// Source of truth: public/RESUME.pdf.

export type Accent = 'sky' | 'sun' | 'teal';

export interface ProjectLink {
  label: string;
  href: string;
  /** Optional icon from /public/icons */
  icon?: string;
}

export interface FeaturedProject {
  name: string;
  tagline: string;
  description: string;
  role: string;
  date: string;
  stack: string[];
  accent: Accent;
  /** Short host shown in the card's browser bar */
  host: string;
  badge?: 'LIVE' | 'DEMO';
  /** Anchor so other sections can link to this card */
  id?: string;
  links: ProjectLink[];
  /** Media, in order of preference: a demo video, a screenshot, or a code sample */
  video?: { webm: string; mp4: string; poster: string; width: number; height: number; label: string };
  image?: { src: string; alt: string; width: number; height: number };
  code?: string[];
}

export interface MoreProject {
  name: string;
  blurb: string;
  stack: string[];
  date: string;
  href?: string;
}

export interface Role {
  company: string;
  program?: string;
  role: string;
  date: string;
  points: string[];
  stack?: string[];
  highlight?: boolean;
  /** In-page link to a demo of this work */
  demoHref?: string;
}

export interface Leadership {
  org: string;
  role: string;
  date: string;
  blurb: string;
}

export interface Stat {
  to: number;
  from?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface SkillGroup {
  name: string;
  items: { name: string; icon: string }[];
}

export const featuredProjects: FeaturedProject[] = [
  {
    name: 'LoopIn',
    tagline: 'The first super app for students: events, study rooms, campus news and a marketplace in one place.',
    description:
      'A verified, campus-only app for everything between classes. Discover and RSVP to events, start a Study Room with classmates and Frosty, an AI study buddy (then pick it up on your laptop with a quick scan), follow campus news and predictions on Pulse, and buy and sell with other students. Live on the App Store and piloting at the University of Washington.',
    role: 'Founder & Developer',
    date: 'Jun 2025 – Present',
    stack: ['React Native', 'Expo', 'TypeScript', 'Supabase'],
    accent: 'sky',
    host: 'loopins.app',
    badge: 'LIVE',
    links: [
      { label: 'Get it on the App Store', href: 'https://apps.apple.com/app/loopin-campus/id6805217557', icon: 'appstore' },
      { label: 'loopins.app', href: 'https://www.loopins.app' },
    ],
    image: { src: '/work/loopin.png', alt: 'LoopIn landing page', width: 1440, height: 900 },
  },
  {
    id: 'google-demo',
    name: 'Beyond the Degree',
    tagline: 'See how AI is reshaping 200+ college majors, then ask an advisor what it means for you.',
    description:
      'Built at Google during the Break Through Tech Sprinternship. I built the frontend: a two-level D3 treemap of 204 majors, sized by graduate count and colored by AI-exposure score, with search and click-through to a grounded Gemini advisor. Exposure scores are precomputed into a static JSON bundle so the map renders without a backend round-trip, and our team took the advisor’s time-to-first-token from 8.2s to 1.0s.',
    role: 'SWE Intern · Google × Break Through Tech',
    date: 'Jul – Aug 2026',
    stack: ['React', 'TypeScript', 'D3', 'Vite', 'Gemini', 'Cloud Run'],
    accent: 'sun',
    host: 'beyond-the-degree · demo',
    badge: 'DEMO',
    links: [],
    video: {
      webm: '/work/google-demo.webm',
      mp4: '/work/google-demo.mp4',
      poster: '/work/google-demo-poster.jpg',
      width: 1600,
      height: 840,
      label: 'Play the Beyond the Degree demo (1 minute, no sound)',
    },
  },
  {
    name: 'openroles.ai',
    tagline: 'A live board for internship and new-grad roles.',
    description:
      'Job tracker that pulls early-career listings from live sources, newest first, with a shared design system for consistent UI across pages. Caught a critical Next.js CVE during deployment and shipped the patch to production the same day.',
    role: 'Founder & Developer',
    date: 'Jul 2026',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Vercel'],
    accent: 'teal',
    host: 'openroles-ai.vercel.app',
    badge: 'LIVE',
    links: [{ label: 'Visit openroles.ai', href: 'https://openroles-ai.vercel.app' }],
    image: { src: '/work/openroles.png', alt: 'openroles.ai job board', width: 1440, height: 900 },
  },
  {
    name: '@stdlib/symbol/to-string-tag',
    tagline: 'A new package for stdlib, the standard library for JavaScript.',
    description:
      'Authored and submitted a new package to stdlib for CodePath’s AI 301 open-source capstone: 11 files across implementation, tests, TypeScript declarations and docs. Resolved an ESLint Node-compatibility constraint by following existing codebase patterns instead of suppressing the rule.',
    role: 'Open-source contributor · CodePath AI 301',
    date: 'Jun – Aug 2026',
    stack: ['JavaScript', 'TypeScript', 'Node.js', 'Open source'],
    accent: 'sky',
    host: 'github.com/stdlib-js',
    links: [
      {
        label: 'View on GitHub',
        href: 'https://github.com/necromancerrr/ai301-open-source-contribution',
      },
    ],
    code: [
      "var ToStringTagSymbol = require( '@stdlib/symbol/to-string-tag' );",
      '',
      'var obj = {};',
      "obj[ ToStringTagSymbol ] = 'Beep';",
      '',
      'Object.prototype.toString.call( obj );',
      "// returns '[object Beep]'",
    ],
  },
];

export const moreProjects: MoreProject[] = [
  {
    name: 'Premier League Match Predictor',
    blurb: '~68% accuracy across 3+ seasons, 12% over baseline, trained on 1,100+ matches.',
    stack: ['Python', 'scikit-learn'],
    date: '2025',
  },
  {
    name: 'Real-Time Stock Market App',
    blurb: 'Live prices, interactive charts and AI-powered insights via the Finnhub API.',
    stack: ['Next.js', 'TypeScript', 'Redis'],
    date: '2025',
  },
  {
    name: 'Java Code Coach',
    blurb: 'Checks Java code against UW CSE style guidelines with a live editor and inline feedback.',
    stack: ['Java', 'Web'],
    date: '2025',
    href: 'https://lovable.dev/projects/3ba2c2d6-58f6-43fb-b4c9-8569d9263209',
  },
];

export const experience: Role[] = [
  {
    company: 'Google',
    program: 'Break Through Tech Sprinternship',
    role: 'Software Engineering Intern',
    date: 'Jul – Aug 2026',
    highlight: true,
    demoHref: '#google-demo',
    points: [
      'Built the frontend for an AI career-exposure tool: a two-level D3 treemap of 200+ U.S. college majors, sized by graduate count and colored by AI-exposure score, with search and click-through to a grounded Gemini advisor.',
      'Cut load time by precomputing exposure scores into a static JSON bundle, so the treemap renders without a backend round-trip. Part of the 4-person team that took the advisor’s time-to-first-token from 8.2s to 1.0s.',
      'Deployed on Google Cloud Run with Cloud Build CI and read-only BigQuery, with API-key auth, rate limiting and a per-query cost ceiling on the public endpoint.',
    ],
    stack: ['React', 'TypeScript', 'D3', 'Vite', 'Cloud Run', 'BigQuery'],
  },
  {
    company: 'UW Blockchain Society',
    role: 'Software Developer, Dev Team',
    date: 'Dec 2025 – Present',
    points: [
      'Ship features on the society’s production React site, including the project listings page students and recruiters use to browse active blockchain projects.',
      'Work in a shared codebase with a student engineering team: PRs through code review, bug fixes alongside feature work.',
    ],
    stack: ['React'],
  },
  {
    company: 'AVELA',
    role: 'Python & Mixed Reality Instructor',
    date: 'Sep 2024 – Present',
    points: [
      'Taught Python and mixed-reality workshops to 40+ high school students across 5 STEM outreach sessions, each ending in a mixed-reality project students built and demoed.',
    ],
    stack: ['Python', 'Mixed reality'],
  },
];

export const leadership: Leadership[] = [
  {
    org: 'Google Development Club, UW',
    role: 'Event Coordinator',
    date: 'Jan 2025 – Present',
    blurb: '4+ events with BITS, IUGA and ColorStack, reaching 100+ students; attendance up 40%.',
  },
  {
    org: 'CodePath',
    role: 'AI 110: Foundations of AI Engineering',
    date: 'Jan – Apr 2026',
    blurb: 'Four end-to-end AI projects in Python: debugging, ML evaluation, recommenders, applied AI design.',
  },
  {
    org: 'Highline College',
    role: 'Mentor & Tutor, Umoja & Promise',
    date: 'Sep 2022 – Jun 2024',
    blurb: 'Tutored 50+ students in math and English and led 6+ academic workshops.',
  },
];

export const education = [
  {
    school: 'University of Washington',
    degree: 'B.S. Computer Science, Informatics minor',
    date: '2024 – 2027',
  },
  {
    school: 'Highline College',
    degree: 'A.S. Computer Science',
    date: '2022 – 2024',
  },
];

export const stats: Stat[] = [
  { to: 200, suffix: '+', label: 'college majors mapped in the Google treemap' },
  { from: 8.2, to: 1.0, decimals: 1, suffix: 's', label: 'Gemini advisor time-to-first-token, cut from 8.2s as a team' },
  { to: 40, suffix: '+', label: 'high schoolers taught Python & MR' },
  { to: 100, suffix: '+', label: 'students reached through GDC events' },
];

export const skills: SkillGroup[] = [
  {
    name: 'Languages',
    items: [
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Python', icon: 'python' },
      { name: 'Java', icon: 'openjdk' },
      { name: 'C', icon: 'c' },
      { name: 'SQL', icon: 'database' },
      { name: 'Swift', icon: 'swift' },
      { name: 'R', icon: 'r' },
      { name: 'HTML/CSS', icon: 'html5' },
    ],
  },
  {
    name: 'Frameworks & platforms',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'React Native', icon: 'react' },
      { name: 'Expo', icon: 'expo' },
      { name: 'Vite', icon: 'vite' },
      { name: 'D3', icon: 'd3' },
      { name: 'Supabase', icon: 'supabase' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'Google Cloud', icon: 'googlecloud' },
      { name: 'AWS', icon: 'amazonwebservices' },
    ],
  },
  {
    name: 'Tools',
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'Docker', icon: 'docker' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Figma', icon: 'figma' },
      { name: 'VS Code', icon: 'visualstudiocode' },
      { name: 'Xcode', icon: 'xcode' },
      { name: 'PyCharm', icon: 'pycharm' },
      { name: 'LaTeX', icon: 'latex' },
      { name: 'Claude Code', icon: 'claude' },
    ],
  },
];

export const marqueeItems = [
  'LoopIn',
  'openroles.ai',
  'Google SWE Intern',
  'stdlib',
  'UW CS ’27',
  'React',
  'TypeScript',
  'Seattle, WA',
];
