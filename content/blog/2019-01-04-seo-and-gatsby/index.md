---
date: "2019-01-04"
title: "Search Engine Optimization with Gatsby"
featured: images/seo.jpg
excerpt: "SEO and Gatsby: A Perfect Pairing. Learn how Gatsby implements SEO utilizing React Helmet and smart defaults and how you can do implement your own!"
tags:
  - gatsby
  - javascript
  - react
---

Search Engine Optimization--from here on out I'll call this SEO. Everyone wants it--and you've probably been approached by an SEO _expert_ who can surely maximize your revenue and page counts--but relatively few make the concerted effort to implement SEO in their web app. In this post, I'll deep dive into some of the ins and outs of SEO and how you can implement common, simple SEO patterns in your Gatsby application, today. By the end of this post you'll know how to do the following:

- Implement SEO patterns with react-helmet
- Query for an image with GraphQL
- Create an optimized social sharing card for Twitter, Facebook, and Slack

## Implementation

The core technology powering SEO is the humble, ubiquitiuous `meta` tag. You've probably seen something like:

```html
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```

or further still with more of an SEO spin something as simple as the `description` and/or `keywords` properties:

```html
<meta name="description" content="This is probably some earth-shattering excerpt that is around ~200 characters or less">
<meta name="keywords" content="science dog, another term, do-i-use-spaces, hello">
```

These are the _bare minimum_ requirements that should be implemented for simple and basic SEO. However--we can go further, and we can go further with the powerful combo of statically rendered content meta tags powered by Gatsby and GraphQL. Let's dive in.

## Gatsby + GraphQL

GraphQL is a crucial feature enabled via Gatsby (although note: you don't [_have_ to use GraphQL with Gatsby][unstructured-data]). Leveraging GraphQL to query your indexable content--wherever it lives--is one of the most powerful and flexible technologies of GraphQL. Let's briefly look at how we can implement an extensible and flexible SEO component.

### `StaticQuery`

Gatsby distinguishes between page-level queries and component queries. The former can use page GraphQL queries while the latter can use a new in Gatsby v2 feature called `StaticQuery`. A StaticQuery will be parsed, evaluated, and injected at _build time_ into the component that is requesting the data. This is a perfect scenario in which we can create an SEO component with sane defaults.

### Creating the component

Using the power and flexibility of React, we can create a React component to power this functionality.

```jsx:title=src/components/seo.js
import React from 'react'
// highlight-start
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
// highlight-end

function SEO() {
  return (
    <StaticQuery
      query={graphql`
        # highlight-start
        {
          site {
            siteMetadata {
              description
              keywords
            }
          }
        }
        # highlight-end
      `}
      render={data => null}
    />
  )
}

export default SEO
```

This component doesn't _do_ anything yet, but we're laying the foundation for a useful, extensible component. What we've done up to this point is leverage the `StaticQuery` functionality enabled via Gatsby to query our siteMetadata (e.g. details in `gatsby-config.js`) so that we can grab description and keywords.

The `StaticQuery` component accepts a render prop, and at this point, we're simply returning `null` to render nothing. Let's _actually_ render something and build out our prototype for this SEO component. Let's iterate further.

```jsx:title=src/components/seo.js
import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO() {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              author
              description
              keywords
            }
          }
        }
      `}
      render={data => (
        <Helmet
          htmlAttributes={{
            lang: 'en'
          }}
          meta={
            // highlight-start
            [
              {
                name: 'description',
                content: data.site.siteMetadata.description
              },
              {
                name: 'keywords',
                content: data.site.siteMetadata.keywords.join(',')
              }
            ]
            // highlight-end
          }
        />
      )}
    />
  )
}

export default SEO
```

whew, getting closer! This will now render the `meta` `description` and `keywords` tags, and will do so using content injected at build-time with the `StaticQuery` component. Additionally, it will add the `lang="en"` attribute to our root-level `html` tag to silence that pesky Lighthouse warning 😉

If you remember earlier, I claimed this was the bare bones, rudimentary approach to SEO, and that still holds true. Let's super charge this and get some useful functionality for sharing a page via social networks like Facebook, Twitter, and Slack.

### Implementing social SEO

In addition to SEO for actual _search_ engines we also want those pretty cards that social networks like Twitter and Slack enable. Let's implement this functionality.

```jsx:title=src/components/seo.js
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types' // highlight-line
import { StaticQuery, graphql } from 'gatsby'

// highlight-next-line
function SEO({ description, meta, title }) {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              author
              description
              keywords
            }
          }
        }
      `}
      render={data => {
        const metaDescription = description || data.site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{
              lang: 'en'
            }}
            title={title}
            meta={
              [
                {
                  name: 'description',
                  content: metaDescription
                },
                {
                  name: 'keywords',
                  content: data.site.siteMetadata.keywords.join(',')
                },
                // highlight-start
                {
                  property: 'og:title',
                  content: title
                },
                {
                  property: 'og:description',
                  content: metaDescription
                },
                {
                  name: 'twitter:card',
                  content: 'summary'
                },
                {
                  name: 'twitter:creator',
                  content: data.site.siteMetadata.author
                },
                {
                  name: 'twitter:title',
                  content: title
                },
                {
                  name: 'twitter:description',
                  content: metaDescription
                }
              ]
                .concat(meta)
                // highlight-end
            }
          />
        )
      }}
    />
  )
}

// highlight-start
SEO.defaultProps = {
  meta: []
}
// highlight-end

// highlight-start
SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired
}
// highlight-end

export default SEO
```

Woo hoo! What we've done up to this point is enabled not only SEO for search engines like Google, Bing (people use Bing, right?) but _also_ in the process enabled enhanced sharing capabilities on social networks. That's a win-win if I've ever seen one 😍

For further info, consider the following resources:

- Facebook uses the [Open Graph][og] tag format
- Twitter uses `twitter:` keywords. See [Twitter Cards][twitter-cards] for more info
- Slack reads tags in the following order ([source][slack-unfurl])
  1. oEmbed server
  1. Twitter cards tags / Facebook Open Graph tags
  1. HTML meta tags

To bring it all home, let's consider actually _using_ this extensible SEO component.

## Using the SEO component

We now have our extensible SEO component. It takes a `title` prop, and then (optionally) `description` and `meta` keywords. Let's wire it all up!

### In a page component

```jsx:title=src/pages/index.js
import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

function Index() {
  return (
    <Layout>
      <SEO title="My Amazing Gatsby App" />
      <h1>lol - pretend this is meaningful content</h1>
    </Layout>
  )
}

export default Index
```

### In a template

Let's pretend we have a Markdown powered blog. We--of course--want some nice SEO as well as a nifty image for sharing on Twitter, Facebook, and Slack. We're going to do this with a few steps, specifically:

- Create a Markdown post
- Add an image, and add it to the Markdown posts frontmatter
- Query this image with GraphQL

#### Creating the post

```shell
mkdir -p content/blog/2019-01-04-hello-world-seo
touch content/blog/2019-01-04-hello-world-seo/index.md
```

```md:title=content/blog/2019-01-04-hello-world-seo/index.md
---
date: 2019-01-04
featured: images/featured.jpg
---

Hello World!
```

#### Adding the image

Feel free to add whatever, or perhaps use this _very pertinent_ image:

![Sample Image](./images/seo.jpg)

the image will need to be located at `content/blog/2019-01-04-hello-world-seo/images/featured.jpg`

#### Querying with GraphQL


```jsx:title=src/templates/blog-post.js
import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

function BlogPost({ data }) {
  const { markdown: { excerpt, html, frontmatter, image } } = data
  return (
    <Layout>
      <SEO title="My Amazing Gatsby App" description={excerpt} image={image}>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const blogPostQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdown: markdownRemark(fields: { $slug: { eq: $slug }}) {
      html
      image: featuredImage {
        childImageSharp {
          resize(width: 1200) {
            src
          }
        }
      }
      excerpt(pruneLength: 200)
    }
  }
`

export default BlogPost
```

## The Payoff

[unstructured-data]: https://www.gatsbyjs.org/docs/using-unstructured-data/
[og]: https://developers.facebook.com/docs/sharing/webmasters/#markup
[twitter-cards]: https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards.html
[slack-unfurl]: https://medium.com/slack-developer-blog/everything-you-ever-wanted-to-know-about-unfurling-but-were-afraid-to-ask-or-how-to-make-your-e64b4bb9254