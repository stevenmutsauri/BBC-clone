import React from 'react';
import styles from './Home.module.css'

const LatestNews = ({data}) => {

    const {post_num, article} = data
    return (
        <div className={styles.latest__news}>
            <div>
            <p className={styles.latest__num}>{post_num}</p>
            </div>
            <dib>
            <p className={styles.latest__News__para}>{article}</p>
            </dib>
        </div>
    )
}

export {LatestNews}