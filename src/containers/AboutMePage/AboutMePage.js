import React from 'react';

import styles from './AboutMePage.css';
import Background from '../../components/UI/Background/Background';
import Container from '../../hoc/Container/Container';
import RoomImage from '../../components/RoomImage/RoomImage';
import Description from './Description/Description';
import SkillsBoard from './SkillsBoard/SkillsBoard';
import DeveloperImage from '../../components/DeveloperImage/DeveloperImage';
import PageHeader from '../../components/PageHeader/PageHeader';

const aboutMe = (props) => (
  <Background time={props.time}>
    <Container>
      <RoomImage>
        <PageHeader title="Few words about me" />
        <div className={styles.AboutMePage}>
          <Description time={props.time} /> 
          <DeveloperImage /> 
          <SkillsBoard />
        </div>
      </RoomImage>
    </Container>
  </Background>
);  

export default aboutMe;