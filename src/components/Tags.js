import React from 'react'
import styled from 'styled-components'
import GatsbyLink from 'gatsby-link'

import { rhythm } from '../utils/typography'
import { getColorFromString } from '../utils/color'

const TagsContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  width: 100%;
`

const Tag = styled.li`
  display: inline-block;
  margin: ${rhythm(1 / 4)} ${rhythm(1 / 4)};
  padding: ${rhythm(1 / 6)} ${rhythm(1 / 2)};
  background-color: ${props => getColorFromString(props.title, 92.5, 35)};
  border: 2px solid ${props => getColorFromString(props.title, 92.5, 35)};
  color: ${props => getColorFromString(props.title, 35, 40)};
  transition: all 150ms ease-in-out;
  font-size: ${rhythm(1 / 2)};
  font-weight: bold;
  &:first-child {
    margin-left: 0;
  }
  &:hover {
    background-color: transparent;
    border-color: ${props => getColorFromString(props.title, 35, 40)};
  }
`

const Link = styled(GatsbyLink)`
  color: inherit;
  text-decoration: none;
`

const TagsHeader = styled.h3`
  text-transform: uppercase;
  margin: 0;
  padding-top: ${rhythm(1 / 4)};
  font-size: ${rhythm(1 / 2)};
  line-height: ${rhythm(1)};
`

export default function TagList({ list: tags = [] }) {
  if (!tags || tags.length === 0) {
    return null
  }
  return (
    <TagsContainer>
      <TagsHeader>More about&hellip;</TagsHeader>
      {tags.map(tag =>
        <Tag key={tag} title={tag}>
          <Link to={`/tags/${tag}`}>
            {tag}
          </Link>
        </Tag>
      )}
    </TagsContainer>
  )
}
