import React from 'react';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';

import SocialButton from './SocialButton';

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .button {
    margin: ${rhythm(1 / 3)} 0;
  }
`;

export default function Social() {
  return (
    <SocialContainer>
      <SocialButton className="button" type="git" />
      <SocialButton className="button" type="twitter" />
      <SocialButton className="button" type="facebook" />
    </SocialContainer>
  );
}
