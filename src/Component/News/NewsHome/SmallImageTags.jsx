import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../../Styles/smallImageTags.module.css"

const SmallImageTags = ({data}) => {

    return (
        <div className={styles.smallTag__wrapper}>
            {data?.map((item,i) => (i >= 1 && i <= 6) && (
                item.img.map((img,j) => j=== 0 && (
                    <div key ={j} className={styles.smallImageTag__wrap}   >
                        <img src={img.img_url} className={styles.smallImageTag__wrap_img} alt="imagetag" />
                        <Link className={styles.smallImageTag__wrap_links}>{img.img_tag}</Link>
                    </div>
                ))
            ))}
        </div>
    )
}

export  {SmallImageTags}

