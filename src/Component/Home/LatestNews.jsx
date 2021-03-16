import React from 'react';
import { useHistory } from 'react-router';
import styles from '../Styles/Home.module.css'

const LatestNews = ({data}) => {
    const history = useHistory()
    const handleClick = (id) => {
        return history.push(`/news/${id}`)
    }

    const {post_num, article,id} = data
    return (
        <div className={styles.latest__news} onClick={(e) => handleClick(id)}>
            <div>
            <p className={styles.latest__num}>{post_num}</p>
            </div>
            <div>
            <p className={styles.latest__News__para}>{article}</p>
            </div>
        </div>
    )
}

export {LatestNews}