import type { Project } from '../../data/projects';
import styles from './SpecSheet.module.css';

export default function SpecSheet({ project }: { project: Project }) {
  return (
    <aside className={styles.sheet}>
      <div className={styles.block}>
        <span className={`mono ${styles.label}`}>Status</span>
        <p className={styles.value}>{project.status}</p>
      </div>

      <div className={styles.block}>
        <span className={`mono ${styles.label}`}>Stack</span>
        <ul className={styles.stack}>
          {project.tech.map((t) => (
            <li key={t} className="mono">
              {t}
            </li>
          ))}
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
