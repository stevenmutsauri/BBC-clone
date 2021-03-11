import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchIndiaNews} from "../../Redux/app/action"
import styles from './Home.module.css'
import { IndiaNewsCardBox } from './IndiaNewsCardBox';

const IndiaNewsCard = () => {

    const dispatch = useDispatch()
    const indiaNews = useSelector(state => state.app.indiaNews)
    const indiaDataSet = indiaNews.splice(1,4)

    console.log(indiaDataSet)
    useEffect(()=> {
        dispatch(fetchIndiaNews())
    }, [dispatch])

    return (
        <div className={styles.commonCard__div}>
            <p className={styles.category__name}>India</p>
            <div className={styles.box__div}>
                {
                    indiaDataSet?.map((el) => <IndiaNewsCardBox key={el.id} data={el}/>)
                }
            </div>
        </div>
    )
}

export {IndiaNewsCard}