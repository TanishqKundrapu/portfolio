import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import Reveal from '../components/ui/Reveal';
import SplitHeading from '../components/ui/SplitHeading';
import SkillMarquee from '../components/ui/SkillMarquee';
import { skillCategories } from '../data/skills';
import { skillIcons } from '../data/skillIcons';
import styles from './Engineering.module.css';

export default function Engineering() {
  return (
    <PageTransition>
      <section className={`container ${styles.wrap}`}>
        <SplitHeading as="h1" className={styles.title} eager>
          Engineering
        </SplitHeading>
        <p className={styles.dek}>
          The tools I reach for, grouped by what they're actually for — not a proficiency meter.
        </p>
      </section>

      <SkillMarquee />

      <section className={`container ${styles.gridWrap}`}>
        <div className={styles.grid}>
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.06} className={styles.column}>
              <span className={`mono ${styles.colTitle}`}>{cat.title}</span>
              <p className={styles.note}>{cat.note}</p>
              <ul className={styles.list}>
                {cat.skills.map((s, j) => {
                  const Icon = skillIcons[s];
                  return (
                    <motion.li
                      key={s}
                      className={styles.row}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.5, delay: j * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <span className={styles.rowIcon}>{Icon ? <Icon /> : <span className={styles.dot} />}</span>
                      {s}
                    </motion.li>
                  );
                })}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
