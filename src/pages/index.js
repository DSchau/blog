import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Preview from '../components/Preview';
import Tags from '../components/Tags';

const getParams = search => {
  return search.replace('?', '')
    .split('&')
    .reduce((params, keyValue) => {
      const [key, value = ''] = keyValue.split('=');
      if (key && value) {
        params[key] = value.match(/^\d+$/) ? +value : value;
      }
      return params;
    }, {});
};

export default class Index extends React.Component {
  render() {
    const { data, location } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const { start = 0, end = 10 } = getParams(location.search);
    return (
      <div>
        {
          posts
            .filter(post => {
              return post.node.frontmatter.title.length > 0;
            })
            .slice(start, end)
            .map(({ node: post }) => {
              return (
                <Preview
                  key={post.id}
                  html={post.html}
                  date={post.frontmatter.date}
                  title={post.frontmatter.title}
                  to={post.frontmatter.path}
                />
              );
            })
        }
      </div>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            tags
            title
            date
            path
          }
        }
      }
    }
  }
`
