import React from 'react';
import styled from 'styled-components';
import { rhythm } from '../utils/typography';

import SocialIcons from './SocialIcons';

import me from '../images/me.jpeg';

const Container = styled.div`
  display: flex;
  margin: ${rhythm(1)} auto;
  margin-bottom: 0;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media only screen and (min-width: 768px) {
    max-width: 75%;
  }
`;

const Image = styled.img`
  width: ${rhythm(3)};
  height: ${rhythm(3)};
  border-radius: ${rhythm(3)};
  @media only screen and (min-width: 768px) {
    width: ${rhythm(5)};
    height: ${rhythm(5)};
    border-radius: ${rhythm(5)};
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 ${rhythm(1 / 2)};
  @media only screen and (min-width: 768px) {
    margin: 0 ${rhythm(1)};
  }
`;

const Name = styled.h1`
  margin: 0;
  padding: 0;
  padding-bottom: ${rhythm(1 / 4)};
  font-family: sans-serif;
  font-size: ${rhythm(1)};
  color: #002635;
  text-transform: uppercase;
  line-height: ${rhythm(1)};
  .wf-active & {
    font-family: 'Montserrat', sans-serif;
  }
`;

const Last = styled.span`font-weight: 400;`;

const Description = styled.p`
  margin-bottom: 0;
  color: #444;
  font-family: 'Bitter', sans-serif;
`;

export default function User() {
  return (
    <Container>
      <Image src={me} />
      <Details>
        <Name>
          Dustin <Last>Schau</Last>
        </Name>
        <Description>
          Front-end development is my passion, and I am incredibly lucky to be
          able to <strong>love</strong> what I do each and every day.
        </Description>
      </Details>
      <SocialIcons />
    </Container>
  );
}
