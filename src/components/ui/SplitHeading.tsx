import { useLayoutEffect, useRef, type ElementType, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Animate immediately on mount instead of waiting for scroll into view. */
  eager?: boolean;
  delay?: number;
};

export default function SplitHeading({
  children,
  as: Tag = 'h2',
  className,
  eager = false,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const split = new SplitText(el, { type: 'words', wordsClass: 'split-word' });

    if (reduceMotion) {
      gsap.set(split.words, { opacity: 1, y: 0 });
      return () => split.revert();
    }

    gsap.set(split.words, { opacity: 0, y: '110%', rotateX: -40 });

    const anim = gsap.to(split.words, {
      opacity: 1,
      y: '0%',
      rotateX: 0,
      duration: 0.9,
      delay,
      stagger: 0.045,
      ease: 'expo.out',
      ...(eager
        ? {}
        : {
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              once: true,
            },
          }),
    });

    return () => {
      anim.kill();
      split.revert();
    };
  }, [eager, delay]);

  return (
    <Tag ref={ref} className={className} style={{ perspective: 600 }}>
      {children}
    </Tag>
  );
}
