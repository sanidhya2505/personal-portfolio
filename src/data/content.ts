export const profile = {
  name: 'Sanidhya Srivastava',
  location: 'Greater Noida, UP, India',
  phone: '+91 95558 01271',
  email: 'sanidhyasrivastava.info@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sanidhya-srivastava-258b5127b/',
  github: 'https://github.com/sanidhya2505',
  resumeFile: '/Sanidhya_Srivastava_Resume.pdf',
  headline: 'Backend systems and applied ML, built end to end.',
  subhead:
    'Final-year CS (Data Science) undergraduate. I build the layer between raw data and a usable product — from parsing network packets in C++ to shipping AI-powered SaaS.',
  targetRoles: 'SDE roles at product-focused engineering teams',
}

export const stackLayers = [
  {
    layer: 'Languages',
    detail: 'The core building blocks',
    items: ['C', 'C++', 'JavaScript', 'Rust', 'R'],
  },
  {
    layer: 'Frontend',
    detail: 'Interfaces people touch',
    items: ['React', 'Redux', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Figma'],
  },
  {
    layer: 'Backend',
    detail: 'Where logic and requests meet',
    items: ['Node.js', 'Express.js', 'FastAPI'],
  },
  {
    layer: 'Data',
    detail: 'Where state lives',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Prisma ORM'],
  },
  {
    layer: 'Infra',
    detail: 'Where it all runs',
    items: ['AWS (RDS, S3)', 'Docker', 'Git/GitHub', 'CI/CD'],
  },
  {
    layer: 'ML / Data',
    detail: 'Where signal gets extracted',
    items: ['Random Forest', 'FinBERT sentiment analysis', 'Pandas', 'scikit-learn'],
  },
]

export type Project = {
  id: string
  name: string
  tagline: string
  domain: string
  stack: string[]
  problem: string
  solution: string[]
  link?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'kayos',
    name: 'Kayos Analytics',
    tagline: 'AI-powered Indian equity market intelligence',
    domain: 'ML / Fintech',
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Docker', 'Prisma', 'NeonDB', 'Clerk'],
    problem:
      'NSE/BSE market signals are scattered across price history and news sentiment — combining both into one real-time view means running a full ML + full-stack pipeline solo, not just a notebook model.',
    solution: [
      'Combined a Random Forest price model with FinBERT news-sentiment analysis to generate real-time equity insights.',
      'Containerized the entire application with Docker for reproducible local development and deployment.',
      'Wired up Prisma with PostgreSQL/NeonDB and Clerk auth, and used Git LFS to manage a ~178MB model artifact in version control.',
      'Wrote CI-ready deployment documentation so the pipeline is repeatable, not just a one-off local run.',
    ],
    featured: true,
  },
  {
    id: 'dpi',
    name: 'DPI Engine',
    tagline: 'Deep packet inspection without decryption',
    domain: 'Systems / Networking',
    stack: ['C++17', 'Multi-threading', 'Networking'],
    problem:
      'Classifying encrypted HTTPS traffic in real time means inspecting packets fast enough to keep up with a live network, without ever touching the encrypted payload.',
    solution: [
      'Built a high-performance C++17 engine that parses PCAP network files at the Ethernet/IP/TCP level.',
      'Extracts the TLS SNI field to classify encrypted HTTPS traffic without decryption.',
      'Designed a multi-threaded producer-consumer pipeline with five-tuple flow tracking for real-time, stateful, rule-based traffic blocking.',
    ],
    link: 'https://github.com/sanidhya2505/Deep-packet-inspection.git',
  },
  {
    id: 'careerforge',
    name: 'CareerForge AI',
    tagline: 'AI resume and career SaaS platform',
    domain: 'SaaS / Applied AI',
    stack: ['Node.js', 'Express', 'Claude API', 'Docker', 'Nginx'],
    problem:
      'Job seekers need fast, specific feedback on resumes and cover letters — not generic advice — and that means putting an LLM behind a real, production-shaped service.',
    solution: [
      'Built a Node.js/Express SaaS using the Claude API for automated ATS resume scoring, cover letter generation, and LinkedIn content planning.',
      'Deployed as a containerized microservice with Docker, Nginx, and Render.',
      'Added rate limiting, security headers, and health-check monitoring for production readiness.',
    ],
    link: 'https://github.com/sanidhya2505/careerforge-ai.git',
  },
  {
    id: 'legal',
    name: 'Anoop Srivastava | Legal Advisor',
    tagline: 'Production website for a practicing tax attorney',
    domain: 'Client Work',
    stack: ['HTML', 'CSS', 'Capacitor'],
    problem:
      'A practicing attorney needed a live, professional web presence that could generate real client leads — and later, a mobile presence too.',
    solution: [
      'Designed, built, and deployed a live business website now generating real client leads in production.',
      'Packaged a Capacitor-based Android build with Play Store publishing documentation.',
    ],
    link: 'http://legalassociates.net/',
  },
]

export const experience = {
  role: 'Web Development Intern',
  company: 'SUS Infotech',
  period: 'Sept 2025 – Dec 2025',
  points: [
    'Shipped responsive HTML/CSS/JS interfaces integrated with a Node.js + MySQL backend on live client projects, ensuring consistent behavior across devices.',
    'Collaborated within a Git/GitHub team branching workflow, resolving UI/UX and backend bugs pre-production.',
  ],
}

export const education = [
  {
    school: 'KCC Institute of Technology and Management, Greater Noida',
    credential: 'B.Tech, Computer Science (Data Science)',
    period: 'Expected 2027',
  },
  {
    school: 'Doon International School, UP',
    credential: 'Intermediate (12th) — 72%',
    period: '2023',
  },
  {
    school: 'The Indian Academy, UP',
    credential: 'High School (10th) — 82%',
    period: '2021',
  },
]

export const certifications = [
  "Data Structures & Algorithms with C++ — Striver's A2Z + NeetCode 150 (150+ problems solved)",
  'Intro to Web Development — Coursera',
  'IEEE Workshop Participant, IEC 2025',
]

export const currentlyBuilding = [
  'Learning the Groq API with Python as part of a personal AI-engineering project.',
  'Built a LeetCode-style practice clone powered by the Anthropic API.',
  'Working through Striver\'s A2Z and NeetCode 150 for interview prep — 150+ problems solved so far.',
  'Explored a Bluetooth-mesh, internet-free UPI payment concept, including a React dashboard front end.',
]
