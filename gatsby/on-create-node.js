const slugify = require('limax');
const path = require('path');

const handleNodeSourceType = ({ createNodeField }) => {
  return {
    post(node) {
      const slug = node.frontmatter.path || `/${slugify(node.frontmatter.title)}`;
      createNodeField({ node, name: 'type', value: 'post' });
      createNodeField({
        node,
        name: 'slug',
        value: slug,
      });
    }
  };
};

module.exports = function createNode({ node, boundActionCreators, getNode }) {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === 'MarkdownRemark') {
    const { sourceInstanceName: type } = getNode(node.parent);
    const handleSourceType = handleNodeSourceType({ createNodeField });

    if (typeof handleSourceType[type] === 'function') {
      handleSourceType[type](node);
    }
  }
};
