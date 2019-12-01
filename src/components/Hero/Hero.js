import React from 'react';
// import Slider from 'react-slick';
// import '../../../node_modules/slick-carousel/slick/slick.css';
// import '../../../node_modules/slick-carousel/slick/slick-theme.css';

import classes from './Hero.module.css';

const hero = ({scrollToContact}) => {

  return (
    <div className={classes.Hero}>
      <h2 className={classes.Title}>
        Selbsthilfegruppe Stottern für Betroffene
      </h2>
      <div className={classes.Container}>
        <p className={classes.Text}>
          Wir treffen uns jeden ersten Freitag im Monat um 19:30 Uhr im
          Sozialsprengel Brixen-Umgebung
        </p>
        <button onClick={scrollToContact} className={classes.Btn}>Kontakt</button>
      </div>
    </div>
  );
};

export default hero;
