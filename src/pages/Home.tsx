import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageTransition from '../components/layout/PageTransition';
import MagneticButton from '../components/ui/MagneticButton';
import FigurePhoto from '../components/ui/FigurePhoto';
import SplitHeading from '../components/ui/SplitHeading';
import ScrollStatement from '../components/ui/ScrollStatement';
import Reveal from '../components/ui/Reveal';
import SiteIndexStrip from '../components/home/SiteIndexStrip';
import StatStrip from '../components/home/StatStrip';
import CurrentlyStrip from '../components/home/CurrentlyStrip';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import styles from './Home.module.css';

gsap.registerPlugin(ScrollTrigger);

const highlighted = projects.filter((p) => p.fromResume);

export default function Home() {
  const openingRef = useRef<HTMLElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(max-width: 900px)').matches) return;
    const opening = openingRef.current;
    if (!opening || !textColRef.current || !photoRef.current) return;

    const st = ScrollTrigger.create({
      trigger: opening,
      start: 'top top',
      end: 'bottom top',
      scrub: 0.4,
      onUpdate: (self) => {
        gsap.set(textColRef.current, { yPercent: self.progress * -14 });
        gsap.set(photoRef.current, { yPercent: self.progress * -28 });
      },
    });

    return () => st.kill();
  }, []);

  return (
    <PageTransition>
      <section className={styles.opening} ref={openingRef}>
        <div className={`container ${styles.openingGrid}`}>
          <div ref={textColRef}>
            <span className={`mono ${styles.kicker}`}>{profile.role}</span>
            <SplitHeading as="h1" className={styles.headline} eager delay={0.1}>
              Software that ships,
              <br />
              <span className="serif accent">and holds up after.</span>
            </SplitHeading>

            <motion.p
              className={styles.dek}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Currently leading technical execution at{' '}
              <strong>{profile.currentRole.org}</strong> across five production
              applications — full-stack products, AI-driven systems, and the automation
              that keeps them running unattended.
            </motion.p>

            <motion.div
              className={styles.actions}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.62 }}
            >
              <MagneticButton to="/work" variant="primary">
                View the work
              </MagneticButton>
              <MagneticButton href={profile.resumeUrl} variant="secondary" download>
                Resume
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div
            className={styles.openingPhoto}
            ref={photoRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <FigurePhoto />
          </motion.div>
        </div>
      </section>

      <div className="container">
        <StatStrip />
      </div>

      <SiteIndexStrip />

      <section className={styles.work}>
        <div className="container">
          <Reveal>
            <h2 className={styles.workHeading}>Highlighted work</h2>
          </Reveal>

          <div className={styles.workList}>
            {highlighted.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.08} className={styles.workRow}>
                <Link to={`/work/${project.slug}`} className={styles.workLink}>
                  <span className={`mono ${styles.workStatus}`}>{project.status}</span>
                  <h3 className={styles.workName}>{project.name}</h3>
                  <p className={styles.workTagline}>{project.tagline}</p>
                  <span className={styles.workArrow} aria-hidden="true">
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <MagneticButton to="/work" variant="ghost">
              All work →
            </MagneticButton>
          </Reveal>
        </div>
      </section>

      <section className={styles.statementSection}>
        <div className="container">
          <ScrollStatement>
            Five production applications. One person leading execution across all of
            them, end to end — not the plan, just what's happening right now.
          </ScrollStatement>
        </div>
      </section>

      <CurrentlyStrip />
    </PageTransition>
  );
}
