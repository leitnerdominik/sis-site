import React, { Fragment, Component } from 'react';
import { graphql } from 'gatsby';
import { Parallax, ParallaxLayer } from 'react-spring/addons';
import Img from 'gatsby-image';

// import Layout from '../components/layout';
import Hero from '../components/Hero/Hero';
import FlexText from '../components/FlexText/FlexText';
import Card from '../components/Card/Card';
import SEO from '../components/SEO/SEO';
import Toolbar from '../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../components/Navigation/SideDrawer/SideDrawer';
import TextImage from '../components/TextImage/TextImage';
import Description from '../components/Description/Description';

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
        } else if (currentPage !== this.state.currentPage && currentPage) {
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
          <ParallaxLayer offset={0} speed={0.2}>
            <Hero scrollToContact={() => this.parallax.scrollTo(3)} />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1.2}
            speed={0.2}
            // onClick={() => this.parallax.scrollTo(2)}
          >
            <FlexText title="Selbsthilfegruppe Stottern für Betroffene">
              <Description />
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
                  fontSize: '1.1em',
                  fontWeight: 'bold',
                }}
              >
                Selbsthilfegruppe Stottern für Betroffene
              </p>
              <Img fixed={data.speech.childImageSharp.fixed} />
              <p>Leiterin: Gudrun Reden</p>
              <p>
                <span role="img" aria-label="E-Mail">📧{'  '}</span>
                <a href="mailto: sis.stottern@gmail.com">
                  sis.stottern@gmail.com
                </a>
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
