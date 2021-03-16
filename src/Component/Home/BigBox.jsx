import React from 'react';
import { useHistory } from 'react-router';
import styles from '../Styles/Home.module.css'

const BigBox = () => {
    const history = useHistory()
    const handleClick = (id) => {
        return history.push(`/news/${id}`)
    }
    return (
        <div className={styles.big__box__div} onClick={(e) => handleClick(100009)}>
            <img className={styles.big__box__img} src="https://ichef.bbci.co.uk/news/976/cpsprodpb/EF12/production/_117320216_glass-vials.jpg" alt="fixed poster"/>
            <p className={styles.big__box__title}>Covid: How this Indian firm is vaccinating the world</p>
            <p className={styles.big__box__description}>SII is involved the world's largest inoculation programme in India</p>
            <p></p>
        </div>
    )
}

export {BigBox}