import React from 'react'
import { IoMdTime } from 'react-icons/io'
import { Link } from 'react-router-dom'
import styles from "../../Styles/topImageHeading.module.css"

const TopImageHeading = ({data,getHrsAgo}) => {
    const dataTop = data[0]
    

    return (
            <>
                {dataTop?.img.map((item,i) => i=== 0 && (
                    <div key ={i} className={styles.topImageTag__wrap}   >
                        
                        <div>
                            <Link className={styles.topImageTag__wrap_link}>{item.img_tag} </Link>
                            <div className={styles.news__card_linkwrap}>
                                <IoMdTime/><span>  </span>{getHrsAgo()}<Link to="" className={styles.news__card_linkwrap_link} >{`${dataTop.category}`}<span>{` & ${dataTop.sub_category}`}</span></Link>
                            </div>
                        </div>
                        <img src={item.img_url} className={styles.topImageTag__wrap_img} alt="imagetag" />
                    </div>
                ))}
            </>)
}

export  {TopImageHeading}
