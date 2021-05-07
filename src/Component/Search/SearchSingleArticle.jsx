import React from "react";
import style from "../Styles/searchSingleArticle.module.css";
import { BiTimeFive } from 'react-icons/bi';
import { Link, useLocation } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
export default function SearchSingleArticle({item,isLoading}) {
  const location=useLocation()
  var pathname=location.pathname
  var search=location.search
  return (
    <div className={style.single__article}>
      {!isLoading?
      <img src={item.img[0].img_url} alt="img" />:<Skeleton  width="420px" height="250px"/>}
     
      <div className={style.single__article__text}>
        <div>
         <Link to={`/news/${item.id}`} className={style.single__article__heading}><p>{!isLoading?item.headline:<Skeleton count={2}/>}</p></Link>
          <p>{!isLoading?item.article_data[0].sub_title:
          <Skeleton count={1}/>}
          </p>
        </div>   
   {!isLoading?<div>
         <div> <span class={style.single__time__icon}><BiTimeFive/></span> {item.published_at}</div>
            
          <div>Programmes</div>
           <div>BBC one</div>
            
        </div>:
      <Skeleton count={1}/>}
     </div>
   </div>
  );
}
