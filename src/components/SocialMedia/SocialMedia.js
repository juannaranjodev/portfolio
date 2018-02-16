import React from 'react';

import styles from './SocialMedia.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const socialMedia = () => {
  const socialProfiles = [
    { link: "https://github.com/olbesp", icon: ["fab", "github"] },
    { link: "https://www.linkedin.com/in/olbesp/", icon: ["fab", "linkedin"] },
    { link: "https://www.facebook.com/olbesp", icon: ["fab", "facebook"] }
  ];

  const icons = socialProfiles.map((profile, index) => {
    return (
      <li key={index}>
        <a href={profile.link}
          style={{animationDelay: `${index + 0.5}s`}}
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={profile.icon} />
        </a>
      </li>    
    );
  });

  return (
    <footer className={styles.SocialMedia}>
      <div>Made by me © 2018</div>
      <ul>
        {icons}
      </ul>
    </footer>
  );
};


export default socialMedia;