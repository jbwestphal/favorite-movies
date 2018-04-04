const path = require(`path`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMoviesJson {
          edges {
            node {
              page
            }
          }
        }
      }
    `
    ).then(result => {
      result.data.allMoviesJson.edges.forEach(({ node }) => {
        createPage({
          path: node.page,
          component: path.resolve(`./src/templates/movie-detail.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.page,
          },
        })
      })
      resolve()
    })
  })
};