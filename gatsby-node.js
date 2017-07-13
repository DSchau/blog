const path = require('path');

const createTagPages = (createPage, edges) => {
  const tagTemplate = path.resolve(`src/templates/tags.js`);
  const posts = {};

  edges
    .forEach(({ node }) => {
      if (node.frontmatter.tags) {
        node.frontmatter.tags
          .forEach(tag => {
            if (!posts[tag]) {
              posts[tag] = [];
            }
            posts[tag].push(node);
          });
      }
    });
  
  createPage({
    path: '/tags',
    component: tagTemplate,
    context: {
      posts
    }
  });

  Object.keys(posts)
    .forEach(tagName => {
      const tag = posts[tagName];
      createPage({
        path: `/tags/${tagName}`,
        component: tagTemplate,
        context: {
          posts,
          tag
        }
      })
    });
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
    resolve(
      graphql(`{
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              excerpt(pruneLength: 250)
              html
              id
              timeToRead
              frontmatter {
                date
                path
                tags
                title
              }
            }
          }
        }
      }`
      ).then(result => {
        if (result.errors) {
          return reject(result.errors)
        }

        const posts = result.data.allMarkdownRemark.edges
          .sort((postA, postB) => {
            const getDate = date => new Date(date);

            return getDate(postA.node.frontmatter.date) - getDate(postB.node.frontmatter.date);
          });

        createTagPages(createPage, posts);

        // Create pages for each markdown file.
        posts.forEach(({ node }, index) => {
          createPage({
            path: node.frontmatter.path,
            component: blogPostTemplate,
            context: {
              prev: index === 0 ? false : posts[index - 1].node,
              next: index === posts.length - 1 ? false : posts[index + 1].node
            }
          });
        });
      })
    )
  })
};
