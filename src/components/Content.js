import React from 'react';
import styled from 'styled-components';

const Content = styled.main`
  position: absolute;
  top: 35vh;
  right: 0;
  left: 0;
  margin: 0 auto;
  max-width: 960px;
  z-index: 2;
  @media only screen and (min-width: 768px) {
    top: 40vh;
  }
`;

export default function MainContent({
  children,
  ...rest
}) {
  return (
    <Content {...rest}>{children}</Content>
  );
}
