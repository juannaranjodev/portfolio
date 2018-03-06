import React from 'react';

import styles from './AboutMe.css';
import Container from '../../hoc/Container/Container';
import Person from './Person/Person';
import SkillsBoard from './SkillsBoard/SkillsBoard';
import PageHeader from '../UI/PageHeader/PageHeader';

const aboutMe = (props) => (
  <Container>
    <PageHeader title="Few words about me" />
    <div className={styles.AboutMe}>
      <SkillsBoard />
      <Person />
    </div>
  </Container>
);  

export default aboutMe;