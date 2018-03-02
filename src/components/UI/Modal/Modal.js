import React, { Component } from 'react';

import styles from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    console.log(this.props.content);
    let modal = <div></div>;
    if (this.props.content) {
      modal = (
        <Aux>
          <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
          <div
            className={styles.Modal}
            style={{
              transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
              opacity: this.props.show ? '1' : '0'
            }}>
            {this.props.content.title}
          </div>
        </Aux>
      );
    }
    return modal;
  }
}

export default Modal;