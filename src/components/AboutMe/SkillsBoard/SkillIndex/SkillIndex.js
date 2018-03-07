import React from 'react';

import styles from './SkillIndex.css';

const skillIndex = (props) => (
  <div className={styles.SkillIndex}>
    <div className={styles.Indicator}>
      <div className={styles.Progress}>
        <div className={styles.ProgressBar} style={{
          bottom: `calc(${props.value}% - 2rem)`,
          transform: 'translateY(-50%)'
        }}></div>
      </div>
    </div>
    <div className={styles.SkillTitle}>{props.title}</div>
  </div>
);

export default skillIndex;

// <div className={styles.ProgressValue}>{`${props.value}%`}</div>