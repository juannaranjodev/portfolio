import React, { Component } from 'react';
import './Footer.css';


import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// eslint-disable-next-line
import brands from '@fortawesome/fontawesome-free-brands';

export class Footer extends Component {
  render() {

    const socialLinks = [
      { icon: <FontAwesomeIcon icon={["fab", "facebook"]} />, link: 'https://www.facebook.com/olbesp' },
      { icon: <FontAwesomeIcon icon={["fab", "linkedin"]} />, link: 'https://www.linkedin.com/in/olbesp/' },
      { icon: <FontAwesomeIcon icon={["fab", "github"]} />, link: 'https://github.com/olbesp' },
    ];

    const socialMedia = socialLinks.map((socialLink, i) => (
      
      <a key={"link_" + i} 
        className="social-media__icon" 
        href={socialLink.link} target="_blank">
        {socialLink.icon}
        
      </a>
    ));

    return (
      <footer className="footer">
        <div className="footer__copyright">Made by me © 2018</div>
        <div className="footer__social">{socialMedia}</div>
      </footer>
    );
  }
}