import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Hero from '../components/Hero/Hero';

const IndexPage = () => (
  <Fragment>
    <Hero />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Fragment>
);

export default IndexPage;
