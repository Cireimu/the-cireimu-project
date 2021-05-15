import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

// Component Imports
import Layout from "../components/layout"
import Head from "../components/head"

// Styles Imports
import * as blogTemplateStyles from "../styles/blog-template.module.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          contentful_id
          title
          file {
            url
          }
        }
      }
    }
  }
`
const Blog = props => {
  const postBody = JSON.parse(props.data.contentfulBlogPost.body.raw)
  console.log(postBody)
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        // Initializes the image id used to search for the references
        const imageID = node.data.target.sys.id
        // Returns the url and title/alt related to the embedded image
        const {
          file: { url },
          title,
        } = props.data.contentfulBlogPost.body.references.find(
          ({ contentful_id: id }) => id === imageID
        )
        return <img src={url} alt={title} />
      },

      paragraph: node => {
        return (
          <p className={blogTemplateStyles.paragraph}>
            {node?.content[0]?.value}
          </p>
        )
      },

      "heading-1": node => {
        return (
          <h1 className={blogTemplateStyles.heading1}>
            {node?.content[0]?.value}
          </h1>
        )
      },
      "heading-2": node => {
        return (
          <h2 className={blogTemplateStyles.heading1}>
            {node?.content[0]?.value}
          </h2>
        )
      },
      "heading-3": node => {
        return (
          <h3 className={blogTemplateStyles.heading1}>
            {node?.content[0]?.value}
          </h3>
        )
      },
      "heading-4": node => {
        return (
          <h4 className={blogTemplateStyles.heading1}>
            {node?.content[0]?.value}
          </h4>
        )
      },
      "heading-5": node => {
        return (
          <h5 className={blogTemplateStyles.heading1}>
            {node?.content[0]?.value}
          </h5>
        )
      },
      "heading-6": node => {
        return (
          <h6 className={blogTemplateStyles.heading1}>
            {node?.content[0]?.value}
          </h6>
        )
      },
    },
  }
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1 className={blogTemplateStyles.blogTitle}>
        {props.data.contentfulBlogPost.title}
      </h1>
      <p className={blogTemplateStyles.blogTimestamp}>
        Published on: {props.data.contentfulBlogPost.publishDate}
      </p>
      {documentToReactComponents(postBody, options)}
    </Layout>
  )
}

export default Blog
