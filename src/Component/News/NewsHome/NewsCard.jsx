import React from 'react'
import {Link, useHistory} from "react-router-dom"
import styles from "../../Styles/newsCard.module.css"
import {IoMdTime} from "react-icons/io"
import { TopImageHeading } from './TopImageHeading'

const NewsCard = ({data}) => {
   
    const getHrAgo=()=>{
        var min = 1;
        var max = 24;
        var rand = Math.ceil(min + (Math.random() * (max-min)));
        return rand+"h"
       }

       const history = useHistory()
       const handleClick = (id,category,) => {
        return history.push(`/news/${id}`)
       }
    return (
        <div className={styles.newsCard_Wrapper} >
            <div className={styles.newsCard_Wrapper_TopHeading} >
                <TopImageHeading data={data} getHrsAgo={getHrAgo}/>
            </div>
            {data?.map((item,i) => i >= 1 && i <= 6 && (
                <div onClick={(e) => handleClick(item.id,item.category)} className={styles.news__card}>
                    <div className={styles.news__card_image} >
                    {
                        item.img.map((img,j) => j=== 0 && (
                        <div key ={j} className={styles.smallImageTag__wrap}   >
                            <img src={img.img_url} className={styles.smallImageTag__wrap_img} alt="imagetag" />
                            <Link className={styles.smallImageTag__wrap_links}>{img.img_tag}</Link>
                        </div>
                    ))}
                    </div>
                    <div className={styles.news__card_content}>
                        <p >
                            {item.description}   
                        </p>
                        <div className={styles.news__card_linkwrap}><IoMdTime/><span>  </span>{getHrAgo()}<Link to="" className={styles.news__card_linkwrap_link} >{`${item.category}`}<span>{` & ${item.sub_category}`}</span></Link></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export {NewsCard}

