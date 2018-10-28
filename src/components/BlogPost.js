import kebabCase from 'lodash/kebabCase';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const BlogPost = ({ post }) => {
    return (
        <div className="BlogPost content">
            <h1>
                <Link
                    className="has-text-primary"
                    to={post.fields.slug}
                >
                    {post.frontmatter.title}
                </Link>
            </h1>
            <p>
                <small>{post.frontmatter.date}</small>
            </p>
            <p>
                <div className="BlogPost-excerpt">{post.excerpt}</div>
                <Link
                    className="BlogPost-keep-reading button is-small"
                    to={post.fields.slug}
                >
                    Keep Reading →
                </Link>
            </p>
            {post.frontmatter.tags && (
                <p>
                    {post.frontmatter.tags.map(tag => {
                        return (
                            <Link
                                className="BlogPost-category"
                                to={`/tags/${kebabCase(tag)}/`}
                                key={tag}
                            >
                                {tag}
                            </Link>
                        );
                    })}
                </p>
            )}
        </div>
    );
};

BlogPost.propTypes = {
    post: PropTypes.object.isRequired
};

export default BlogPost;
