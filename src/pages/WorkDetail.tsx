import { useParams, Navigate } from 'react-router-dom';
import PageTransition from '../components/layout/PageTransition';
import Reveal from '../components/ui/Reveal';
import MagneticButton from '../components/ui/MagneticButton';
import SpecSheet from '../components/work/SpecSheet';
import SchematicDiagram from '../components/work/SchematicDiagram';
import { projects } from '../data/projects';
import styles from './WorkDetail.module.css';

export default function WorkDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/work" replace />;

  return (
    <PageTransition>
      <section className={`container ${styles.wrap}`}>
        <Reveal>
          <MagneticButton to="/work" variant="ghost">
            ← All work
          </MagneticButton>
        </Reveal>

        <Reveal delay={0.08} className={styles.header}>
          <span className={`mono ${styles.status}`}>{project.status}</span>
          <h1 className={styles.title}>{project.name}</h1>
          <p className={styles.tagline}>{project.tagline}</p>
        </Reveal>

        <div className={styles.grid}>
          <div className={styles.body}>
            <Reveal className={styles.block}>
              <h2>Overview</h2>
              <p>{project.summary}</p>
            </Reveal>

            <Reveal delay={0.05} className={styles.block}>
              <h2>The problem</h2>
              <p>{project.problem}</p>
            </Reveal>

            {project.diagram && (
              <Reveal delay={0.08} className={styles.block}>
                <h2>Architecture</h2>
                <SchematicDiagram diagram={project.diagram} />
              </Reveal>
            )}

            <Reveal delay={0.1} className={styles.block}>
              <h2>The approach</h2>
              <p>{project.solution}</p>
            </Reveal>

            {project.decisions.length > 0 && (
              <Reveal delay={0.15} className={styles.block}>
                <h2>Key technical decisions</h2>
                <ul className={styles.list}>
                  {project.decisions.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </Reveal>
            )}

            <Reveal delay={0.2} className={styles.block}>
              <h2>Outcome & features</h2>
              <ul className={styles.list}>
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1} className={styles.sidebar}>
            <SpecSheet project={project} />
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
