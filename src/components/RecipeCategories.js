import React from "react"

export default ({ data }) => {

  console.log(data)

  return (
    <div>
      <pre>
        <code>
          {JSON.stringify(data)}
        </code>
      </pre>
    </div>
  )
}

export const query = graphql`
  query AllFiles
  {
    allFile {
      edges {
        node {
          relativePath
        }
      }
    }
  }

`
