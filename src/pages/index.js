import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import BlogPost from '../components/BlogPost';
import Layout from '../components/Layout';

export default class IndexPage extends React.Component {
    render() {
        const { data } = this.props;
        const { edges: posts } = data.allMarkdownRemark;

        return (
            <Layout>
                <section className="section">
                    <div className="container">
                        {posts.map(({ node: post }) => (
                            <BlogPost
                                post={post}
                                key={post.id}
                            />
                        ))}
                    </div>
                </section>
            </Layout>
        );
    }
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array
        })
    })
};

export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
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
`;
