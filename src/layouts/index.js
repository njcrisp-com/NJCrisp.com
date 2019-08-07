//src/layouts/index.js
/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import Transition from "../components/transition"
import "../components/style.css"
import { css, jsx } from "@emotion/core"
import { startsWith } from "ramda"

import Fade from "react-reveal/Fade"

import config from "react-reveal/globals"

config({ ssrFadeout: true })

const Layout = ({ children, location }) => {
  const lightsOn = !startsWith("/portfolio")(location.pathname)

  const backgroundColor = lightsOn ? "bg-white" : "bg-darkgray"
  const textColor = lightsOn ? "" : "text-gray-300"

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery2 {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div
          className={`w-full h-full ${backgroundColor}`}
          css={css`
            transition: background-color 0.25s ease-in-out;
          `}
        >
          <div
            id="container"
            className="font-sans tracking-tighter px-4 md:px-8 flex flex-col justify-between min-h-screen"
          >
            <Header
              lightsOn={lightsOn}
              siteTitle={data.site.siteMetadata.title}
            />
            <Fade top delay={1000}>
              <div
                id="main"
                className={`pt-2 md:px-8 ${textColor} flex-auto flex-grow`}
              >
                <Transition location={location}>
                  <main>{children}</main>
                </Transition>
              </div>
            </Fade>

            <div className="flex-1 flex justify-end flex-col">
              <Footer lightsOn={lightsOn} />
            </div>
          </div>
        </div>
      )}
    />
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
