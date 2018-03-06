import React from 'react';

import styles from './AboutMe.css';
import Container from '../../hoc/Container/Container';
import Person from './Person/Person';
import Skills from './Skills/Skills';
import PageHeader from '../UI/PageHeader/PageHeader';

const aboutMe = (props) => (
  <div className={styles.AboutMe}>
    <Container>
      <PageHeader title="Few words about me" />
      <Skills />
      <Person />
    </Container>
  </div>
);  

export default aboutMe;