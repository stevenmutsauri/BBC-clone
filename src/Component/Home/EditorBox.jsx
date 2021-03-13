import React from 'react';
import styles from './Home.module.css'
const EditorBox = ({data}) => {

    const { headline, img, sub_category} = data;
    const {img_url, img_tag} = img[0]

    return (
        <div className={styles.editor_box__div}>
            <div className={styles.smallCardBox__content__div}>
                <img className={styles.small__news__poster} src={img_url} alt="news cover"/>
                <p className={styles.common__box__headline}>{headline}</p>
                <p className={styles.common__image__tag}>{img_tag}</p>
            </div>
            <p className={styles.common__category}>{sub_category}</p>
        </div>
    )
}

export {EditorBox}