import { Link } from 'react-router-dom';
import type { Project } from '../../data/projects';
import { skillIcons } from '../../data/skillIcons';
import styles from './WorkIndexRow.module.css';

export default function WorkIndexRow({ project, index }: { project: Project; index: number }) {
  return (
    <Link to={`/work/${project.slug}`} className={styles.row}>
      <span className={styles.ghostNum} aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
      <span className={`mono ${styles.index}`}>{String(index + 1).padStart(2, '0')}</span>
      <div className={styles.main}>
        <h3 className={styles.name}>{project.name}</h3>
        <p className={styles.tagline}>{project.tagline}</p>
        <div className={styles.tech}>
          {project.tech.map((t) => {
            const Icon = skillIcons[t];
            return (
              <span key={t} className={styles.techTag}>
                {Icon && <Icon className={styles.techIcon} />}
                <span className="mono">{t}</span>
              </span>
            );
          })}
        </div>
      </div>
      <span className={`mono ${styles.status}`}>{project.status}</span>
      <span className={styles.arrow} aria-hidden="true">
        →
      </span>
    </Link>
  );
}
