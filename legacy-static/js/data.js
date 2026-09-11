const typedPhrases = [
  'Competitive Programmer',
  'Cloud & DevOps Learner',
  'Full Stack Developer',
  'Problem Solver',
  'Tech Enthusiast',
];

const skillCategories = [
  {
    title: 'Programming',
    icon: '{ }',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'C', level: 80 },
      { name: 'Java', level: 78 },
    ],
  },
  {
    title: 'Web Development',
    icon: '◧',
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'React.js', level: 82 },
    ],
  },
  {
    title: 'Databases',
    icon: '▤',
    skills: [
      { name: 'MySQL', level: 78 },
      { name: 'Supabase', level: 74 },
    ],
  },
  {
    title: 'Tools',
    icon: '✦',
    skills: [
      { name: 'Git', level: 88 },
      { name: 'GitHub', level: 88 },
      { name: 'Linux', level: 75 },
      { name: 'VS Code', level: 92 },
    ],
  },
  {
    title: 'Core Concepts',
    icon: '⚙',
    skills: [
      { name: 'Data Structures & Algorithms', level: 85 },
      { name: 'Object-Oriented Programming', level: 82 },
      { name: 'Computer Organization & Architecture', level: 75 },
      { name: 'Operating Systems', level: 76 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁',
    skills: [
      { name: 'Docker (Learning)', level: 45 },
      { name: 'AWS (Learning)', level: 40 },
      { name: 'Networking (Learning)', level: 42 },
    ],
  },
];

const projects = [
  {
    name: 'OdTect',
    description: 'An explainable multiclass oral cancer detection system using deep learning, with a full training pipeline for medical image preprocessing and Grad-CAM based explainability.',
    tech: ['Python', 'Deep Learning', 'EfficientNetB2', 'Grad-CAM'],
    github: 'https://github.com/Tanishq2838/OdTect',
    demo: 'https://github.com/Tanishq2838/OdTect',
  },
  {
    name: 'Simulyn',
    description: 'An AI-powered pricing simulation platform with an agent-based customer decision engine, Monte Carlo behavioral modeling, and automated competitor intelligence.',
    tech: ['React', 'FastAPI', 'Gemini AI', 'Monte Carlo'],
    github: 'https://github.com/Tanishq2838/Ghost-Customer',
    demo: 'https://github.com/Tanishq2838/Ghost-Customer',
  },
  {
    name: 'Mail Shield',
    description: 'An intelligent email security tool that detects phishing attempts and malicious content before they reach the inbox.',
    tech: ['Python', 'JavaScript', 'Machine Learning'],
    github: '#',
    demo: '#',
  },
];

const experience = [
  {
    period: 'Jan 2026',
    role: 'Hackathon Winner',
    org: 'TechSprint — Google Developers Group on Campus (GDGoC), State-Level Hackathon',
    desc: 'Won the state-level hackathon and advanced to the national round, building a functional prototype under tight time constraints.',
  },
  {
    period: '2025 — Present',
    role: 'Secretary',
    org: 'Meta Developer Communities',
    desc: 'Serving as Secretary, coordinating community operations, events, and initiatives after previously leading the Competitive Programming domain.',
  },
  {
    period: '2025',
    role: 'Hackathon Participant',
    org: 'Smart India Hackathon 2025',
    desc: 'Built an offline SOS safety communication system as part of a national-level hackathon team.',
  },
  {
    period: '2024 — 2025',
    role: 'Competitive Programming Domain Lead',
    org: 'Meta Developer Communities',
    desc: 'Led the Competitive Programming domain, organizing contests and mentoring peers on algorithmic problem solving.',
  },
];

const achievements = [
  {
    icon: '🏆',
    title: 'Competitive Programming',
    desc: '80+ problems solved on LeetCode, with multiple HackerRank badges in competitive programming and OOP in Java.',
  },
  {
    icon: '💡',
    title: 'Hackathons',
    desc: 'Winner, TechSprint (GDGoC State-Level Hackathon, Jan 2026), advancing to the national round. Participant, Smart India Hackathon 2025.',
  },
  {
    icon: '🎓',
    title: 'Academics',
    desc: '9.85 CGPA in B.Tech CSE at GITAM University. 94.6% in Intermediate (MPC).',
  },
  {
    icon: '👥',
    title: 'Leadership',
    desc: 'Competitive Programming Domain Lead, then Secretary, at Meta Developer Communities.',
  },
  {
    icon: '🔬',
    title: 'Research Interests',
    desc: 'Algorithms and data structures, machine learning, and AI-based systems for real-world problem solving.',
  },
  {
    icon: '📚',
    title: 'Coursework',
    desc: 'Data Structures & Algorithms, DBMS, Operating Systems, Computer Organization & Architecture, and Machine Learning basics.',
  },
];
