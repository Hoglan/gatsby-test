import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allWordpressPost.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />

        {posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <article key={"/updates/" + node.categories[0].slug + "/" + node.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={"/updates/" + node.categories[0].slug + "/" + node.slug + "/"}>
                    {title}
                  </Link>
                </h3>
                <small>{node.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allWordpressPost {
      edges {
          node {
          title
          content
          slug
          excerpt
          wordpress_id
          categories { name, slug }
          date(formatString: "MMMM DD, YYYY")
          featured_media {
              localFile {
              childImageSharp {
                  fixed(width: 1000) {
                  ...GatsbyImageSharpFixed
                  }
              }
              }
          }
          }
      }
      }
  }
`
