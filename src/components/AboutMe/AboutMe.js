import React from 'react';

import styles from './AboutMe.css';
import Container from '../../hoc/Container/Container';
import Description from './Description/Description';
import SkillsBoard from './SkillsBoard/SkillsBoard';
import Person from './Person/Person';
import PageHeader from '../UI/PageHeader/PageHeader';

const aboutMe = (props) => (
  <Container>
    <PageHeader title="Few words about me" />
    <div className={styles.AboutMe}>
      <SkillsBoard />
      <Description />
      <Person />
    </div>
  </Container>
);  

export default aboutMe;