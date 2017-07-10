import React from 'react';
import Helmet from 'react-helmet';

import Post from '../components/Post';

import 'prismjs/themes/prism-okaidia.css';

export default function BlogPost({
  data = {}
}) {
  const { markdownRemark: post } = data;

  return (
    <div>
      <Helmet title={`Dustin Schau - ${post.frontmatter.title}`} />
      <Post
        html={post.html}
        linkTo={post.frontmatter.link || '/'}
        title={post.frontmatter.title}
      />
    </div>
  )
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
        date
        path
        title
      }
    }
  }
`
