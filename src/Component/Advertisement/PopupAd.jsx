import React, { useState } from 'react';
import styles from '../Styles/Advertisement.module.css'

import {AiOutlineCloseSquare} from 'react-icons/ai'

const PopupAd = () => {
    const [isPopup, setPopup] = useState(false);
    setTimeout(() => {
        setPopup(true)
    }, 15000);

    const handleClick = () => {
        setPopup(false)
    }
    return isPopup && (
        <div className={styles.popup__div}>
            <div className={styles.ad__close__div}>
                <p className={styles.ad__name}>Advertisement</p>
                <AiOutlineCloseSquare onClick={handleClick} className={styles.ad__close}/>
            </div>
            <img className={styles.popup__img} src="popup.jpeg" alt=""/>
        </div>
    )
}

export {PopupAd}