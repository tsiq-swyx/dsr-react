import React from 'react'
import Helmet from 'react-helmet'

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  console.log('data', data)
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

// I suspect this $path variable here is getting the wrong value,
// hence the pageQuery is returning null. I have no way to debug this and this is probably a bad thing.
export const pageQuery = graphql`
  query DesignSystemsByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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

// date(formatString: "MMMM DD, YYYY")
// path
