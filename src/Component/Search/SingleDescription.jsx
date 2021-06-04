import React from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import SingleDescLeft from "./SingleDescLeft";
import style from "../Styles/singleDescription.module.css";
import { Link } from "react-router-dom";
import { BiTime } from "react-icons/bi";
import { getSearchFetchData } from "../../Redux/Search/action";
import Skeleton from "react-loading-skeleton";
import { getNewsDataPost } from "../../Redux/Auth/Action";
export default function SingleDescription() {
  const searchList = useSelector((state) => state.search.searchList);
  const isLoading = useSelector((state) => state.search.isLoading);
  const adminAuthData =  useSelector((state) => state.login.adminAuthData);
  const dispatch = useDispatch();
  const { singleId } = useParams();

  var list = [...searchList];
  const [single, setSingle] = React.useState("");
  React.useEffect(() => {
    (async () => {
      await dispatch(getSearchFetchData(""));
      await dispatch(getNewsDataPost())
    })();
  }, [singleId]);

  React.useEffect(() => {
    let _single = list?.filter((item) => {
      if (item.id == singleId) {
        return true;
      }
    })[0];
    setSingle(_single);
  }, [searchList]);

  const desc1 = single && single.description.split(".");
  const desc2 = single && single.description.split(".");
  const desc3 = single && single.description.split(".");

  const toStories = [...searchList];

  var arr = [];
  const right1 = toStories?.filter((item) => {
    if (
      item.headline ==
      "Nicola Sturgeon 'cannot turn a blind eye' to Rangers crowds"
    ) {
      return true;
    }
  })[0];
  const right2 = toStories?.filter((item) => {
    if (
      item.headline == "Covid: How this Indian firm is vaccinating the world"
    ) {
      return true;
    }
  })[0];
  const right3 = toStories?.filter((item) => {
    if (
      item.headline ==
      "Covid: Germany approves AstraZeneca vaccine for over-65s"
    ) {
      return true;
    }
  })[0];
  arr.push(right1, right2, right3);
  arr = arr.filter((item) => item != undefined);
  // console.log(arr);

  const desc4 =
    arr.length > 0 &&
    arr.map(
      (item) =>
        item.article_data && item.article_data[0].sub_description.split(".")
    );

  const getHrAgo = () => {
    var min = 1;
    var max = 23;
    var rand = Math.ceil(min + Math.random() * (max - min));

    return rand + " hrs ago";
  };

  const features = [...searchList].reverse().splice(1, 7);

  const mostRead = [...searchList].splice(1, 8);

  return isLoading ? (
    <Skeleton  width="100vw" height="500vh"/>
  ) : (
    <>
      {single && (
        <div className={style.singleDescription__page}>
          <SingleDescLeft
            single={single}
            desc1={desc1}
            desc2={desc1}
            desc3={desc3}
          ></SingleDescLeft>

          <div className={style.singleDesc__right} >
            <div className={style.singleDesc__right__sec1} >
              <div></div>
              <h2>Latest Stories</h2>
              {adminAuthData?.slice(0,3).map((item) => (
                <div>
                  <Link
                    to={"/news/" + item.id}
                    className={style.single__topStories}
                  >
                    {" "}
                    <div className={style.single__topStories}>
                      {item && item.headline}
                    </div>
                  </Link>
                  <div className={style.singleTime}>
                    <span className={style.singleTime__icon}>
                      {/* <BiTime /> */}
                    </span>{" "}
                    {/* {getHrAgo()} */}
                  </div>
                </div>
              ))}


              {arr?.slice(0,5).map((item, i) =>  (
                <div >
                  <Link
                    to={"/news/" + item.id}
                    className={style.single__topStories}
                  >
                    {" "}
                    <div className={style.single__topStories}>
                      {item && item.headline}
                    </div>
                  </Link>
                  <div className={style.singleTime}>
                    <span className={style.singleTime__icon}>
                      {/* <BiTime /> */}
                    </span>{" "}
                    {/* {getHrAgo()} */}
                  </div>
                </div>
              ))}
            </div>
            <div className={style.singleDesc__right__sec2}>
              <div></div>
              <h2>Features</h2>
              {features.map((item) => (
                <>
                  <img src={item.img[0].img_url} alt="" />
                  <Link
                    to={"/news/" + item.id}
                    className={style.single__topStories}
                  >
                    <div>{item.headline}</div>
                  </Link>
                </>
              ))}
            </div>
            <div className={style.beforeline__mostread}></div>
            <div className={style.mostread}>
              <h2>Most Read</h2>
              {mostRead?.map((item, i) => (
                <>
                  <div className={style.mostread__unit}>
                    <Link
                      to={"/news/" + item.id}
                      className={style.mostread__text}
                    >
                      <div className={style.mostread__text}>
                        {item.headline}
                      </div>
                      <div className={style.mostread__text2}>{i + 1}</div>
                    </Link>
                  </div>
                  <div className={style.mostread__line}></div>
                </>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}