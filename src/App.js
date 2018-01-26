import React, { Component } from 'react';
import './App.css';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import { faArrowRight } from '@fortawesome/fontawesome-free-solid';


import { Nav } from './Nav';
import { Home } from './Home';
import { Footer } from './Footer';


fontawesome.library.add(brands, faArrowRight);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
