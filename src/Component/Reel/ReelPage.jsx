import React from "react";
import ReactPlayer from "react-player/youtube";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "./reel.css";
import style from "../Styles/reelPage.module.css";
import ReelVedioList from "./ReelVedioList";
const AutoplaySlider = withAutoplay(AwesomeSlider);
export default function ReelPage() {

  return (
    <>
      <AwesomeSlider play={true}>
        <div
          style={{
            boxShadow: "inset 10px -70px 102px 0px rgba(0,0,0,0.47)",
            zIndex: 5,
          }}
        >
          {" "}
          <ReactPlayer
            url="https://www.youtube.com/watch?v=bk7McNUjWgw"
            light={true}
            width={"100%"}
            height={"100vh"}
            playing={true}
            volume={0}
            playsinline={true}
            stopOnUnmount={true}
          />
        </div>
        <div>
          {" "}
          <ReactPlayer
            url="https://www.youtube.com/watch?v=VcRTKHpJ_d0"
            light={true}
            width={"100%"}
            height={"100vh"}
            playing={true}
            volume={0}
            playsinline={true}
            stopOnUnmount={true}
          />
        </div>
        <div>
          {" "}
          <ReactPlayer
            url="https://www.youtube.com/watch?v=TPYxbMvgR30"
            light={true}
            width={"100%"}
            height={"100vh"}
            playing={true}
            volume={0}
            stopOnUnmount={true}
          />
        </div>
        <div>
          {" "}
          <ReactPlayer
            url="https://www.youtube.com/watch?v=NcRifDitRnU"
            light={true}
            width={"100%"}
            height={"100vh"}
            playing={true}
            volume={0}
            stopOnUnmount={true}
          />
        </div>
        <div>
          {" "}
          <ReactPlayer
            url="https://www.youtube.com/watch?v=3aY9Se-J2ww"
            light={true}
            width={"100%"}
            height={"100vh"}
            style={{ border: "1px solid white" }}
            playing={true}
            volume={0}
            stopOnUnmount={true}
          />
        </div>
      </AwesomeSlider>

      <div className={style.most__watched}>
        <div className={style.most__part1}>
          <div></div>
          <h1>Most Watched</h1>
          <div> </div>
        </div>
        <div>
          <div>See the videos our audience loves.</div>
        </div>

        <div className={style.reel__wrap} >
         <ReelVedioList></ReelVedioList>
        </div>
      </div>
    </>
  );
}

