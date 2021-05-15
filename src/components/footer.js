import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

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
    <footer className={footerStyles.footerMain}>
      <p>Created by {siteMetadata.author}</p>
      <div>
        <p>
          Want to connect? <Link to="/contact">Contact me.</Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
