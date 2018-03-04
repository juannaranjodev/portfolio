import React from 'react';

import styles from './AboutMe.css';
import Person from './Person/Person';
import Skills from './Skills/Skills';

const aboutMe = (props) => (
  <div className={styles.AboutMe}>
    <Skills />
    <Person />
  </div>
);  

export default aboutMe;