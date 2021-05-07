import React from 'react';
import styles from '../Styles/Advertisement.module.css'

const BannerAd = () => {
    return (
        <div className={styles.banner__div}>
            <img className={styles.banner__gif} src="https://media.giphy.com/media/0ztgd5NbNzPeCThnhg/giphy.gif" alt="banner"/>
            <p className={styles.ad__name}>Advertisement</p>
        </div>
    )
}

export {BannerAd}