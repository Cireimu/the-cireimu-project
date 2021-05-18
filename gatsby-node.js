const path = require("path")
const { slash } = require("gatsby-core-utils")
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Creates an absolute path from the hdd root to the blog.js file
  const blogTemplate = path.resolve("./src/templates/blog.js")

  const contentfulBlogsQuery = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (contentfulBlogsQuery.errors) {
    throw contentfulBlogsQuery.errors
  }

  // Runs through the array of contentful blog posts and creates a new page for each
  contentfulBlogsQuery.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: slash(blogTemplate),
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
