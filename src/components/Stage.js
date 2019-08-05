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

  return (
    <div
      id="Stage"
      className={`w-full h-full ${backgroundColor}`}
      css={css`
        transition: background-color 2s ease-in-out;
      `}
    >
      <div
        id="container"
        className="font-sans tracking-tighter px-4 md:px-8 flex flex-col justify-between min-h-screen"
      >
        <Header lightsOn={lightsOn} siteTitle={data.site.siteMetadata.title} />
        <div
          id="main"
          className={`pt-2 md:pt-8 lg:pt-12 xl:pt-16 md:px-8 ${textColor} flex-auto flex-grow`}
        >
          <main>{children}</main>
        </div>

        <div className="flex-1 flex justify-end flex-col">
          <Footer lightsOn={lightsOn} />
        </div>
      </div>
    </div>
  )
}

Stage.propTypes = {
  children: PropTypes.node.isRequired,
  lightsOn: PropTypes.boolean,
}

Stage.defaultProps = {
  lightsOn: true,
}

export default Stage
