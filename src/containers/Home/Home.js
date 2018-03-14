import React, { Component } from 'react';

import styles from './Home.css';
import Background from './Background/Background';
import CityImage from '../../components/UI/CityImage/CityImage';
import Character from '../../components/UI/Character/Character';
import MainHeading from '../../components/MainHeading/MainHeading';

const homePage = () => {
  const homeHeaders = {
    name: 'Oleksii Bespalko',
    role: 'Front-end Developer',
    messages: [
      'A simple guy, who wants to create really cool things',
      'The builder of user interfaces and web applications'
    ]
  }

  const checkDayTime = () => {
    const time = new Date();
    return time.getHours() > 5 && time.getHours() < 20 ? 'day' : 'night';
  }

  return (
    <div className={styles.Home}>
      <Background time={checkDayTime()}>
        <CityImage />
        <Character />
      </Background>  
      <MainHeading
        name={homeHeaders.name}
        role={homeHeaders.role}
        message={homeHeaders.messages[Math.floor(Math.random() * homeHeaders.messages.length)]}
      />
    </div>
  );
}

export default homePage;