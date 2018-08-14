import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { graphql } from 'gatsby'
import { rhythm } from '../utils/typography'
import MdListIcon from 'react-icons/lib/md/list'

import PostTitle from './PostTitle'
import Toolbar from './PostToolbar'
import StyledLink from './Link'

import '../css/posts.css'

injectGlobal`
  h1.post-title {
    text-align: center;
    font-weight: 700;
    display: inline-block;
  }

  .post-content h2 {
    color: #333;
    margin: ${rhythm(1 / 4)} 0;
    padding: ${rhythm(1 / 4)} 0;
    border-bottom: 2px solid #ddd;
    font-weight: 400;
  }

  .post-content h3 {
    display: inline-block;
    color: #444;
    margin: ${rhythm(1 / 6)} 0;
    padding: ${rhythm(1 / 6)};
    padding-left: 0;
    border-bottom: 1px solid #ddd;
    font-weight: 400;
  }

  .post-content p {
    margin: ${rhythm(3 / 4)} auto;
    color: #333;
    line-height: ${rhythm(1.25)};
  }
`

const Post = styled.section`
  position: relative;
  width: 100%;
  background-color: white;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, .2);
  background-color: white;
  outline: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, .2);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${rhythm(1)};
  :last-child {
    border-bottom-width: 0;
  }
  @media only screen and (min-width: 768px) {
    margin-bottom: ${props => (props.preview ? rhythm(2) : 0)};
    padding-bottom: ${rhythm(2)};
  }
`

const PostContents = styled.div`
  max-width: 100%;
  padding: ${rhythm(3 / 4)} ${rhythm(1)};
  @media only screen and (min-width: 768px) {
    padding: ${rhythm(1)} ${rhythm(2)};
    padding-top: ${rhythm(1)};
  }
`

const Divider = styled.hr`
  border: 0;
  width: 75%;
  margin: ${rhythm(1 / 2)} auto;
  border-bottom: 1px solid #eee;
`

const ListIcon = styled(MdListIcon)`
  font-size: 32px;
  margin-right: 0.5rem;
`

const AllPostsContainer = styled.span`
  display: flex;
  align-items: center;
`

export default function({
  children,
  className,
  date,
  html: __html,
  linkTo,
  title,
  next,
  prev,
  ...rest
}) {
  const isPost = (truthy, falsy = null) => {
    if (linkTo === '/') {
      return truthy
    }
    return falsy
  }
  return (
    <Post className={[`post`].concat(className || []).join(' ')} {...rest}>
      <PostTitle title={title} to={isPost(false, linkTo)}>
        <Toolbar
          title={title}
          date={date}
          isPost={isPost(true, false)}
          linkTo={linkTo}
          next={next}
          prev={prev}
        />
      </PostTitle>
      <PostContents>
        <div className="post-content" dangerouslySetInnerHTML={{ __html }} />
        {children}
        <Divider />
      </PostContents>
      <StyledLink to={linkTo} title={title}>
        {isPost(
          <AllPostsContainer>
            <ListIcon />All posts
          </AllPostsContainer>,
          'Read more'
        )}
      </StyledLink>
    </Post>
  )
}

export const postFragment = graphql`
  fragment Post on MarkdownRemark {
    id
    html
    excerpt(pruneLength: 160)
    timeToRead
    slug
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      rawDate: date
      draft
      excerpt
      tags
      title
    }
  }
`;
