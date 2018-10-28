import React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './all.scss';

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet title="Byte-Sized Coding">
            <body className="has-navbar-fixed-top" />
        </Helmet>
        <Navbar />
        <div className="Layout">{children}</div>
    </div>
);

export default TemplateWrapper;
