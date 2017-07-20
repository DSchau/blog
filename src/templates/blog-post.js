import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Post from '../components/Post';
import Tags from '../components/Tags';
import About from '../components/About';

import { fadeInBottom } from '../css/animations';

import 'prismjs/themes/prism-okaidia.css';

const Container = styled.div`
  ${fadeInBottom};
  max-width: 100%;
  transform: translateY(16px) scale(.99);
  transform-origin: 50% 0;
  opacity: 0;
  animation: fade-in-bottom 0.3s cubic-bezier(.39, .575, .565, 1) both;
`;

export default function BlogPost({ data = {}, location, pathContext }) {
  const { markdownRemark: post } = data;
  const { next, prev } = pathContext;

  const isAbout = location.pathname.match(/about/);

  return (
    <Container>
      <Helmet title={`Dustin Schau - ${post.frontmatter.title}`} />
      <Post
        className="blog-post"
        html={post.html}
        date={post.frontmatter.date}
        linkTo={post.frontmatter.link || '/'}
        title={post.frontmatter.title}
        next={next}
        prev={prev}
      >
        <Tags list={post.frontmatter.tags} />
        {isAbout && <About />}
      </Post>
    </Container>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        title
      }
    }
  }
`;
