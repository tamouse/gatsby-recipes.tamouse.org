import Link from "gatsby-link/index";
import styled from "styled-components";

export const NavLink = styled(Link)`
  color: Papayawhip;
  text-decoration: none;
  &:hover { text-decoration: underline; }
`

export const Page = styled.div`
  height: 100%;
  display: flex;
`

export const PageSplit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  overflow-y: scroll;
`

export const Sidebar = styled(PageSplit)`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  background-color: RebeccaPurple;
  color: PapayaWhip;
  padding: 1em;
`

export const SidebarTitle = styled.h1`
  color: MintCream;
`

export const SidebarSiteNav = styled.footer`
  bottom: 0;
  padding-bottom: 20px;
`

export const Content = styled(PageSplit)`
  flex-grow: 5;
  flex-shrink: 1;
  flex-basis: 60%;
  background-color: MintCream;
  padding: 1em;
  color: SlateGrey;
`

export const ContentTitle = styled.h1`
  color: PaleVioletRed;
`
