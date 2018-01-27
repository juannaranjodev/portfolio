import React, { Component } from 'react';
import './App.css';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import { faArrowRight } from '@fortawesome/fontawesome-free-solid';


import { Nav } from './Nav/Nav';
import { Home } from './Home/Home';
import { Footer } from './Footer/Footer';


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
