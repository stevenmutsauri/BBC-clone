import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchNewsData} from "../../Redux/app/action"
import styles from '../Styles/Home.module.css'
import { CommonCardBox } from '../Home/CommonCardBox';

const NewsCard = () => {

    const dispatch = useDispatch()
    const newsData = useSelector(state => state.app.data)
    const newsDataSet = newsData.splice(1,3)
    
    useEffect(()=> {
        dispatch(fetchNewsData())
    }, [dispatch])

    return (
        <div className={styles.commonCard__div} >
            <p className={styles.category__name}>News</p>
            <div className={styles.box__div}>
                {
                    newsDataSet?.map((el) => <CommonCardBox key={el.id} data={el}/>)
                }
            </div>
        </div>
    )
}

export {NewsCard}