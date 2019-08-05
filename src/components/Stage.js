/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import "./style.css"
import { css, jsx } from "@emotion/core"

const Stage = ({ lightsOn, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const backgroundColor = lightsOn ? "bg-white" : "bg-darkgray"
  const textColor = lightsOn ? "" : "text-gray-300"

  return <>{children}</>
}

Stage.propTypes = {
  children: PropTypes.node.isRequired,
  lightsOn: PropTypes.boolean,
}

Stage.defaultProps = {
  lightsOn: true,
}

export default Stage
