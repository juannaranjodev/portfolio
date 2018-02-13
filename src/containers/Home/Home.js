import React, { Component } from 'react';

import styles from './Home.css';

class Home extends Component {
  state = {
    gradient: ''
  }

  render() {
    return (
      <div>
        <Background />
        <Heading />
        <Button />
      </div>
    );
  }
}

export default Home;