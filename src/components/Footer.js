import React from 'react';
import styled from 'styled-components';

import SocialIcons from './SocialIcons';

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0.5rem;
`;


export default function Footer() {
  const colors = {
    color: `rgba(255, 255, 255, 0.6)`,
    hoverColor: `rgba(255, 255, 255, 1)`
  }
  return (
    <Container>
      <SocialIcons flexDirection="row" width="240px" {...colors} />
    </Container>
  );
}
