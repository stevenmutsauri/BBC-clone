import React from 'react'
import { IoMdTime } from 'react-icons/io'
import { Link, useHistory } from 'react-router-dom'
import styles from "../../Styles/topHeadlines.module.css"

const TopHeadlines = ({data}) => {
    const history = useHistory()
    const handleClick = (id,category,) => {
        return history.push(`/news/${id}`)
    }
    const getHrAgo=()=>{
        var min = 1;
        var max = 24;
        var rand = Math.ceil(min + (Math.random() * (max-min)));
        return rand+"h"
       }

    return (
        <div className={styles.topHeadlines_wrapper}>
             {data?.map((item,i) => (i >= 18 && i < 25) && (
                    <div key ={item.id} className={styles.headings} onClick={(e) => handleClick(item.id,item.category)} >
                        <p className={styles.para}>{item.description}</p>
                        <div className={styles.news__card_linkwrap}><IoMdTime/><span>  </span>{getHrAgo()}<Link to="" className={styles.news__card_linkwrap_link} ><span>{` ${item.sub_category}`}</span></Link></div>
                    </div>
                ))}
        </div>
    )
}

export  {TopHeadlines}
