import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// Component imports
import Layout from "../components/layout"

// Helpers
import { renderTitleDateList } from "../helpers/blogHelpers"

// Style Imports
import * as blogPageStyles from "../styles/blog-page.module.scss"

const allContentfulBlogPostQuery = graphql`
  query {
    allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
      edges {
        node {
          title
          publishDate(formatString: "MMMM Do, YYYY")
          slug
        }
      }
    }
  }
`

const BlogPage = () => {
  const {
    allContentfulBlogPost: { edges },
  } = useStaticQuery(allContentfulBlogPostQuery)

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogPageStyles.posts}>{renderTitleDateList(edges)}</ol>
    </Layout>
  )
}

export default BlogPage
