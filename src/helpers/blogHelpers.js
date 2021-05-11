import React from "react"
import { Link } from "gatsby"

// Styles
import * as blogPageStyles from "../styles/blog-page.module.scss"

export const renderTitleDateList = postDataArray => {
  return postDataArray.map(({ node, node: { frontmatter, fields } }) => {
    return (
      <li key={node.id} className={blogPageStyles.post}>
        <Link to={`/blog/${fields.slug}`}>
          <h2>{frontmatter.title}</h2>
          <p>Posted on: {frontmatter.date}</p>
        </Link>
      </li>
    )
  })
}
