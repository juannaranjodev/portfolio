import React from 'react';

import styles from './AboutMePage.css';
// import Background from '../../components/UI/Background/Background';
import Container from '../../hoc/Container/Container';
import Description from './Description/Description';
import SkillsBoard from './SkillsBoard/SkillsBoard';
import DeveloperImage from '../../components/DeveloperImage/DeveloperImage';
import PageHeader from '../../components/PageHeader/PageHeader';

const aboutMe = (props) => (
  
    <Container>
      <PageHeader title="Few words about me" />
      <div className={styles.AboutMe}>
        <Description /> 
        <DeveloperImage /> 
        <SkillsBoard />
      </div>
    </Container>
);  

export default aboutMe;