import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchNewsData, fetchTopStories} from "../../Redux/app/action"
import styles from '../Styles/Home.module.css'
import { EditorBox } from './EditorBox';
import { AuthorBox } from './AuthorBox';
import { BigBox2 } from './BigBox2';

const MoreAroundBBC = () => {

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
            <p className={styles.editor__name}>More Around The BBC</p>
            <div className={styles.editor__bottom_section}>
                <div className={styles.author__box}>
                    <p className={styles.bbc__header}>FROM OUR CORRESPONDENTS</p>
                    {
                        topStories?.map((el) => <AuthorBox key={el.id} data={el}/>)
                    }
                </div>
                <div className={styles.editor__left}>
                    <BigBox2 />
                    {
                        newsDataSet?.map((el) => <EditorBox key={el.id} data={el}/>)
                    }
                </div>
            </div>
        </div>
        
    )
}

export {MoreAroundBBC}