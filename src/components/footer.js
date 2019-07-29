/** @jsx jsx */
import React from "react"
import RSTLSSLogo from "./rstlss.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import GBFlag from "./gb.svg"
import { css, jsx } from "@emotion/core"

const Footer = () => (
  <footer>
    <p id="copyright">© {new Date().getFullYear()}</p>
    <p id="credits">
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
        src={GBFlag}
        alt="United Kingdom"
        css={css`
          width: auto;
          height: 0.8em;
          position: relative;
          top: 2px;
        `}
      />{" "}
      by{" "}
      <a href="rstlss.org" target="_blank">
        <img
          src={RSTLSSLogo}
          alt="RSTLSS"
          css={css`
            width: auto;
            height: 1.25em;
            position: relative;
            top: 5px;
          `}
        />
      </a>
    </p>
  </footer>
)

export default Footer
