import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby'

const BlogPost = ({
    post
}) => {
    return (
        <div
            className="BlogPost content"
            style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
        >
            <p>
                <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                </Link>
                <span> &bull; </span>
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
        </div>
    );
};

BlogPost.propTypes = {
    post: PropTypes.object.isRequired
};

export default BlogPost;
