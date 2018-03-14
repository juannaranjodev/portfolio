import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import styles from './App.css';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import PortfolioPage from './components/PortfolioPage/PortfolioPage';

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
              <Route path="/home" component={Home} />
              <Route path="/aboutme" component={AboutMe} />
              <Route path="/portfolio" component={PortfolioPage} />
              <Route path="/contacts" component={Home} />
              <Redirect from="/" to="/home" />
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
