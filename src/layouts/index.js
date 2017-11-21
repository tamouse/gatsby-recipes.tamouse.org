import React from "react"
import PageHeader from "../components/PageHeader"

export default ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
    <PageHeader />
    <hr />
    {children()}
    <p>Spoopy</p>
  </div>
)
