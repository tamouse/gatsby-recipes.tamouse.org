import React from "react"

export default ({ data }) => {
  console.log("in src/pages/index.js", data)
  return (
    <div>
      <h1>Welcome to my New Recipe Site!</h1>
      <p>This one is being built with Gatsby and React.</p>

      <div>
        <h4>{data.allMarkdownRemark.totalCount} Recipes</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3>
              {node.frontmatter.title}{" "}
              <span style={{color: "#ccc"}}>— {node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export const query = graphql`
  query AllMarkdownRecipes {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: {
          glob: "**/recipes/**/*.md"
        }
      }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMM YYYY")
            excerpt
          }
          excerpt
        }
      }
    }
  }`
