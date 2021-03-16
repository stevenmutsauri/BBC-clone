import React from 'react';
import { useHistory } from 'react-router';
import styles from '../Styles/Home.module.css'

const BigBox2 = () => {
    const history = useHistory()
    const handleClick = (id) => {
        return history.push(`/news/${id}`)
    }
    return (
        <div className={styles.big__box__div} onClick={(e) => handleClick(100021)}>
            <img className={styles.big__box__img} src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12E60/production/_117380477_tv066024256.jpg" alt="fixed poster"/>
            <p className={styles.big__box__title}>Covid: Germany approves AstraZeneca vaccine for over-65s</p>
            <p className={styles.big__box__description}>Germany's vaccine commission has approved the use of the Oxford-AstraZeneca jab</p>
            <p></p>
        </div>
    )
}

export {BigBox2}