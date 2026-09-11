import { profile } from '../../data/profile';
import styles from './FigurePhoto.module.css';

export default function FigurePhoto({ className }: { className?: string }) {
  return (
    <div className={`${styles.figure} ${className ?? ''}`}>
      <img src={profile.photoUrl} alt={profile.name} loading="lazy" />
    </div>
  );
}
