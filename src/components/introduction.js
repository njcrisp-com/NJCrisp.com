import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Introduction = ({ data }) => (
  <div className="mb-8 md:mb-24 max-w-4xl md:text-lg text-center md:text-left mx-auto md:mx-0">
    {documentToReactComponents(data.page.text.json)}
  </div>
)

export default Introduction