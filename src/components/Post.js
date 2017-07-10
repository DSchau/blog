import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { rhythm } from '../utils/typography';
import Link from 'gatsby-link';

import StyledLink from './Link';

injectGlobal`
  .gatsby-highlight-code-line {
    background-color: #444;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #66d9ef;
  }

  .gatsby-highlight {
    background-color: #272822;
    border-radius: 0.3em;
    margin: .5em 0;
    padding: 1em;
    overflow: auto;
  }
  
  /**
   * Remove the default PrismJS theme background-color, border-radius, margin,
   * padding and overflow.
   * 1. Make the element just wide enough to fit its content.
   * 2. Always fill the visible space in .gatsby-highlight.
   */
  .gatsby-highlight pre[class*="language-"] {
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left; /* 1 */
    min-width: 100%; /* 2 */
  }

  .wf-active .post h1, .wf-active .post h2, .wf-active .post h3 {
    font-family: 'Bitter', sans-serif;
  }

  .post h1, .post h2, .post h3, .post h4 {
    font-family: Georgia, serif;
  }

  .post h1 {
    text-align: center;
    font-weight: 700;
    padding: ${rhythm(1 / 2)} ${rhythm(1 / 4)};
    margin: ${rhythm(1 / 2)} auto;
    border-top: 4px solid #ff6138;
    border-bottom: 4px solid #ff6138;
    display: inline-block;
  }

  .post h2 {
    color: #333;
    margin: ${rhythm(1 / 4)} 0;
    padding: ${rhythm(1 / 4)} 0;
    border-bottom: 2px solid #ddd;
    font-weight: 400;
  }

  .post h3 {
    color: #444;
    margin: ${rhythm(1 / 6)} 0;
    padding: ${rhythm(1 / 6)} 0;
    border-bottom: 1px solid #ddd;
    font-weight: 400;
  }

  .post p {
    margin: 0;
    padding-bottom: ${rhythm(1 / 2)};
    line-height: ${rhythm(1.3)};
    color: #333;
  }
`;

const Post = styled.section`
  width: 100%;
  background-color: white;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, .2);
  padding: ${rhythm(1)} ${rhythm(1)};
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
    padding-top: ${rhythm(1)};
    margin-bottom: ${props => props.preview ? rhythm(2) : 0};
  }
`;

export default function ({
  html: __html,
  linkTo,
  title,
  ...rest
}) {
  const isPost = (truthy, falsy) => {
    if (linkTo === '/') {
      return truthy;
    }
    return falsy;
  };
  return (
    <Post className="post" {...rest} >
      <h1>
        {
          isPost(title, <Link style={{ color: 'inherit', textDecoration: 'none' }} to={linkTo}>{title}</Link>)
        }
      </h1>
      <div dangerouslySetInnerHTML={{ __html }} />
      <StyledLink href={linkTo}>{isPost('Back', 'Read more')}</StyledLink>
    </Post>
  );
};
