import PageTransition from '../components/layout/PageTransition';
import Reveal from '../components/ui/Reveal';
import SplitHeading from '../components/ui/SplitHeading';
import { journey } from '../data/journey';
import { journeyKindIcons } from '../data/skillIcons';
import styles from './Experience.module.css';

const kindLabel: Record<string, string> = {
  Work: 'Work',
  Leadership: 'Leadership',
  Hackathon: 'Hackathon',
  Academics: 'Academics',
  Competitive: 'Competitive Programming',
};

export default function Experience() {
  return (
    <PageTransition>
      <section className={`container ${styles.wrap}`}>
        <SplitHeading as="h1" className={styles.title} eager>
          Experience
        </SplitHeading>
        <p className={styles.dek}>
          Work, leadership, and the competitions that sharpened everything else — one
          chronological record.
        </p>

        <div className={styles.list}>
          {journey.map((item, i) => {
            const Icon = journeyKindIcons[item.kind];
            return (
            <Reveal key={item.title} delay={i * 0.04} className={styles.row}>
              <span className={styles.ghostNum} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className={styles.marker}>
                <span className={styles.markerIcon}>{Icon && <Icon />}</span>
                <span className={`mono ${styles.period}`}>{item.period}</span>
              </div>
              <div className={styles.main}>
                <span className={`mono ${styles.kind}`}>{kindLabel[item.kind]}</span>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.org}>{item.org}</p>
                {item.points.length > 0 && (
                  <ul className={styles.points}>
                    {item.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
            );
          })}
        </div>
      </section>
    </PageTransition>
  );
}
