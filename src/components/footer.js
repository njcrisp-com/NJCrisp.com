/** @jsx jsx */
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faCopyright } from "@fortawesome/free-regular-svg-icons"
import { css, jsx } from "@emotion/core"

import Fade from "react-reveal/Fade"

const Footer = ({ lightsOn }) => {
  const data = useStaticQuery(graphql`
    {
      RSTLSSLogo: file(relativePath: { eq: "rstlss.svg" }) {
        publicURL
      }
      GBFlag: file(relativePath: { eq: "GB.svg" }) {
        publicURL
      }
    }
  `)

  const textColor = lightsOn ? "text-gray-700" : "text-gray-100"
  const backgroundColor = lightsOn ? "" : "bg-darkgray"

  return (
    <footer
      className={`w-full max-w-full pt-10 nx0 pb-10 px-4 text-center ${textColor} ${backgroundColor}`}
    >
      <Fade>
        <div className="mx-auto">
          <p className="text-sm my-6">
            <FontAwesomeIcon
              icon={faCopyright}
              alt="Love"
              css={css`
                filter: opacity(0.66);
                margin-right: 2pt;
                position: relative;
                top: 1px;
              `}
            />{" "}
            <span className="font-bold text-sm align-middle inline-block">
              {new Date().getFullYear()}
            </span>
            <strong className="block text-base tracking-tightest">
              <Link to="/contact">Natan James Crisp</Link>
            </strong>
          </p>

          <a
            href="https://rstlss.org"
            target="_blank"
            className="text-base hover:font-bold"
          >
            Hand-crafted with{" "}
            <FontAwesomeIcon
              icon={faHeart}
              alt="Love"
              css={css`
                color: tomato;
                margin-right: 3pt;
                margin-left: 3pt;
                vertical-align: middle;
              `}
            />
            in the{" "}
            <img
              src={data.GBFlag.publicURL}
              alt="United Kingdom"
              css={css`
                width: auto;
                height: 1em;
                vertical-align: middle;
                margin: 0 2pt;
                display: inline-block;
              `}
            />{" "}
            by{" "}
            <img
              src={data.RSTLSSLogo.publicURL}
              alt="RSTLSS"
              css={css`
                width: auto;
                height: 1.25em;
                vertical-align: text-top;
                display: inline-block;
                margin: 0 2pt;
                filter: invert(${lightsOn ? 0 : 1});
              `}
            />
          </a>
        </div>
      </Fade>
    </footer>
  )
}

export default Footer
