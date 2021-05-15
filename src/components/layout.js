import React from "react"

// Component Imports
import Header from "./header"
import Footer from "./footer"

// Styles
import "../styles/index.scss"
import * as layoutStyles from "../styles/layout.module.scss"

const Layout = props => {
  return (
    <div>
      <Header />

      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>{props.children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
