import React from 'react';

import styles from './SocialMedia.scss';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Animated } from 'react-animated-css';
import Background from '../UI/Background/Background';

const socialMedia = () => {
  const socialProfiles = [
    { link: "https://github.com/olbesp", title: 'github', icon: ["fab", "github"] },
    { link: "https://www.linkedin.com/in/olbesp/", title: 'linkedin', icon: ["fab", "linkedin"] },
    { link: "https://www.facebook.com/olbesp", title: 'facebook', icon: ["fab", "facebook"] }
  ];

  const icons = socialProfiles.map((profile, index) => {
    return (
      <li key={index} className={styles.SocialMedia__list__item}>
        <a href={profile.link}
          className={styles.SocialMedia__link}
          style={{animationDelay: `${index / 8}s`, display: 'flex'}}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Animated
            animationIn='rollIn'
            isVisible={true}
            animationInDelay={200 * index}
            className={styles.SocialMedia__link__icon}
          >
            <FontAwesomeIcon icon={profile.icon} />
          </Animated>
          <Animated
            animationIn='fadeInDown'
            isVisible={true}
            animationInDelay={300 * index}
            className={styles.SocialMedia__link__title}
          >
            <span>{profile.title}</span>
          </Animated>
        </a>
      </li>    
    );
  });

  return (
    <Background gradient="linear-gradient(90deg, rgba(67, 206, 162, .3), rgba(24, 90, 157, .3))">
      <div className={styles.SocialMedia}>
        <ul className={styles.SocialMedia__list}>
          {icons}
        </ul>
      </div>
    </Background>
  );
};


export default socialMedia;