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

  const tags = Object.keys(posts);
  
  createPage({
    path: '/tags',
    component: tagTemplate,
    context: {
      tags
    }
  });

  Object.keys(posts)
    .forEach(tagName => {
      const tag = posts[tagName];
      createPage({
        path: `/tags/${tagName}`,
        component: tagTemplate,
        context: {
          tags,
          tag,
          tagName
        }
      })
    });
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);

  return graphql(`{
    allMarkdownRemark(limit: 1000) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            title
          }
        }
      }
    }
  }`)
    .then(result => {
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
    });
};

/*
 * Remove trailing slashes
 */
exports.onCreatePage = ({ page, boundActionCreators }) => {
  const { createPage, deletePage } = boundActionCreators;

  return new Promise(resolve => {
    const oldPath = page.path;
    page.path = (page.path === `/`) ? page.path : page.path.replace(/\/$/, ``);

    if (page.path !== oldPath) {
      deletePage({ path: oldPath });
      createPage(page);
    }
    resolve();
  })
}
