import React from 'react';

import classes from './DrawerToggle.module.css';

const drawerToggle = ({ clicked, sideDrawerOpen }) => {
  let hamburgerMenu = classes.DrawerToggle;

  if (sideDrawerOpen) {
    hamburgerMenu = classes.ShowClose;
  }

  return (
    <div className={classes.DrawerToggleContainer}>
      <button type="submit" onClick={clicked} className={hamburgerMenu}>
        <div />
        <div />
        <div />
      </button>
    </div>
  );
};

export default drawerToggle;