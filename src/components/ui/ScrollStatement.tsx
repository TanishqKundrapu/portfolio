import { useLayoutEffect, useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import styles from './ScrollStatement.module.css';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function ScrollStatement({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const split = new SplitText(el, { type: 'words', wordsClass: 'split-word' });

    if (reduceMotion) {
      gsap.set(split.words, { opacity: 1, filter: 'blur(0px)' });
      return () => split.revert();
    }

    gsap.set(split.words, { opacity: 0.12, filter: 'blur(3px)' });

    const tween = gsap.to(split.words, {
      opacity: 1,
      filter: 'blur(0px)',
      stagger: 0.06,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        end: 'bottom 55%',
        scrub: 0.6,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      split.revert();
    };
  }, []);

  return (
    <p ref={ref} className={`${styles.statement} ${className ?? ''}`}>
      {children}
    </p>
  );
}
