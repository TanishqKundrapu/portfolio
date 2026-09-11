import type { Project } from '../../data/projects';
import { skillIcons } from '../../data/skillIcons';
import styles from './SpecSheet.module.css';

export default function SpecSheet({ project }: { project: Project }) {
  const isLive = project.status === 'Live';

  return (
    <aside className={styles.sheet}>
      <div className={styles.block}>
        <span className={`mono ${styles.label}`}>Status</span>
        <p className={styles.value}>
          <span className={`${styles.statusDot} ${isLive ? styles.statusDotLive : ''}`} />
          {project.status}
        </p>
      </div>

      <div className={styles.block}>
        <span className={`mono ${styles.label}`}>Stack</span>
        <ul className={styles.stack}>
          {project.tech.map((t) => {
            const Icon = skillIcons[t];
            return (
              <li key={t}>
                <span className={styles.stackIcon}>{Icon ? <Icon /> : <span className={styles.stackDot} />}</span>
                <span className="mono">{t}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {project.links.length > 0 && (
        <div className={styles.block}>
          <span className={`mono ${styles.label}`}>Links</span>
          <ul className={styles.links}>
            {project.links.map((link) => (
              <li key={link.url}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}
