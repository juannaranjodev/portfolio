import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import styles from './App.css';
import Layout from '../../hoc/Layout/Layout';
import HomePage from '../HomePage/HomePage';
import AboutMePage from '../AboutMePage/AboutMePage';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import ContactsPage from '../ContactsPage/ContactsPage';

import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';

fontawesome.library.add(brands);

export const random = limit => Math.floor(Math.random() * limit);

class App extends Component {
  state = {
    time: null,
    flowerTree: null
  }

  checkDayTime = () => {
    const time = new Date();
    this.setState({
      time: time.getHours() > 5 && time.getHours() < 20 ? 'day' : 'night'
    });
  }

  createFlowerTree = () => {
    const flowerTree = [];
    const huesOfGreen = [
      '#1c662c',
      '#2a4c31',
      '#569946',
      '#225915'
    ];
    for (let i = 0; i < random(20) + 90; i++) {
      flowerTree.push(
        <div key={flowerTree.length} style={{
          position: 'absolute',
          zIndex: '10',
          width: '5rem',
          height: '3rem',
          borderRadius: '100% 100% 0 100%',
          border: '1px solid #102c0f',
          boxShadow: '-5px 5px 5px rgba(0, 0, 0, .3)',
          top: `${-50 + random(150)}%`,
          left: `${-50 + random(150)}%`,
          backgroundColor: huesOfGreen[random(huesOfGreen.length)],
          transform: `rotate(${random(360)}deg)`
        }}></div>
      );
    }
    this.setState({ flowerTree });
  }

  componentDidMount() {
    this.checkDayTime();
    this.createFlowerTree();
  }

  render() {
    return (
      <BrowserRouter>
        <div className={styles.App}>
          <Layout>
            <Switch>
              <Route path="/home" render={() => <HomePage time={this.state.time} />} />
              <Route path="/aboutme" render={() => <AboutMePage time={this.state.time} flowerTree={this.state.flowerTree} />} />
              <Route path="/portfolio" render={() => <PortfolioPage time={this.state.time} />} />
              <Route path="/contacts" render={() => <ContactsPage time={this.state.time} />} />
              <Redirect from="/" to="/home" />
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
