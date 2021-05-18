import React from "react"

// Component Imports
import Layout from "../components/layout"
import Head from "../components/head"

// Style Imports
import * as aboutPageStyles from "../styles/about-page.module.scss"

const About = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1 className={aboutPageStyles.header}>About The Cireimu Project</h1>
      <p>
        The purpose of this site is to simply display my past and current
        technical projects, with some non-technical blog posts that focus on
        other things such as games and movies.
      </p>
    </Layout>
  )
}

export default About
