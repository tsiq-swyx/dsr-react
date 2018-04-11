import React from 'react'
import Helmet from 'react-helmet'

// import '../css/design-system.css'; // make it pretty!

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  console.log('***** datadatadata', data)
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  return (
    <div className="design-system-container">
      <Helmet title={`Design System: ${post.frontmatter.title}`} />
      <div className="design-system">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="design-system-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <div>{JSON.stringify(post)}</div>
      </div>
    </div>
  )
}

// date(formatString: "MMMM DD, YYYY")
// path

export const pageQuery = graphql`
  query DesignSystemsByPath($path: String!) {
    markdownRemark(frontmatter: { title: { ne: $path } }) {
      html
      frontmatter {
        title
        date
        company
        link
        image
        description
      }
    }
  }
`
