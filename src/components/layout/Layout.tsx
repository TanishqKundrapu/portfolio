import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from './Layout.module.css';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className={styles.grain} aria-hidden="true" />
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className={styles.main}>
        {children}
      </main>
      <Footer />
    </>
  );
}
