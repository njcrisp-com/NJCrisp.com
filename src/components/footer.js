import React from "react"

const Footer = () => (
  <footer>
    <p id="copyright">© {new Date().getFullYear()}</p>
    <p id="credits">
      Built with love in the United Kingdom by{" "}
      <a href="rstlss.org" target="_blank">
        RSTLSS
      </a>
    </p>
  </footer>
)

export default Footer
