import { skillCategories } from '../../data/skills';
import { skillIcons } from '../../data/skillIcons';
import styles from './SkillMarquee.module.css';

const allSkills = Array.from(new Set(skillCategories.flatMap((c) => c.skills)));

function Track({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div className={styles.track} aria-hidden={ariaHidden}>
      {allSkills.map((name) => {
        const Icon = skillIcons[name];
        return (
          <span key={name} className={styles.item}>
            {Icon && <Icon className={styles.icon} />}
            <span className={styles.label}>{name}</span>
          </span>
        );
      })}
    </div>
  );
}

export default function SkillMarquee() {
  return (
    <div className={styles.marquee}>
      <div className={styles.rail}>
        <Track />
        <Track ariaHidden />
      </div>
      <div className={styles.fadeLeft} aria-hidden="true" />
      <div className={styles.fadeRight} aria-hidden="true" />
    </div>
  );
}
