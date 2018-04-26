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
          <Layout time={this.state.time}>
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route path="/aboutme" component={AboutMePage} />
              <Route path="/works" component={PortfolioPage} />
              <Route path="/contacts" component={ContactsPage} />
              <Redirect from="/" to="/home" />
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;



