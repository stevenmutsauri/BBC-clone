import React from "react";
import Business from "../Component/Home/Business";
import Business2 from "../Component/Home/Business2";
import { NewsCard } from "../Component/Home/CommonNewsCard";
import { CoronaNewsCard } from "../Component/Home/CoronaNewsCard";
import { EditorCard } from "../Component/Home/EditorCard";
import Future from "../Component/Home/Future";
import { IndiaNewsCard } from "../Component/Home/IndiaNewsCard";
import { MoreAroundBBC } from "../Component/Home/MoreAroundBBC";
import Reel from "../Component/Home/Reel";
import { WeatherForecast } from "../Component/Home/WeatherForecast";
import Welcome from "../Component/Home/Welcome";
import World from "../Component/Home/World";
import { BannerAd} from '../Component/Advertisement/BannerAd';
import { PopupAd } from '../Component/Advertisement/PopupAd';
const Home = () => {
  return (
    <div>
      <BannerAd />
      <PopupAd />
      <Welcome />

      <WeatherForecast />
      <NewsCard />
      <CoronaNewsCard />
      {/* <Reel/> */}
      <IndiaNewsCard />
      <EditorCard />
      {/* <Future/> */}
      {/* <Business/> */}
      <MoreAroundBBC />
      {/* <Business2/> */}
      {/* <World/> */}
    </div>
  );
};

export { Home };
