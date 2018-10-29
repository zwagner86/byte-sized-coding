import React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './all.scss';
import bscIcon from '../img/bsclogo.png';

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet
            title="Byte-Sized Coding"
            link={[
                { rel: 'shortcut icon', type: 'image/png', href: `${bscIcon}` }
            ]}
        >
            <body className="has-navbar-fixed-top" />
        </Helmet>
        <Navbar />
        <div className="Layout">{children}</div>
    </div>
);

export default TemplateWrapper;
