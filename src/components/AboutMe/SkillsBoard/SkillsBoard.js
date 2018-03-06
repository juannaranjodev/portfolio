import React, { Component } from 'react';

import styles from './SkillsBoard.css';
import axios from 'axios';
import Skill from './Skill/Skill';
import Spinner from '../../UI/Spinner/Spinner';

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
    let skills = <Spinner />;
    if (this.state.skills) {
      skills = this.state.skills.map((skill, index) => {
        return <Skill key={index} title={skill.title} delayProgress={index ? Math.sqrt(index) : index} value={skill.value} />
      });
    }
    return (
      <div className={styles.SkillsBoard}>
        
      </div>
    );
  }
}

export default Skills;