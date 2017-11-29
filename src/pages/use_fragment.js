import React from "react"
import Link from "gatsby-link"
import RecipeFragment from "../components/recipe_fragment"

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <h1>Trying to use recipe fragment</h1>
      <RecipeFragment categories={data.allFile.edges}/>

    </div>
  )
}

export const query = graphql`
  query UseRecipeCategoriesFragment{
    ...RecipeFragment
  }
`
