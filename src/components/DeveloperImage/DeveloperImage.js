import React from 'react';

import styles from './DeveloperImage.css';

const developerImage = (props) => (
  <div className={[styles.container, styles[props.background]].join(' ')}>
    <div className={styles.armChair}>
      <div className={styles.armChair__top}></div>
      <div className={styles.armChair__bottom}></div>
    </div>
    <div className={styles.person}>
      <div className={styles.person__head}>
        <div className={styles.person__hair}>
          <div className={styles.hair_top}></div>
          <div className={styles.hair_side_left}></div>
          <div className={styles.hair_side_right}></div>
        </div>
        <div className={styles.person__eyes}>
          <div className={styles.eye}>
            <div className={styles.eye__apple}></div>
          </div>
          <div className={styles.eye}>
            <div className={styles.eye__apple}></div>
          </div>
        </div>
        <div className={styles.person__head__ear_left}></div>
        <div className={styles.person__head__ear_right}></div>
      </div>
      <div className={styles.person__shoulder_left}></div>
      <div className={styles.person__shoulder_right}></div>
      <div className={styles.person__leg_left}></div>
      <div className={styles.person__leg_right}></div>
      <div className={styles.person__shoe_left}></div>
      <div className={styles.person__shoe_right}></div>
    </div>
    <div className={styles.table}>
      <div className={styles.cup}>
        <div className={styles.cup__steam}></div>
      </div>
      <div className={styles.laptop}>
        <div className={styles.laptop__sticker}>JS</div>
      </div>
      <div className={styles.table__top}></div>
      <div className={styles.table__bottom}>
        <div className={styles.table__leg}></div>
        <div className={styles.table__leg}></div>
      </div>
    </div>
  </div>
);

export default developerImage;