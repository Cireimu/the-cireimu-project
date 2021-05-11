import React from "react"
import { Link } from "gatsby"

// Component imports
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>I'm Ethan, a full-stack developer living in hellish Las Vegas.</h2>
      <p>
        Want to connect? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
