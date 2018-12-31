import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';

import classes from './Toolbar.module.css';

const toolbar = ({page1, page2, page3}) => (
  <div className={classes.Container}>
    <nav>
      <NavigationItems pages={[page1, page2, page3]}/>
    </nav>
  </div>
);

export default toolbar;