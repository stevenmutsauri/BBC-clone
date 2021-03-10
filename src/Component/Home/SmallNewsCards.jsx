import React from 'react'
import {Link} from "react-router-dom"
import styles from "../Styles/smallNewsCards.module.css"

const SmallNewsCards = () => {
    const handleClick = () => {

    }
    return (
        <div onClick={handleClick} className={styles.news__card}>
            <div className={styles.news__card_image} ><img src={"Novak-Djokovic-4.jpg"} alt=""/></div>
            <div className={styles.news__card_content}>
                <h3>sweat and tears got me here - Djokovic</h3>
                <p>
                    Novak Djokovic says it has taken "a lot of blood, sweat and tears" to break Roger Federer's record of 310 weeks ranked as world number one.       
                </p>
                <div className={styles.news__card_linkwrap}><Link to="" className={styles.news__card_linkwrap_link} >{"Tennis"}</Link></div>
            </div>
        </div>
    )
}

export {SmallNewsCards}
