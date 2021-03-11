import React from 'react';
import { CommonCardBox } from './CommonCardBox';
import styles from './Home.module.css'

const CommonCard = ({data}) => {

    const {category} = data[0];
    
    return (
        <div className={styles.commonCard__div}>
            <p className={styles.category__name}>{category}</p>
            <div className={styles.box__div}>
                {
                    data?.map((el) => <CommonCardBox data={el}/>)
                }
            </div>
        </div>
    )
}

export {CommonCard}