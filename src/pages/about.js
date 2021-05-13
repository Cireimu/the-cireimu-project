import { Link } from "gatsby"
import React from "react"

// Component import
import Layout from "../components/layout"
import Head from "../components/head"

const About = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About The Cireimu Project</h1>
      <p>The purpose of this site is to exercise and improve my writing.</p>
      <p>
        Want to connect? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default About
