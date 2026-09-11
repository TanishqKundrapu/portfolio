import type { IconType } from 'react-icons';
import { DiJava } from 'react-icons/di';
import { FiActivity, FiBox, FiClock, FiCode, FiCpu, FiDatabase, FiEye, FiLayers, FiTerminal } from 'react-icons/fi';
import {
  SiC,
  SiCss,
  SiGit,
  SiGithub,
  SiGnubash,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiPython,
  SiSupabase,
  SiTensorflow,
} from 'react-icons/si';

export const skillIcons: Record<string, IconType> = {
  Python: SiPython,
  C: SiC,
  Java: DiJava,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: SiCss,
  SQL: FiDatabase,
  Supabase: SiSupabase,
  Linux: SiLinux,
  'Bash Scripting': SiGnubash,
  Git: SiGit,
  GitHub: SiGithub,
  Cron: FiClock,
  'Shell Automation': FiTerminal,
  'VS Code': FiCode,
  'Data Structures & Algorithms': FiLayers,
  'Object-Oriented Programming': FiBox,
  DBMS: FiDatabase,
  'Operating Systems': FiCpu,
  'Machine Learning': SiTensorflow,
  'Explainable AI': FiEye,
  'Grad-CAM': FiActivity,
};
