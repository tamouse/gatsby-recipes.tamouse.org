import React from "react"
import { linkLabel, linkPath } from "../utils"
import Link from "gatsby-link"
import styled from "styled-components"

export default ({ categories, linkColor }) => {
  const CatItemLink = styled(Link)`
    color: ${linkColor ? linkColor : 'inherit'};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  `;
  return (
    <ul>
      {categories.map((category, index) => (
        <li key={index}>
          <CatItemLink  to={linkPath(category.node.relativePath)}>{linkLabel(category.node.relativePath)}</CatItemLink>
        </li>
      ))}
    </ul>
  )
}

export const query = graphql`
  fragment RecipeFragment on RootQueryType {
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
    }
  }
`;
