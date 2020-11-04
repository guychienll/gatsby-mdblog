const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const template = path.resolve("src/templates/post.js");
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: template,
        context: {
          path: path.basename(node.frontmatter.path),
        },
      });
    });
  });
};
