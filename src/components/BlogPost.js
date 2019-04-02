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
            <div className="BlogPost-section">
                <small>{post.frontmatter.date}</small>
            </div>
            <div className="BlogPost-section">
                <div className="BlogPost-excerpt">{post.excerpt}</div>
                <Link
                    className="BlogPost-keep-reading button is-small"
                    to={post.fields.slug}
                >
                    Keep Reading →
                </Link>
            </div>
            {post.frontmatter.tags && (
                <div className="BlogPost-section">
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
                </div>
            )}
        </div>
    );
};

BlogPost.propTypes = {
    post: PropTypes.object.isRequired
};

export default BlogPost;
