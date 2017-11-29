import React from "react"
import RecipeCategories from "../components/recipe_fragment"

export default ({ data }) => {
  return (
    <div>
      <h1>Welcome to my New Recipe Site!</h1>
      <p>This one is being built with Gatsby and React.</p>
      <h2>Categories:</h2>
      <RecipeCategories categories={data.allFile.edges} linkColor="PaleVioletRed"/>
    </div>
  )
}

export const query = graphql`
  query RecipeCategories{
    ...RecipeFragment
  }
  `
