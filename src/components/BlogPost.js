import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby'

const BlogPost = ({
    post
}) => {
    console.log(post);
    return (
        <div
            className="BlogPost content"
        >
            <h1>
                <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                </Link>
            </h1>
            <p>
                <small>{post.frontmatter.date}</small>
            </p>
            <p>
                {post.excerpt}
                <br />
                <br />
                <Link className="button is-small" to={post.fields.slug}>
                    Keep Reading →
                </Link>
            </p>
            {post.frontmatter.tags &&
                <p>
                    {post.frontmatter.tags.map(tag => {
                        return (
                            <span
                                className="BlogPost-category"
                                key={tag}
                            >
                                {tag}
                            </span>
                        );
                    })}
                </p>
            }
        </div>
    );
};

BlogPost.propTypes = {
    post: PropTypes.object.isRequired
};

export default BlogPost;
