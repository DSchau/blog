import React from 'react';
import styled from 'styled-components';

import GithubIcon from 'react-icons/lib/fa/github';
import FacebookIcon from 'react-icons/lib/fa/facebook-square';
import TwitterIcon from 'react-icons/lib/fa/twitter';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  display: inline-block;
  text-decoration: none;
  color: ${props => props.color || '#555'};
  transition: color 175ms ease-in-out, transform 175ms ease-in-out;
  :hover {
    transform: scale(1.1);
    color: ${props => props.hoverColor};
  }
`;

const ExternalLink = props => {
  return (
    <Link target="_blank" rel="noopener" {...props}>
      {props.children}
    </Link>
  );
};

const Types = {
  facebook(props) {
    return (
      <ExternalLink
        hoverColor="#3b5998"
        href="https://www.facebook.com/profile.php?id=100004599014794"
        {...props}
      >
        <FacebookIcon size={32} />
      </ExternalLink>
    );
  },
  git(props) {
    return (
      <ExternalLink hoverColor="#333333" href="https://github.com/DSchau" {...props}>
        <GithubIcon size={32} />
      </ExternalLink>
    );
  },
  twitter(props) {
    return (
      <ExternalLink hoverColor="#1da1f2" href="https://twitter.com/schaudustin" {...props}>
        <TwitterIcon size={32} />
      </ExternalLink>
    );
  },
};

export default function SocialButton({ type, ...rest }) {
  const Type = Types[type];
  return (
    <Container {...rest}>
      <Type {...rest} />
    </Container>
  );
}
