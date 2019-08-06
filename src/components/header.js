/** @jsx jsx */

import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css, jsx } from "@emotion/core"

const Navbar = ({ activeLinkColor, linkColor }) => {
  return (
    <nav>
      <ul
        className={`tracking-normal w-1/2 block list-none xl:text-3xl lg:text-2xl md:text-2xl sm:text-lg xs:text-base inline-flex leading-none pt-2 text-center font-light m-0 ${linkColor} overflow-visible max-w-screen`}
      >
        <li className="uppercase hover:text-red-300 inline-block text-center  mr-2 md:mr-4">
          <Link
            activeClassName={`font-bold pointer-events-none ${activeLinkColor}`}
            to="/"
            exact
          >
            About
          </Link>
        </li>
        <li className="uppercase hover:text-red-300 inline-block text-center  mr-2 md:mr-4">
          <Link
            activeClassName={`font-bold pointer-events-none ${activeLinkColor}`}
            to="/portfolio"
          >
            Portfolio
          </Link>
        </li>
        <li className="uppercase hover:text-red-300 inline-block text-center  mr-2 md:mr-4">
          <Link
            activeClassName={`font-bold pointer-events-none ${activeLinkColor}`}
            to="/tools"
          >
            Tools
          </Link>
        </li>
        <li className="uppercase hover:text-red-300 inline-block text-center  mr-2 md:mr-4">
          <Link
            activeClassName={`font-bold pointer-events-none ${activeLinkColor}`}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

const Header = ({ siteTitle, lightsOn }) => {
  const data = useStaticQuery(graphql`
    {
      Emblem: file(relativePath: { eq: "logo/emblem.svg" }) {
        publicURL
      }
    }
  `)
  const activeLinkColor = lightsOn ? "text-gray-900" : "text-gray-100"
  const linkColor = lightsOn ? "text-gray-600" : "text-gray-600"
  const textColor = lightsOn ? "" : "text-white"

  return (
    <header className={`mb-2 w-full pt-6 md:pt-12 ${textColor}`}>
      <div>
        <h1 className="capitalized text-4xl font-bold leading-none">
          <Link to="/" exact>
            <div className="flex content-start">
              <div className="flex flex-shrink self-start w-20 mr-2">
                <img
                  src={data.Emblem.publicURL}
                  alt="NJCrisp.com Emblem"
                  className="h-auto w-full"
                  css={
                    lightsOn
                      ? ""
                      : css`
                          filter: invert(1);
                        `
                  }
                />
              </div>
              <div className="">
                <span
                  className="relative block leading-none m-0 tracking-tighter"
                  css={css``}
                >
                  Natan
                </span>
                <span
                  className="relative block leading-none m-0 tracking-tighter"
                  css={css`
                    top: -0.2em;
                  `}
                >
                  James
                </span>
                <span
                  className="relative block leading-none m-0 tracking-tighter"
                  css={css`
                    top: -0.4em;
                  `}
                >
                  Crisp
                </span>
              </div>
              <div className="flex-grow pointer-events-none" />
            </div>
          </Link>
        </h1>
        <p
          className="leading-none m-0 tracking-tighter lowercase text-lg relative block"
          css={css`
            top: -0.4em;
          `}
        >
          Sound Design & Audio Production
        </p>
      </div>
      <div className="mt-1">
        <div className="w-3/4 bg-gray-400 h-1 rounded"></div>
      </div>

      <Navbar activeLinkColor={activeLinkColor} linkColor={linkColor} />
    </header>
  )
}

Header.propTypes = {
  lightsOn: PropTypes.bool,
}

Header.defaultProps = {
  lightsOn: true,
}

export default Header
