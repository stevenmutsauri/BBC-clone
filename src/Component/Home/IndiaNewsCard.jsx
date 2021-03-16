import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchIndiaNews} from "../../Redux/app/action"
import styles from '../Styles/Home.module.css'
import { SmallCardBox } from './SmallCardBox';

const IndiaNewsCard = () => {

    const dispatch = useDispatch()
    const indiaNews = useSelector(state => state.app.indiaNews)
    const indiaDataSet = indiaNews.splice(1,4)

    useEffect(()=> {
        dispatch(fetchIndiaNews())
    }, [dispatch])

    return (
        <div className={styles.commonCard__div}>
            <p className={styles.category__name}>India</p>
            <div className={styles.box__div}>
                {
                    indiaDataSet?.map((el) => <SmallCardBox key={el.id} data={el}/>)
                }
            </div>
        </div>
    )
}

export {IndiaNewsCard}