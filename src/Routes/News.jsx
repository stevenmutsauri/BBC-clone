import React from "react";
import { NewsMain } from "../Component/News/NewsHome/NewsMain";
import { BannerAd} from '../Component/Advertisement/BannerAd';
import { PopupAd } from '../Component/Advertisement/PopupAd';
const News = () => {
  return (
    <div>
      <BannerAd />
      <PopupAd />
      <NewsMain />
    </div>
  );
};

export { News };
