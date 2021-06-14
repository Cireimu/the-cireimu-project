import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

// Icon Imports
import GitHubIcon from "../assets/iconmonstr-github-4.svg"
import LinkedInIcon from "../assets/iconmonstr-linkedin-3.svg"
import "../util/font-awesome"

// Library imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
      <address>
        <li className={footerStyles.list}>
          <ul>
            <a href="https://github.com/Cireimu">
              <img src={GitHubIcon} className={footerStyles.icon}></img>
            </a>
          </ul>
          <ul>
            <a href="mailto:ethanhoover3@gmail.com">
              <FontAwesomeIcon
                icon="mail-bulk"
                className={footerStyles.icon}
                size="2x"
              />
            </a>
          </ul>
          <ul>
            <a href="https://linkedin.com/in/ethan-c-hoover">
              <img src={LinkedInIcon} className={footerStyles.icon}></img>
            </a>
          </ul>
        </li>
      </address>
    </footer>
  )
}

export default Footer
