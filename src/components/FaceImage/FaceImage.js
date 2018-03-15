import React from 'react';

import styles from './FaceImage.css';

const character = () => (
  <div className={styles.Container}>
    <div className={styles.Head}>
      <div className={styles.Hair}>
        <div className={styles.Hair__top}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={styles.Hair__side_left}></div>
        <div className={styles.Hair__side_right}></div>
      </div>
      <div className={styles.Eyes}>
        <div className={styles.Eyes__left}>
          <div className={styles.Eyes__eyelid}></div>
          <div className={styles.Eyes__apple}></div>
        </div>
        <div className={styles.Eyes__right}>
          <div className={styles.Eyes__eyelid}></div>
          <div className={styles.Eyes__apple}></div>
        </div>
      </div>
      <div className={styles.LeftEar}></div>
      <div className={styles.RightEar}></div>
      <div className={styles.Nose}></div>
      <div className={styles.Mouth}></div>
    </div>
    <div className={styles.Neck}></div>
    <div className={styles.Clothes}></div>
  </div>
);

export default character;