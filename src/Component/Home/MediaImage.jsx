import React from 'react'
import styles from "../Styles/mediaImage.module.css"
const MediaImage = () => {
    return (
        <div className={styles.mediaImage__wrapper}>
            <img className={styles.mediaImage__wrapper_img} src="media-image.jpg" alt="logo"/>
            <div><h2>The Imense Power of Hell's Gate</h2></div>
        </div>
    )
}

export {MediaImage}
