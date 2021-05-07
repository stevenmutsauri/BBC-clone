import React from 'react';
import { useHistory } from 'react-router';
import styles from '../Styles/Home.module.css'

const AuthorBox = ({data}) => {

    const {article, author, author_avatar,id} = data
    const history = useHistory()
    const handleClick = (id) => {
        return history.push(`/news/${id}`)
    }
    return (
       
        <div className={styles.author__div} onClick={(e) => handleClick(id)}>
            <img className={styles.author__img} src={author_avatar} alt="author"/>
            <div className={styles.author__info}>
                <p className={styles.author__article}>{article}</p>
                <p className={styles.author__name}>by {author}</p>
            </div>
        </div>
    )
}

export {AuthorBox}