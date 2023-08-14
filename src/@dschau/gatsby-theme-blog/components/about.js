import React from "react";
import styled from "@emotion/styled";
import GatsbyImage from "gatsby-image";

import { rhythm } from "@dschau/gatsby-theme-blog/src/utils/typography";
import SocialIcons from "@dschau/gatsby-theme-blog/src/components/social-icons";

const Container = styled.div`
  display: flex;
  margin: ${rhythm(1)} auto;
  margin-bottom: 0;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media only screen and (min-width: 768px) {
    max-width: 75%;
  }
`;

const Image = styled(GatsbyImage)`
  border-radius: 100%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 ${rhythm(1 / 2)};
  @media only screen and (min-width: 768px) {
    margin: 0 ${rhythm(1)};
  }
`;

const Name = styled.h1`
  margin: 0;
  padding: 0;
  padding-bottom: ${rhythm(1 / 4)};
  font-size: ${rhythm(1)};
  color: #002635;
  text-transform: uppercase;
  line-height: ${rhythm(1)};
`;

const Last = styled.span`
  font-weight: 400;
`;

const Description = styled.p`
  margin-bottom: 0;
  color: #444;
`;

export default function About({ image }) {
  return (
    <Container>
      {image && (
        <div>
          <Image {...image} />
        </div>
      )}
      <Details>
        <Name>
          Dustin <Last>Schau</Last>
        </Name>
        <Description>
          Product-focused Engineering leader who likes building great,
          collaborative teams that ship (and yes, still codes).
        </Description>
      </Details>
      <SocialIcons />
    </Container>
  );
}
