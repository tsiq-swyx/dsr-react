import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.fields.slug}>
        <Link to={`${node.fields.slug}`}>{node.frontmatter.title}</Link>
      </div>
    ))}
  </div>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date
            company
            link
            image
            description
            _PARENT
            parent
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
