import React, { Component } from 'react';

import styles from './Skills.css';
import axios from 'axios';

class Skills extends Component {
  state = {
    skills: null,
    error: false
  }

  getData = () => {
    axios.get('https://olbesp-portfolio.firebaseio.com/skills.json')
    .then(response => {
      this.setState({ skills: response.data });
    })
    .catch(error => {
      this.setState({ error: true })
    });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className={styles.Skills}>
        <div className={styles.ProgressBar}></div>
      </div>
    );
  }
}

export default Skills;