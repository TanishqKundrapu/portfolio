export type DiagramSpec = {
  steps: { id: string; label: string; sublabel?: string }[];
  note?: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  status: 'Live' | 'GitHub' | 'In progress';
  featured: boolean;
  fromResume: boolean;
  tech: string[];
  summary: string;
  problem: string;
  solution: string;
  decisions: string[];
  features: string[];
  links: { label: string; url: string }[];
  diagram?: DiagramSpec;
};

export const projects: Project[] = [
  {
    slug: 'career-copilot',
    name: 'Career Copilot',
    tagline: 'AI resume tailoring & interview preparation platform',
    status: 'Live',
    featured: true,
    fromResume: true,
    tech: ['Python', 'Async Pipelines', 'LLM Agents', 'Caching'],
    summary:
      'A live, multi-agent platform that rewrites resumes against a specific job description and prepares candidates for the interview that follows.',
    problem:
      'Generic resumes lose to ATS filters, and generic interview prep ignores the specific company and role. Job seekers need both tailored automatically, fast enough to use before an application deadline.',
    solution:
      'A 4-agent pipeline splits the problem into stages — company intelligence gathering, job description analysis, semantic mapping between the candidate and the role, and precision resume rewriting — so each agent focuses on one narrow, well-defined task instead of one model doing everything at once.',
    decisions: [
      'Split the ATS workflow into 4 focused agents (company intel, JD analysis, semantic mapping, resume rewriting) rather than one monolithic prompt, for more reliable, inspectable output at each stage.',
      'Moved AI workflows onto async execution so independent agent calls run concurrently instead of blocking in sequence.',
      'Added caching for generated interview content so repeated requests for the same role/company don’t re-run expensive generation.',
    ],
    features: [
      'Company-intelligence gathering ahead of resume rewriting',
      'Job description analysis and semantic candidate-to-role mapping',
      'Precision resume rewriting tuned to the target role',
      'Skill-gap analysis',
      'Cached interview question generation and preparation',
    ],
    links: [{ label: 'Live Product', url: 'https://resumebuilder.inframiq.com' }],
    diagram: {
      steps: [
        { id: 'intel', label: 'Company Intel', sublabel: 'gathering' },
        { id: 'jd', label: 'JD Analysis', sublabel: 'parsing' },
        { id: 'map', label: 'Semantic Mapping', sublabel: 'candidate ↔ role' },
        { id: 'rewrite', label: 'Resume Rewrite', sublabel: 'precision output' },
      ],
      note: 'Independent agent calls run concurrently via async execution, not in sequence.',
    },
  },
  {
    slug: 'odtect',
    name: 'OdTect',
    tagline: 'Explainable multiclass oral cancer detection system',
    status: 'GitHub',
    featured: true,
    fromResume: true,
    tech: ['Python', 'EfficientNet-B2', 'Grad-CAM', 'Computer Vision'],
    summary:
      'A 4-class oral lesion classifier built on EfficientNet-B2, trained across 6,000+ medical images, with Grad-CAM explainability so predictions can actually be trusted and audited.',
    problem:
      'Deep learning models used in medical contexts can’t be black boxes — a clinician needs to see why a model made a call, not just the label it produced.',
    solution:
      'Built a full training pipeline — preprocessing, augmentation, and dataset balancing across 6,000+ images — for a 4-class oral lesion classifier, then layered Grad-CAM explainability on top so every prediction comes with a visual heatmap of the regions that drove it, alongside precision, recall, and F1-score evaluation.',
    decisions: [
      'Chose EfficientNet-B2 as the backbone for a strong accuracy-to-compute tradeoff on medical image classification.',
      'Balanced the dataset explicitly rather than relying on class weighting alone, given the skew typical of medical imaging datasets.',
      'Added Grad-CAM on top of classification instead of treating explainability as an afterthought, so interpretability is part of the model’s output, not a separate tool.',
    ],
    features: [
      '4-class oral lesion classification',
      'Preprocessing, augmentation, and dataset balancing across 6,000+ medical images',
      'Grad-CAM explainability heatmaps for interpretable predictions',
      'Precision, recall, and F1-score evaluation',
    ],
    links: [{ label: 'GitHub', url: 'https://github.com/TanishqKundrapu/OdTect' }],
    diagram: {
      steps: [
        { id: 'prep', label: 'Preprocessing', sublabel: 'augment · balance' },
        { id: 'model', label: 'EfficientNet-B2', sublabel: '4-class classifier' },
        { id: 'cam', label: 'Grad-CAM', sublabel: 'heatmap overlay' },
        { id: 'eval', label: 'Evaluation', sublabel: 'precision · recall · F1' },
      ],
      note: 'Trained and evaluated across 6,000+ medical images.',
    },
  },
  {
    slug: 'disk-monitor',
    name: 'Disk Monitor',
    tagline: 'Bash-based disk monitoring & automation utility',
    status: 'GitHub',
    featured: false,
    fromResume: true,
    tech: ['Bash', 'Linux', 'Cron', 'Shell Automation'],
    summary:
      'A Bash utility that tracks disk usage across mounted filesystems and automates logging so nothing has to be checked by hand.',
    problem:
      'Disk usage on a machine can silently creep up until something breaks — manual checking doesn’t scale and doesn’t happen consistently.',
    solution:
      'Built a disk monitoring script with configurable warning thresholds across mounted filesystems, then automated it end-to-end with timestamped logging, log rotation, and a cron schedule (`0 0 * * 1`) that runs it every Monday without anyone touching it.',
    decisions: [
      'Used configurable thresholds instead of hardcoded limits, so the same script adapts to different machines.',
      'Added log rotation alongside logging itself, so the automation doesn’t quietly fill its own disk over time.',
      'Scheduled via cron for weekly, unattended execution rather than relying on manual runs.',
    ],
    features: [
      'Disk usage tracking across mounted filesystems',
      'Configurable warning thresholds',
      'Timestamped logging with automatic log rotation',
      'Weekly cron scheduling for unattended execution',
    ],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/TanishqKundrapu/learning-devops/tree/main/week1/day7',
      },
    ],
  },
  {
    slug: 'simulyn',
    name: 'Simulyn',
    tagline: 'AI-powered pricing simulation platform',
    status: 'GitHub',
    featured: false,
    fromResume: false,
    tech: ['React', 'FastAPI', 'Gemini AI', 'Monte Carlo'],
    summary:
      'An AI-powered pricing simulation platform with an agent-based customer decision engine, Monte Carlo behavioral modeling, and automated competitor intelligence.',
    problem:
      'Pricing decisions are usually made on gut feeling or static spreadsheets, with no way to simulate how real customers would react before shipping a price change.',
    solution:
      'Combined an agent-based customer decision engine with Monte Carlo behavioral modeling to simulate how a customer base responds to pricing changes, backed by automated competitor intelligence gathering.',
    decisions: [
      'Used Monte Carlo modeling to capture a distribution of customer behavior instead of a single deterministic outcome.',
      'Paired a FastAPI backend with a React frontend to keep simulation logic and interaction fast and decoupled.',
    ],
    features: [
      'Agent-based customer decision engine',
      'Monte Carlo behavioral modeling',
      'Automated competitor intelligence gathering',
    ],
    links: [{ label: 'GitHub', url: 'https://github.com/TanishqKundrapu/Ghost-Customer' }],
  },
  {
    slug: 'mail-shield',
    name: 'Mail Shield',
    tagline: 'Email security tool for phishing detection',
    status: 'In progress',
    featured: false,
    fromResume: false,
    tech: ['Python', 'JavaScript', 'Machine Learning'],
    summary:
      'An intelligent email security tool that detects phishing attempts and malicious content before they reach the inbox.',
    problem:
      'Phishing emails increasingly slip past basic filters by mimicking legitimate senders and formatting.',
    solution:
      'A machine-learning-based detection layer that screens incoming mail for phishing signals and malicious content before delivery.',
    decisions: [],
    features: ['Phishing attempt detection', 'Malicious content screening'],
    links: [],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
