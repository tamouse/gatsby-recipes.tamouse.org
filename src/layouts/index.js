import React from "react"
import "./index.css"
import styled from "styled-components"

const Page = styled.div`
  height: 100%;
  display: flex;
`
const PageSplit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
`
const Dashboard = styled(PageSplit)`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  background-color: RebeccaPurple;
  color: PapayaWhip;
  padding: 1em;
`
const DashboardTitle = styled.h1`
  color: MintCream;
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

export default ({ children }) => (
  <Page>
    <Dashboard>
      <DashboardTitle>Recipes</DashboardTitle>
    </Dashboard>
    <Content>
      <ContentTitle>Contents</ContentTitle>
      {children()}
    </Content>
  </Page>
)
