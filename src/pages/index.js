import React from "react"
import Link from "gatsby-link"

const CategoryItem = ({ node }) => (
  <div>
    <Link to={node.relativePath.split("/").slice(1,3).join("/")}>
      {node.relativePath.split("/")[2]}
    </Link>
  </div>
)

export default ({ data }) => {
  return (
    <div>
      <h1>Welcome to my New Recipe Site!</h1>
      <p>This one is being built with Gatsby and React.</p>
      <h2>Categories:</h2>
      {data.allFile.edges.map((item, index) => <CategoryItem node={item.node} key={index} />)}
    </div>
  )
}

export const query = graphql`
  query RecipeCategories{
    allFile(filter: {
      relativePath: {
        glob: "pages/recipes/**/index.js"
      }
    }) {
      totalCount
      edges {
        node {
          relativePath
        }
      }
    }
  }
  `
