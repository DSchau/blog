import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Post from '../components/Post'
import Tags from '../components/Tags'
import About from '../components/About'

import { fadeInBottom } from '../css/animations'

import 'prismjs/themes/prism-okaidia.css'

const Container = styled.div`
  max-width: 100%;
  transform: translateY(16px) scale(.99);
  transform-origin: 50% 0;
  opacity: 0;
  animation: ${fadeInBottom} 0.3s cubic-bezier(.39, .575, .565, 1) both;
`

export default function BlogPost({ data = {}, location, pathContext }) {
  const { markdownRemark: post } = data
  const { next, prev } = pathContext

  const isAbout = location.pathname.match(/about/)

  const description = post.frontmatter.excerpt
    ? post.frontmatter.excerpt
    : post.excerpt
  const image = post.frontmatter.image
    ? post.frontmatter.image.childImageSharp.resize.src
    : null
  const author = data.site.siteMetadata.author

  const meta = [
    {
      name: `description`,
      content: description
    },
    {
      name: `og:description`,
      content: description
    },
    {
      name: `twitter:description`,
      content: description
    },
    {
      name: `og:title`,
      content: post.frontmatter.title
    },
    {
      name: `og:type`,
      content: `article`
    },
    {
      name: `article:author`,
      content: author
    },
    {
      name: `twitter:creator`,
      content: `schaudustin`
    },
    {
      name: `author`,
      content: author
    },
    {
      name: `twitter:label1`,
      content: `Reading time`
    },
    {
      name: `twitter:data1`,
      content: `${post.timeToRead} min read`
    },
    {
      name: `article:published_time`,
      content: post.frontmatter.rawDate
    }
  ].concat(
    image
      ? [
          {
            name: `og:image`,
            content: image
          },
          {
            name: `twitter:image`,
            content: image
          }
        ]
      : []
  )

  return (
    <Container>
      <Helmet title={`Dustin Schau - ${post.frontmatter.title}`} meta={meta} />
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
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }

    markdownRemark(fields:{slug:{eq:$slug}}) {
      id
      html
      excerpt(pruneLength: 160)
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        rawDate: date
        excerpt
        tags
        title
        image {
          childImageSharp {
            resize(width: 1500, height: 1500) {
              src
            }
          }
        }
      }
    }
  }
`
