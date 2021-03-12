import React from 'react'
import styles from "../../Styles/headingLinks.module.css"
const HeadingLinks = ({data}) => {
    return (
        <>
            <ol className={styles.outerList}>
                {data?.map((item,i) => (
                    <li className={styles.list}>
                        <span className={styles.span}>{i+1}</span>
                        {item.headline}
                    </li>
                ))}
            </ol>
        </>
    )
}

export {HeadingLinks}
