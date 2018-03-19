import React, { Component } from 'react';

import Background from '../../components/UI/Background/Background';
import Container from '../../hoc/Container/Container';
import RoomImage from '../../components/RoomImage/RoomImage';
import Description from './Description/Description';
import SkillsBoard from './SkillsBoard/SkillsBoard';
import DeveloperImage from '../../components/DeveloperImage/DeveloperImage';
import FlowerImage from '../../components/FlowerImage/FlowerImage';
import PageHeader from '../../components/PageHeader/PageHeader';
import Media from 'react-media';

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
    console.log('render about');
    return (
      <Media query="(min-width: 1000px) and (min-height: 768px)">
        {matches => matches ? (
          <Background time={this.props.time} stars={this.props.stars}>
            <Container>
              <RoomImage toggleWindow={this.toggleWindow} openedWindow={this.state.openedWindow}>
                <PageHeader title="Few words about me" />
                <Description time={this.props.time} />
                <DeveloperImage background="withWall" />
                <FlowerImage flowerTree={this.props.flowerTree} />
              </RoomImage>
              <SkillsBoard />
            </Container>
          </Background>
        ) : (
          <Container>
            <PageHeader title="Few words about me" />
            <Description time="night" />
            <DeveloperImage background="noWall" />
            <SkillsBoard />
          </Container>
        )}
      </Media>
    );
  }
}

export default AboutMePage;