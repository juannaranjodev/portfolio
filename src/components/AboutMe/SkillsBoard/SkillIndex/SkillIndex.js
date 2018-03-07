import React from 'react';

import styles from './SkillIndex.css';

const skillIndex = (props) => {
  let progressBar = {
    bottom: `calc(${props.value}% - 2rem)`,
    transform: 'translateY(-50%)'
  };
  return (
    <div className={styles.SkillIndex}>
      <div className={styles.Indicator}>
        <div className={styles.Progress}>
          <div className={styles.ProgressBar} style={progressBar}></div>
        </div>
      </div>
      <div className={styles.SkillTitle}>{props.title}</div>
    </div>
  );
}

export default skillIndex;

// <div className={styles.ProgressValue}>{`${props.value}%`}</div>