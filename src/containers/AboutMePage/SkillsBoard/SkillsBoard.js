import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './SkillsBoard.scss';
import { BarChart } from 'react-easy-chart';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Media from 'react-media';
import Technologies from '../Technologies/Technologies';
import { Animated } from 'react-animated-css';
import { random } from '../../../utilities';
import * as actions from '../../../store/actions/index';

class SkillsBoard extends Component {
  state = {
    windowWidth: window.innerWidth
  }

  windowResizeHandler = (e) => {
    this.setState({windowWidth: e.target.innerWidth});
  }

  componentDidMount() {
    this.props.onFetchSkills();
    window.addEventListener('resize', this.windowResizeHandler);
  }

  componentWillUnmount() {
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
    };

    let skillsData = null;
    if (!this.props.error) {
      skillsData = <div style={{width: '90%'}}><Spinner /></div>;
    }
    if (this.props.skills) {
      const skills = this.props.skills.map((skill, index) => {
        return { x: skill.title, y: skill.value, color: '#e6902f' };
      });

      skillsData = (
        <Media query={{ maxWidth: 1024 }}>
          {matches => matches ?
            <Technologies tools={skills.map(skill => skill.x)} /> :
            <Animated
              className={styles.SkillsBoard}
              animationIn={['flipInX', 'fadeInUpBig', 'flipInY'][random(3)]}
              isVisible={true}
            >
              <BarChart
                axes
                grid
                margin={{ top: 50, right: 10, bottom: 60, left: 30 }}
                height={resizeSkillsBoard() / 2}
                width={resizeSkillsBoard()}
                data={skills}
              />
            </Animated>
          }
        </Media>
      );
    }

    return skillsData;
  }
}

const mapStateToProps = state => ({
  skills: state.skillsBoard.skills,
  error: state.skillsBoard.error
});

const mapDispatchToProps = dispatch => ({
  onFetchSkills: () => dispatch(actions.fetchSkills())
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillsBoard);
