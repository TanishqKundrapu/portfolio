import { profile } from '../../data/profile';
import styles from './FigurePhoto.module.css';

export default function FigurePhoto({
  caption,
  className,
}: {
  caption: string;
  className?: string;
}) {
  return (
    <figure className={`${styles.figure} ${className ?? ''}`}>
      <img src={profile.photoUrl} alt={profile.name} loading="lazy" />
      <figcaption className={`mono ${styles.caption}`}>{caption}</figcaption>
    </figure>
  );
}
