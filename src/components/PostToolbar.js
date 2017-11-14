import React from 'react'
import styled from 'styled-components'

import { rhythm } from '../utils/typography'

import NavigationButton from './NavigationButton'
import PostDate from './Date'

const ToolbarContainer = styled.div`
  display: flex;
  padding-bottom: ${rhythm(1 / 4)};
`

export default function PostToolbar({ date, isPost, next, prev, title }) {
  const truncate = (str, limit = 35) => {
    if (str.length <= limit) {
      return str;
    }
    return str.split(' ')
      .reduce((acc, part) => {
        const joined = `${acc} ${part}`;
        if (joined.length < limit) {
          return joined;
        }
        return acc;
      }, '') + '...';
  };
  const Buttons = () => {
    if (isPost) {
      return (
        <div>
          {prev &&
            <NavigationButton title={title} to={prev.frontmatter.path} prev>
              {truncate(prev.frontmatter.title)}
            </NavigationButton>}
          {next &&
            <NavigationButton title={title} to={next.frontmatter.path} next>
              {truncate(next.frontmatter.title)}
            </NavigationButton>}
        </div>
      )
    }
    return null
  }
  return (
    <ToolbarContainer>
      <Buttons />
      <PostDate date={date} />
    </ToolbarContainer>
  )
}
