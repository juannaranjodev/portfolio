import React, { Component } from 'react';

import styles from './AboutMePage.scss';
import Container from '../../hoc/Container/Container';
import Description from './Description/Description';
import SkillsBoard from './SkillsBoard/SkillsBoard';
import PageHeader from '../../components/PageHeader/PageHeader';

class AboutMePage extends Component {
  render() {
    return (
      <Container>
        <PageHeader title="Few words about me" />
        <div className={styles.AboutMePage}>
          <SkillsBoard />
          <Description />
        </div>
      </Container>
    );
  }
}

export default AboutMePage;
