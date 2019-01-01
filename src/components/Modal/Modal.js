import React, { Component, Fragment } from 'react';

import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps) {
    const { show, children } = this.props;
    return nextProps.show !== show || nextProps.children !== children;
  }

  render() {
    const { show, modalClosed, children } = this.props;
    return (
      <Fragment>
        <Backdrop show={show} clicked={modalClosed} />
        <div
          className={classes.ModalContainer}
          style={{
            transform: show ? 'translateX(0)' : 'translateX(-500vh)',
            opacity: show ? '1' : '0',
          }}
          onClick={modalClosed}
        >
          <div className={classes.Modal}>{children}</div>
        </div>
      </Fragment>
    );
  }
}

export default Modal;