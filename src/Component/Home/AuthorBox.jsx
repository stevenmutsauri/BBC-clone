import React from 'react';
import styles from './Home.module.css'

const AuthorBox = ({data}) => {

    const {article, author, author_avatar} = data
    return (
       
        <div className={styles.author__div}>
            <img className={styles.author__img} src={author_avatar} alt="author"/>
            <div className={styles.author__info}>
                <p className={styles.author__article}>{article}</p>
                <p className={styles.author__name}>by {author}</p>
            </div>
        </div>
    )
}

export {AuthorBox}