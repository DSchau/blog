import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Post from '../components/Post';
import Tags from '../components/Tags';
import About from '../components/About';

import 'prismjs/themes/prism-okaidia.css';

const Container = styled.div`max-width: 100%;`;

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
