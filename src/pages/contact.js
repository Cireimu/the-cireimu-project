import React from "react"

// Component Imports
import Layout from "../components/layout"
import Head from "../components/head"

// Styles Imports
import * as contactPageStyles from "../styles/contact-page.module.scss"

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1 className={contactPageStyles.header}>Contact</h1>
      <div>
        <ul className={contactPageStyles.list}>
          <li>Twitter: https://twitter.com/Ethan_Hoover_</li>
          <li>GitHub: https://github.com/Cireimu</li>
          <li>LinkedIn: https://linkedin.com/in/ethan-c-hoover</li>
          <li>Email: ethanhoover3@gmail.com</li>
        </ul>
      </div>
    </Layout>
  )
}

export default Contact
