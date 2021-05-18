import React from "react"
import { Link } from "gatsby"

// Styles
import * as blogPageStyles from "../styles/blog-page.module.scss"

export const renderTitleDateList = postDataArray => {
  return postDataArray.map(({ node, node: { title, publishDate, slug } }) => {
    return (
      <li key={node.id} className={blogPageStyles.post}>
        <Link to={`/blog/${slug}`}>
          <h2>{title}</h2>
          <p>Posted on: {publishDate}</p>
        </Link>
      </li>
    )
  })
}
