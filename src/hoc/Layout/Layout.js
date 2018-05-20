import React, { Component } from 'react';

import styles from './Layout.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Background from '../../components/UI/Background/Background';
import { TimeContext } from '../../containers/App/App';

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
        <TimeContext.Consumer>
          {
            time => <Background 
              wallpaper time={time}
              gradient="linear-gradient(90deg, rgba(67, 206, 162, .3), rgba(24, 90, 157, .3))"
            />
          }
        </TimeContext.Consumer>
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
      </div>
    );
  }
}

export default Layout;
