import React from 'react'
import styled from 'styled-components'
import GatsbyLink from 'gatsby-link'

import { rhythm } from '../utils/typography'
import { getColorFromString } from '../utils/color'

import Layout from '../components/Layout'
import Preview from '../components/Preview'

const List = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  padding: ${rhythm(1)};
  padding-left: ${rhythm(2)};
  margin: 0;
`

const TagsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ListItem = styled.li``

const Header = styled.h1`
  background-color: ${props => getColorFromString(props.text)};
  color: white;
  margin: ${rhythm(1 / 2)} auto;
  padding: ${rhythm(1 / 4)};
  text-align: center;
  font-family: 'Georgia', serif;
  .wf-active & {
    font-family: 'Bitter', 'Georgia', serif;
  }
  @media only screen and (min-width: 768px) {
    max-width: 65%;
  }
`

const TagHeader = ({ text }) => {
  return (
    <Header text={text}>
      {text}
    </Header>
  )
}

export default function Tags({ pageContext, ...rest }) {
  const { tags, tag, tagName } = pageContext
  if (tag) {
    const len = tag.length
    return (
      <Layout {...rest}>
        <TagHeader
          text={`${len} post${len > 1 ? 's' : ''} about "${tagName}"`}
        />
        {tag.map(post => {
          return (
            <Preview
              key={post.id}
              html={post.excerpt.slice(0, 150) + '...'}
              date={post.frontmatter.date}
              title={post.frontmatter.title}
              to={post.frontmatter.path}
            />
          )
        })}
      </Layout>
    )
  }
  return (
    <Layout {...rest}>
      <TagsContainer>
        <TagHeader text="All tags" />
        <List>
          {tags.map(name => {
            return (
              <ListItem key={name}>
                <GatsbyLink to={`/tags/${name}`}>
                  {name}
                </GatsbyLink>
              </ListItem>
            )
          })}
        </List>
      </TagsContainer>
    </Layout>
  )
}
