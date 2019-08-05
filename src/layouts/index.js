//src/layouts/index.js

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import Transition from "../components/transition"
import "../components/style.css"

const Layout = ({ children, location }) => {
  const lightsOn = true

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
        <div className={`w-full h-full ${backgroundColor}`}>
          <div
            id="container"
            className="font-sans tracking-tighter px-4 md:px-8 flex flex-col justify-between min-h-screen"
          >
            <Header
              lightsOn={lightsOn}
              siteTitle={data.site.siteMetadata.title}
            />
            <div
              id="main"
              className={`pt-2 md:pt-8 lg:pt-12 xl:pt-16 md:px-8 ${textColor} flex-auto flex-grow`}
            >
              <Transition location={location}>
                <main>{children}</main>
              </Transition>
            </div>

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
