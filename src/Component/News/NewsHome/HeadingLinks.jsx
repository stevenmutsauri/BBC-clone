import React from 'react'
import { useHistory } from 'react-router'
import styles from "../../Styles/headingLinks.module.css"
const HeadingLinks = ({data}) => {
    const history = useHistory()
    const handleClick = (id) => {
        return history.push(`/news/${id}`)
    }
    return (
        <>
            <ol className={styles.outerList} >
                {data?.map((item,i) => (
                    <li className={styles.list} onClick={(e) => handleClick(item.id,item.category)}>
                        <span className={styles.span}>{i+1}</span>
                        {item.headline}
                    </li>
                ))}
            </ol>
        </>
    )
}

export {HeadingLinks}
