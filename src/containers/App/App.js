import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Layout from '../../hoc/Layout/Layout';
import HomePage from '../HomePage/HomePage';
import AboutMePage from '../AboutMePage/AboutMePage';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import ContactsPage from '../ContactsPage/ContactsPage';

import { checkDayTime } from '../../utilities';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import faHome from '@fortawesome/fontawesome-free-solid/faHome';
import faUserSecret from '@fortawesome/fontawesome-free-solid/faUserSecret';
import faImage from '@fortawesome/fontawesome-free-solid/faImage';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import faCode from '@fortawesome/fontawesome-free-solid/faCode';
import faLink from '@fortawesome/fontawesome-free-solid/faLink';

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
              <Route path="/home" component={HomePage} />
              <Route path="/aboutme" component={AboutMePage} />
              <Route path="/works" component={PortfolioPage} />
              <Route path="/contacts" component={ContactsPage} />
              <Redirect from="/" to="/home" />
            </Switch>
          </Layout>
        </BrowserRouter>
      </TimeContext.Provider>
    );
  }
}

export default App;



