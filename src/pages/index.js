import React from "react"
import { Link } from "gatsby"

// Component imports
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>UNDER CONSTRUCTION</h1>
      <p>More to come soon...</p>
      <p>
        Want to connect? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
