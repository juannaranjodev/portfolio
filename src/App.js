import React, { Component } from 'react';
import './App.css';
import { Nav } from './Nav';
import { Home } from './Home';
import { Footer } from './Footer';


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
