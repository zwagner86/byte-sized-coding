import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS">
      <body className="has-navbar-fixed-top"></body>
    </Helmet>
    <Navbar />
    <div className="Layout">{children}</div>
  </div>
)

export default TemplateWrapper
