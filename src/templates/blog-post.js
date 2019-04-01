import kebabCase from 'lodash/kebabCase';
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import Disqus from '../components/Disqus';
import Share from '../components/Share';

export const BlogPostTemplate = ({
    content,
    contentComponent,
    description,
    tags,
    title,
    slug,
    excerpt
}) => {
    const PostContent = contentComponent || Content;

    return (
        <section className="section">
            <Helmet title={`${title} | Blog`} />
            <div className="container content">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                            {title}
                        </h1>
                        <p>{description}</p>
                        <PostContent content={content} />
                        {tags && tags.length ? (
                            <div style={{ marginTop: `4rem` }}>
                                <h4>Tags</h4>
                                <ul className="taglist">
                                    {tags.map(tag => (
                                        <li key={`${tag}tag`}>
                                            <Link
                                                to={`/tags/${kebabCase(tag)}/`}
                                            >
                                                {tag}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : null}
                        <Share
                            title={title}
                            slug={slug}
                            excerpt={excerpt}
                        />
                        <Disqus
                            title={title}
                            slug={slug}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

BlogPostTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string)
};

const BlogPost = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <Layout>
            <BlogPostTemplate
                content={post.html}
                contentComponent={HTMLContent}
                description={post.frontmatter.description}
                helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
                slug={post.fields.slug}
                excerpt={post.excerpt}
            />
        </Layout>
    );
};

BlogPost.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object
    })
};

export default BlogPost;

export const pageQuery = graphql`
    query BlogPostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            excerpt(pruneLength: 400)
            id
            html
            fields {
                slug
            }
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
                tags
            }
        }
    }
`;
