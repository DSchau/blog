import React from 'react'
import styled from 'styled-components'

import { rhythm } from '../utils/typography'

import SocialButton from './SocialButton'

const SocialContainer = styled.div`
  display: flex;
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : 'column'};
  align-items: center;
  justify-content: space-between;
  width: ${props => props.width || 'auto'};
  .button {
    margin: ${rhythm(1 / 3)} 0;
  }
`

export default function Social(props) {
  return (
    <SocialContainer {...props}>
      <SocialButton className="button" type="git" {...props} />
      <SocialButton className="button" type="twitter" {...props} />
      <SocialButton className="button" type="facebook" {...props} />
    </SocialContainer>
  )
}
