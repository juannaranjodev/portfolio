import React, { Component } from 'react';

import styles from './HomePage.css';
import Background from '../../components/UI/Background/Background';
import CityImage from '../../components/CityImage/CityImage';
import FaceImage from '../../components/FaceImage/FaceImage';
import MainHeading from '../../components/MainHeading/MainHeading';

class HomePage extends Component {
  state = {
    time: null
  }

  checkDayTime = () => {
    const time = new Date();
    this.setState({
      time: time.getHours() > 5 && time.getHours() < 20 ? 'day' : 'night'
    });
  }

  componentDidMount() {
    this.checkDayTime();
  }

  render() {
    const homeHeaders = {
      name: 'Oleksii Bespalko',
      role: 'Front-end Developer',
      messages: [
        'A simple guy, who wants to create really cool things',
        'The builder of user interfaces and web applications'
      ]
    }

    return (
      <div className={styles.Home}>
        <Background time={this.state.time}>
          <CityImage time={this.state.time} />
          <FaceImage />
        </Background>
        <MainHeading
          name={homeHeaders.name}
          role={homeHeaders.role}
          message={homeHeaders.messages[Math.floor(Math.random() * homeHeaders.messages.length)]}
        />
      </div>
    );
  }
}

export default HomePage;