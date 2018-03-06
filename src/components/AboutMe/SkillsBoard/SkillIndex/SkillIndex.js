import React from 'react';

import styles from './SkillIndex.css';

const skillIndex = (props) => (
  <div className={styles.SkillIndex}>
    <div className={styles.Indicator}></div>
    <div className={styles.SkillTitle}>{props.title}</div>
  </div>
);

export default skillIndex;

// 
// { props.value }