import React from 'react';
import PropTypes from 'prop-types';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    RedditShareButton,
    FacebookShareCount,
    LinkedinShareCount,
    RedditShareCount,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    RedditIcon,
} from 'react-share';
import config from '../config';

const Share = ({
    title,
    slug,
    excerpt,
    mobile
}) => {
    const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;
    const url = config.siteUrl + realPrefix + slug;
    const iconSize = mobile ? 36 : 48;

    return (
        <div className="Share">
            <RedditShareButton
                url={url}
                title={title}
            >
                <RedditIcon
                    round
                    size={iconSize}
                />
                <RedditShareCount url={url}>
                    {count => <div className="Share-count">{count > 0 ? count : ''}</div>}
                </RedditShareCount>
            </RedditShareButton>
            <TwitterShareButton
                url={url}
                title={title}
            >
                <TwitterIcon
                    round
                    size={iconSize}
                />
            </TwitterShareButton>
            <FacebookShareButton
                url={url}
                quote={excerpt}
            >
                <FacebookIcon
                    round
                    size={iconSize}
                />
                <FacebookShareCount url={url}>
                    {count => <div className="Share-count">{count > 0 ? count : ''}</div>}
                </FacebookShareCount>
            </FacebookShareButton>
            <LinkedinShareButton
                url={url}
                title={title}
                description={excerpt}
            >
                <LinkedinIcon
                    round
                    size={iconSize}
                />
                <LinkedinShareCount url={url}>
                    {count => <div className="Share-count">{count > 0 ? count : ''}</div>}
                </LinkedinShareCount>
            </LinkedinShareButton>
        </div>
    );
};

Share.propTypes = {
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    mobile: PropTypes.bool
};

export default Share;
