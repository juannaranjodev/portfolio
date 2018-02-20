import React from 'react';

import styles from './AboutMe.css';

const aboutMe = (props) => (
  <div className={styles.AboutMe}>
    {props.children}
  </div>
);  

export default aboutMe;