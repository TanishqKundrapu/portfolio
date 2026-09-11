import { useState, type FormEvent } from 'react';
import PageTransition from '../components/layout/PageTransition';
import Reveal from '../components/ui/Reveal';
import SplitHeading from '../components/ui/SplitHeading';
import { profile } from '../data/profile';
import styles from './Contact.module.css';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const subject = form.get('subject');
    const message = form.get('message');

    const body = `${message}\n\n— ${name} (${email})`;
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      String(subject),
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus('Opening your email client…');
  };

  return (
    <PageTransition>
      <section className={`container ${styles.wrap}`}>
        <SplitHeading as="h1" className={styles.title} eager>
          Let's talk.
        </SplitHeading>
        <p className={styles.dek}>
          Have a role, a project, or just a question? My inbox is open.
        </p>

        <div className={styles.grid}>
          <Reveal className={styles.info}>
            <ul className={styles.details}>
              <li>
                <span className={`mono ${styles.label}`}>Email</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <span className={`mono ${styles.label}`}>Phone</span>
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
              </li>
              <li>
                <span className={`mono ${styles.label}`}>Location</span>
                <span>{profile.location}</span>
              </li>
            </ul>

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
              <a href={profile.socials.hackerrank} target="_blank" rel="noopener noreferrer">
                HackerRank
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" required autoComplete="name" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required autoComplete="email" />
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" required />
              </div>
              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required />
              </div>
              <button type="submit" className={styles.submit}>
                Send message →
              </button>
              {status && (
                <p className={styles.status} role="status">
                  {status}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
