import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVedioFetchData } from "../../Redux/Search/action";
import style from "../Styles/reelPage.module.css";
import { ImPlay2 } from "react-icons/im";
import { Link } from "react-router-dom";

export default function ReelVedioList() {
  const vedioList = useSelector((state) => state.search.vedioList);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getVedioFetchData());
  }, []);
  return (
    <div className={style.reel__wrap}>
      {vedioList?.map((item) => (
        <div className={style.image__parent}>
          <div>
            <img
              className={style.reel__img}
              src={item.thumbnail}
              alt="thumbnail"
            />
          </div>
          <Link className={style.single__image} to={"/videos/"+item.category+"-"+item.video_url.split('/').splice(-1)[0]}>
            <div className={style.image__text}>
              <div>{item.category}</div>
              <h1>{item.title}</h1>
              <h2>
                <ImPlay2 /> <span className={style.watchnow}> watch now</span>
              </h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
