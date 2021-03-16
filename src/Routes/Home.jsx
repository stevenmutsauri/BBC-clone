import React from "react";
import { NewsCard } from "../Component/Home/CommonNewsCard";
import { CoronaNewsCard } from "../Component/Home/CoronaNewsCard";
import { EditorCard } from "../Component/Home/EditorCard";
import { IndiaNewsCard } from "../Component/Home/IndiaNewsCard";
import { MoreAroundBBC } from "../Component/Home/MoreAroundBBC";
import { WeatherForecast } from "../Component/Home/WeatherForecast";
import Welcome from "../Component/Home/Welcome";
import { BannerAd} from '../Component/Advertisement/BannerAd';
import { PopupAd } from '../Component/Advertisement/PopupAd';
import { useDispatch } from "react-redux";
import { fetchNewsData } from "../Redux/app/action";
const Home = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(fetchNewsData())
  },[dispatch])
  return (
    <div>
      <BannerAd />
      <PopupAd />
      <Welcome />
      <WeatherForecast />
      <NewsCard />
      <CoronaNewsCard />
      <IndiaNewsCard />
      <EditorCard />
      <MoreAroundBBC />
    </div>
  );
};

export { Home };
