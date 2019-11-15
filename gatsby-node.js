const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(`
    {
    allWordpressPost {
        edges {
        node {
            slug
            wordpress_id
            categories { name, slug }
        }
        }
    }
    allWordpressPage {
        edges {
        node {
            slug
            wordpress_id
        }
        }
    }
    }
`)

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const BlogPosts = result.data.allWordpressPost.edges

  BlogPosts.forEach((post, index) => {
 
    const previous = index === BlogPosts.length - 1 ? null : BlogPosts[index + 1].node
    const next = index === 0 ? null : BlogPosts[index - 1].node

    createPage({
      // path: post.node.slug,
      path: "updates/" + post.node.categories[0].slug + "/" + post.node.slug + "/",
      component: blogPost,
      context: {
        id: post.node.wordpress_id,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
