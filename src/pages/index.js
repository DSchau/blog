import React from 'react'
import { graphql } from 'gatsby'

import Preview from '../components/Preview'

const getParams = (search = '') => {
  return search.replace('?', '').split('&').reduce((params, keyValue) => {
    const [key, value = ''] = keyValue.split('=')
    if (key && value) {
      params[key] = value.match(/^\d+$/) ? +value : value
    }
    return params
  }, {})
}

export default function Index({ data, location, ...rest }) {
  const { edges: posts } = data.allMarkdownRemark
  const { start = 0, end = 10 } = getParams(location.search)
  return (
    <React.Fragment>
    {posts
      .filter(post => post.node.frontmatter.title.length > 0)
      .slice(start, end)
      .map(({ node: post }) => {
        return (
          <div key={post.id}>
            <Preview
              excerpt={post.frontmatter.excerpt || post.excerpt}
              date={post.frontmatter.date}
              title={post.frontmatter.title}
              to={post.slug}
            />
          </div>
        )
      })}
      </React.Fragment>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          ...Post
        }
      }
    }
  }
`
