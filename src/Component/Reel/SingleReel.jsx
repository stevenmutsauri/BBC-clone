import React from 'react'
import { useParams } from 'react-router'
import ReactPlayer from "react-player/youtube";


export default function SingleReel() {
    const {reelId}= useParams()

    return (
        <div>
          
            <ReactPlayer
            url={"https://www.youtube.com/watch?v="+ reelId.split('-').splice(-1)[0]}
            light={true}
            width={"100%"}
            height={"100vh"}
            playing={true}
            volume={0}
            stopOnUnmount={true}
          />
        
        </div>
    )
}
