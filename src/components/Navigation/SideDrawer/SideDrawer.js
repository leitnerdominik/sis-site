import React, { Fragment } from 'react';

import Backdrop from '../../Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';

import classes from './SideDrawer.module.css';

const sideDrawer = props => {
  const { open, closed, page0, page1, page2, page3, activeLink } = props;

  let attachedClasses = [classes.SideDrawer, classes.Close];

  if (open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Fragment>
      <Backdrop show={open} clicked={closed} />
      <div className={attachedClasses.join(' ')} onClick={closed}>
        <div className={classes.Logo}>
          <Logo clicked={page0} />
        </div>
        <nav>
          <NavigationItems pages={[page1, page2, page3]} activeLink={activeLink} />
        </nav>
      </div>
    </Fragment>
  );
};

export default sideDrawer;
