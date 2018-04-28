import React, { Component } from 'react';

import styles from './SkillsBoard.scss';
import axios from 'axios';
import { BarChart } from 'react-easy-chart';
// import { Devicon } from 'devicon-react';
import Spinner from '../../../components/UI/Spinner/Spinner';

class SkillsBoard extends Component {
  state = {
    windowWidth: window.innerWidth,
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

  windowResizeHandler = (e) => {
    this.setState({windowWidth: e.target.innerWidth});
  }

  componentDidMount() {
    this.getData();
    window.addEventListener('resize', this.windowResizeHandler);
  }

  componentWillUnmount() {
    this.setState({ skills: null, error: false })
    window.removeEventListener('resize', this.windowResizeHandler);
  }

  render() {
    const resizeSkillsBoard = () => {
      const windowSize = this.state.windowWidth;
      switch (true) {
        case (windowSize < 550):
          return windowSize * 0.95;
        case (windowSize < 768):
          return windowSize * 0.9;
        case (windowSize < 1024):
          return windowSize * 0.8;
        case (windowSize < 1200):
          return windowSize * 0.75;
        default:
          return windowSize * 0.65;
      }
    }

    let skillsData = null;
    if (!this.state.error) {
      skillsData = <div style={{width: '90%'}}><Spinner /></div>;
    }
    if (this.state.skills) {
      const skills = this.state.skills.map((skill, index) => {
        return { x: skill.title, y: skill.value, color: '#e6902f' };
      });
      skillsData = (
        <div className={styles.SkillsBoard}>
        <BarChart
          axes
          grid
          margin={{ top: 50, right: 30, bottom: 60, left: 30}}
          height={resizeSkillsBoard() / 2}
          width={resizeSkillsBoard()}
          data={skills}
        />
        </div>
      );
    }

    return skillsData;
  }
}

export default SkillsBoard;