import React, { useState } from 'react';
import styles from './Advertisement.module.css'
import {AiOutlineCloseSquare} from 'react-icons/ai'

const PopupAd = () => {
    const [isPopup, setPopup] = useState(false);
    setTimeout(() => {
        setPopup(true)
    }, 5000);

    const handleClick = () => {
        setPopup(false)

        setTimeout(() => {
            setPopup(true)
        }, 10000);
    }
    return isPopup && (
        <div className={styles.popup__div}>
            <div className={styles.ad__close__div}>
                <p className={styles.ad__name}>Advertisement</p>
                <AiOutlineCloseSquare onClick={handleClick} class={styles.ad__close}/>
            </div>
            <img className={styles.popup__img} src="popup.jpeg" alt=""/>
        </div>
    )
}

export {PopupAd}