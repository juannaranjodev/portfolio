import React from 'react';

import styles from './SkillIndex.css';

const skillIndex = (props) => (
  <div className={styles.SkillIndex}>
    <div className={styles.indicator}>
      <div className={styles.progress}>
        <div className={styles.progressValue} style={{height: `${props.value}%`}}>
          <div className={styles.progressBar} style={{animationDelay: `${props.animationDelay}s`}}></div>
        </div>
      </div>
    </div>
    <div>{props.title}</div>
  </div>
);

export default skillIndex;