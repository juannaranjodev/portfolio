import React, { Component } from 'react';

import styles from './HomePage.scss';
import MainHeading from '../../components/MainHeading/MainHeading';

class HomePage extends Component {
  render() {
    return (
      <div className={styles.HomePage}>
        <MainHeading />
      </div>
    );
  }
}

export default HomePage;