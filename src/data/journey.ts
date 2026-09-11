export type JourneyItem = {
  period: string;
  kind: 'Work' | 'Leadership' | 'Hackathon' | 'Academics' | 'Competitive';
  title: string;
  org: string;
  points: string[];
};

export const journey: JourneyItem[] = [
  {
    period: '2026 — Present',
    kind: 'Work',
    title: 'Technical Head',
    org: 'Inframiq Solutions Pvt. Ltd.',
    points: [
      'Led technical execution across 5 production applications, overseeing 2-3 products simultaneously from development through deployment.',
      'Developed backend features and automation workflows across analysis, application logic, and production systems.',
    ],
  },
  {
    period: '2026 — Present',
    kind: 'Leadership',
    title: 'Secretary',
    org: 'Meta Developer Communities — GITAM',
    points: [
      'Manage core organizational documentation records for a community that holds 300+ students.',
      'Coordinate with the university and manage club operations and execution.',
    ],
  },
  {
    period: 'Jan 2026',
    kind: 'Hackathon',
    title: 'Winner — TechSprint',
    org: 'Google Developer Groups on Campus (GDGoC), State-Level Hackathon',
    points: ['Won the state-level hackathon, building a functional prototype under tight time constraints.'],
  },
  {
    period: '2025 — 2026',
    kind: 'Hackathon',
    title: 'Hackathon participant',
    org: "Smart India Hackathon · Schrödinger's Cat (SRM AP) · Adobe Hackathon",
    points: [
      'Smart India Hackathon 2025 — built an offline SOS safety communication system as part of a national-level team.',
      'Smart India Hackathon 2026 — advanced to the second round.',
      "Schrödinger's Cat Hackathon, SRM AP.",
      'Adobe Hackathon 2025.',
    ],
  },
  {
    period: '2024 — 2025',
    kind: 'Leadership',
    title: 'Competitive Programming Domain Lead',
    org: 'Meta Developer Communities — GITAM',
    points: ['Organized contests and mentored peers on algorithmic problem solving.'],
  },
  {
    period: '2024 — Present',
    kind: 'Academics',
    title: 'B.Tech, Computer Science and Engineering',
    org: 'GITAM University, Visakhapatnam',
    points: ['CGPA: 9.85.'],
  },
  {
    period: 'Ongoing',
    kind: 'Competitive',
    title: '100+ problems solved',
    org: 'LeetCode — core data structures & algorithms',
    points: ['Active problem solver on HackerRank as well.'],
  },
];
