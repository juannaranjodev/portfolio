import React, { Component } from 'react';
import './Nav.css';

export class Nav extends Component {
  render() {

    const menu = [
      {name: 'Home', target: '#section-home'},
      {name: 'About me', target: '#section-about'},
      {name: 'Projects', target: '#section-projects'},
      {name: 'Contacts', target: '#section-contacts'}
    ];

    const menuItems = menu.map((menuItem, i) => (
      <li key={"menuItem_" + i} className="navigation__item">
        <a href={menuItem.target} className="navigation__link">
          {menuItem.name}
        </a>
      </li>
    ));

    return (
      <nav className="navigation">
        <ul className="navigation__list">
          {menuItems}
        </ul>
      </nav>
    );
  }
}