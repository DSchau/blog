import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import NavigationButton from './NavigationButton';

import particlesConfig from '../json/particles-config.json';

import '../css/particle-styles.css';
import { animateBackground, animateShake } from '../css/animations';

const Header = styled.header`
  ${animateBackground} ${animateShake} height: ${props =>
      props.isPost ? '15vh' : '25vh'};
  background-color: #ffa81f;
  color: blue;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#ffa81f, #d85d15);
  background-size: 250% 250%;
  animation: animateBg 10s ease infinite;
  font-weight: 400;
  transition: height 250ms ease-in-out;
  user-select: none;
  @media only screen and (min-width: 768px) {
    height: ${props => (props.isPost ? '30vh' : '45vh')};
  }
`;

const Name = styled.h1`
  display: flex;
  flex-wrap: wrap;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 700;
  align-items: center;
  transition: font-size 250ms ease-in-out, padding 150ms ease-in;
  background-color: #002635;
  color: white;
  padding: 0.5rem 1rem;
  margin: 0;
  width: auto;
  user-select: text;
  .wf-active & {
    font-family: 'Montserrat', sans-serif;
  }
  @media only screen and (min-width: 375px) {
    font-size: 2.5rem;
  }
  @media only screen and (min-width: 768px) {
    font-size: 4.5rem;
    padding: 1rem 2rem;
  }
`;

const Letter = styled.span`
  display: inline-block;
  position: relative;
  z-index: 3;
  &:hover {
    animation: shake 1000ms ease-in-out;
  }
`;

const First = styled.span`
  padding-right: 2vw;
  font-weight: 700;
  white-space: nowrap;
`;

const Last = styled.span`
  font-weight: 400;
  white-space: nowrap;
`;

const NoWrap = styled.span`white-space: nowrap;`;

const StyledLink = styled(Link)`
  color: inherit;
`;

const BackContainer = styled.div`
  position: fixed;
  z-index: 2;
  top: 4px;
  left: 0;
`;

class BlogHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showBackButton: false
    };
  }

  componentDidMount() {
    this.setState({
      showBackButton: document.referrer.match('dustinschau')
    });

    require.ensure('particles.js', () => {
      this.Particles = require('particles.js');
      this.Particles(`blog-header`, particlesConfig);
    }, 'particles.js');
  }

  componentWillUnmount() {
    if (this.Particles) {
      this.Particles.destroy();
    }
  }

  render() {
    const { showBackButton } = this.state;
    return (
      <Header id="blog-header" {...this.props}>
        {
          showBackButton &&
          <BackContainer>
            <NavigationButton to="https://www.dustinschau.com" prev>Back to Home</NavigationButton>
          </BackContainer>
        }
        <Name className="name">
          <StyledLink to="/">
            <First>
              {'Dustin'.split('').map((letter, index) =>
                <Letter key={`${letter}-${index}`}>
                  {letter}
                </Letter>
              )}
            </First>
            <Last>
              {'Schau'.split('').map((letter, index) =>
                <Letter key={`${letter}-${index}`}>
                  {letter}
                </Letter>
              )}
            </Last>
          </StyledLink>
        </Name>
      </Header>
    );
  }
}

export default BlogHeader;
