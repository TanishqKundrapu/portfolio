import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import type { DiagramSpec } from '../../data/projects';
import styles from './SchematicDiagram.module.css';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

export default function SchematicDiagram({ diagram }: { diagram: DiagramSpec }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const line = lineRef.current;
    if (!root || !line) return;

    const boxes = root.querySelectorAll<HTMLElement>(`.${styles.step}`);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      gsap.set(line, { drawSVG: '100%' });
      gsap.set(boxes, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(line, { drawSVG: '0%' });
    gsap.set(boxes, { opacity: 0, y: 16 });

    const tl = gsap.timeline({
      scrollTrigger: { trigger: root, start: 'top 78%', once: true },
    });

    tl.to(line, { drawSVG: '100%', duration: 1.1, ease: 'power2.inOut' }).to(
      boxes,
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: 'power2.out' },
      0.15,
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={rootRef} className={styles.diagram}>
      <svg
        className={styles.svg}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path ref={lineRef} d="M 3,50 L 97,50" className={styles.line} />
      </svg>

      <div className={styles.row}>
        {diagram.steps.map((step) => (
          <div key={step.id} className={styles.step}>
            <span className={styles.node} />
            <span className={styles.label}>{step.label}</span>
            {step.sublabel && <span className={`mono ${styles.sublabel}`}>{step.sublabel}</span>}
          </div>
        ))}
      </div>

      {diagram.note && <p className={`mono ${styles.note}`}>{diagram.note}</p>}
    </div>
  );
}
