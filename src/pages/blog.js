import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// Component imports
import Layout from "../components/layout"

// Helpers
import { renderTitleDateList } from "../helpers/blogHelpers"

// Style Imports
import * as blogPageStyles from "../styles/blog-page.module.scss"

const allMarkdownRemarkQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

const BlogPage = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(allMarkdownRemarkQuery)

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogPageStyles.posts}>{renderTitleDateList(edges)}</ol>
    </Layout>
  )
}

export default BlogPage
