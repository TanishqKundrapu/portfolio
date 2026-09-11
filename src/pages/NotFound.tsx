import PageTransition from '../components/layout/PageTransition';
import MagneticButton from '../components/ui/MagneticButton';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <PageTransition>
      <section className={`container ${styles.wrap}`}>
        <span className="mono" style={{ color: 'var(--ink-faint)' }}>
          404
        </span>
        <h1 className={styles.title}>
          This route doesn't <span className="accent serif">exist.</span>
        </h1>
        <p className={styles.desc}>Not every path resolves. Let's get you back on track.</p>
        <MagneticButton to="/" variant="primary">
          Back to home
        </MagneticButton>
      </section>
    </PageTransition>
  );
}
