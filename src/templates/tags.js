import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import BlogPost from '../components/BlogPost'
import Layout from '../components/Layout'

class TagRoute extends React.Component {
  render() {
    const {
      data,
      pageContext
    } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const tag = pageContext.tag
    const title = data.site.siteMetadata.title
    const totalCount = data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} “${tag}” post${
      totalCount === 1 ? '' : 's'
    }`

    return (
      <Layout>
        <section className="section">
          <Helmet title={`${tag} | ${title}`} />
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">{tagHeader}</h1>
            </div>
            {posts
              .map(({ node: post }) => (
                <BlogPost
                  post={post}
                  key={post.id}
                />
              ))
            }
            <p>
              <Link to="/tags/">Browse all tags</Link>
            </p>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" }, tags: { in: [$tag] } }}
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            tags
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
