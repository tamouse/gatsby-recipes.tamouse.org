import React from 'react'

export const RecipeIndexItem = ({recipe}) => {
  return (
    <li>
      <a href={recipe.url ? recipe.url : "#"}>
        {recipe.title}
      </a>{" "}
      <small>
        {recipe.date}
      </small>
    </li>
  )
}
