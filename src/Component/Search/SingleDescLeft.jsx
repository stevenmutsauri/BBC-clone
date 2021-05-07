import React from 'react'
import { Link, useLocation, useParams } from "react-router-dom";
import { BiTime } from 'react-icons/bi';
import style from "../Styles/singleDescription.module.css";
import SocialShare from './socialShare';

export default function SingleDescLeft({single,desc1,desc2,desc3}) {

  const location=useLocation()
  let singleId="https://bbc-clone.herokuapp.com"+location.pathname
    return (
        <div>
             {single &&  <div>
        <h1 className={style.single__head1}>{single.headline}</h1>

        <p > <span className={style.single__icon}><BiTime/></span> <span className={style.icon__text}>{single.published_at}</span></p>
        <div className={style.left__line} ></div>
        <SocialShare shareId={singleId}></SocialShare>
        <img className={style.single__img} src={single.img[0].img_url} alt="img" />
        <h4  className={style.single__head4} >{single.article_data[0].sub_title}</h4>
        <div className={style.singleItem__desc}>
          {desc1?.map((item1) => (
            <div>{item1}</div>
          ))}
        </div>
        <ul >
          <Link className={style.single__list}>
            {" "}
            <li className={style.single__list}>{single.article_data[0].sub_title}</li>
          </Link>
          <Link className={style.single__list}>
            {" "}
            <li className={style.single__list}>{single.article_data[1].sub_title}</li>
          </Link>
        </ul>
        <div className={style.singleItem__desc}>
          {desc2?.map((item1) => (
            <div>{item1}</div>
          ))}
        </div>

        <img  className={style.single__img}  src={single.img[1].img_url} alt="img" />

        <div className={style.singleItem__desc}>
          {desc3?.map((item1) => (
            <div>{item1}</div>
          ))}
        </div>
        <div className={style.singleArticle__leftLine}></div>
        <h2 className={style.relatedTopics__h2}>Related Topics</h2>
        <div className={style.relatedTopics}>
          <button>Asia</button>
        <button>us</button>
        <button>India</button>
        <button>uk</button>
        </div>
      </div> }
     
        </div>
    )
}
