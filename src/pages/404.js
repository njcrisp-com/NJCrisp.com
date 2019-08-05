import React from "react"

import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <h1>Oh no!</h1>
    <p>The link you followed is unrecognised.</p>
    <p>
      Please <a href="mailto:hello@njcrisp.com">let me know</a> if you think
      this is broken.
    </p>
  </>
)

export default NotFoundPage
