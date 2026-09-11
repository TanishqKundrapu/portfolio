import { useRef, type ReactNode, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import styles from './MagneticButton.module.css';

type Props = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  download?: boolean;
  target?: string;
  onClick?: () => void;
};

export default function MagneticButton({
  children,
  to,
  href,
  variant = 'primary',
  download,
  target,
  onClick,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0, 0)';
  };

  const className = `${styles.btn} ${styles[variant]}`;

  if (to) {
    return (
      <Link
        ref={ref as any}
        to={to}
        className={className}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onClick={onClick}
      >
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <a
      ref={ref as any}
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      download={download}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
    >
      <span>{children}</span>
    </a>
  );
}
