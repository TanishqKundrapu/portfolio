import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { profile } from '../../data/profile';
import styles from './FigurePhoto.module.css';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const CORNER_PATH = 'M2,18 L2,2 L18,2';

export default function FigurePhoto({ className }: { className?: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const img = imgRef.current;
    if (!root || !img) return;

    const corners = root.querySelectorAll<SVGPathElement>(`.${styles.cornerPath}`);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      gsap.set(img, { opacity: 1, scale: 1, filter: 'brightness(1)' });
      gsap.set(corners, { drawSVG: '100%' });
      return;
    }

    gsap.set(img, { opacity: 0, scale: 1.08, filter: 'brightness(0.6)' });
    gsap.set(corners, { drawSVG: '0%' });

    const tl = gsap.timeline({
      scrollTrigger: { trigger: root, start: 'top 88%', once: true },
    });

    tl.to(img, { opacity: 1, scale: 1, filter: 'brightness(1)', duration: 1, ease: 'power2.out' }).to(
      corners,
      { drawSVG: '100%', duration: 0.6, stagger: 0.08, ease: 'power1.inOut' },
      0.15,
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={rootRef} className={`${styles.figure} ${className ?? ''}`}>
      <img ref={imgRef} src={profile.photoUrl} alt={profile.name} loading="lazy" />

      <svg className={`${styles.corner} ${styles.tl}`} viewBox="0 0 20 20" aria-hidden="true">
        <path className={styles.cornerPath} d={CORNER_PATH} />
      </svg>
      <svg className={`${styles.corner} ${styles.tr}`} viewBox="0 0 20 20" aria-hidden="true">
        <path className={styles.cornerPath} d={CORNER_PATH} />
      </svg>
      <svg className={`${styles.corner} ${styles.bl}`} viewBox="0 0 20 20" aria-hidden="true">
        <path className={styles.cornerPath} d={CORNER_PATH} />
      </svg>
      <svg className={`${styles.corner} ${styles.br}`} viewBox="0 0 20 20" aria-hidden="true">
        <path className={styles.cornerPath} d={CORNER_PATH} />
      </svg>
    </div>
  );
}
