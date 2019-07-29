/** @jsx jsx */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { css, jsx } from "@emotion/core"

const Footer = () => {
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
  return (
    <footer className="container mx-auto my-8 px-4 text-center">
      <p className="text-sm">© {new Date().getFullYear()}</p>
      <p className="text-sm">
        Built with{" "}
        <FontAwesomeIcon
          icon={faHeart}
          alt="Love"
          css={css`
            color: tomato;
            margin-right: 2pt;
            position: relative;
            top: 1px;
          `}
        />
        in the{" "}
        <img
          src={data.GBFlag.publicURL}
          alt="United Kingdom"
          css={css`
            width: auto;
            height: 0.8em;
            position: relative;
            top: -2px;
            display: inline-block;
          `}
        />{" "}
        by{" "}
        <a href="https://rstlss.org" target="_blank">
          <img
            src={data.RSTLSSLogo.publicURL}
            alt="RSTLSS"
            css={css`
              width: auto;
              height: 1.25em;
              position: relative;
              top: -2px;
              display: inline-block;
            `}
          />
        </a>
      </p>
    </footer>
  )
}

export default Footer
