import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Fade from "react-reveal/Fade"

const Introduction = ({ data, lightsOn }) => {
  const textColor = lightsOn ? "text-gray-700" : "text-gray-300"

  return (
    <Fade top>
      <div
        className={`content px-4 mt-3 md:px-0 mb-8 md:mt-12 lg:mt-12 md:mb-24 max-w-4xl lg:max-w-5xl md:text-lg lg:text-xl xl:text-2xl text-center md:text-left mx-auto md:mx-0 ${textColor} lg:mt-8`}
      >
        {documentToReactComponents(data.page.text.json)}
      </div>
    </Fade>
  )
}

export default Introduction
