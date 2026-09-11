import PageTransition from '../components/layout/PageTransition';
import Reveal from '../components/ui/Reveal';
import SplitHeading from '../components/ui/SplitHeading';
import WorkIndexRow from '../components/work/WorkIndexRow';
import { projects } from '../data/projects';
import styles from './Work.module.css';

export default function Work() {
  const verified = projects.filter((p) => p.fromResume);
  const extra = projects.filter((p) => !p.fromResume);

  return (
    <PageTransition>
      <section className={`container ${styles.wrap}`}>
        <SplitHeading as="h1" className={styles.title} eager>
          Work
        </SplitHeading>
        <p className={styles.dek}>
          Shipped products, deep-learning systems, and the automation scripts that quietly keep
          infrastructure honest.
        </p>

        <div className={styles.list}>
          {verified.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06}>
              <WorkIndexRow project={project} index={i} />
            </Reveal>
          ))}
        </div>

        {extra.length > 0 && (
          <div className={styles.extra}>
            <span className={`mono ${styles.extraLabel}`}>Also built</span>
            <div className={styles.list}>
              {extra.map((project, i) => (
                <Reveal key={project.slug} delay={i * 0.06}>
                  <WorkIndexRow project={project} index={verified.length + i} />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </section>
    </PageTransition>
  );
}
