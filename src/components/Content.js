import React from 'react';
import styled from 'styled-components';

import { fadeInBottom } from '../css/animations';

const Content = styled.main`
  ${fadeInBottom};
  transform: translateY(16px) scale(.99);
  transform-origin: 50% 0;
  animation: fade-in-bottom 0.3s cubic-bezier(.39, .575, .565, 1) both;
  position: absolute;
  top: ${props => (props.isPost ? '15vh' : '25vh')};
  right: 0;
  left: 0;
  margin: 0 auto;
  max-width: 840px;
  z-index: 2;
  @media only screen and (min-width: 768px) {
    top: ${props => (props.isPost ? '25vh' : '40vh')};
  }
`;

export default function MainContent({ children, Footer, ...rest }) {
  return (
    <Content {...rest}>
      {children}
      {Footer && <Footer />}
    </Content>
  );
}
