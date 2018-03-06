import React from 'react';

import styles from './AboutMe.css';
import Container from '../../hoc/Container/Container';
import Person from './Person/Person';
import Skills from './Skills/Skills';
import PageHeader from '../UI/PageHeader/PageHeader';

const aboutMe = (props) => (
  <Container>
    <PageHeader title="Few words about me" />
    <div className={styles.AboutMe}>
      <Skills />
      <Person />
    </div>
  </Container>
);  

export default aboutMe;