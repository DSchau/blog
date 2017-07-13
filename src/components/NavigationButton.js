import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import BackIcon from 'react-icons/lib/fa/chevron-left';
import ForwardIcon from 'react-icons/lib/fa/chevron-right';

import { getColorFromString } from '../utils/color';
import { rhythm } from '../utils/typography';

const StyledLink = styled(Link)`
  position: absolute;
  top: 0;
  background-color: ${props => (props.title ? 'transparent' : 'white')};
  color: ${props => (props.title ? 'white' : '#002635')};
  text-decoration: none;
  padding: 0 ${rhythm(1 / 2)};
  height: ${rhythm(1.5)};
  line-height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: all 125ms ease-in-out;
  text-transform: uppercase;
  font-family: sans-serif;
  font-size: ${rhythm(1 / 2)};
  z-index: 2;
  &:hover {
    background-color: ${props => (props.title ? 'white' : '#002635')};
    color: ${props =>
      props.title ? getColorFromString(props.title) : 'white'};
  }
  .wf-active & {
    font-family: 'Montserrat', sans-serif;
  }
  .content {
    display: none;
    padding: 0 ${rhythm(1 / 4)};
  }
  .icon {
    font-size: ${rhythm(3 / 4)};
  }
  @media only screen and (min-width: 768px) {
    .content {
      display: inline-block;
    }
  }
`;

const Prev = styled(StyledLink)`
  left: 0;
`;

const Next = styled(StyledLink)`
  right: 0;
`;

export default function BackButton({ children, to, next, prev, ...rest }) {
  if (prev) {
    return (
      <Prev to={to} {...rest}>
        <BackIcon className="icon" />
        <span className="content">
          {children}
        </span>
      </Prev>
    );
  } else if (next) {
    return (
      <Next to={to} {...rest}>
        <span className="content">
          {children}
        </span>
        <ForwardIcon className="icon" />
      </Next>
    );
  }
}
