import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getNewsData } from "../../../Redux/news/action";
import { LargeImageTags } from "./LargeImageTags";
import { SmallImageTags } from "./SmallImageTags";
import styles from "../../Styles/newsMain.module.css";
import { HeadingLinks } from "./HeadingLinks";
import { NewsCard } from "./NewsCard";
import { Headings } from "./Headings";
import { TopHeadlines } from "./TopHeadlines";
import AboveFooter from "./AboveFooter";

const NewsMain = () => {
  const dispatch = useDispatch();
  const {
    newsData,
    sportsData,
    isLoading,
    coronaData,
    mostWatched,
    continentData,
  } = useSelector((state) => state.news, shallowEqual);

  React.useEffect(() => {
    dispatch(getNewsData());
  }, [dispatch]);

  return isLoading ? <div className={styles.junk}></div> :(
    <div className={styles.wrapper}>
      <div>
        <NewsCard data={continentData} />
      </div>
        <hr/>
      {/* Heading - start */}
        <TopHeadlines data={newsData}/>
      {/* Heading - end */}

      {/* Full Story Part - start */}
      <h2 className={styles.h2}>Full Story</h2>
      <div className={styles.section__Wrapper}>
        <div className={styles.largeImageTags}>
          <LargeImageTags data={newsData} />
        </div>
        <div className={styles.smallImageTags}>
          <SmallImageTags data={newsData} />
        </div>
      </div>
      {/* Full story - Ends */}

      {/* Long Reads - Start */}
      <h2 className={styles.h2}>Long Reads</h2>
      <div className={styles.section__Wrapper}>
        <div className={styles.headings}>
          <Headings data={newsData} />
        </div>
      </div>
      {/* Long Reads - end */}

      {/* Most Reads - Start */}
      <h2 className={styles.h2}>Most Read</h2>
      <HeadingLinks data={mostWatched} />
      {/* Most Reads - Ends */}

      {/* Coronavirus -start */}
      <h2 className={styles.h2}>Coronavirus</h2>
      <div className={styles.section__Wrapper}>
        <div className={styles.largeImageTags}>
          <LargeImageTags data={coronaData} />
        </div>
        <div className={styles.smallImageTags}>
          <SmallImageTags data={coronaData} />
        </div>
      </div>
      {/* Coronavirus - end */}

      {/* Sports - Start */}
      <h2 className={styles.h2}>Sports</h2>
      <div className={styles.section__Wrapper}>
        <div className={styles.largeImageTags}>
          <LargeImageTags data={sportsData} />
        </div>
        <div className={styles.smallImageTags}>
          <SmallImageTags data={sportsData} />
        </div>
      </div>
      {/* Sports - Ends */}

      <AboveFooter/>
    </div>
  );
};

export { NewsMain };
