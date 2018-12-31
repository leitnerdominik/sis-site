import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.css';

const navigationItems = ({ pages }) => {
  console.log(pages[0]);
  return (
    <ul className={classes.Nav}>
      <NavigationItem click={pages[0]}>Beschreibung</NavigationItem>
      <NavigationItem click={pages[1]}>Treffen</NavigationItem>
      <NavigationItem click={pages[2]}>Kontakt</NavigationItem>
    </ul>
  );
};

export default navigationItems;
