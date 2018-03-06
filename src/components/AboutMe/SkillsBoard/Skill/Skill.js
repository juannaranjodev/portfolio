import React from 'react';

import styles from './Skill.css';

const skill = (props) => (
  <div className={styles.SkillContainer}>
    <div className={styles.Skill} style={{
      width: `${props.value}%`,
      animationDelay: `${props.delayProgress}s`
    }}>{props.title}</div>
  </div>
);

export default skill;