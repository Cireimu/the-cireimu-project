import React from "react"
import { graphql } from "gatsby"

// Component Imports
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = ({ data: { markdownRemark } }) => {
  return (
    <Layout>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <p>Posted on: {markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }}></div>
    </Layout>
  )
}

export default Blog
