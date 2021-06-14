import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

// Styles
import * as headerStyles from "../styles/header.module.scss"

// Helpers

const Header = () => {
  // Tagged Template Literal syntax
  // Allows string to be process by the graphql function
  // Converts the string into readable function properties
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.logoNavContainer}>
        <div className={headerStyles.logo}>
          <h1 className={headerStyles.title}>
            <Link to="/">{siteMetadata.title}</Link>
          </h1>
        </div>
        <nav>
          <ul className={headerStyles.navList}>
            {["home", "about", "blog"].map(navItem => {
              const redirect = navItem === "home" ? "/" : `/${navItem}`
              return (
                <li key={navItem}>
                  <Link
                    to={redirect}
                    className={headerStyles.navItem}
                    activeClassName={headerStyles.activeNavItem}
                  >
                    {navItem.charAt(0).toUpperCase() + navItem.slice(1)}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
