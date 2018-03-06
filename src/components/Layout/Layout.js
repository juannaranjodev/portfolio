import React, { Component } from 'react';

import styles from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import SocialMedia from '../SocialMedia/SocialMedia';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  }

  render() {
    return (
      <div className={styles.Layout}>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main>{this.props.children}</main>
        <SocialMedia />
      </div>
    );
  }
}

export default Layout;