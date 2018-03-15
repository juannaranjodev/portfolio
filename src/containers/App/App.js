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

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className={styles.App}>
          <Layout>
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route path="/aboutme" component={AboutMePage} />
              <Route path="/portfolio" component={PortfolioPage} />
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
