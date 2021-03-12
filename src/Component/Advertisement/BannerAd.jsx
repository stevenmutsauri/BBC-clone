import React from 'react';
import styles from './Advertisement.module.css'

const BannerAd = () => {
    return (
        <div className={styles.banner__div}>
            <img src="https://gifmaker.me/files/download/home/20210311/18/u2LxVWiTBccJAJ195E6Co2/output_0RpSux.gif" alt="banner"/>
            <p className={styles.ad__name}>Advertisement</p>
        </div>
    )
}

export {BannerAd}