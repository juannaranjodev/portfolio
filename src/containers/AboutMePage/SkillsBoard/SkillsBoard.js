import React, { Component } from 'react';

import axios from 'axios';
import { BarChart } from 'react-easy-chart';
import Spinner from '../../../components/UI/Spinner/Spinner';

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
      this.setState({ error: true });
    });
  }

  componentDidMount() {
    this.getData();
  }

  componentWillUnmount() {
    this.setState({ skills: null, error: false })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.skills !== this.state.skills || nextState.error !== this.state.error;
  }

  render() {
    let skillsData = null;
    if (!this.state.error) {
      skillsData = <Spinner />;
    }
    if (this.state.skills) {
      const skills = this.state.skills.map((skill, index) => {
        return { x: skill.title, y: skill.value, color: '#e6902f' };
      });
      skillsData = (
        <BarChart
          axes
          grid
          // colorBars
          height={300}
          // width={650}
          data={skills}
        />
      );
    }
    return skillsData;
  }
}

export default SkillsBoard;