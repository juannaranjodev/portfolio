import React from 'react';

import styles from './PersonImage.css';

const personImage = () => (
  <div className={styles.PersonImage}>
    <div className={styles.head}>
      <div className={styles.hair}>
        <div className={styles.hair__top}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={styles.hair__side_left}></div>
        <div className={styles.hair__side_right}></div>
      </div>
      <div className={styles.eyes}>
        <div className={styles.eyes__left}>
          <div className={styles.eyes__eyelid}></div>
          <div className={styles.eyes__apple}></div>
        </div>
        <div className={styles.eyes__right}>
          <div className={styles.eyes__eyelid}></div>
          <div className={styles.eyes__apple}></div>
        </div>
      </div>
      <div className={styles.leftEar}></div>
      <div className={styles.rightEar}></div>
      <div className={styles.nose}></div>
      <div className={styles.mouth}></div>
    </div>
    <div className={styles.neck}></div>
    <div className={styles.clothes}></div>
  </div>
);

export default personImage;