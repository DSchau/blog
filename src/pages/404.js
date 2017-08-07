import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { fadeInBottom } from '../css/animations';

import ImageShift from '../components/ImageShift';
import FourOhFour from '../images/404.jpeg';

const Container = styled.div`
  ${fadeInBottom};
  max-width: 100%;
  transform: translateY(16px) scale(.99);
  transform-origin: 50% 0;
  opacity: 0;
  animation: fade-in-bottom 0.3s cubic-bezier(.39, .575, .565, 1) both;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Header = styled.h1`
  color: white;
  padding: 1rem 2rem;
  position: absolute;
  z-index: 2;
  font-size: 72px;
  text-transform: uppercase;
  text-align: center;
  font-family: Georgia, serif;
  line-height: 96px;
  .wf-active & {
    font-family: 'Bitter', Georgia, serif;
  }
`;

const Image = styled(ImageShift)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export default class OhNoFourOhFour extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>404 - Not Found</title>
        </Helmet>
        <Container>
          <ImageContainer>
            <Header>Oh no! 404!</Header>
            <Image src={FourOhFour} />
          </ImageContainer>
        </Container>
      </div>
    );
  }
}
