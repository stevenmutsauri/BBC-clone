import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchCoronaNews} from "../../Redux/app/action"
import styles from '../Styles/Home.module.css'
import { CommonCardBox } from './CommonCardBox';

const CoronaNewsCard = () => {

    const dispatch = useDispatch()
    const coronaNews = useSelector(state => state.app.coronaNews)
    const coronaDataSet = coronaNews.splice(1,3)
    
    useEffect(()=> {
        dispatch(fetchCoronaNews())
    }, [dispatch])

    return (
        <div className={styles.commonCard__div}>
            <p className={styles.category__name}>Covid - 19</p>
            <div className={styles.box__div}>
                {
                    coronaDataSet?.map((el) => <CommonCardBox key={el.id} data={el}/>)
                }
            </div>
        </div>
    )
}

export {CoronaNewsCard}