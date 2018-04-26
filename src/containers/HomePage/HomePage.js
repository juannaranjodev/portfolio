import React, { Component } from 'react';

import styles from './HomePage.css';
import MainHeading from '../../components/MainHeading/MainHeading';

class HomePage extends Component {
  render() {
    

    return (
      
          <div className={styles.HomePage}>
              <MainHeading time={this.props.time} />
          </div>
    );
  }
}

export default HomePage;