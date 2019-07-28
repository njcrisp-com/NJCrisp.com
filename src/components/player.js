import React from "react"

import Plyr from "react-plyr"
import "../../node_modules/plyr/dist/plyr.css"

const Player = ({ videoId }) => (
  <div>
    <Plyr
      type="vimeo" // or "vimeo"
      videoId={videoId}
      autoplay="true"
      resetOnEnd="true"
      clickToPlay="true"
      autopause="true"
      quality="1080"
    />
  </div>
)

export default Player
