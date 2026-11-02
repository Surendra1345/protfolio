// All site content lives here. Edit this file, not the components.

export const profile = {
  name: 'Kamireddy Surendranath Reddy',
  shortName: 'Surendra',
  initials: 'KS',
  photo: '/surendra.png', // file lives in /public
  role: 'Full Stack & Generative AI Engineer',
  email: 'surendrareddy49175@gmail.com',
  phone: '+91 63030 23283',
  resume: '/Surendra_Reddy_Resume.pdf',
  linkedin: 'https://www.linkedin.com/in/surendranath-reddy-4691b625b',
  github: 'https://github.com/Surendra1345',
  about:
    "I'm a Computer Science graduate from GITAM University, Bengaluru. I like turning a business problem into something people can actually use: the database, the API, the interface, and increasingly the AI agent in the middle. I care about testing, clean code and how systems scale.",
}

export const highlights = [
  { value: '3', label: 'Projects shipped' },
  { value: '3', label: 'Industries: finance, agriculture, healthcare' },
  { value: '5 mo', label: 'Industry experience at Genworx.ai' },
]

export const projects = [
  {
    id: 'iclinic',
    visual: 'iclinic',
    tint: 'blue',
    kind: 'AI agent · Full stack',
    title: 'iClinic',
    tagline: 'An AI front desk that books patients around the clock.',
    summary:
      "Clinics lose patients to missed calls and slow replies. iClinic answers over chat, voice and outbound phone calls, then books, reschedules or cancels appointments on its own.",
    highlights: [
      "Grounded in each clinic's own doctors, branches, visit types and live free slots.",
      'Verifies patient identity before acting, and holds slots so double-bookings cannot happen.',
      'Login-protected staff dashboard with full conversation history and human hand-over.',
    ],
    stack: ['Python', 'FastAPI', 'LangGraph', 'PostgreSQL', 'React', 'TypeScript'],
    github: 'https://github.com/Surendra1345/iclinic/tree/dev',
  },
  {
    id: 'farma',
    visual: 'farma',
    tint: 'green',
    kind: 'Marketplace · Full stack',
    title: 'Farma Bridge',
    tagline: 'One marketplace for farmers, buyers, storage and machinery.',
    summary:
      'Farmers often depend on middlemen to sell produce and find storage or equipment. Farma Bridge connects all four sides of that chain in one place.',
    highlights: [
      'React + TypeScript frontend on a FastAPI backend with PostgreSQL.',
      'Schema changes managed with Alembic migrations.',
      'Planned next: AI crop disease detection from photos.',
    ],
    stack: ['React.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Alembic'],
    github: 'https://github.com/Surendra1345/Farma_Bridge/tree/dev',
  },
  {
    id: 'watermark',
    visual: 'watermark',
    tint: 'violet',
    kind: 'Deep learning · Research',
    title: 'Image Watermarking',
    tagline: 'Invisible watermarks that survive compression, resizing and noise.',
    summary:
      'An encoder–decoder neural network that hides a watermark inside an image and extracts it again, while keeping the image looking untouched.',
    highlights: [
      'CNN encoder embeds the mark; decoder recovers it after distortion.',
      'Evaluated on visual quality with PSNR and SSIM.',
      'Robustness tested against compression, resizing and noise.',
    ],
    stack: ['Python', 'CNN', 'Deep Learning', 'Image Processing'],
    github: 'https://github.com/Surendra1345/project',
  },
]

export const skills = [
  { group: 'Frontend', items: ['React', 'TypeScript', 'TanStack Query', 'TanStack Router', 'HTML', 'CSS'] },
  { group: 'Backend', items: ['Python', 'FastAPI', 'SQLAlchemy', 'Alembic', 'REST APIs', 'Java'] },
  { group: 'Generative AI', items: ['LLMs', 'RAG', 'LangChain', 'LangGraph', 'Embeddings', 'Chunking'] },
  { group: 'Data', items: ['PostgreSQL', 'MySQL', 'SQL', 'Deep Learning', 'Image Processing'] },
  { group: 'Workflow', items: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'JIRA', 'Testing'] },
]

export const experience = {
  title: 'Full Stack & Generative AI Trainee',
  company: 'Genworx.ai',
  period: 'Jun 2026 – Oct 2026',
  points: [
    'Built full stack apps with FastAPI, React, TypeScript and PostgreSQL, with SQLAlchemy and Alembic migrations.',
    'Developed LLM solutions using RAG, embeddings, chunking strategies, LangChain and LangGraph.',
    'Delivered real use cases across finance, agriculture and healthcare.',
    'Worked in a team on Git and GitHub with clean-code and testing practices.',
  ],
}

export const background = [
  { label: 'Education', title: 'B.Tech, Computer Science & Engineering', meta: 'GITAM University, Bengaluru · 2022–2026 · CGPA 7.2' },
  { label: 'Certification', title: 'Data Analytics', meta: 'Cisco Networking Academy · 2025' },
  { label: 'Certification', title: 'AI-ML Virtual Internship', meta: 'AWS · 2023' },
  { label: 'Beyond code', title: 'Sports', meta: 'College cricket tournament winner · South Zone Handball (CBSE Clusters)' },
]

export const sections = [
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]
