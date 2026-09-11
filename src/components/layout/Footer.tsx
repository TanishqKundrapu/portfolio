import { NavLink } from 'react-router-dom';
import { profile } from '../../data/profile';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.logo}>
            tanishq<span className={styles.dot}>.</span>
          </p>
          <p className={styles.tag}>Building reliable, elegant software.</p>
        </div>

        <nav className={styles.links} aria-label="Footer">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/engineering">Engineering</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className={styles.socials}>
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={profile.socials.leetcode} target="_blank" rel="noopener noreferrer">
            LeetCode
          </a>
        </div>
      </div>
      <div className={`container ${styles.bottom}`}>
        <p>&copy; {new Date().getFullYear()} Kundrapu Tanishq.</p>
        <p className="mono">{profile.location}</p>
      </div>
    </footer>
  );
}
