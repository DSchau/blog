import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { rhythm } from '../utils/typography';
import Link from 'gatsby-link';

import format from 'date-fns/format';

import StyledLink from './Link';

import '../css/posts.css';

injectGlobal`
  h1.post-title {
    text-align: center;
    font-weight: 700;
    border-top: 4px solid #ff6138;
    border-bottom: 4px solid #ff6138;
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
    color: #444;
    margin: ${rhythm(1 / 6)} 0;
    padding: ${rhythm(1 / 6)} 0;
    border-bottom: 1px solid #ddd;
    font-weight: 400;
  }

  .post-content p {
    margin: 0;
    padding-bottom: ${rhythm(1 / 2)};
    line-height: ${rhythm(1.3)};
    color: #333;
  }
`;

const TopLeftLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #002635;
  color: white;
  text-decoration: none;
  width: ${rhythm(1.5)};;
  height: ${rhythm(1.5)};;
  line-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 125ms ease-in-out;
  &:hover {
    background-color: #FF6138;
  }
`;

const Flipped = styled.span`
  display: inline-block;
  transform: scale(-1, 1);
  margin-right: 0.5rem;
  position: relative;
  left: 0.25rem;
`;

const Post = styled.section`
  position: relative;
  width: 100%;
  background-color: white;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, .2);
  padding: ${rhythm(1.25)} ${rhythm(1)};
  background-color: white;
  outline: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, .2);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  :last-child {
    border-bottom-width: 0;
  }
  @media only screen and (min-width: 768px) {
    padding: ${rhythm(2)} ${rhythm(2)};
    margin-bottom: ${props => props.preview ? rhythm(2) : 0};
  }
`;

const PostContents = styled.div`
  max-width: 100%;
  padding-bottom: ${rhythm(1 / 2)};
`;

const PostTitle = styled.h1`
  margin: ${rhythm(1 / 2)} ${rhythm(1 / 4)};
  padding: ${rhythm(1 / 2)} ${rhythm(1 / 4)};
  transition: all 125ms ease-in-out;
  &:hover {
    ${props => props.isPost ? '' : 'border-color: #002635;'};
  }
`;

const PostDate = styled.h2`
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  right: ${rhythm(1 / 4)};
  color: #888;
  font-size: ${rhythm(1)};
  font-weight: 400;
`;

const Divider = styled.hr`
  border: 0;
  width: 75%;
  margin: ${rhythm(1 / 2)} auto;
  border-bottom: 1px solid #EEE;
`;

export default function ({
  children,
  className,
  date,
  html: __html,
  linkTo,
  title,
  ...rest
}) {
  const isPost = (truthy, falsy = null) => {
    if (linkTo === '/') {
      return truthy;
    }
    return falsy;
  };
  const now = new Date();
  return (
    <Post className={[`post`].concat(className || []).join(' ')} {...rest}>
      {isPost(<TopLeftLink to={linkTo} alt="Back to all posts"><Flipped>&#10140;</Flipped></TopLeftLink>)}
      <PostTitle className="post-title" isPost={isPost(true)}>
        {
          isPost(title, <Link style={{ color: 'inherit', textDecoration: 'none' }} to={linkTo}>{title}</Link>)
        }
      </PostTitle>
      <PostDate>{format(date, `MMM DD${new Date(date).getFullYear() !== now.getFullYear() ? ', YYYY' : ''}`.trim())}</PostDate>
      <PostContents className="post-content" dangerouslySetInnerHTML={{ __html }} />
      {children}
      <Divider />
      <StyledLink to={linkTo}>{isPost(<span><Flipped>&#10140;</Flipped>All posts</span>, 'Read more')}</StyledLink>
    </Post>
  );
};
