import React from "react"

import Stage from "../components/Stage"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Stage>
    <SEO title="404: Not found" />
    <h1>Oh no!</h1>
    <p>The link you followed is unrecognised.</p>
    <p>
      Please <a href="mailto:hello@njcrisp.com">let me know</a> if you think
      this is broken.
    </p>
  </Stage>
)

export default NotFoundPage
