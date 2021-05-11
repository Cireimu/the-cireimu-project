import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

// Component Imports
import Layout from "../components/layout"

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
    },
  }
  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>Published on: {props.data.contentfulBlogPost.publishDate}</p>
      {documentToReactComponents(postBody, options)}
    </Layout>
  )
}

export default Blog
