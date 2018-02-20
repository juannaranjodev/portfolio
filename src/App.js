import React, { Component } from 'react';

import './App.css';
import Layout from './components/Layout/Layout';
// import Home from './containers/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';

import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';

fontawesome.library.add(brands);

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <AboutMe />
        </Layout>
      </div>
    );
  }
}

export default App;
