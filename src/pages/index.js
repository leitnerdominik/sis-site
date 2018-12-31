import React, { Fragment, Component } from 'react';
import { graphql } from 'gatsby';
import { Parallax, ParallaxLayer } from 'react-spring/addons';

import Layout from '../components/layout';
import Hero from '../components/Hero/Hero';
import FlexText from '../components/FlexText/FlexText';
import Card from '../components/Card/Card';
import SEO from '../components/SEO/SEO';
import Toolbar from '../components/Navigation/Toolbar/Toolbar';

import TreeSilhouette from '../svg/abstract-tree-silhouette';

class IndexPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <SEO />
        <Toolbar
          page1={() => this.parallax.scrollTo(1)}
          page2={() => this.parallax.scrollTo(2)}
          page3={() => this.parallax.scrollTo(3)}
        />
        <Parallax
          pages={4}
          // scrolling={false}
          ref={ref => (this.parallax = ref)}
        >
          <ParallaxLayer
            offset={0}
            speed={0.2}
            onClick={() => this.parallax.scrollTo(1)}
          >
            <Hero images={data.flowers.edges} />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={0.2}
            onClick={() => this.parallax.scrollTo(2)}
          >
            <FlexText title="Kurzbeschreibung">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
            </FlexText>
            <TreeSilhouette />
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={0.2}
            onClick={() => this.parallax.scrollTo(3)}
          >
            <Card title="Unsere Selbsthilfegruppentreffen">
              <p>
                Jeden ersten Freitag im Monat um 19:30 Uhr im Sozialsprengel
                Brixen-Umgebung
                <br />
                Kapuzinergasse 2<br />
                39042 Brixen
              </p>
              <p>
                Einzelgespräche mit der Leiterin der Selbsthilfegruppe sind auch
                unabhängig von der Gruppentreffen möglich.
              </p>
            </Card>
          </ParallaxLayer>
          <ParallaxLayer
            offset={3}
            speed={0.2}
            onClick={() => this.parallax.scrollTo(0)}
          >
            <Card title="Kontakt">
              <p>Gudrun Reden</p>
              <p>
                E-Mail: <a href="mailto: gudrun@reden.it">gudrun@reden.it</a>
              </p>
            </Card>
          </ParallaxLayer>
        </Parallax>
      </Fragment>
    );
  }
}

export default IndexPage;

export const query = graphql`
  {
    flowers: allFile(filter: { relativePath: { regex: "/^flower.*/" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxHeight: 1100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`;
