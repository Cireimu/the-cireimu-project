const path = require("path")

// Runs when nodes are being created during gatsby start up
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  // Checks if node is a Markdown file
  if (node.internal.type == "MarkdownRemark") {
    // Extracts the file name without the .md extension to use as a slug
    const slugValue = path.basename(node.fileAbsolutePath, ".md")

    // Adds a filename/slug field on the node
    createNodeField({
      node,
      name: "slug",
      value: slugValue,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Creates an absolute path from the hdd root to the blog.js file
  const blogTemplate = path.resolve("./src/templates/blog.js")

  const markdownRemarkQuery = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // Runs through the array of markdown files and creates a new page for each
  markdownRemarkQuery.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
