import React, { Component } from 'react';

import styles from './AboutMePage.css';
import Background from '../../components/UI/Background/Background';
import Container from '../../hoc/Container/Container';
import RoomImage from '../../components/RoomImage/RoomImage';
import Description from './Description/Description';
import SkillsBoard from './SkillsBoard/SkillsBoard';
import DeveloperImage from '../../components/DeveloperImage/DeveloperImage';
import PageHeader from '../../components/PageHeader/PageHeader';

class AboutMePage extends Component {
  state = {
    openedWindow: true
  }

  toggleWindow = (e) => {
    if (e.target.id === 'opened' || e.target.parentNode.id === 'opened') {
      this.setState({ openedWindow: !this.state.openedWindow });
    }
  }

  render() {

    let aboutMePage = (
      <Container>
        <PageHeader title="Few words about me" />
        <div className={styles.AboutMePage}>
          <Description time="night" />
          <DeveloperImage background="noWall" />
        </div>
        <SkillsBoard />
      </Container>
    );
    
    if (window.innerWidth >= 1000) {
      aboutMePage = (
        <Background time={this.props.time}>
          <Container>
            <RoomImage toggleWindow={this.toggleWindow} openedWindow={this.state.openedWindow}>
              <PageHeader title="Few words about me" />
              <div className={styles.AboutMePage}>
                <Description time={this.props.time} />
                <DeveloperImage background="withWall" />
              </div>
            </RoomImage>
            <SkillsBoard />
          </Container>
        </Background>
      );
    }
    return aboutMePage;
  }
}

export default AboutMePage;