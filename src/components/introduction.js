import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Bounce from "react-reveal/Bounce"

const Introduction = ({ data, lightsOn }) => {
  const textColor = lightsOn ? "text-gray-700" : "text-gray-500"

  return (
    <Bounce bottom delay={300}>
      <div
        className={`content px-4 mt-3 md:px-0 mb-8 md:mt-12 lg:mt-12 md:mb-24 max-w-4xl lg:max-w-5xl md:text-lg lg:text-xl xl:text-2xl text-center md:text-left mx-auto md:mx-0 ${textColor} lg:mt-8`}
      >
        {documentToReactComponents(data.page.text.json)}
      </div>
    </Bounce>
  )
}

export default Introduction
