import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchNewsData, fetchTopStories} from "../../Redux/app/action"
import styles from '../Styles/Home.module.css'
import { EditorBox } from './EditorBox';
import { LatestNews } from './LatestNews';
import { BigBox } from './BigBox';


const EditorCard = () => {

    const dispatch = useDispatch()
    const newsData = useSelector(state => state.app.data)
    const topStories = useSelector(state => state.app.topStories)
    const newsDataSet = newsData.splice(1,6)

    useEffect(()=> {
        dispatch(fetchNewsData())
        dispatch(fetchTopStories())
    }, [dispatch])

    return (
        <div className={styles.editor__div}>
            <p className={styles.editor__name}>Editor's corner</p>
            <div className={styles.editor__bottom_section}>
                <div className={styles.editor__left}>
                    <BigBox />
                    {
                        newsDataSet?.map((el) => <EditorBox key={el.id} data={el}/>)
                    }
                </div>
                <div className={styles.editor__right}>
                    <p className={styles.bbc__header}>Latest Business News</p>
                    {
                        topStories?.map((el) => <LatestNews key={el.id} data={el}/>)
                    }
                </div>
            </div>
        </div>
        
    )
}

export {EditorCard}