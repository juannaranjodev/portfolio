import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import styles from './App.css';
import backgroundStyles from '../../components/UI/Background/Background.css';
import cityImageStyles from '../../components/CityImage/CityImage.css';
import flowerImageStyles from '../../components/FlowerImage/FlowerImage.css';

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
    stars: null,
    city: null,
    flowerTree: null
  }

  checkDayTime = () => {
    const time = new Date();
    this.setState({
      time: time.getHours() > 5 && time.getHours() < 20 ? 'day' : 'night'
    });
  }

  createStars = () => {
    const stars = [];
    for (let i = 0; i < random(5) + 10; i++) {
      stars.push(
        <div 
          className={backgroundStyles.star}
          style={{
            top: `${random(60)}%`,
            left: `${random(100)}%`
          }}
        >
        </div>
      )
    }
    this.setState({ stars });
  }

  buildCity = () => {
    let styleOfHouse = cityImageStyles.house;
    let styleOfAerial = cityImageStyles.aerial;
    if (this.state.time === 'night') {
      styleOfHouse = [cityImageStyles.house, cityImageStyles[this.state.time]].join(' ');
      styleOfAerial = [cityImageStyles.aerial, cityImageStyles[this.state.time]].join(' ');
    }

    const buildFlats = (houseWidth, houseHeight) => {
      let flats = [];
      let limit = houseWidth * houseHeight;
      let flatSize = houseWidth / (random(3) + 5);
      while (limit > 0) {
        flats.push(
          <span className={cityImageStyles.flat} key={flats.length} style={{
            width: flatSize,
            height: flatSize,
            backgroundColor: `${['#fff', '#050505'][random(2)]}`
          }}></span>
        );
        limit -= flatSize * flatSize;
      }
      return flats;
    }
    const city = [];
    let widthReminder = window.innerWidth;
    while (widthReminder > 0) {
      let houseWidth = random(10) + 30;
      let houseHeight = random(150) + random(50);
      let aerialHeight = random(houseHeight / 3);
      city.push(
        <div key={city.length} className={styleOfHouse} style={{ width: houseWidth, height: houseHeight }}>
          <div className={styleOfAerial} style={{
            width: `${random(3) + 1}px`,
            height: aerialHeight,
            top: -aerialHeight,
            left: `${random(95)}%`
          }}>
            {
              this.state.time === 'night' &&
                ((houseHeight >= 140 && aerialHeight >= 43) ||
                  (houseHeight >= 180 && aerialHeight >= 14)) ?
                <div className={cityImageStyles.signal} style={{ animationDelay: `${Math.random() * 1}s` }}></div> : null
            }
          </div>
          {
            this.state.time === 'night' ? buildFlats(houseWidth, houseHeight) : null
          }
        </div>);
      widthReminder -= houseWidth;
    }
    this.setState({ city });
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
        <div key={flowerTree.length} className={flowerImageStyles.leave} style={{
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.time !== this.state.time) {
      this.buildCity();
      if (this.state.time === 'night') {
        this.createStars();
      }
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className={styles.App}>
          <Layout>
            <Switch>
              <Route path="/home" render={() => <HomePage stars={this.state.stars} time={this.state.time} city={this.state.city} />} />
              <Route path="/aboutme" render={() => <AboutMePage stars={this.state.stars} time={this.state.time} flowerTree={this.state.flowerTree} />} />
              <Route path="/portfolio" render={() => <PortfolioPage stars={this.state.stars} time={this.state.time} />} />
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



