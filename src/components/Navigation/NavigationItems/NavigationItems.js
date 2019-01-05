import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.css';

const navigationItems = ({ pages, activeLink }) => {
  let link1 = false;
  if (activeLink === 1) {
    link1 = true;
  }
  console.log(activeLink, link1)

  return (
    <ul className={classes.Nav}>
      <NavigationItem isActive={link1} click={pages[0]}>Beschreibung</NavigationItem>
      <NavigationItem click={pages[1]}>Treffen</NavigationItem>
      <NavigationItem click={pages[2]}>Kontakt</NavigationItem>
    </ul>
  );
};

export default navigationItems;
