import React from "react"
import {RecipeIndexItem} from "../../../components/recipe_index_item";

export default ({data: {allMarkdownRemark: {edges: nodes}}}) => {
  return (
    <ul>
      {nodes.map(({node}, idx) => {
        return (
          <RecipeIndexItem recipe={node.frontmatter} key={idx}/>
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
          id 
          frontmatter { 
            title 
            date(formatString: "DD MMMM, YYYY") 
          } 
          fileAbsolutePath
          excerpt
        }
      }
    }
  }

`
