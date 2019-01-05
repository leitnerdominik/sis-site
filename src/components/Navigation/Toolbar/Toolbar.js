import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../DrawerToggle/DrawerToggle';
import Logo from '../../Logo/Logo';

import classes from './Toolbar.module.css';

const toolbar = props => {
  const {
    page0,
    page1,
    page2,
    page3,
    isNavTransparent,
    drawerClicked,
    sideDrawerOpen,
    activeLink,
  } = props;

  const navBarClasses = [classes.Container];
  if (!isNavTransparent) {
    navBarClasses.push(classes.Solid);
  }

  return (
    <div className={navBarClasses.join(' ')}>
      <DrawerToggle clicked={drawerClicked} sideDrawerOpen={sideDrawerOpen} />
      <div className={classes.Toolbar}>
        <div className={classes.DesktopOnly}>
          <Logo clicked={page0} isSolid={!isNavTransparent}/>
        </div>
        <nav className={classes.NavItems}>
          <NavigationItems activeLink={activeLink} pages={[page1, page2, page3]} />
        </nav>
      </div>
    </div>
  );
};

export default toolbar;
