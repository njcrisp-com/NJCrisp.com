/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import "./style.css"

const Layout = ({ lightsOn, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const backgroundColor = lightsOn ? "" : "bg-black"
  const textColor = lightsOn ? "" : "text-gray-300"

  return (
    <div id="layout" className={`w-full h-full ${backgroundColor}`}>
      <div id="container" className="font-sans tracking-tighter px-4 md:px-8">
        <Header lightsOn={lightsOn} siteTitle={data.site.siteMetadata.title} />
        <div
          id="main"
          className={`pt-2 px-1 md:pt-8 lg:pt-12 xl:pt-16 md:px-8 min-h-screen ${textColor}`}
        >
          <main>{children}</main>
        </div>
        <Footer lightsOn={lightsOn} />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  lightsOn: PropTypes.boolean,
}

Layout.defaultProps = {
  lightsOn: true,
}

export default Layout
