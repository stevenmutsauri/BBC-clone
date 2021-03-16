import React from 'react';
import { useHistory } from 'react-router';
import styles from '../Styles/Home.module.css'

const SmallCardBox = ({data}) => {

    const { headline, img,id, sub_category} = data;
    const {img_url, img_tag} = img[0]

    const history = useHistory()
    const handleClick = (id) => {
        return history.push(`/news/${id}`)
    }
    return (
        <div className={styles.smallCardBox__div} onClick={(e) => handleClick(id)}>
            <div className={styles.smallCardBox__content__div}>
                <img className={styles.small__news__poster} src={img_url} alt="news cover"/>
                <p className={styles.common__box__headline}>{headline}</p>
                <p className={styles.common__image__tag}>{img_tag}</p>
            </div>
            <p className={styles.common__category}>{sub_category}</p>
        </div>
    )
}

export {SmallCardBox}