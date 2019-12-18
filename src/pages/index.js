import React from "react"
import { Link, graphql } from "gatsby"

import BlogLayout from "../components/bloglayout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allWordpressPost.edges

    return (
      
      <BlogLayout location={this.props.location} title={siteTitle}>
<section className="mast" data-colours="light">
  <span className="mast--secret"></span>
  <div className="mast--inner">

    <div className="mast--ele">
      <a className="logo" href="/" title="Return to the Cargo homepage">
        <svg id="Group_1" data-name="Group 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 27.629" height="28" width="90">
          <path data-name="Path 1" d="M13.124,6.976C12.916,5.042,11.742,3.73,8.91,3.73c-3.177,0-4.766,2.625-4.766,5.595,0,3.039,1.45,5.664,5.042,5.664,2.417,0,3.454-1.036,3.937-2.832h4.144c-.553,3.73-3.315,6.562-8.427,6.562C3.108,18.718,0,14.229,0,9.325,0,4.559,3.108,0,8.841,0c5.8,0,8.15,3.523,8.427,6.976Z" transform="translate(0)"/>
          <path data-name="Path 2" d="M45.487.483V18.235H41.343V15.817a6.684,6.684,0,0,1-5.526,2.832A9.067,9.067,0,0,1,26.7,9.325,9.067,9.067,0,0,1,35.817,0a6.684,6.684,0,0,1,5.526,2.832V.483ZM41.343,9.325c0-3.039-2.072-5.664-5.249-5.664-3.108,0-5.18,2.625-5.18,5.664s2.072,5.664,5.18,5.664C39.271,14.988,41.343,12.433,41.343,9.325Z" transform="translate(-8.258)"/>
          <path data-name="Path 3" d="M68.628,4.375a6.455,6.455,0,0,0-1.658-.138c-3.523,0-5.526,2-5.526,6.424v7.667H57.3V.576h4.144V3.408A6.418,6.418,0,0,1,66.97.3a4.18,4.18,0,0,1,1.658.276Z" transform="translate(-17.722 -0.093)"/>
          <path data-name="Path 4" d="M92.656,19.133c0,2.97-.9,5.111-2.556,6.493s-4.006,2-6.976,2a9.346,9.346,0,0,1-6.631-2.279,7.071,7.071,0,0,1-2.348-5.042h4.213c.207,1.934,1.727,3.592,4.766,3.592,3.315,0,5.318-1.381,5.318-4.766V15.817a6.684,6.684,0,0,1-5.526,2.832A9.067,9.067,0,0,1,73.8,9.325,9.025,9.025,0,0,1,82.917,0a6.684,6.684,0,0,1,5.526,2.832V.483h4.144ZM77.944,9.325c0,3.039,2.072,5.664,5.18,5.664,3.177,0,5.249-2.625,5.249-5.664S86.3,3.661,83.125,3.661A5.375,5.375,0,0,0,77.944,9.325Z" transform="translate(-22.825)"/>
          <path data-name="Path 5" d="M103.2,9.325a9.359,9.359,0,0,1,18.718,0,9.131,9.131,0,0,1-9.394,9.325A9.034,9.034,0,0,1,103.2,9.325Zm14.574,0c0-3.039-2.072-5.664-5.249-5.664-3.108,0-5.18,2.625-5.18,5.664s2.072,5.664,5.18,5.664C115.7,14.988,117.774,12.433,117.774,9.325Z" transform="translate(-31.918)"/>
        </svg>
      </a>
    </div>

    <div className="mast--ele">
      <a className="nav--primary--toggle" data-open="false" href="#" title="Open / Close the primary navigation"><span>Menu</span></a>
    </div>

    <div className="mast--ele">
      <nav className="nav nav--social">
              <ul className="nav--social--links">
                <li><a className="social-fb" href="//www.facebook.com/cargocreative" target="_blank" title="Like Cargo on Facebook"><span className="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="7" height="16" viewBox="0 0 7 16"><path d="M6.97 4.857H4.597V3.3c0-.584.387-.721.66-.721h1.675V.009L4.625 0C2.063 0 1.48 1.917 1.48 3.144v1.713H0v2.648h1.48V15h3.116V7.505h2.102l.272-2.648z"/></svg></span> <span className="social-name">Facebook</span></a></li>
                <li><a className="social-tw" href="//twitter.com/cargocreative" target="_blank" title="Follow Cargo on Twitter"><span className="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="1.229 0.999 16 14"><path d="M17.229 2.537a6.555 6.555 0 0 1-1.885.517 3.298 3.298 0 0 0 1.444-1.816 6.56 6.56 0 0 1-2.086.796 3.283 3.283 0 0 0-5.594 2.995 9.315 9.315 0 0 1-6.765-3.43 3.262 3.262 0 0 0-.445 1.651c0 1.138.579 2.144 1.461 2.732a3.263 3.263 0 0 1-1.487-.411v.042a3.283 3.283 0 0 0 2.633 3.218 3.292 3.292 0 0 1-1.482.055 3.283 3.283 0 0 0 3.066 2.28 6.583 6.583 0 0 1-4.86 1.358A9.276 9.276 0 0 0 6.261 14c6.038 0 9.339-5.003 9.339-9.339a8.53 8.53 0 0 0-.009-.425 6.65 6.65 0 0 0 1.638-1.699z"/></svg></span> <span className="social-name">Twitter</span></a></li>
                <li><a className="social-ig" href="//www.instagram.com/cargocreative" target="_blank" title="Follow Cargo on Instagram"><span className="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M0 9.974V5.032c.008-.047.022-.093.024-.141.017-.58.043-1.159.185-1.725C.53 1.888 1.271.958 2.49.432 3.15.146 3.853.063 4.564.034 4.72.027 4.876.012 5.032 0h4.943c.047.008.093.02.141.024.479.042.964.042 1.434.13 1.715.321 2.814 1.325 3.251 3.028.188.737.189 1.494.197 2.246a186 186 0 0 1-.012 4.419c-.008.572-.032 1.154-.137 1.715-.318 1.709-1.326 2.804-3.023 3.237-.732.188-1.484.192-2.23.197-1.562.011-3.125-.005-4.687-.017-.59-.004-1.18-.039-1.755-.186C1.901 14.475.981 13.749.45 12.557c-.299-.672-.386-1.389-.416-2.116-.007-.154-.023-.311-.034-.467zm13.665-2.47h-.023c0-.625.012-1.25-.004-1.875a22.63 22.63 0 0 0-.097-1.766c-.058-.565-.258-1.085-.642-1.523-.529-.603-1.224-.856-1.991-.903a54.854 54.854 0 0 0-2.66-.078 78.909 78.909 0 0 0-2.62.011c-.588.01-1.179.035-1.765.095-.566.058-1.086.258-1.524.642-.603.529-.857 1.224-.903 1.991a54.895 54.895 0 0 0-.078 2.661c-.011.873-.007 1.747.01 2.619.012.59.037 1.181.097 1.767.058.565.258 1.085.642 1.523.529.603 1.223.856 1.991.903.885.054 1.773.066 2.66.078.874.011 1.747.011 2.62-.012.647-.017 1.302-.029 1.94-.129 1.091-.171 1.829-.803 2.123-1.886.096-.355.146-.731.159-1.1.038-1.005.046-2.012.065-3.018z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.359 7.501a3.853 3.853 0 0 1-3.862 3.857 3.854 3.854 0 0 1-3.851-3.854 3.853 3.853 0 0 1 3.862-3.858 3.856 3.856 0 0 1 3.851 3.855zm-6.352 0c0 1.366 1.118 2.497 2.468 2.499 1.391 0 2.523-1.108 2.524-2.472C10 6.132 8.89 5.007 7.509 5.007a2.5 2.5 0 0 0-2.502 2.494zm7.404-3.996a.905.905 0 1 1-1.81-.012.905.905 0 0 1 1.81.012z"/></svg></span> <span className="social-name">Instagram</span></a></li>
              </ul>
      </nav>
    </div>

  </div>
</section>


    <div className="blog-grid">

      <div className="blog-grid--column"> 

        <section className="mid">
          <div className="wrap" >
          <h1 className="page-heading">Updates</h1>
        <SEO title="All posts" />

        {posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <article key={"/updates/" + node.categories[0].slug + "/" + node.slug}>
            <div className="article--inner">
              <div className="article--author">
                <div className="bg-image article--author--thumb" itemprop="author">
                  <img alt="" className="bg-image--src" src="/wp-content/uploads/2019/03/cargo-headshot-kirsty.jpg"/>
                </div>
              </div>
            </div>
              <header>
                <p className="article--heading"
                >
                  <Link style={{ boxShadow: `none` }} to={"/updates/" + node.categories[0].slug + "/" + node.slug + "/"}>
                    {title}
                  </Link>
                </p>
                <p className="article--date">{node.date}</p>
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
        </div>

      </section>

      </div>

  
  <div className="blog-grid--column">

    <section className="mid" data-bg="lgrey">
      <div className="wrap">

        <div className="strip--heading-wrap">
          <h2 className="strip--heading">Cargo Curates</h2>
          <p className="article--more"><a href="#" title="#">View All</a></p>
        </div>
        </div>
    </section>

  </div>
</div>
      </BlogLayout>
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
