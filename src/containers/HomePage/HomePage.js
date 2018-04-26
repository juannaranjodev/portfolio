import React, { Component } from 'react';

import styles from './HomePage.css';
import MainHeading from '../../components/MainHeading/MainHeading';

class HomePage extends Component {
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
      
          <div className={styles.HomePage}>
              <MainHeading
                time={this.props.time}
                name={homeHeaders.name}
                role={homeHeaders.role}
                message={homeHeaders.messages[Math.floor(Math.random() * homeHeaders.messages.length)]}
              />
          </div>
    );
  }
}

export default HomePage;