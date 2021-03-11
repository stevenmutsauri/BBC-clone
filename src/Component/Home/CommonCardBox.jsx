import React from 'react';
import styles from './Home.module.css'
const CommonCardBox = ({data}) => {

    const {id, headline, img, category, sub_category} = data;
    const {img_url, img_tag} = img[0]

    return (
        <div className={styles.commonCardBox__div}>
            <img className={styles.news__poster} src={img_url} alt="news cover"/>
            <p>{headline}</p>
            <p>{img_tag}</p>
            <p>{sub_category}</p>
        </div>
    )
}

export {CommonCardBox}