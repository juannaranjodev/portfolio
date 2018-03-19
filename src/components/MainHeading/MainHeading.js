import React from 'react';

import styles from './MainHeading.css';
import Button from '../UI/Button/Button';

const mainHeading = (props) => (
  <div className={[styles.MainHeading, styles[props.time === 'night' ? 'light' : 'dark']].join(' ')}>
    <h3 className={styles.MainHeading__role}>{props.role}</h3>
    <h1 className={styles.MainHeading__name}>{props.name}</h1>
    <h5 className={styles.MainHeading__message}>{props.message}</h5>
    <Button
      type="router-link"
      href="/portfolio"
      color="blue"
      size="large"
    >
      Projects
    </Button>
  </div>
);

export default mainHeading;