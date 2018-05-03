import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Layout from '../../hoc/Layout/Layout';
import asyncComponent from '../../hoc/AsyncComponent/AsyncComponent';

import { checkDayTime } from '../../utilities';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import faHome from '@fortawesome/fontawesome-free-solid/faHome';
import faUserSecret from '@fortawesome/fontawesome-free-solid/faUserSecret';
import faImage from '@fortawesome/fontawesome-free-solid/faImage';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import faCode from '@fortawesome/fontawesome-free-solid/faCode';
import faLink from '@fortawesome/fontawesome-free-solid/faLink';

const AsyncHome = asyncComponent(() => import('../HomePage/HomePage'));
const AsyncAboutMe = asyncComponent(() => import('../AboutMePage/AboutMePage'));
const AsyncPortfolio = asyncComponent(() => import('../PortfolioPage/PortfolioPage'));
const AsyncContacts = asyncComponent(() => import('../ContactsPage/ContactsPage'));

fontawesome.library.add(
  brands, faHome, faUserSecret, faImage, faEnvelope, faCode, faLink
);

export const TimeContext = React.createContext(checkDayTime());

class App extends Component {

  render() {
    return (
      <TimeContext.Provider value={checkDayTime()}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Layout>
            <Switch>
              <Route path="/home" component={AsyncHome} />
              <Route path="/aboutme" component={AsyncAboutMe} />
              <Route path="/works" component={AsyncPortfolio} />
              <Route path="/contacts" component={AsyncContacts} />
              <Redirect from="/" to="/home" />
            </Switch>
          </Layout>
        </BrowserRouter>
      </TimeContext.Provider>
    );
  }
}

export default App;



