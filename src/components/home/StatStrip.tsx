import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './StatStrip.module.css';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { to: 9.85, decimals: 2, suffix: '', label: 'CGPA — B.Tech CSE, GITAM' },
  { to: 5, decimals: 0, suffix: '', label: 'Production apps led as Technical Head' },
  { to: 100, decimals: 0, suffix: '+', label: 'DSA problems solved on LeetCode' },
  { to: 300, decimals: 0, suffix: '+', label: 'Students in the community I help run' },
];

export default function StatStrip() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const nums = root.querySelectorAll<HTMLElement>(`.${styles.num}`);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      nums.forEach((el, i) => {
        el.textContent = stats[i].to.toFixed(stats[i].decimals) + stats[i].suffix;
      });
      return;
    }

    const proxies = stats.map(() => ({ v: 0 }));
    const tweens = proxies.map((proxy, i) =>
      gsap.to(proxy, {
        v: stats[i].to,
        duration: 1.6,
        ease: 'power2.out',
        paused: true,
        onUpdate: () => {
          const el = nums[i];
          if (el) el.textContent = proxy.v.toFixed(stats[i].decimals) + stats[i].suffix;
        },
      }),
    );

    const st = ScrollTrigger.create({
      trigger: root,
      start: 'top 82%',
      once: true,
      onEnter: () => tweens.forEach((t) => t.play()),
    });

    return () => {
      st.kill();
      tweens.forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={rootRef} className={styles.strip}>
      {stats.map((s) => (
        <div key={s.label} className={styles.item}>
          <span className={`mono ${styles.num}`}>0{s.suffix}</span>
          <span className={styles.label}>{s.label}</span>
        </div>
      ))}
    </div>
  );
}
