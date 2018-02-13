import React, { Component } from 'react';

import styles from './Home.css';
import Background from '../../components/UI/Background/Background';

class Home extends Component {
  state = {
    gradient: ''
  }

  render() {
    return (
      <div className={styles.Home}>
        <Background />
      </div>
    );
  }
}

export default Home;