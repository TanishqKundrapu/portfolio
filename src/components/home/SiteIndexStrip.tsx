import { NavLink } from 'react-router-dom';
import styles from './SiteIndexStrip.module.css';

const entries = [
  { to: '/about', num: '002', label: 'About' },
  { to: '/work', num: '003', label: 'Work' },
  { to: '/experience', num: '004', label: 'Experience' },
  { to: '/engineering', num: '005', label: 'Engineering' },
  { to: '/contact', num: '006', label: 'Contact' },
];

export default function SiteIndexStrip() {
  return (
    <nav className={styles.strip} aria-label="Site index">
      <div className="container">
        <ul className={styles.list}>
          {entries.map((e) => (
            <li key={e.to}>
              <NavLink to={e.to} className={styles.entry}>
                <span className={`mono ${styles.num}`}>{e.num}</span>
                <span className={styles.label}>{e.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
