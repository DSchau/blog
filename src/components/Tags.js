import React from 'react';
import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';

import { rhythm } from '../utils/typography';

const TagsContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  width: 100%;
`;

const Tag = styled.li`
  display: inline-block;
  margin: ${rhythm(1 / 4)} ${rhythm(1 / 4)};
  padding: ${rhythm(1 / 6)} ${rhythm(1 / 2)};
  background-color: #eee;
  color: black;
  transition: all 150ms ease-in-out;
  font-size: ${rhythm(1 / 2)};
  &:first-child {
    margin-left: 0;
  }
  &:hover {
    background-color: #ddd;
  }
`;

const Link = styled(GatsbyLink)`
  color: inherit;
  text-decoration: none;
`;

const TagsHeader = styled.h3`
  text-transform: uppercase;
  margin: 0;
  padding-top: ${rhythm(1 / 4)};
  font-size: ${rhythm(1 / 2)};
  line-height: ${rhythm(1)};
`;

export default function TagList({ list: tags = [] }) {
  if (!tags || tags.length === 0) {
    return null;
  }
  return (
    <TagsContainer>
      <TagsHeader>More about&hellip;</TagsHeader>
      {tags.map(tag =>
        <Tag key={tag}>
          <Link to={`/tags/${tag}`}>
            {tag}
          </Link>
        </Tag>
      )}
    </TagsContainer>
  );
}
