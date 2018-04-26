import React, { Component } from 'react';

import Container from '../../hoc/Container/Container';
import Description from './Description/Description';
import SkillsBoard from './SkillsBoard/SkillsBoard';
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
    return (
      <Container>
        <PageHeader title="Few words about me" />
        <Description time={this.props.time} />
        <SkillsBoard />
      </Container>
    );
  }
}

export default AboutMePage;