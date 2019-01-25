import React, { Fragment, Component } from 'react';
import { graphql } from 'gatsby';
import { Parallax, ParallaxLayer } from 'react-spring/addons';
import Img from 'gatsby-image';

import Hero from '../components/Hero/Hero';
import FlexText from '../components/FlexText/FlexText';
import Card from '../components/Card/Card';
import SEO from '../components/SEO/SEO';
import Toolbar from '../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../components/Navigation/SideDrawer/SideDrawer';
import TextImage from '../components/TextImage/TextImage';

import '../components/layout.css';

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navTransparent: true,
      showSideDrawer: false,
      currentPage: 0,
    };

    this.sideDrawerCloseHandler = this.sideDrawerCloseHandler.bind(this);
    this.sideDrawerToggleHandler = this.sideDrawerToggleHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener(
      'scroll',
      e => {
        const currentPage = Math.round(
          this.parallax.current / this.parallax.space
        );
        if (currentPage !== 0 && this.state.navTransparent !== false) {
          this.setState({ navTransparent: false, currentPage });
        } else if (currentPage === 0 && this.state.navTransparent !== true) {
          this.setState({ navTransparent: true, currentPage });
        } else if (currentPage !== this.state.currentPage) {
          this.setState({ currentPage });
        }
      },
      true
    );
  }

  sideDrawerCloseHandler() {
    this.setState({ showSideDrawer: false });
  }

  sideDrawerToggleHandler() {
    this.setState(prevState => ({ showSideDrawer: !prevState.showSideDrawer }));
  }

  render() {
    const { data } = this.props;
    const { navTransparent, showSideDrawer, currentPage } = this.state;
    return (
      <Fragment>
        <SEO />
        <Toolbar
          page0={() => this.parallax.scrollTo(0)}
          page1={() => this.parallax.scrollTo(1)}
          page2={() => this.parallax.scrollTo(2)}
          page3={() => this.parallax.scrollTo(3)}
          activeLink={currentPage}
          isNavTransparent={navTransparent}
          drawerClicked={this.sideDrawerToggleHandler}
          sideDrawerOpen={showSideDrawer}
        />
        <SideDrawer
          open={showSideDrawer}
          closed={this.sideDrawerCloseHandler}
          page0={() => this.parallax.scrollTo(0)}
          page1={() => this.parallax.scrollTo(1)}
          page2={() => this.parallax.scrollTo(2)}
          page3={() => this.parallax.scrollTo(3)}
          activeLink={currentPage}
        />
        <Parallax pages={4} ref={ref => (this.parallax = ref)}>
          <ParallaxLayer
            offset={0}
            speed={0.2}
            onClick={() => this.parallax.scrollTo(1)}
          >
            <Hero images={data.flowers.edges} />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1.1}
            speed={0.2}
            // onClick={() => this.parallax.scrollTo(2)}
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
            </FlexText>
          </ParallaxLayer>
          <ParallaxLayer
            offset={2.1}
            speed={0.2}
            // onClick={() => this.parallax.scrollTo(3)}
          >
            <TextImage
              img={data.autumn.childImageSharp.fixed}
              title="Selbsthilfegruppentreffen"
            >
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
            </TextImage>
          </ParallaxLayer>
          <ParallaxLayer
            offset={3}
            speed={0.2}
            // onClick={() => this.parallax.scrollTo(0)}
          >
            <Card title="Kontakt">
              <p
                style={{
                  marginTop: '30px',
                  fontSize: '1.2em',
                  fontWeight: 'bold',
                }}
              >
                Selbsthilfegruppe Stottern für Betroffene
              </p>
              <Img fixed={data.speech.childImageSharp.fixed} />
              <p
                style={{
                  textDecoration: 'underline',
                }}
              >
                Leiterin der Selbsthilfegruppe
              </p>
              <p>Gudrun Reden</p>
              <p>
                E-Mail:{' '}
                <a href="mailto: beispielmail@test.it">beispielmail@test.it</a>
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
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    autumn: file(relativePath: { regex: "/^autumn.*/" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    speech: file(relativePath: { regex: "/^speech.*/" }) {
      childImageSharp {
        fixed(width: 64, height: 64) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
