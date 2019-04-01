import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDisqusComments from 'react-disqus-comments';
import config from '../config';

export default class Disqus extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired
    };
    state = {
        toasts: []
    };

    _onNewComment = () => {
        this.setState(prevState => {
            return {
                toasts: [
                    ...prevState.toasts,
                    {text: 'New comment available!'}
                ]
            };
        });
    }

    render() {
        const {
            title,
            slug
        } = this.props;

        if (!config.disqusShortname) {
            return null;
        }

        const url = config.siteUrl + config.pathPrefix + slug;

        return (
            <ReactDisqusComments
                shortname={config.disqusShortname}
                identifier={title}
                title={title}
                url={url}
                onNewComment={this._onNewComment}
            />
        );
    }
}
