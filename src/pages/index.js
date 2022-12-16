import { graphql } from "gatsby"
import React from "react"
import "../styles/home.css"


const Home = ({ data }) => {
  return (
    <div>
      {data.allWpPost.edges.map(({ node }) => (
        <div key={node.id} >
          <h2>{node.title}</h2>
          <div

            dangerouslySetInnerHTML={{ __html: node.excerpt }}
          />
        </div>
      ))}
    </div>
  )
}
export default Home

export const query = graphql`
  query {
    allWpPost(sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          title
          excerpt
        }
      }
    }
  }
`