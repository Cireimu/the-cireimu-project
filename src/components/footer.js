import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// Styles Import
import * as footerStyles from "../styles/footer.module.scss"

const Footer = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.createdBy}>
      <p>Created by {siteMetadata.author}</p>
    </footer>
  )
}

export default Footer
