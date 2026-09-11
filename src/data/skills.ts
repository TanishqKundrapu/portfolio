export type SkillCategory = {
  title: string;
  note: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    note: 'Languages I write and think in',
    skills: ['Python', 'C', 'Java', 'JavaScript'],
  },
  {
    title: 'Web & Databases',
    note: 'Building and persisting product logic',
    skills: ['HTML', 'CSS', 'SQL', 'Supabase'],
  },
  {
    title: 'Cloud & Systems',
    note: 'Where the code actually runs',
    skills: ['Linux', 'Bash Scripting', 'Git', 'GitHub', 'Cron', 'Shell Automation', 'VS Code'],
  },
  {
    title: 'Core CS',
    note: 'The foundation everything else sits on',
    skills: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'DBMS',
      'Operating Systems',
      'Machine Learning',
      'Explainable AI',
      'Grad-CAM',
    ],
  },
];
