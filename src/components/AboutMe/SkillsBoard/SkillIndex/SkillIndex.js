import React from 'react';

import styles from './SkillIndex.css';

const skillIndex = (props) => (
  <div className={styles.SkillContainer}>
    <div className={styles.SkillIndex} style={{
      width: `${props.value}%`,
      animationDelay: `${props.delayProgress}s`
    }}>{props.title}</div>
  </div>
);

export default skillIndex;