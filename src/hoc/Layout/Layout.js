import React, { Component } from 'react';

import styles from './Layout.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Background from '../../components/UI/Background/Background';

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
        <Background time={this.props.time} wallpaper>
          <Toolbar 
            drawerToggleClicked={this.sideDrawerToggleHandler}
            open={this.state.showSideDrawer}
            closed={this.sideDrawerClosedHandler}
          />
          <SideDrawer
            open={this.state.showSideDrawer}
            closed={this.sideDrawerClosedHandler}
          />
          <main className={styles.content}>
            {this.props.children}
          </main>
        </Background>
      </div>
    );
  }
}

export default Layout;