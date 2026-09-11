import PageTransition from '../components/layout/PageTransition';
import Reveal from '../components/ui/Reveal';
import SplitHeading from '../components/ui/SplitHeading';
import MagneticButton from '../components/ui/MagneticButton';
import FigurePhoto from '../components/ui/FigurePhoto';
import { profile } from '../data/profile';
import styles from './About.module.css';

export default function About() {
  return (
    <PageTransition>
      <section className={`container ${styles.wrap}`}>
        <div className={styles.grid}>
          <div className={styles.copyCol}>
            <Reveal>
              <SplitHeading as="h1" className={styles.title} eager>
                Curiosity-driven, <span className="serif accent">builder at heart.</span>
              </SplitHeading>
            </Reveal>

            <Reveal delay={0.1} className={styles.copy}>
              <p>
                I'm a Computer Science Engineering undergraduate at{' '}
                <strong>GITAM University</strong>, currently serving as{' '}
                <strong>Technical Head at Inframiq Solutions Pvt. Ltd.</strong>, where I lead
                technical execution across production applications — from development through
                deployment.
              </p>
              <p>
                My work spans full-stack products and AI-driven systems: multi-agent pipelines
                for resume tailoring, explainable deep learning for medical imaging, and the
                automation scripts that quietly keep infrastructure honest. I care about writing
                code that ships and holds up in production, not just code that runs once.
              </p>
              <p>
                Outside of shipping, I sharpen my edge through competitive programming on{' '}
                <strong>LeetCode</strong>, and lead as <strong>Secretary of Meta Developer
                Communities at GITAM</strong> — a 300+ member community — after previously running
                its Competitive Programming domain. I also won{' '}
                <strong>TechSprint</strong>, GDGoC's state-level hackathon.
              </p>
            </Reveal>

            <Reveal delay={0.2} className={styles.actions}>
              <MagneticButton href={profile.resumeUrl} variant="primary" download>
                Download Resume
              </MagneticButton>
              <MagneticButton to="/experience" variant="secondary">
                Full experience
              </MagneticButton>
            </Reveal>
          </div>

          <Reveal className={styles.sideCol}>
            <FigurePhoto className={styles.photo} />

            <div className={styles.eduCard}>
              <span className={`mono ${styles.eduLabel}`}>Education</span>
              <p className={styles.eduDegree}>{profile.education.degree}</p>
              <p className={styles.eduSchool}>{profile.education.school}</p>
              <div className={styles.eduMeta}>
                <span className="mono">{profile.education.period}</span>
                <span className={styles.cgpa}>{profile.education.cgpa} CGPA</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
