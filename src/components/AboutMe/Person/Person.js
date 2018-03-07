import React from 'react';

import styles from './Person.css';

const person = () => (
  <div className={styles.Container}>
    <div className={styles.Person}>
      <div className={styles.Person__head}>
        <div className={styles.Person__hair}></div>
        <div className={styles.Person__eyes}>
          <div className={styles.Eye}>
            <div className={styles.Eye__apple}></div>
          </div>
          <div className={styles.Eye}>
            <div className={styles.Eye__apple}></div>
          </div>
        </div>
        <div className={styles.Person__head__ear_left}></div>
        <div className={styles.Person__head__ear_right}></div>
      </div>
      <div className={styles.Person__body}></div>
      <div className={styles.Person__shoulder_left}></div>
      <div className={styles.Person__shoulder_right}></div>
      <div className={styles.Person__arm_left}></div>
      <div className={styles.Person__arm_right}></div>
      <div className={styles.Person__leg_left}></div>
      <div className={styles.Person__leg_right}></div>
    </div>
    <div className={styles.Table}>
      <div className={styles.Laptop}>
        <div className={styles.Laptop__sticker}>JS</div>
      </div>
      <div className={styles.Table__top}></div>
      <div className={styles.Table__bottom}>
        <div className={styles.Table__leg}></div>
        <div className={styles.Table__leg}></div>
      </div>
    </div>
  </div>
);

export default person;