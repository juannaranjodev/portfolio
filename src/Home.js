import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './Home.css';


export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: [
        'A simple guy who wants to create really cool things',
        'Elegant solutions in the least amount of time',
        '#1 goal - to meet your needs and deadline'
      ]
    }
    this.selectRandomMessage = this.selectRandomMessage.bind(this);
    this.setTransparencyHandle = this.setTransparencyHandle.bind(this);
    this.setVisibilityHandle = this.setVisibilityHandle.bind(this);
    
  }

  selectRandomMessage() {
    return Math.floor(Math.random() * this.state.message.length);
  }

  setTransparencyHandle() {
    document.querySelector('.Home__background-filter').style.opacity = '0';
  }

  setVisibilityHandle() {
    document.querySelector('.Home__background-filter').style.opacity = '1';
  }

  render() {
    return (
      <div className="Home" id="section-home" 
        onMouseOver={this.setTransparencyHandle}
        onMouseOut={this.setVisibilityHandle}>
        <div className="Home__background-filter"></div>
        <div className="Home__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--sub-1">Front-end Web Developer</span>
            <span className="heading-primary--main">Oleksii Bespalko</span>
            <span className="heading-primary--sub">{this.state.message[this.selectRandomMessage()]}</span>
          </h1>
          <a href="#projects" id="Home-btn" className="btn btn--blue animated">
            Projects <FontAwesomeIcon icon="arrow-right" className="btn__arrow" />
          </a>
        </div>
      </div>
    );
  }
}