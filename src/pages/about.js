import React from "react"

// Component Imports
import Layout from "../components/layout"
import Head from "../components/head"

// Style Imports
import * as aboutPageStyles from "../styles/about-page.module.scss"

// Asset Imports
import Selfie from "../assets/Ethan_Hoover.png"

const About = () => {
  return (
    <Layout>
      <div className={aboutPageStyles.aboutContainer}>
        <Head title="About" />
        <h1 className={aboutPageStyles.header}>About Me</h1>
        <p>
          Hey there, my name is Ethan Hoover and I'm currently a web-developer
          who's also pursuing a Bachelor's in Computer Science. The purpose of
          this site is to display my past and current technical projects, with
          some non-technical blog posts that focus on other interests of mine,
          such as video games and film.
        </p>
        <img
          src={Selfie}
          alt="Guy with glasses in a goofy gray long sleeve shirt"
          className={aboutPageStyles.selfie}
        />
        <div className={aboutPageStyles.skillSection}>
          <h2>My Skills:</h2>
          <p>
            JavaScript | React | Redux | Node.js | Express.js | Git | HTML5
            Apollo Server | Prisma GraphQL
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
