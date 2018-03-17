import React, { Component } from 'react';

import styles from './CityImage.css';

class CityImage extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.city !== nextProps.city;
  }

  render() {
    return (
      <div className={styles.city}>
        {this.props.city}
      </div>
    );
  }
}

export default CityImage;