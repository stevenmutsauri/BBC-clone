import React from 'react';
import { useHistory } from 'react-router';
import styles from '../Styles/Home.module.css'

const CommonCardBox = ({data}) => {

    const { headline, img, sub_category,id} = data;
    const {img_url, img_tag} = img[0]

    const history = useHistory()
    const handleClick = (id) => {
        return history.push(`/news/${id}`)
    }
    
    return (
        <div className={styles.commonCardBox__div} onClick={(e) => handleClick(id)}>
            <div className={styles.commonCardBox__content__div}>
                <img className={styles.news__poster} src={img_url} alt="news cover"/>
                <p className={styles.common__box__headline}>{headline}</p>
                <p className={styles.common__image__tag}>{img_tag}</p>
            </div>
            <p className={styles.common__category}>{sub_category}</p>
        </div>
    )
}

export {CommonCardBox}