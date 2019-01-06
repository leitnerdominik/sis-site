import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.css';

const navigationItems = ({ pages, activeLink }) => {
  let link1 = false,
    link2 = false,
    link3 = false;
  if (activeLink === 1) {
    link1 = true;
  } else if (activeLink === 2) {
    link2 = true;
  } else if (activeLink === 3) {
    link3 = true;
  }

  return (
    <ul className={classes.Nav}>
      <NavigationItem isActive={link1} click={pages[0]}>
        Beschreibung
      </NavigationItem>
      <NavigationItem isActive={link2} click={pages[1]}>
        Treffen
      </NavigationItem>
      <NavigationItem isActive={link3} click={pages[2]}>
        Kontakt
      </NavigationItem>
    </ul>
  );
};

export default navigationItems;
