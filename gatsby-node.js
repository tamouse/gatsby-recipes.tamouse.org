const path = require(`path`)

const {createFilePath} = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({node, getNode, boundActionCreators}) => {
  const {createNodeField} = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({node, getNode, basePath: `pages`})
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({graphql, getNode, boundActionCreators}) => {
  const {createPage} = boundActionCreators
  return createMarkdownPages(graphql, createPage)
    .then(() => {
      return createCategoryIndexPages(graphql, createPage)
    })
}

const createCategoryIndexPages = (graphql, createPage) => {
  return new Promise((resolve, reject) => {
    graphql(`{
    allFile(filter: {
      relativePath: {
        glob: "pages/recipes/**/.keep"
      }
    }) {
      edges {
        node {
          relativePath
        }
      }
    }}`)
      .then(result => {
        result.data.allFile.edges.forEach(({node}) => {
          let indexPath = path.join(node.relativePath.split(path.sep).slice(1,-1).join(path.sep), `index.js`)
          let category = path.basename(path.dirname(node.relativePath))
          let glob = `**/recipes/${category}/*.md`
          createPage({
            path: indexPath,
            component: path.resolve(`./src/templates/category-index-template.js`),
            context: {
              glob
            }
          })
        })
        resolve()
      })
  })
}

const createMarkdownPages = (graphql, createPage) => {
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
    ).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/recipe-template.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}

