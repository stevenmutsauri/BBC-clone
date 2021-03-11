import React from "react";
import ReactPlayer from "react-player/youtube";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./reel.css";
export default function ReelPage() {
  return (
    <AwesomeSlider>
      <div style={{boxShadow: "inset 10px -70px 102px 0px rgba(0,0,0,0.47)",zIndex:5}}>
        {" "}
        <ReactPlayer
          url="https://www.youtube.com/watch?v=3aY9Se-J2ww"
          light={true}
          width={"100%"}
          height={"100vh"}
          playing={true}
          volume={0}
        />
      </div>
      <div>
        {" "}
        <ReactPlayer
          url="https://www.youtube.com/watch?v=VcRTKHpJ_d0"
          light={true}
          width={"100%"}
          height={"100vh"}
        
          playing={false}
          volume={0}
        />
      </div>
      <div>
        {" "}
        <ReactPlayer
          url="https://www.youtube.com/watch?v=Yh_sOPUAMJk"
          light={true}
          width={"100%"}
          height={"100vh"}
         
          playing={false}
          volume={0}
        />
      </div>
      <div>
        {" "}
        <ReactPlayer
          url="https://www.youtube.com/watch?v=Yh_sOPUAMJk"
          light={true}
          width={"100%"}
          height={"100vh"}
          
          playing={false}
          volume={0}
        />
      </div>
      <div>
        {" "}
        <ReactPlayer
          url="https://www.youtube.com/watch?v=Yh_sOPUAMJk"
          light={true}
          width={"100%"}
          height={"100vh"}
          style={{ border: "1px solid white" }}
          playing={false}
          volume={0}
        />
      </div>
    </AwesomeSlider>
  );
}
