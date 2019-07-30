import React from "react"

import Plyr from "react-plyr"
import "../../node_modules/plyr/dist/plyr.css"

const Player = ({ videoId }) => (
  <div className="block my-4">
    <Plyr
      type="vimeo" // or "vimeo"
      videoId={videoId}
      resetOnEnd={true}
      clickToPlay={true}
      autopause={true}
      quality="1080"
    />
  </div>
)

export default Player
