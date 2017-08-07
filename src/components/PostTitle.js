import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { getColorFromString, getGradientFromString } from '../utils/color';
import { rhythm } from '../utils/typography';

const toStyle = props => {
  if (props.to) {
    return `
      cursor: pointer;
      &:hover {
        background: ${getColorFromString(props.title, 30, 100)};
      }
    `;
  }
  return '';
};

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  z-index: 1;
  background: ${props => getColorFromString(props.title)};
  color: white;
  position: relative;
  padding-top: ${rhythm(1)};
  padding-bottom: ${rhythm(1.5)};
  transition: background-color 125ms ease-in-out;
  @media only screen and (min-width: 768px) {
    padding: ${rhythm(1.75)} 0;
  }
  ${props => toStyle(props)};
`;

const Title = styled.h1`
  display: block;
  margin: 0;
  font-size: ${rhythm(1)};
  line-height: ${rhythm(1.5)};
  @media only screen and (min-width: 768px) {
    padding: ${rhythm(1 / 2)} 0;
    border-top: 4px solid #fff;
    border-bottom: 4px solid #fff;
    font-size: ${rhythm(1.5)};
    line-height: ${rhythm(2)};
  }
`;

const StyledLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
  width: 100%;
`;

export default function PostTitle({ children, title, to }) {
  const Container = () => {
    return (
      <TitleContainer title={title} to={!!to}>
        <Title className="post-title">
          {title}
        </Title>
        {children}
      </TitleContainer>
    );
  };
  if (to) {
    return (
      <StyledLink to={to}>
        <Container />
      </StyledLink>
    );
  }
  return <Container />;
}
