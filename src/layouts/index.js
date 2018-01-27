import React from "react"
import "./index.css"
import styled from "styled-components"
import Link from 'gatsby-link'
import RecipeFragment from "../components/recipe_fragment"

export default ({ data, children }) => {
    return (
    <Page>
      <Sidebar>
        <SidebarTitle>Recipes</SidebarTitle>
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

const NavLink = styled(Link)`
  color: Papayawhip;
  text-decoration: none;
  &:hover { text-decoration: underline; }
`

const Page = styled.div`
  height: 100%;
  display: flex;
`
const PageSplit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  overflow-y: scroll;
`
const Sidebar = styled(PageSplit)`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  background-color: RebeccaPurple;
  color: PapayaWhip;
  padding: 1em;
`
const SidebarTitle = styled.h1`
  color: MintCream;
`
const SidebarSiteNav = styled.footer`
  bottom: 0;
  padding-bottom: 20px;
`
const Content = styled(PageSplit)`
  flex-grow: 5;
  flex-shrink: 1;
  flex-basis: 60%;
  background-color: MintCream;
  padding: 1em;
  color: SlateGrey;
`
const ContentTitle = styled.h1`
  color: PaleVioletRed;
`
