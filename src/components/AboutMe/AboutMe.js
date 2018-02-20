import React from 'react';

import styles from './AboutMe.css';
import Person from './Person/Person';

const aboutMe = (props) => (
  <div className={styles.AboutMe}>
    <Person />
  </div>
);  

export default aboutMe;