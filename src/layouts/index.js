import React from "react"
import "./index.css"
import { Content, ContentTitle, Sidebar, SidebarTitle, SidebarSiteNav, Page, NavLink } from "./Styled"
import RecipeFragment from "../components/recipe_fragment"

export default ({ data, children }) => {
    return (
    <Page>
      <Sidebar>
        <SidebarTitle>
          <NavLink to="/">Recipes</NavLink>
        </SidebarTitle>
        <RecipeFragment categories={data.allFile.edges} linkColor="PapayaWhip"/>
        <SidebarSiteNav>
          <h3>Site Navigation</h3>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/___graphql" target="_blank">GraphiQL</NavLink></li>
          </ul>
        </SidebarSiteNav>
      </Sidebar>
      <Content>
        <ContentTitle>Contents</ContentTitle>
        {children()}
      </Content>
    </Page>
  )
}

export const query = graphql`
  query NavRecipeCategories{
    ...RecipeFragment
  }

`
