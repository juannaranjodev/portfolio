import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import styles from './App.css';

import Layout from '../../hoc/Layout/Layout';
import HomePage from '../HomePage/HomePage';
import AboutMePage from '../AboutMePage/AboutMePage';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import ContactsPage from '../ContactsPage/ContactsPage';

import { checkDayTime } from '../../utilities';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';

fontawesome.library.add(brands);

class App extends Component {
  state = {
    time: checkDayTime()
  }

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className={styles.App}>
          <Layout>
            <Switch>
              <Route path="/home" render={() => {
                return <HomePage stars={this.state.stars} time={this.state.time} city={this.state.city} />}
              } />
              <Route path="/aboutme" render={() => {
                return <AboutMePage stars={this.state.stars} time={this.state.time} flowerTree={this.state.flowerTree} />}
              } />
              <Route path="/works" render={() => {
                return <PortfolioPage stars={this.state.stars} time={this.state.time} />} 
              }/>
              <Route path="/contacts" render={() => {
                return <ContactsPage time={this.state.time} stars={this.state.stars} />}
              } />
              <Redirect from="/" to="/home" />
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;



