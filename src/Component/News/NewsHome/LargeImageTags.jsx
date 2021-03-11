import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../../Styles/largeImageTags.module.css"
const LargeImageTags = ({data}) => {
    const dataTop = data[0]

    return (
            <>
                {dataTop?.img.map((item,i) => i=== 0 && (
                    <div key ={i} className={styles.imageTag__wrap}   >
                        <img src={item.img_url} className={styles.imageTag__wrap_img} alt="imagetag" />
                        <Link className={styles.imageTag__wrap_link}>{item.img_tag}</Link>
                    </div>
                ))}
            </>)
}

export {LargeImageTags}
