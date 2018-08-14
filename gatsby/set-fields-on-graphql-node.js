const { GraphQLString } = require('gatsby/graphql');
const slugify = require('limax');
const path = require('path');

module.exports = function setFieldsOnGraphQLNode({ type }) {
  switch (type.name) {
    case 'MarkdownRemark':
      return {
        type: {
          type: GraphQLString,
          resolve(source) {
            const { fileAbsolutePath } = source;
            const [,folder] = fileAbsolutePath.split(path.resolve('content')).pop().split('/');
            return folder;
          }
        },
        slug: {
          type: GraphQLString,
          resolve(source) {
            const { frontmatter } = source;
            return frontmatter.path || frontmatter.slug || `/${slugify(frontmatter.title)}`;
          }
        }
      }
    default:
      return {};
  }
};
