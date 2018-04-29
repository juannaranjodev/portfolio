import React from 'react';

import styles from './NavigationMenu.scss';
import NavigationItem from './NavigationItem/NavigationItem';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Media from 'react-media';

const navigationMenu = () => {
  const menu = [
    { name: 'home', path: '/home', icon: 'home' },
    { name: 'about me', path: '/aboutme', icon: 'user-secret' },
    { name: 'works', path: '/works', icon: 'image' },
    { name: 'contacts', path: '/contacts', icon: 'envelope' }
  ];

  const createNavItems = (isSmallDevice) => (
    menu.map((navItem, index) => (
      <NavigationItem 
        key={index}
        path={navItem.path}
        tooltip={!isSmallDevice ? navItem.name.toUpperCase() : null}
      >
        <FontAwesomeIcon icon={navItem.icon} />
        { isSmallDevice && ` ${navItem.name.toUpperCase()}` }
      </NavigationItem>
    ))
  );

  const navItems = (
    <Media query={{ maxWidth: 1024 }}>
      {matches => matches ?
        createNavItems(true) :
        createNavItems(false)
      }
    </Media>
  );

  return (
    <ul className={styles.NavigationMenu}>
      {navItems}
    </ul>
  );
};
export default navigationMenu;