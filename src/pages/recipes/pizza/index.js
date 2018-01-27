import React from "react"

export default ({data: {allMarkdownRemark: {edges: nodes}}}) => {
  return (
    <ul>
      {nodes.map(({node}, idx) => {
        return (
          <li key={idx}>
            {node.frontmatter.title}
          </li>
        );
      })}
    </ul>
  )
}

export const query = graphql`
  query RecipeQuery {
    allMarkdownRemark(filter: {
      fileAbsolutePath: {
        regex: "/.*\/recipes\/pizza\/.*/"
      }
    }) {
      edges {
        node {
          id frontmatter { title } fileAbsolutePath
        }
      }
    }
  }

`
