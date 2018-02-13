import React, { Component } from 'react';

import styles from './Home.css';
import Background from '../../components/UI/Background/Background';
import MainHeading from '../../components/MainHeading/MainHeading';

class Home extends Component {
  state = {
    gradient: ''
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
        <Background />
        <MainHeading
          name={homeHeaders.name}
          role={homeHeaders.role}
          message={homeHeaders.messages[Math.floor(Math.random() * homeHeaders.messages.length)]} />
      </div>
    );
  }
}

export default Home;