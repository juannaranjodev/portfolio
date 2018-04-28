import React from 'react';

import styles from './Background.scss';
import Media from 'react-media';

import headerBackgroundXLG from '../../../assets/header-xlg.jpg';
import headerBackgroundLG from '../../../assets/header-lg.jpg';
import headerBackgroundMD from '../../../assets/header-md.jpg';
import headerBackgroundSM from '../../../assets/header-sm.jpg';
import headerBackgroundXS from '../../../assets/header-xs.jpg';
import headerBackgroundXXS from '../../../assets/header-xxs.jpg';

import dayXLG from '../../../assets/background-day-xlg.jpg';
import dayLG from '../../../assets/background-day-lg.jpg';
import dayMD from '../../../assets/background-day-md.jpg';
import daySM from '../../../assets/background-day-sm.jpg';
import dayXS from '../../../assets/background-day-xs.jpg';
import dayXXS from '../../../assets/background-day-xxs.jpg';

import nightXLG from '../../../assets/background-night-xlg.jpg';
import nightLG from '../../../assets/background-night-lg.jpg';
import nightMD from '../../../assets/background-night-md.jpg';
import nightSM from '../../../assets/background-night-sm.jpg';
import nightXS from '../../../assets/background-night-xs.jpg';
import nightXXS from '../../../assets/background-night-xxs.jpg';

const headerImages = {
  xlg: headerBackgroundXLG,
  lg: headerBackgroundLG,
  md: headerBackgroundMD,
  sm: headerBackgroundSM,
  xs: headerBackgroundXS,
  xxs: headerBackgroundXXS
}

const dayImages = {
  xlg: dayXLG,
  lg: dayLG,
  md: dayMD,
  sm: daySM,
  xs: dayXS,
  xxs: dayXXS
}

const nightImages = {
  xlg: nightXLG,
  lg: nightLG,
  md: nightMD,
  sm: nightSM,
  xs: nightXS,
  xxs: nightXXS
}

const background = (props) => {
  const createBackgroundDOM = (imagePath, props) => {
    let backgroundStyle = {
      backgroundImage: `${props.gradient ? `${props.gradient},` : ''} url(${imagePath})`,
      minHeight: '100vh',
      filter: 'grayscale(60%)',
      backgroundAttachment: 'fixed',
      position: 'absolute',
      top: '0',
      left: '0',
      zIndex: '-1'
    };
    if (!props.wallpaper) {
      backgroundStyle = { 
        backgroundImage: `${props.gradient ? `${props.gradient},` : ''} url(${imagePath})`
      };
    }
    return (
      <div
        className={styles.Background}
        style={backgroundStyle}
      >
        {props.children}
      </div>
    );
  };

  let images = headerImages;
  if (props.time) {
    if (props.time === 'day') {
      images = dayImages;
    } else {
      images = nightImages;
    }
  }

  return (
    <Media query={{ minWidth: 1600 }}>
      {matches => matches ?
        createBackgroundDOM(images.xlg, props) :
        <Media query={{ minWidth: 1200 }}>
          {matches => matches ?
            createBackgroundDOM(images.lg, props) :
            <Media query={{ minWidth: 1024 }}>
              {matches => matches ?
                createBackgroundDOM(images.md, props) :
                <Media query={{ minWidth: 768 }}>
                  {matches => matches ?
                    createBackgroundDOM(images.sm, props) :
                    <Media query={{ minWidth: 600 }}>
                      {matches => matches ?
                        createBackgroundDOM(images.xs, props) :
                        createBackgroundDOM(images.xxs, props)
                      }
                    </Media>
                  }
                </Media>
              }
            </Media>
          }
        </Media>
      }
    </Media>
  );
};

export default background;
