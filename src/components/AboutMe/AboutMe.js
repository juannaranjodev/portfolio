import React from 'react';

import styles from './AboutMe.css';
import Container from '../../hoc/Container/Container';
import Person from './Person/Person';
import Skills from './Skills/Skills';

const aboutMe = (props) => (
  <div className={styles.AboutMe}>
    <Container>
    <Skills />
    <Person />
    </Container>
  </div>
);  

export default aboutMe;