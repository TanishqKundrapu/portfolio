import { profile } from '../../data/profile';
import styles from './CurrentlyStrip.module.css';

export default function CurrentlyStrip() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Currently</h2>
        <div className={styles.grid}>
          <div className={styles.item}>
            <span className={`mono ${styles.period}`}>2026 — Present</span>
            <h3 className={styles.role}>{profile.currentRole.title}</h3>
            <p className={styles.org}>{profile.currentRole.org}</p>
            <p className={styles.note}>
              Leading technical execution across 5 production applications, 2–3 simultaneously,
              from development through deployment.
            </p>
          </div>
          <div className={styles.item}>
            <span className={`mono ${styles.period}`}>2026 — Present</span>
            <h3 className={styles.role}>Secretary</h3>
            <p className={styles.org}>Meta Developer Communities — GITAM</p>
            <p className={styles.note}>
              Running operations and documentation for a 300+ member developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
