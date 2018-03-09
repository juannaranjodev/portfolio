import React, { Component } from 'react';

import axios from 'axios';
import Board from '../../UI/Board/Board';
import SkillIndex from './SkillIndex/SkillIndex';
import Spinner from '../../UI/Spinner/Spinner';

class SkillsBoard extends Component {
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
      let decrement = 1;
      skills = this.state.skills.map((skill, index) => {
        decrement -= 0.85;
        return <SkillIndex key={index} title={skill.title} value={skill.value} animationDelay={index + decrement} />
      });
    }
    return (
      <Board>
        {skills}
      </Board>
    );
  }
}

export default SkillsBoard;