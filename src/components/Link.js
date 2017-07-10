import React from 'react';
import styled from 'styled-components';
import { rhythm } from '../utils/typography';

const Link = styled.a`
  display: inline-block;
  background-color: white;
  padding: ${rhythm(1 / 3)} ${rhythm(1)};
  color: #002635;
  font-size: ${rhythm(3 / 4)};
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  border: 2px solid #002635;
  transition: all 125ms ease-in-out;
  font-family: sans-serif;
  &:hover {
    color: #ff6138;
    border-color: #ff6138;
  }
`;

export default Link;
