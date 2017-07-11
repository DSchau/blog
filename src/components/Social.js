import React from 'react';
import styled from 'styled-components';

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 0.5rem;
`;

const SocialButton = styled.a`

`;

export default function Social() {
  return (
    <SocialContainer>
      <SocialButton href="https://github.com/dschau">Github</SocialButton>
      <SocialButton href="https://twitter.com/schaudustin">twitter</SocialButton>
      <SocialButton href="https://facebook.com/dschau">facebook</SocialButton>
    </SocialContainer>
  );
}
