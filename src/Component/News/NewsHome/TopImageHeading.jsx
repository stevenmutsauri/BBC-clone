import React from 'react'
import { IoMdTime } from 'react-icons/io'
import { Link, useHistory } from 'react-router-dom'
import styles from "../../Styles/topImageHeading.module.css"

const TopImageHeading = ({data,getHrsAgo}) => {
    const dataTop = data[0]
    const history = useHistory()
    const handleClick = (id,category,) => {
        return history.push(`/news/${id}`)
    }
    return dataTop ? (
            <div  onClick={(e) => handleClick(dataTop.id,dataTop.category)}>
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
            </div>) : null
}

export  {TopImageHeading}
