import React from 'react'
import {RecipeIndexItem} from "../components/recipe_index_item";

export default ({data: {allMarkdownRemark}}) => {
  if (allMarkdownRemark) {
    let { edges: nodes } = allMarkdownRemark
    return (
      <ul>
        {nodes.map(({node}, idx) => {
          let recipe = {}
          recipe.url = node.fields.slug
          recipe.title  = node.frontmatter.title
          recipe.date = node.frontmatter.date
          return (
            <RecipeIndexItem recipe={recipe} key={idx}/>
          );
        })}
      </ul>
    )
  } else {
    return (
      <div>No recipes yet</div>
    )
  }
}

export const query = graphql`
  query CategoryRecipeQuery($glob: String!) {
    allMarkdownRemark(filter: {
      fileAbsolutePath: {
        glob: $glob
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
          fields {
            slug
          }
        }
      }
    }
  }

`
